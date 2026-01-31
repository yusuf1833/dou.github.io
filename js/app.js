
import { calculatePixelGrid } from './pixelation.js';
import { renderGrid, highlightCell } from './renderer.js';
import { generatePalette, getAllColorSystems } from './palette.js';
import { downloadProject } from './exporter.js';
import { findClosestPaletteColor } from './utils.js';

// --- State Management ---
const DEFAULT_STATE = {
    granularity: 50,
    mode: 'dominant',
    activeSystems: ['MARD'],
    showGrid: true,
    selectedColor: null, // { key, hex, ... }
    gridData: [], // 2D array
    originalImageSrc: null 
};

let state = { ...DEFAULT_STATE };
let originalImage = null; // Image object
let activePalette = []; // Array of color objects

// --- DOM Elements ---
const els = {
    dropZone: document.getElementById('drop-zone'),
    fileInput: document.getElementById('file-input'),
    granularity: document.getElementById('granularity'),
    granularityVal: document.getElementById('granularity-val'),
    modeSelect: document.getElementById('mode-select'),
    showGrid: document.getElementById('show-grid'),
    paletteList: document.getElementById('palette-list'),
    downloadBtn: document.getElementById('download-btn'),
    canvas: document.getElementById('main-canvas'),
    canvasContainer: document.getElementById('canvas-container'),
    emptyState: document.getElementById('empty-state'),
    tooltip: document.getElementById('pixel-info-panel'),
    infoColorPreview: document.getElementById('info-color-preview'),
    infoColorName: document.getElementById('info-color-name'),
    infoColorHex: document.getElementById('info-color-hex'),
    infoCoords: document.getElementById('info-coords'),
};

const ctx = els.canvas.getContext('2d');

// --- Initialization ---
function init() {
    loadState();
    renderPaletteControls();
    setupEventListeners();
    
    // Restore image if exists
    if (state.originalImageSrc) {
        loadImage(state.originalImageSrc);
    }
}

function loadState() {
    const saved = localStorage.getItem('perler-app-state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge saved state, but gridData might be too large/complex to rely solely on LS for large images?
            // Actually, for a simple app, re-calculating from image is safer than storing massive grid JSON.
            // So we only restore settings and image source.
            state = { 
                ...state, 
                granularity: parsed.granularity || 50,
                mode: parsed.mode || 'dominant',
                activeSystems: parsed.activeSystems || ['MARD'],
                showGrid: parsed.showGrid ?? true,
                originalImageSrc: parsed.originalImageSrc
            };
        } catch (e) {
            console.error('Failed to load state', e);
        }
    }
    
    // Sync UI
    els.granularity.value = state.granularity;
    els.granularityVal.textContent = state.granularity;
    els.modeSelect.value = state.mode;
    els.showGrid.checked = state.showGrid;
}

function saveState() {
    // Don't save gridData to avoid quota limits. Re-calculate on load.
    const toSave = {
        granularity: state.granularity,
        mode: state.mode,
        activeSystems: state.activeSystems,
        showGrid: state.showGrid,
        originalImageSrc: state.originalImageSrc
    };
    localStorage.setItem('perler-app-state', JSON.stringify(toSave));
}

function renderPaletteControls() {
    const systems = getAllColorSystems();
    els.paletteList.innerHTML = systems.map(sys => `
        <label class="flex items-center space-x-2 cursor-pointer bg-gray-50 p-2 rounded hover:bg-gray-100">
            <input type="checkbox" value="${sys}" 
                ${state.activeSystems.includes(sys) ? 'checked' : ''} 
                class="rounded text-blue-500 focus:ring-blue-500 system-checkbox">
            <span class="text-sm text-gray-700">${sys}</span>
        </label>
    `).join('');

    // Bind events
    document.querySelectorAll('.system-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const sys = e.target.value;
            if (e.target.checked) {
                if (!state.activeSystems.includes(sys)) state.activeSystems.push(sys);
            } else {
                state.activeSystems = state.activeSystems.filter(s => s !== sys);
            }
            // Ensure at least one system is active
            if (state.activeSystems.length === 0) {
                state.activeSystems = ['MARD']; // Fallback
                e.target.checked = true;
                alert('至少需要选择一个色板品牌');
                return;
            }
            updatePalette();
            saveState();
            if (originalImage) processImage();
        });
    });
    
    updatePalette();
}

function updatePalette() {
    activePalette = generatePalette(state.activeSystems);
}

function setupEventListeners() {
    // File Upload
    els.fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            readFile(e.target.files[0]);
        }
    });

    els.dropZone.addEventListener('click', () => els.fileInput.click());
    els.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        els.dropZone.classList.add('border-blue-500', 'bg-blue-50');
    });
    els.dropZone.addEventListener('dragleave', () => {
        els.dropZone.classList.remove('border-blue-500', 'bg-blue-50');
    });
    els.dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        els.dropZone.classList.remove('border-blue-500', 'bg-blue-50');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            readFile(e.dataTransfer.files[0]);
        }
    });

    // Settings
    els.granularity.addEventListener('input', (e) => {
        state.granularity = parseInt(e.target.value);
        els.granularityVal.textContent = state.granularity;
        if (originalImage) processImage(); // Debounce?
    });
    
    // Debounced save for slider
    els.granularity.addEventListener('change', saveState);

    els.modeSelect.addEventListener('change', (e) => {
        state.mode = e.target.value;
        saveState();
        if (originalImage) processImage();
    });

    els.showGrid.addEventListener('change', (e) => {
        state.showGrid = e.target.checked;
        saveState();
        draw();
    });

    els.downloadBtn.addEventListener('click', () => {
        const pixelSize = calculatePixelSize();
        downloadProject(state.gridData, pixelSize, state.activeSystems[0]);
    });

    // Canvas Interactions
    els.canvas.addEventListener('mousemove', handleCanvasHover);
    els.canvas.addEventListener('click', handleCanvasClick);
    els.canvas.addEventListener('mouseleave', () => {
        els.tooltip.classList.add('hidden');
        draw(); // Clear highlights
    });
}

function readFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        state.originalImageSrc = e.target.result;
        saveState();
        loadImage(state.originalImageSrc);
    };
    reader.readAsDataURL(file);
}

function loadImage(src) {
    originalImage = new Image();
    originalImage.crossOrigin = "Anonymous";
    originalImage.onload = () => {
        els.emptyState.classList.add('hidden');
        els.downloadBtn.disabled = false;
        processImage();
    };
    originalImage.src = src;
}

function processImage() {
    if (!originalImage) return;

    // Create offscreen canvas to get data
    const offCanvas = document.createElement('canvas');
    offCanvas.width = originalImage.width;
    offCanvas.height = originalImage.height;
    const offCtx = offCanvas.getContext('2d');
    offCtx.drawImage(originalImage, 0, 0);

    // Calculate Grid Dimensions based on Granularity (N is width in beads)
    // Granularity slider value is N (width)
    const N = state.granularity;
    const aspectRatio = originalImage.height / originalImage.width;
    const M = Math.round(N * aspectRatio);

    // Run Algorithm
    state.gridData = calculatePixelGrid(
        offCtx,
        originalImage.width,
        originalImage.height,
        N,
        M,
        activePalette,
        state.mode
    );

    draw();
}

function calculatePixelSize() {
    if (!state.gridData.length) return 10;
    // Fit canvas to container? Or fixed size?
    // Let's make pixel size dynamic to fit within a max width, but not too small.
    // Or just fixed display size and scale canvas.
    
    // Current approach: Make canvas large enough for crisp pixels.
    // Container width available
    const containerWidth = els.canvasContainer.clientWidth - 64; // padding
    const containerHeight = els.canvasContainer.clientHeight - 64;
    
    const cols = state.gridData[0].length;
    const rows = state.gridData.length;
    
    const maxPixelW = Math.floor(containerWidth / cols);
    const maxPixelH = Math.floor(containerHeight / rows);
    
    // Min pixel size 5, Max 40
    let size = Math.min(maxPixelW, maxPixelH);
    size = Math.max(5, Math.min(size, 40)); 
    
    return size;
}

function draw() {
    if (!state.gridData.length) return;
    
    const pixelSize = calculatePixelSize();
    const cols = state.gridData[0].length;
    const rows = state.gridData.length;
    
    els.canvas.width = cols * pixelSize;
    els.canvas.height = rows * pixelSize;
    
    renderGrid(ctx, state.gridData, pixelSize, state.showGrid, els.canvas.width, els.canvas.height);
}

function handleCanvasHover(e) {
    if (!state.gridData.length) return;
    
    const rect = els.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const pixelSize = els.canvas.width / state.gridData[0].length;
    const col = Math.floor(x / pixelSize);
    const row = Math.floor(y / pixelSize);
    
    if (row >= 0 && row < state.gridData.length && col >= 0 && col < state.gridData[0].length) {
        const cell = state.gridData[row][col];
        
        // Show Tooltip
        els.tooltip.classList.remove('hidden');
        
        if (cell && cell.color !== 'transparent') {
             els.infoColorPreview.style.backgroundColor = cell.color;
             els.infoColorName.textContent = `${cell.key}`;
             els.infoColorHex.textContent = cell.color;
        } else {
             els.infoColorPreview.style.backgroundColor = 'transparent';
             els.infoColorName.textContent = '透明';
             els.infoColorHex.textContent = '-';
        }
        els.infoCoords.textContent = `${col + 1}, ${row + 1}`;
        
        // Redraw to remove old highlight and add new one
        // Note: For performance, maybe use an overlay canvas?
        // For now, redraw full grid is okay for small N.
        draw(); 
        highlightCell(ctx, col, row, pixelSize);
    }
}

function handleCanvasClick(e) {
    // For now, just logging or selecting the color to potentially "paint"
    // To implement painting: 
    // 1. Click a cell -> sets "Current Brush Color" to that cell's color (Pipette)
    // 2. OR Click a palette color -> sets Brush
    // 3. Click cell with Brush -> updates gridData[row][col]
    
    // Simple V1: Click logs to console
    console.log("Clicked cell");
}

// Start
init();
