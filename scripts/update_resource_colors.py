#!/usr/bin/env python3
"""
Script to update resource colors in the COI data file.
This will make edge connections in the flow graph more visually distinct.
"""

import re

def update_resource_colors():
    """Update resource colors based on resource types"""
    
    # Color mapping based on resource types
    color_mapping = {
        # Water-related resources -> Blue
        'water': '#1E90FF',
        'chilled_water': '#1E90FF',
        'seawater': '#1E90FF',
        'sour_water': '#1E90FF',
        'waste_water': '#1E90FF',
        'brine': '#1E90FF',
        
        # Oil-related resources -> Black/Dark
        'crude_oil': '#000000',
        'heavy_oil': '#000000',
        'medium_oil': '#000000',
        'light_oil': '#000000',
        'cooking_oil': '#000000',
        'diesel': '#000000',
        'fuel_gas': '#000000',
        'naphtha': '#000000',
        'chemical_fuel': '#000000',
        'ethanol': '#000000',
        
        # Copper-related resources -> Copper color
        'copper': '#B87333',
        'copper_ore': '#B87333',
        'copper_ore_crushed': '#B87333',
        'copper_scrap': '#B87333',
        'copper_scrap_pressed': '#B87333',
        'impure_copper': '#B87333',
        'molten_copper': '#B87333',
        
        # Iron-related resources -> Iron color
        'iron': '#A19D94',
        'iron_ore': '#A19D94',
        'iron_ore_crushed': '#A19D94',
        'iron_scrap': '#A19D94',
        'iron_scrap_pressed': '#A19D94',
        'molten_iron': '#A19D94',
        
        # Steel-related resources -> Steel color
        'steel': '#708090',
        'molten_steel': '#708090',
        
        # Gold-related resources -> Gold color
        'gold': '#FFD700',
        'gold_ore': '#FFD700',
        'gold_ore_concentrate': '#FFD700',
        'gold_ore_crushed': '#FFD700',
        'gold_ore_powder': '#FFD700',
        'gold_scrap': '#FFD700',
        'gold_scrap_pressed': '#FFD700',
        
        # Aluminum-related resources -> Silver
        'aluminum': '#C0C0C0',
        'alumina': '#C0C0C0',
        'aluminum_scrap': '#C0C0C0',
        'aluminum_scrap_pressed': '#C0C0C0',
        'molten_aluminum': '#C0C0C0',
        'bauxite': '#C0C0C0',
        'bauxite_powder': '#C0C0C0',
        'hydrated_alumina': '#C0C0C0',
        
        # Glass-related resources -> Light blue/cyan
        'glass': '#E0FFFF',
        'molten_glass': '#E0FFFF',
        'glass_mix': '#E0FFFF',
        'broken_glass': '#E0FFFF',
        'lens': '#E0FFFF',
        'quartz': '#E0FFFF',
        'quartz_crushed': '#E0FFFF',
        'diamond': '#E0FFFF',
        'diamond_paste': '#E0FFFF',
        
        # Coal-related resources -> Dark gray
        'coal': '#2F4F4F',
        'graphite': '#2F4F4F',
        'rubber': '#2F4F4F',
        
        # Steam-related resources -> Red
        'steam_high': '#FF6B6B',
        'steam_low': '#FF6B6B',
        'steam_super': '#FF6B6B',
        'steam_depleted': '#FF6B6B',
        
        # Electronics/Computing -> Purple
        'electricity': '#DDA0DD',
        'electronics': '#DDA0DD',
        'electronics_ii': '#DDA0DD',
        'electronics_iii': '#DDA0DD',
        'electronics_iv': '#DDA0DD',
        'computing': '#DDA0DD',
        'microchips': '#DDA0DD',
        'microchips_stage_1_a': '#DDA0DD',
        'microchips_stage_1_b': '#DDA0DD',
        'microchips_stage_1_c': '#DDA0DD',
        'microchips_stage_2_a': '#DDA0DD',
        'microchips_stage_2_b': '#DDA0DD',
        'microchips_stage_2_c': '#DDA0DD',
        'microchips_stage_3_a': '#DDA0DD',
        'microchips_stage_3_b': '#DDA0DD',
        'microchips_stage_3_c': '#DDA0DD',
        'microchips_stage_4_a': '#DDA0DD',
        'microchips_stage_4_b': '#DDA0DD',
        'pcb': '#DDA0DD',
        'consumer_electronics': '#DDA0DD',
        'mechanical_power': '#DDA0DD',
        'server': '#DDA0DD',
        
        # Construction parts -> Steel blue
        'construction_parts': '#708090',
        'construction_parts_ii': '#708090',
        'construction_parts_iii': '#708090',
        'construction_parts_iv': '#708090',
        'mechanical_parts': '#708090',
        'maintenance_i': '#708090',
        'maintenance_ii': '#708090',
        'maintenance_iii': '#708090',
        'rail_parts': '#708090',
        
        # Food/Agriculture -> Brown/Food colors
        'meat': '#DC143C',
        'meat_trimmings': '#DC143C',
        'sausage': '#DC143C',
        'red_mud': '#DC143C',
        
        'bread': '#DEB887',
        'cake': '#DEB887',
        'food_pack': '#DEB887',
        'potato': '#DEB887',
        'snack': '#DEB887',
        
        'corn': '#228B22',
        'canola': '#228B22',
        'soybean': '#228B22',
        'sugar_cane': '#228B22',
        'biomass': '#228B22',
        
        'fruit': '#FF6347',
        'flowers': '#FF1493',
        'poppy': '#FF1493',
        
        'animal_feed': '#8B4513',
        'chicken_carcass': '#8B4513',
        'corn_mash': '#8B4513',
        'compost': '#8B4513',
        'fertilizer_organic': '#8B4513',
        'fertilizer_i': '#8B4513',
        'fertilizer_ii': '#8B4513',
        'dirt': '#8B4513',
        'sludge': '#8B4513',
        
        'eggs': '#FFFAF0',
        'flour': '#FFFAF0',
        'paper': '#FFFAF0',
        'salt': '#FFFAF0',
        'sugar': '#FFFAF0',
        
        # Chemicals -> Yellow
        'acid': '#FFFF00',
        'sulfur': '#FFFF00',
        
        # Gases -> Light blue
        'oxygen': '#ADD8E6',
        'hydrogen': '#ADD8E6',
        
        'chlorine': '#32CD32',
        
        # Sand/Stone -> Beige
        'sand': '#F5DEB3',
        'manufactured_sand': '#F5DEB3',
        'limestone': '#F5F5DC',
        
        # Solar/High-tech -> Gold
        'solar_cell': '#FFD700',
        'solar_cell_mono': '#FFD700',
        'sapphire_wafer': '#0000FF',
    }
    
    # Read the current file
    with open('data/coi.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update colors for mapped resources
    for resource_id, color in color_mapping.items():
        # Pattern to match the resource line
        pattern = rf'(\{{ id: "{resource_id}", name: "[^"]*", color: ")#[0-9A-Fa-f]{{6}}(", image: "/images/resources/{resource_id}\.png" \}})'
        replacement = rf'\g<1>{color}\g<2>'
        content = re.sub(pattern, replacement, content)
    
    # Write back to file
    with open('data/coi.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated colors for {len(color_mapping)} resource types")
    print("Resource colors updated successfully!")

if __name__ == "__main__":
    update_resource_colors() 