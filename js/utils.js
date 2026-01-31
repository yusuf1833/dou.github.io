
// --- Utility Functions ---

// Convert Hex to RGB
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate Euclidean distance between two RGB colors
export function colorDistance(rgb1, rgb2) {
  const dr = rgb1.r - rgb2.r;
  const dg = rgb1.g - rgb2.g;
  const db = rgb1.b - rgb2.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

// Find closest color in palette
export function findClosestPaletteColor(targetRgb, palette) {
  if (!palette || palette.length === 0) {
      // Robust fallback
      return { key: 'ERR', hex: '#000000', rgb: { r: 0, g: 0, b: 0 } };
  }

  let minDistance = Infinity;
  let closestColor = palette[0];

  for (const paletteColor of palette) {
    const distance = colorDistance(targetRgb, paletteColor.rgb);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = paletteColor;
    }
    if (distance === 0) break; // Exact match
  }
  return closestColor;
}

// Helper to get contrast color (black or white) for text overlay
export function getContrastColor(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return '#000000';
    // Luma formula
    const luma = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
    return luma > 0.5 ? '#000000' : '#FFFFFF';
}

// Convert Hex to HSL
export function hexToHsl(hex) {
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
  
    if (diff !== 0) {
      s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
      switch (max) {
        case r: h = ((g - b) / diff + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / diff + 2) / 6; break;
        case b: h = ((r - g) / diff + 4) / 6; break;
      }
    }
  
    return { h: h * 360, s: s * 100, l: l * 100 };
}

// Sort colors by Hue
export function sortColorsByHue(colors) {
    return colors.slice().sort((a, b) => {
      const hslA = hexToHsl(a.color || a.hex); // Support both structures
      const hslB = hexToHsl(b.color || b.hex);
      
      if (Math.abs(hslA.h - hslB.h) > 5) {
        return hslA.h - hslB.h;
      }
      if (Math.abs(hslA.l - hslB.l) > 3) {
        return hslB.l - hslA.l;
      }
      return hslB.s - hslA.s;
    });
}
