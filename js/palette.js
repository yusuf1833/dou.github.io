
import { colorSystemMapping, colorSystems } from './data/colors.js';
import { hexToRgb } from './utils.js';

export function getAllColorSystems() {
    return colorSystems;
}

export function generatePalette(activeSystems) {
    const palette = [];
    const processedColors = new Set();

    // Iterate over colorSystemMapping
    Object.entries(colorSystemMapping).forEach(([hex, systems]) => {
        // Check if this color belongs to any active system
        let included = false;
        const availableCodes = {};
        let primaryKey = '';

        for (const sys of activeSystems) {
            if (systems[sys]) {
                availableCodes[sys] = systems[sys];
                if (!primaryKey) primaryKey = systems[sys]; // Use first found as primary
                included = true;
            }
        }

        if (included) {
             palette.push({
                hex: hex,
                rgb: hexToRgb(hex),
                codes: availableCodes,
                key: primaryKey, 
                // We store the mapping to help find the code for a specific system later
                systems: systems 
            });
        }
    });
    return palette;
}
