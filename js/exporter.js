
export function downloadProject(gridData, pixelSize, activeSystem) {
    if (!gridData || gridData.length === 0) return;

    const rows = gridData.length;
    const cols = gridData[0].length;
    const outputPixelSize = Math.max(20, pixelSize); // Ensure readable size for export
    
    // 1. Calculate Stats
    const stats = {};
    let totalBeads = 0;
    gridData.forEach(row => {
        row.forEach(cell => {
            if (cell && cell.color !== 'transparent') {
                const key = cell.key; // e.g., "A01"
                if (!stats[key]) {
                    stats[key] = { 
                        count: 0, 
                        color: cell.color, 
                        key: key
                    };
                }
                stats[key].count++;
                totalBeads++;
            }
        });
    });
    
    const sortedStats = Object.values(stats).sort((a, b) => a.key.localeCompare(b.key));

    // 2. Setup Dimensions
    const padding = 40;
    const headerHeight = 60;
    const legendItemHeight = 30;
    const legendCols = 4;
    const legendRows = Math.ceil(sortedStats.length / legendCols);
    const legendHeight = legendRows * legendItemHeight + 50; 
    
    const gridWidth = cols * outputPixelSize;
    const gridHeight = rows * outputPixelSize;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = Math.max(gridWidth + padding * 2, 800); // Min width for legend
    canvas.height = headerHeight + gridHeight + padding + legendHeight + padding;
    
    // 3. Draw Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 4. Draw Header
    ctx.fillStyle = '#333';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`拼豆图纸 - ${cols}x${rows} (${totalBeads}颗)`, canvas.width / 2, 40);
    
    // 5. Draw Grid
    const startX = (canvas.width - gridWidth) / 2;
    const startY = headerHeight;
    
    ctx.save();
    ctx.translate(startX, startY);
    
    // Draw Pixels
    gridData.forEach((row, y) => {
        row.forEach((cell, x) => {
             if(cell && cell.color !== 'transparent') {
                ctx.fillStyle = cell.color;
                ctx.fillRect(x*outputPixelSize, y*outputPixelSize, outputPixelSize, outputPixelSize);
            } else {
                 // Checkerboard for transparent in export? Or just white.
                 // Let's do white for export to save ink/cleaner look, or light gray.
                 ctx.fillStyle = '#f9f9f9';
                 ctx.fillRect(x*outputPixelSize, y*outputPixelSize, outputPixelSize, outputPixelSize);
            }
        });
    });

    // Draw Grid Lines
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let x=0; x<=cols; x++) {
        ctx.moveTo(x*outputPixelSize, 0);
        ctx.lineTo(x*outputPixelSize, gridHeight);
    }
    for(let y=0; y<=rows; y++) {
        ctx.moveTo(0, y*outputPixelSize);
        ctx.lineTo(gridWidth, y*outputPixelSize);
    }
    ctx.stroke();

    // Draw 10-grid thicker lines
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for(let x=0; x<=cols; x+=10) {
        ctx.moveTo(x*outputPixelSize, 0);
        ctx.lineTo(x*outputPixelSize, gridHeight);
    }
    for(let y=0; y<=rows; y+=10) {
        ctx.moveTo(0, y*outputPixelSize);
        ctx.lineTo(gridWidth, y*outputPixelSize);
    }
    ctx.stroke();

    // Draw Center Lines (Red)
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const cx = Math.floor(cols / 2) * outputPixelSize;
    const cy = Math.floor(rows / 2) * outputPixelSize;
    ctx.moveTo(cx, 0); ctx.lineTo(cx, gridHeight);
    ctx.moveTo(0, cy); ctx.lineTo(gridWidth, cy);
    ctx.stroke();

    ctx.restore();

    // 6. Draw Legend
    const legendStartY = startY + gridHeight + padding;
    ctx.save();
    ctx.translate(padding, legendStartY);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('色号清单', 0, 0);
    
    const contentWidth = canvas.width - padding * 2;
    const colWidth = contentWidth / legendCols;
    
    sortedStats.forEach((item, index) => {
        const col = index % legendCols;
        const row = Math.floor(index / legendCols);
        
        const x = col * colWidth;
        const y = row * legendItemHeight + 25;
        
        // Color Box
        ctx.fillStyle = item.color;
        ctx.fillRect(x, y, 16, 16);
        ctx.strokeStyle = '#ddd';
        ctx.strokeRect(x, y, 16, 16);
        
        // Text
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'left';
        // Check text color for contrast if we were to draw background
        ctx.fillText(`${item.key}`, x + 24, y + 13);
        
        ctx.fillStyle = '#666';
        ctx.textAlign = 'right';
        ctx.fillText(`${item.count}`, x + colWidth - 20, y + 13);
    });
    
    ctx.restore();
    
    // 7. Download
    const link = document.createElement('a');
    link.download = `pattern-${new Date().getTime()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}
