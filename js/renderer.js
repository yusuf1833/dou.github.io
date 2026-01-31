
import { getContrastColor } from './utils.js';

export function renderGrid(ctx, gridData, pixelSize, showGridLines, width, height) {
    ctx.clearRect(0, 0, width, height);
    
    const rows = gridData.length;
    if (rows === 0) return;
    const cols = gridData[0].length;

    // Draw pixels
    for(let y=0; y<rows; y++) {
        for(let x=0; x<cols; x++) {
            const cell = gridData[y][x];
            if(cell && cell.color !== 'transparent') {
                ctx.fillStyle = cell.color;
                ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
            } else {
                // Draw checkerboard for transparent
                ctx.fillStyle = ((x + y) % 2 === 0) ? '#f0f0f0' : '#ffffff';
                ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
            }
        }
    }

    // Draw grid lines
    if(showGridLines && pixelSize >= 4) {
        ctx.strokeStyle = 'rgba(128, 128, 128, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        // Verticals
        for(let x=0; x<=cols; x++) {
            ctx.moveTo(x*pixelSize, 0);
            ctx.lineTo(x*pixelSize, height);
        }
        
        // Horizontals
        for(let y=0; y<=rows; y++) {
            ctx.moveTo(0, y*pixelSize);
            ctx.lineTo(width, y*pixelSize);
        }
        ctx.stroke();
    }
}

export function highlightCell(ctx, x, y, pixelSize, color = 'rgba(255, 0, 0, 0.5)') {
    ctx.fillStyle = color;
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
}
