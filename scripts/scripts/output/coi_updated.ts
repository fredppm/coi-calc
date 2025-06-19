import { Resource, Building, Recipe } from '../types';

export const coiResources: Resource[] = [
  { id: "acid", name: "Acid", color: "#FFFF00", image: "/images/resources/acid.png" },
  { id: "air_pollution", name: "Air Pollution", color: "#95A5A6", image: "/images/resources/air_pollution.png" },
  { id: "alumina", name: "Alumina", color: "#95A5A6", image: "/images/resources/alumina.png" },
  { id: "aluminum", name: "Aluminum", color: "#C0C0C0", image: "/images/resources/aluminum.png" },
  { id: "aluminum_scrap", name: "Aluminum Scrap", color: "#C0C0C0", image: "/images/resources/aluminum_scrap.png" },
  { id: "aluminum_scrap_pressed", name: "Aluminum Scrap Pressed", color: "#C0C0C0", image: "/images/resources/aluminum_scrap_pressed.png" },
  { id: "ammonia", name: "Ammonia", color: "#95A5A6", image: "/images/resources/ammonia.png" },
  { id: "anesthetics", name: "Anesthetics", color: "#95A5A6", image: "/images/resources/anesthetics.png" },
  { id: "animal_feed", name: "Animal Feed", color: "#95A5A6", image: "/images/resources/animal_feed.png" },
  { id: "antibiotics", name: "Antibiotics", color: "#95A5A6", image: "/images/resources/antibiotics.png" },
  { id: "asteroid_booster_parts", name: "Asteroid Booster Parts", color: "#95A5A6", image: "/images/resources/asteroid_booster_parts.png" },
  { id: "bauxite", name: "Bauxite", color: "#95A5A6", image: "/images/resources/bauxite.png" },
  { id: "bauxite_powder", name: "Bauxite Powder", color: "#95A5A6", image: "/images/resources/bauxite_powder.png" },
  { id: "biomass", name: "Biomass", color: "#95A5A6", image: "/images/resources/biomass.png" },
  { id: "blanket_fuel", name: "Blanket Fuel", color: "#95A5A6", image: "/images/resources/blanket_fuel.png" },
  { id: "blanket_fuel_enriched", name: "Blanket Fuel (Enriched)", color: "#95A5A6", image: "/images/resources/blanket_fuel_enriched.png" },
  { id: "bread", name: "Bread", color: "#95A5A6", image: "/images/resources/bread.png" },
  { id: "brine", name: "Brine", color: "#95A5A6", image: "/images/resources/brine.png" },
  { id: "broken_glass", name: "Broken Glass", color: "#E0FFFF", image: "/images/resources/broken_glass.png" },
  { id: "cake", name: "Cake", color: "#95A5A6", image: "/images/resources/cake.png" },
  { id: "canola", name: "Canola", color: "#95A5A6", image: "/images/resources/canola.png" },
  { id: "carbon_dioxide", name: "Carbon Dioxide", color: "#95A5A6", image: "/images/resources/carbon_dioxide.png" },
  { id: "cement", name: "Cement", color: "#95A5A6", image: "/images/resources/cement.png" },
  { id: "chemical_fuel", name: "Chemical Fuel", color: "#95A5A6", image: "/images/resources/chemical_fuel.png" },
  { id: "chicken_carcass", name: "Chicken Carcass", color: "#95A5A6", image: "/images/resources/chicken_carcass.png" },
  { id: "chilled_water", name: "Chilled Water", color: "#1E90FF", image: "/images/resources/chilled_water.png" },
  { id: "chlorine", name: "Chlorine", color: "#95A5A6", image: "/images/resources/chlorine.png" },
  { id: "coal", name: "Coal", color: "#2F4F4F", image: "/images/resources/coal.png" },
  { id: "compact_reactor", name: "Compact Reactor", color: "#95A5A6", image: "/images/resources/compact_reactor.png" },
  { id: "composite_core", name: "Composite Core", color: "#95A5A6", image: "/images/resources/composite_core.png" },
  { id: "composite_core_basic", name: "Composite Core Basic", color: "#95A5A6", image: "/images/resources/composite_core_basic.png" },
  { id: "composite_panel", name: "Composite Panel", color: "#95A5A6", image: "/images/resources/composite_panel.png" },
  { id: "compost", name: "Compost", color: "#95A5A6", image: "/images/resources/compost.png" },
  { id: "computing", name: "Computing", color: "#95A5A6", image: "/images/resources/computing.png" },
  { id: "concrete_slab", name: "Concrete Slab", color: "#95A5A6", image: "/images/resources/concrete_slab.png" },
  { id: "construction_parts", name: "Construction Parts", color: "#95A5A6", image: "/images/resources/construction_parts.png" },
  { id: "construction_parts_ii", name: "Construction Parts II", color: "#95A5A6", image: "/images/resources/construction_parts_ii.png" },
  { id: "construction_parts_iii", name: "Construction Parts III", color: "#95A5A6", image: "/images/resources/construction_parts_iii.png" },
  { id: "construction_parts_iv", name: "Construction Parts IV", color: "#95A5A6", image: "/images/resources/construction_parts_iv.png" },
  { id: "consumer_electronics", name: "Consumer Electronics", color: "#95A5A6", image: "/images/resources/consumer_electronics.png" },
  { id: "cooking_oil", name: "Cooking Oil", color: "#000000", image: "/images/resources/cooking_oil.png" },
  { id: "copper", name: "Copper", color: "#B87333", image: "/images/resources/copper.png" },
  { id: "copper_ore", name: "Copper Ore", color: "#B87333", image: "/images/resources/copper_ore.png" },
  { id: "copper_ore_crushed", name: "Copper Ore Crushed", color: "#B87333", image: "/images/resources/copper_ore_crushed.png" },
  { id: "copper_scrap", name: "Copper Scrap", color: "#B87333", image: "/images/resources/copper_scrap.png" },
  { id: "copper_scrap_pressed", name: "Copper Scrap Pressed", color: "#B87333", image: "/images/resources/copper_scrap_pressed.png" },
  { id: "core_fuel", name: "Core Fuel", color: "#95A5A6", image: "/images/resources/core_fuel.png" },
  { id: "core_fuel_spent", name: "Core Fuel (Spent)", color: "#95A5A6", image: "/images/resources/core_fuel_spent.png" },
  { id: "corn", name: "Corn", color: "#95A5A6", image: "/images/resources/corn.png" },
  { id: "corn_mash", name: "Corn Mash", color: "#95A5A6", image: "/images/resources/corn_mash.png" },
  { id: "crew_supplies", name: "Crew Supplies", color: "#95A5A6", image: "/images/resources/crew_supplies.png" },
  { id: "crude_oil", name: "Crude Oil", color: "#000000", image: "/images/resources/crude_oil.png" },
  { id: "depleted_uranium", name: "Depleted Uranium", color: "#95A5A6", image: "/images/resources/depleted_uranium.png" },
  { id: "diamond", name: "Diamond", color: "#95A5A6", image: "/images/resources/diamond.png" },
  { id: "diamond_paste", name: "Diamond Paste", color: "#95A5A6", image: "/images/resources/diamond_paste.png" },
  { id: "diesel", name: "Diesel", color: "#95A5A6", image: "/images/resources/diesel.png" },
  { id: "dirt", name: "Dirt", color: "#95A5A6", image: "/images/resources/dirt.png" },
  { id: "disinfectant", name: "Disinfectant", color: "#95A5A6", image: "/images/resources/disinfectant.png" },
  { id: "eggs", name: "Eggs", color: "#95A5A6", image: "/images/resources/eggs.png" },
  { id: "electricity", name: "Electricity", color: "#DDA0DD", image: "/images/resources/electricity.png" },
  { id: "electronics", name: "Electronics", color: "#95A5A6", image: "/images/resources/electronics.png" },
  { id: "electronics_ii", name: "Electronics II", color: "#95A5A6", image: "/images/resources/electronics_ii.png" },
  { id: "electronics_iii", name: "Electronics III", color: "#95A5A6", image: "/images/resources/electronics_iii.png" },
  { id: "electronics_iv", name: "Electronics IV", color: "#95A5A6", image: "/images/resources/electronics_iv.png" },
  { id: "enriched_uranium_20", name: "Enriched Uranium (20%)", color: "#95A5A6", image: "/images/resources/enriched_uranium_20.png" },
  { id: "enriched_uranium_4", name: "Enriched Uranium (4%)", color: "#95A5A6", image: "/images/resources/enriched_uranium_4.png" },
  { id: "ethanol", name: "Ethanol", color: "#95A5A6", image: "/images/resources/ethanol.png" },
  { id: "exhaust", name: "Exhaust", color: "#95A5A6", image: "/images/resources/exhaust.png" },
  { id: "fertilizer_organic", name: "Fertilizer (Organic)", color: "#95A5A6", image: "/images/resources/fertilizer_organic.png" },
  { id: "fertilizer_i", name: "Fertilizer I", color: "#95A5A6", image: "/images/resources/fertilizer_i.png" },
  { id: "fertilizer_ii", name: "Fertilizer II", color: "#95A5A6", image: "/images/resources/fertilizer_ii.png" },
  { id: "filter_media", name: "Filter Media", color: "#95A5A6", image: "/images/resources/filter_media.png" },
  { id: "fission_product", name: "Fission Product", color: "#95A5A6", image: "/images/resources/fission_product.png" },
  { id: "flour", name: "Flour", color: "#95A5A6", image: "/images/resources/flour.png" },
  { id: "flowers", name: "Flowers", color: "#95A5A6", image: "/images/resources/flowers.png" },
  { id: "food_pack", name: "Food Pack", color: "#95A5A6", image: "/images/resources/food_pack.png" },
  { id: "fruit", name: "Fruit", color: "#95A5A6", image: "/images/resources/fruit.png" },
  { id: "fuel_gas", name: "Fuel Gas", color: "#95A5A6", image: "/images/resources/fuel_gas.png" },
  { id: "glass", name: "Glass", color: "#E0FFFF", image: "/images/resources/glass.png" },
  { id: "glass_mix", name: "Glass Mix", color: "#E0FFFF", image: "/images/resources/glass_mix.png" },
  { id: "gold", name: "Gold", color: "#FFD700", image: "/images/resources/gold.png" },
  { id: "gold_ore", name: "Gold Ore", color: "#FFD700", image: "/images/resources/gold_ore.png" },
  { id: "gold_ore_concentrate", name: "Gold Ore Concentrate", color: "#FFD700", image: "/images/resources/gold_ore_concentrate.png" },
  { id: "gold_ore_crushed", name: "Gold Ore Crushed", color: "#FFD700", image: "/images/resources/gold_ore_crushed.png" },
  { id: "gold_ore_powder", name: "Gold Ore Powder", color: "#FFD700", image: "/images/resources/gold_ore_powder.png" },
  { id: "gold_scrap", name: "Gold Scrap", color: "#FFD700", image: "/images/resources/gold_scrap.png" },
  { id: "gold_scrap_pressed", name: "Gold Scrap Pressed", color: "#FFD700", image: "/images/resources/gold_scrap_pressed.png" },
  { id: "graphite", name: "Graphite", color: "#95A5A6", image: "/images/resources/graphite.png" },
  { id: "gravel", name: "Gravel", color: "#95A5A6", image: "/images/resources/gravel.png" },
  { id: "heavy_oil", name: "Heavy Oil", color: "#000000", image: "/images/resources/heavy_oil.png" },
  { id: "household_appliances", name: "Household Appliances", color: "#95A5A6", image: "/images/resources/household_appliances.png" },
  { id: "household_goods", name: "Household Goods", color: "#95A5A6", image: "/images/resources/household_goods.png" },
  { id: "hydrated_alumina", name: "Hydrated Alumina", color: "#95A5A6", image: "/images/resources/hydrated_alumina.png" },
  { id: "hydrogen", name: "Hydrogen", color: "#95A5A6", image: "/images/resources/hydrogen.png" },
  { id: "hydrogen_fluoride", name: "Hydrogen Fluoride", color: "#95A5A6", image: "/images/resources/hydrogen_fluoride.png" },
  { id: "imported_goods", name: "Imported Goods", color: "#95A5A6", image: "/images/resources/imported_goods.png" },
  { id: "impure_copper", name: "Impure Copper", color: "#B87333", image: "/images/resources/impure_copper.png" },
  { id: "iron", name: "Iron", color: "#A19D94", image: "/images/resources/iron.png" },
  { id: "iron_ore", name: "Iron Ore", color: "#A19D94", image: "/images/resources/iron_ore.png" },
  { id: "iron_ore_crushed", name: "Iron Ore Crushed", color: "#A19D94", image: "/images/resources/iron_ore_crushed.png" },
  { id: "iron_scrap", name: "Iron Scrap", color: "#A19D94", image: "/images/resources/iron_scrap.png" },
  { id: "iron_scrap_pressed", name: "Iron Scrap Pressed", color: "#A19D94", image: "/images/resources/iron_scrap_pressed.png" },
  { id: "lab_equipment", name: "Lab Equipment", color: "#95A5A6", image: "/images/resources/lab_equipment.png" },
  { id: "lab_equipment_ii", name: "Lab Equipment II", color: "#95A5A6", image: "/images/resources/lab_equipment_ii.png" },
  { id: "lab_equipment_iii", name: "Lab Equipment III", color: "#95A5A6", image: "/images/resources/lab_equipment_iii.png" },
  { id: "lab_equipment_iv", name: "Lab Equipment IV", color: "#95A5A6", image: "/images/resources/lab_equipment_iv.png" },
  { id: "lens", name: "Lens", color: "#95A5A6", image: "/images/resources/lens.png" },
  { id: "light_oil", name: "Light Oil", color: "#000000", image: "/images/resources/light_oil.png" },
  { id: "limestone", name: "Limestone", color: "#95A5A6", image: "/images/resources/limestone.png" },
  { id: "luxury_goods", name: "Luxury Goods", color: "#95A5A6", image: "/images/resources/luxury_goods.png" },
  { id: "mox_rod", name: "MOX Rod", color: "#95A5A6", image: "/images/resources/mox_rod.png" },
  { id: "maintenance_i", name: "Maintenance I", color: "#95A5A6", image: "/images/resources/maintenance_i.png" },
  { id: "maintenance_ii", name: "Maintenance II", color: "#95A5A6", image: "/images/resources/maintenance_ii.png" },
  { id: "maintenance_iii", name: "Maintenance III", color: "#95A5A6", image: "/images/resources/maintenance_iii.png" },
  { id: "manufactured_sand", name: "Manufactured Sand", color: "#95A5A6", image: "/images/resources/manufactured_sand.png" },
  { id: "meat", name: "Meat", color: "#95A5A6", image: "/images/resources/meat.png" },
  { id: "meat_trimmings", name: "Meat Trimmings", color: "#95A5A6", image: "/images/resources/meat_trimmings.png" },
  { id: "mechanical_parts", name: "Mechanical Parts", color: "#95A5A6", image: "/images/resources/mechanical_parts.png" },
  { id: "mechanical_power", name: "Mechanical Power", color: "#95A5A6", image: "/images/resources/mechanical_power.png" },
  { id: "medical_equipment", name: "Medical Equipment", color: "#95A5A6", image: "/images/resources/medical_equipment.png" },
  { id: "medical_supplies", name: "Medical Supplies", color: "#95A5A6", image: "/images/resources/medical_supplies.png" },
  { id: "medical_supplies_ii", name: "Medical Supplies II", color: "#95A5A6", image: "/images/resources/medical_supplies_ii.png" },
  { id: "medical_supplies_iii", name: "Medical Supplies III", color: "#95A5A6", image: "/images/resources/medical_supplies_iii.png" },
  { id: "medium_oil", name: "Medium Oil", color: "#000000", image: "/images/resources/medium_oil.png" },
  { id: "microchips", name: "Microchips", color: "#95A5A6", image: "/images/resources/microchips.png" },
  { id: "microchips_stage_1_a", name: "Microchips Stage 1 A", color: "#95A5A6", image: "/images/resources/microchips_stage_1_a.png" },
  { id: "microchips_stage_1_b", name: "Microchips Stage 1 B", color: "#95A5A6", image: "/images/resources/microchips_stage_1_b.png" },
  { id: "microchips_stage_1_c", name: "Microchips Stage 1 C", color: "#95A5A6", image: "/images/resources/microchips_stage_1_c.png" },
  { id: "microchips_stage_2_a", name: "Microchips Stage 2 A", color: "#95A5A6", image: "/images/resources/microchips_stage_2_a.png" },
  { id: "microchips_stage_2_b", name: "Microchips Stage 2 B", color: "#95A5A6", image: "/images/resources/microchips_stage_2_b.png" },
  { id: "microchips_stage_2_c", name: "Microchips Stage 2 C", color: "#95A5A6", image: "/images/resources/microchips_stage_2_c.png" },
  { id: "microchips_stage_3_a", name: "Microchips Stage 3 A", color: "#95A5A6", image: "/images/resources/microchips_stage_3_a.png" },
  { id: "microchips_stage_3_b", name: "Microchips Stage 3 B", color: "#95A5A6", image: "/images/resources/microchips_stage_3_b.png" },
  { id: "microchips_stage_3_c", name: "Microchips Stage 3 C", color: "#95A5A6", image: "/images/resources/microchips_stage_3_c.png" },
  { id: "microchips_stage_4_a", name: "Microchips Stage 4 A", color: "#95A5A6", image: "/images/resources/microchips_stage_4_a.png" },
  { id: "microchips_stage_4_b", name: "Microchips Stage 4 B", color: "#95A5A6", image: "/images/resources/microchips_stage_4_b.png" },
  { id: "molten_aluminum", name: "Molten Aluminum", color: "#C0C0C0", image: "/images/resources/molten_aluminum.png" },
  { id: "molten_copper", name: "Molten Copper", color: "#B87333", image: "/images/resources/molten_copper.png" },
  { id: "molten_glass", name: "Molten Glass", color: "#E0FFFF", image: "/images/resources/molten_glass.png" },
  { id: "molten_iron", name: "Molten Iron", color: "#A19D94", image: "/images/resources/molten_iron.png" },
  { id: "molten_silicon", name: "Molten Silicon", color: "#95A5A6", image: "/images/resources/molten_silicon.png" },
  { id: "molten_steel", name: "Molten Steel", color: "#708090", image: "/images/resources/molten_steel.png" },
  { id: "molten_titanium", name: "Molten Titanium", color: "#95A5A6", image: "/images/resources/molten_titanium.png" },
  { id: "molten_titanium_alloy", name: "Molten Titanium Alloy", color: "#95A5A6", image: "/images/resources/molten_titanium_alloy.png" },
  { id: "morphine", name: "Morphine", color: "#95A5A6", image: "/images/resources/morphine.png" },
  { id: "naphtha", name: "Naphtha", color: "#95A5A6", image: "/images/resources/naphtha.png" },
  { id: "nitrogen", name: "Nitrogen", color: "#95A5A6", image: "/images/resources/nitrogen.png" },
  { id: "office_supplies", name: "Office Supplies", color: "#95A5A6", image: "/images/resources/office_supplies.png" },
  { id: "oxygen", name: "Oxygen", color: "#ADD8E6", image: "/images/resources/oxygen.png" },
  { id: "pcb", name: "PCB", color: "#95A5A6", image: "/images/resources/pcb.png" },
  { id: "paper", name: "Paper", color: "#95A5A6", image: "/images/resources/paper.png" },
  { id: "plastic", name: "Plastic", color: "#95A5A6", image: "/images/resources/plastic.png" },
  { id: "plutonium", name: "Plutonium", color: "#95A5A6", image: "/images/resources/plutonium.png" },
  { id: "poppy", name: "Poppy", color: "#95A5A6", image: "/images/resources/poppy.png" },
  { id: "potato", name: "Potato", color: "#95A5A6", image: "/images/resources/potato.png" },
  { id: "quartz", name: "Quartz", color: "#95A5A6", image: "/images/resources/quartz.png" },
  { id: "quartz_crushed", name: "Quartz Crushed", color: "#95A5A6", image: "/images/resources/quartz_crushed.png" },
  { id: "rail_parts", name: "Rail Parts", color: "#95A5A6", image: "/images/resources/rail_parts.png" },
  { id: "recyclables", name: "Recyclables", color: "#95A5A6", image: "/images/resources/recyclables.png" },
  { id: "recyclables_pressed", name: "Recyclables Pressed", color: "#95A5A6", image: "/images/resources/recyclables_pressed.png" },
  { id: "red_mud", name: "Red Mud", color: "#95A5A6", image: "/images/resources/red_mud.png" },
  { id: "reprocessed_uranium_1", name: "Reprocessed Uranium (1%)", color: "#95A5A6", image: "/images/resources/reprocessed_uranium_1.png" },
  { id: "retired_waste", name: "Retired Waste", color: "#95A5A6", image: "/images/resources/retired_waste.png" },
  { id: "rock", name: "Rock", color: "#95A5A6", image: "/images/resources/rock.png" },
  { id: "rubber", name: "Rubber", color: "#95A5A6", image: "/images/resources/rubber.png" },
  { id: "salt", name: "Salt", color: "#95A5A6", image: "/images/resources/salt.png" },
  { id: "sand", name: "Sand", color: "#95A5A6", image: "/images/resources/sand.png" },
  { id: "sapphire_wafer", name: "Sapphire Wafer", color: "#95A5A6", image: "/images/resources/sapphire_wafer.png" },
  { id: "sausage", name: "Sausage", color: "#95A5A6", image: "/images/resources/sausage.png" },
  { id: "seawater", name: "Seawater", color: "#1E90FF", image: "/images/resources/seawater.png" },
  { id: "server", name: "Server", color: "#95A5A6", image: "/images/resources/server.png" },
  { id: "silicon_poly", name: "Silicon (Poly)", color: "#95A5A6", image: "/images/resources/silicon_poly.png" },
  { id: "silicon_wafer", name: "Silicon Wafer", color: "#95A5A6", image: "/images/resources/silicon_wafer.png" },
  { id: "slag", name: "Slag", color: "#95A5A6", image: "/images/resources/slag.png" },
  { id: "slag_crushed", name: "Slag Crushed", color: "#95A5A6", image: "/images/resources/slag_crushed.png" },
  { id: "sludge", name: "Sludge", color: "#95A5A6", image: "/images/resources/sludge.png" },
  { id: "snack", name: "Snack", color: "#95A5A6", image: "/images/resources/snack.png" },
  { id: "solar_cell", name: "Solar Cell", color: "#95A5A6", image: "/images/resources/solar_cell.png" },
  { id: "solar_cell_mono", name: "Solar Cell Mono", color: "#95A5A6", image: "/images/resources/solar_cell_mono.png" },
  { id: "sour_water", name: "Sour Water", color: "#1E90FF", image: "/images/resources/sour_water.png" },
  { id: "soybean", name: "Soybean", color: "#95A5A6", image: "/images/resources/soybean.png" },
  { id: "space_probe_parts", name: "Space Probe Parts", color: "#95A5A6", image: "/images/resources/space_probe_parts.png" },
  { id: "spent_fuel", name: "Spent Fuel", color: "#95A5A6", image: "/images/resources/spent_fuel.png" },
  { id: "spent_mox", name: "Spent MOX", color: "#95A5A6", image: "/images/resources/spent_mox.png" },
  { id: "station_parts", name: "Station Parts", color: "#95A5A6", image: "/images/resources/station_parts.png" },
  { id: "station_parts_basic", name: "Station Parts (Basic)", color: "#95A5A6", image: "/images/resources/station_parts_basic.png" },
  { id: "steam_depleted", name: "Steam (Depleted)", color: "#FF6B6B", image: "/images/resources/steam_depleted.png" },
  { id: "steam_high", name: "Steam (High)", color: "#FF6B6B", image: "/images/resources/steam_high.png" },
  { id: "steam_low", name: "Steam (Low)", color: "#FF6B6B", image: "/images/resources/steam_low.png" },
  { id: "steam_super", name: "Steam (Super)", color: "#FF6B6B", image: "/images/resources/steam_super.png" },
  { id: "steel", name: "Steel", color: "#708090", image: "/images/resources/steel.png" },
  { id: "sugar", name: "Sugar", color: "#95A5A6", image: "/images/resources/sugar.png" },
  { id: "sugar_cane", name: "Sugar Cane", color: "#95A5A6", image: "/images/resources/sugar_cane.png" },
  { id: "sulfur", name: "Sulfur", color: "#95A5A6", image: "/images/resources/sulfur.png" },
  { id: "titanium_alloy", name: "Titanium Alloy", color: "#95A5A6", image: "/images/resources/titanium_alloy.png" },
  { id: "titanium_chloride", name: "Titanium Chloride", color: "#95A5A6", image: "/images/resources/titanium_chloride.png" },
  { id: "titanium_chloride_pure", name: "Titanium Chloride (Pure)", color: "#95A5A6", image: "/images/resources/titanium_chloride_pure.png" },
  { id: "titanium_ore", name: "Titanium Ore", color: "#95A5A6", image: "/images/resources/titanium_ore.png" },
  { id: "titanium_ore_crushed", name: "Titanium Ore Crushed", color: "#95A5A6", image: "/images/resources/titanium_ore_crushed.png" },
  { id: "titanium_slag", name: "Titanium Slag", color: "#95A5A6", image: "/images/resources/titanium_slag.png" },
  { id: "titanium_sponge", name: "Titanium Sponge", color: "#95A5A6", image: "/images/resources/titanium_sponge.png" },
  { id: "tofu", name: "Tofu", color: "#95A5A6", image: "/images/resources/tofu.png" },
  { id: "toxic_slurry", name: "Toxic Slurry", color: "#95A5A6", image: "/images/resources/toxic_slurry.png" },
  { id: "tree_sapling", name: "Tree Sapling", color: "#95A5A6", image: "/images/resources/tree_sapling.png" },
  { id: "uranium_ore", name: "Uranium Ore", color: "#95A5A6", image: "/images/resources/uranium_ore.png" },
  { id: "uranium_ore_powder", name: "Uranium Ore Powder", color: "#95A5A6", image: "/images/resources/uranium_ore_powder.png" },
  { id: "uranium_rod", name: "Uranium Rod", color: "#95A5A6", image: "/images/resources/uranium_rod.png" },
  { id: "vegetables", name: "Vegetables", color: "#95A5A6", image: "/images/resources/vegetables.png" },
  { id: "vehicle_parts", name: "Vehicle Parts", color: "#95A5A6", image: "/images/resources/vehicle_parts.png" },
  { id: "vehicle_parts_ii", name: "Vehicle Parts II", color: "#95A5A6", image: "/images/resources/vehicle_parts_ii.png" },
  { id: "vehicle_parts_iii", name: "Vehicle Parts III", color: "#95A5A6", image: "/images/resources/vehicle_parts_iii.png" },
  { id: "waste", name: "Waste", color: "#95A5A6", image: "/images/resources/waste.png" },
  { id: "waste_pressed", name: "Waste Pressed", color: "#95A5A6", image: "/images/resources/waste_pressed.png" },
  { id: "waste_water", name: "Waste Water", color: "#1E90FF", image: "/images/resources/waste_water.png" },
  { id: "water", name: "Water", color: "#1E90FF", image: "/images/resources/water.png" },
  { id: "water_pollution", name: "Water Pollution", color: "#1E90FF", image: "/images/resources/water_pollution.png" },
  { id: "wheat", name: "Wheat", color: "#95A5A6", image: "/images/resources/wheat.png" },
  { id: "wood", name: "Wood", color: "#95A5A6", image: "/images/resources/wood.png" },
  { id: "woodchips", name: "Woodchips", color: "#95A5A6", image: "/images/resources/woodchips.png" },
  { id: "yellowcake", name: "Yellowcake", color: "#95A5A6", image: "/images/resources/yellowcake.png" },
];

export const coiBuildings: Building[] = [
  {
    id: "air_separator",
    name: "Air Separator",
    image: "/images/buildings/air_separator.png",
    metadata: [
      { key: "construction", value: "100" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "250 KW" },
      { key: "maintenance", value: "6.0 / 60" },
      { key: "footprint", value: "6x9" },
      { key: "required research", value: "BiofuelorSteel Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
    ]
  },
  {
    id: "alloy_mixer",
    name: "Alloy Mixer",
    image: "/images/buildings/alloy_mixer.png",
    metadata: [
      { key: "construction", value: "100" },
      { key: "workers", value: "12" },
      { key: "electricity", value: "1 MW" },
      { key: "maintenance", value: "6.8 / 60" },
      { key: "footprint", value: "?" },
      { key: "required research", value: "Titanium Smelting" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "aluminum_cell",
    name: "Aluminum Cell",
    image: "/images/buildings/aluminum_cell.png",
    metadata: [
      { key: "construction", value: "300" },
      { key: "workers", value: "14" },
      { key: "electricity", value: "8 MW" },
      { key: "maintenance", value: "10.0 / 60" },
      { key: "footprint", value: "?" },
      { key: "required research", value: "Aluminum Smelting" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "anaerobic_digester",
    name: "Anaerobic Digester",
    image: "/images/buildings/anaerobic_digester.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "50 KW" },
      { key: "maintenance", value: "1.0 / 60" },
      { key: "footprint", value: "8x6*" },
      { key: "required research", value: "Wastewater Treatment II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "arc_furnace",
    name: "Arc Furnace",
    image: "/images/buildings/arc_furnace.png",
    metadata: [
      { key: "construction", value: "160" },
      { key: "workers", value: "12" },
      { key: "electricity", value: "3 MW" },
      { key: "maintenance", value: "5.0 / 60" },
      { key: "footprint", value: "9x6" },
      { key: "required research", value: "Silicon & Electronics II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Arc Furnace II" },
    ]
  },
  {
    id: "arc_furnace_ii",
    name: "Arc Furnace II",
    image: "/images/buildings/arc_furnace_ii.png",
    metadata: [
      { key: "construction", value: "140" },
      { key: "workers", value: "18" },
      { key: "electricity", value: "5.5 MW" },
      { key: "computing", value: "4 TFlops" },
      { key: "maintenance", value: "5.0 / 60" },
      { key: "footprint", value: "9x6" },
      { key: "required research", value: "Arc Furnace II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Arc Furnace" },
    ]
  },
  {
    id: "assembly_i",
    name: "Assembly I",
    image: "/images/buildings/assembly_i.png",
    metadata: [
      { key: "construction", value: "25" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "40 KW" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "6x5" },
      { key: "required research", value: "Construction" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Assembly IIAssembly IIIAssembly IVAssembly V" },
    ]
  },
  {
    id: "assembly_ii",
    name: "Assembly II",
    image: "/images/buildings/assembly_ii.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "80 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "6x5" },
      { key: "required research", value: "Construction II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Assembly IAssembly IIIAssembly IVAssembly V" },
    ]
  },
  {
    id: "assembly_iii",
    name: "Assembly III",
    image: "/images/buildings/assembly_iii.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "150 KW" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "6x5" },
      { key: "required research", value: "Construction III" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Assembly IAssembly IIAssembly IVAssembly V" },
    ]
  },
  {
    id: "assembly_iv",
    name: "Assembly IV",
    image: "/images/buildings/assembly_iv.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "250 KW" },
      { key: "computing", value: "3 TFlops" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "6x5" },
      { key: "required research", value: "Basic Computing" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Assembly IAssembly IIAssembly IIIAssembly V" },
    ]
  },
  {
    id: "assembly_v",
    name: "Assembly V",
    image: "/images/buildings/assembly_v.png",
    metadata: [
      { key: "construction", value: "80" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "400 KW" },
      { key: "computing", value: "6 TFlops" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "6x5" },
      { key: "required research", value: "Assembly (Robotic) II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Assembly IAssembly IIAssembly IIIAssembly IV" },
    ]
  },
  {
    id: "baking_unit",
    name: "Baking Unit",
    image: "/images/buildings/baking_unit.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "200 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Wheat Farming & Processing" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Food Production" },
    ]
  },
  {
    id: "basic_distiller",
    name: "Basic Distiller",
    image: "/images/buildings/basic_distiller.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "6x5" },
      { key: "required research", value: "Basic Diesel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
    ]
  },
  {
    id: "blast_furnace",
    name: "Blast Furnace",
    image: "/images/buildings/blast_furnace.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "9x6" },
      { key: "required research", value: "Iron Smelting (From Scrap)" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Blast Furnace II" },
    ]
  },
  {
    id: "blast_furnace_ii",
    name: "Blast Furnace II",
    image: "/images/buildings/blast_furnace_ii.png",
    metadata: [
      { key: "construction", value: "180" },
      { key: "workers", value: "18" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "5.0 / 60" },
      { key: "footprint", value: "9x6" },
      { key: "required research", value: "Advanced Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Blast Furnace" },
    ]
  },
  {
    id: "boiler",
    name: "Boiler",
    image: "/images/buildings/boiler.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "5x4" },
      { key: "required research", value: "Power Generation IIorAdvanced Diesel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Boiler (Gas)Boiler (Electric)" },
    ]
  },
  {
    id: "boiler_electric",
    name: "Boiler (Electric)",
    image: "/images/buildings/boiler_electric.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "4.5 MW" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "5x4" },
      { key: "required research", value: "Electric Boiler" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "BoilerBoiler (Gas)" },
    ]
  },
  {
    id: "boiler_gas",
    name: "Boiler (Gas)",
    image: "/images/buildings/boiler_gas.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "5x4" },
      { key: "required research", value: "Gas Combustion" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "BoilerBoiler (Electric)" },
    ]
  },
  {
    id: "burner_solid",
    name: "Burner (Solid)",
    image: "/images/buildings/burner_solid.png",
    metadata: [
      { key: "construction", value: "15" },
      { key: "workers", value: "1" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "3x2" },
      { key: "required research", value: "Burner" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "chemical_plant",
    name: "Chemical Plant",
    image: "/images/buildings/chemical_plant.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "250 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "7x7" },
      { key: "required research", value: "Chemical Plant & PaperorBiofuel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
      { key: "variants", value: "Chemical Plant II" },
    ]
  },
  {
    id: "chemical_plant_ii",
    name: "Chemical Plant II",
    image: "/images/buildings/chemical_plant_ii.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "14" },
      { key: "electricity", value: "400 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "7x7" },
      { key: "required research", value: "Chemical Plant II (Research)" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
      { key: "variants", value: "Chemical Plant" },
    ]
  },
  {
    id: "chicken_farm",
    name: "Chicken Farm",
    image: "/images/buildings/chicken_farm.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "12" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "11x16*" },
      { key: "required research", value: "Chicken Farm" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Food Production" },
    ]
  },
  {
    id: "coal_maker",
    name: "Coal Maker",
    image: "/images/buildings/coal_maker.png",
    metadata: [
      { key: "construction", value: "20" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "5x3" },
      { key: "required research", value: "None" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "compactor",
    name: "Compactor",
    image: "/images/buildings/compactor.png",
    metadata: [
      { key: "construction", value: "25" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "100 KW" },
      { key: "footprint", value: "5x3" },
      { key: "required research", value: "Compactor" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "concrete_mixer",
    name: "Concrete Mixer",
    image: "/images/buildings/concrete_mixer.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "6x5*" },
      { key: "required research", value: "Concrete Production" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Concrete Mixer IIConcrete Mixer III" },
    ]
  },
  {
    id: "concrete_mixer_ii",
    name: "Concrete Mixer II",
    image: "/images/buildings/concrete_mixer_ii.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "7" },
      { key: "electricity", value: "200 KW" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "6x5*" },
      { key: "required research", value: "Construction III" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Concrete MixerConcrete Mixer III" },
    ]
  },
  {
    id: "concrete_mixer_iii",
    name: "Concrete Mixer III",
    image: "/images/buildings/concrete_mixer_iii.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "10" },
      { key: "electricity", value: "400 KW" },
      { key: "maintenance", value: "5.8 / 60" },
      { key: "footprint", value: "6x5*" },
      { key: "required research", value: "Basic Computing" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Concrete MixerConcrete Mixer II" },
    ]
  },
  {
    id: "cooled_caster",
    name: "Cooled Caster",
    image: "/images/buildings/cooled_caster.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Steel Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Cooled Caster II" },
    ]
  },
  {
    id: "cooled_caster_ii",
    name: "Cooled Caster II",
    image: "/images/buildings/cooled_caster_ii.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Advanced Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Cooled Caster" },
    ]
  },
  {
    id: "cooling_tower",
    name: "Cooling Tower",
    image: "/images/buildings/cooling_tower.png",
    metadata: [
      { key: "construction", value: "30+40" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "5x5" },
      { key: "required research", value: "Water Recovery" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Cooling Tower (Large)" },
    ]
  },
  {
    id: "cooling_tower_large",
    name: "Cooling Tower (Large)",
    image: "/images/buildings/cooling_tower_large.png",
    metadata: [
      { key: "construction", value: "80+200" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "9x9" },
      { key: "required research", value: "Power Generation IV" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Cooling Tower" },
    ]
  },
  {
    id: "copper_electrolysis",
    name: "Copper Electrolysis",
    image: "/images/buildings/copper_electrolysis.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "5" },
      { key: "electricity", value: "400 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Copper Refinement" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "cracking_unit",
    name: "Cracking Unit",
    image: "/images/buildings/cracking_unit.png",
    metadata: [
      { key: "construction", value: "100" },
      { key: "workers", value: "12" },
      { key: "electricity", value: "160 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "9x6*" },
      { key: "required research", value: "BiofuelorNaphtha Reforming" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
    ]
  },
  {
    id: "crusher",
    name: "Crusher",
    image: "/images/buildings/crusher.png",
    metadata: [
      { key: "construction", value: "20" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "300 KW" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "6x4*" },
      { key: "required research", value: "Concrete Production" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Crusher (Large)" },
    ]
  },
  {
    id: "crusher_large",
    name: "Crusher (Large)",
    image: "/images/buildings/crusher_large.png",
    metadata: [
      { key: "construction", value: "120" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "1.20 MW" },
      { key: "maintenance", value: "8.0 / 60" },
      { key: "footprint", value: "15x8*" },
      { key: "required research", value: "Crusher (Large)" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Crusher" },
    ]
  },
  {
    id: "crystallizer",
    name: "Crystallizer",
    image: "/images/buildings/crystallizer.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "500 KW" },
      { key: "computing", value: "4 TFlops" },
      { key: "maintenance", value: "5.0 / 60" },
      { key: "footprint", value: "6x5" },
      { key: "required research", value: "Microchip Production" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "data_center",
    name: "Data Center",
    image: "/images/buildings/data_center.png",
    metadata: [
      { key: "construction", value: "120+40" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "0 - 4.08 MW" },
      { key: "computing", value: "0 - +192 TFlops" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "18x11" },
      { key: "required research", value: "Datacenter" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "General Machines" },
    ]
  },
  {
    id: "diamond_reactor",
    name: "Diamond Reactor",
    image: "/images/buildings/diamond_reactor.png",
    metadata: [
      { key: "construction", value: "100" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "2 MW" },
      { key: "computing", value: "2 TFlops" },
      { key: "maintenance", value: "6.8 / 60" },
      { key: "footprint", value: "?" },
      { key: "required research", value: "Electronics IV" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "diesel_generator",
    name: "Diesel Generator",
    image: "/images/buildings/diesel_generator.png",
    metadata: [
      { key: "construction", value: "20+20" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "+800 KW" },
      { key: "maintenance", value: "6.0 / 60" },
      { key: "footprint", value: "3x4" },
      { key: "cargo", value: "Diesel" },
      { key: "storage", value: "20" },
      { key: "required research", value: "Power & Maintenance" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Diesel Generator II" },
    ]
  },
  {
    id: "diesel_generator_ii",
    name: "Diesel Generator II",
    image: "/images/buildings/diesel_generator_ii.png",
    metadata: [
      { key: "construction", value: "40+60" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "+5 MW" },
      { key: "maintenance", value: "10.0 / 60" },
      { key: "footprint", value: "3x8" },
      { key: "cargo", value: "Diesel" },
      { key: "storage", value: "24" },
      { key: "required research", value: "Power & Maintenance" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Diesel Generator" },
    ]
  },
  {
    id: "distillation_stage_i",
    name: "Distillation (Stage I)",
    image: "/images/buildings/distillation_stage_i.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "3.0 / 60" },
      { key: "footprint", value: "5x5" },
      { key: "required research", value: "Advanced Diesel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
      { key: "variants", value: "Distillation (Stage II)Distillation (Stage III)" },
    ]
  },
  {
    id: "distillation_stage_ii",
    name: "Distillation (Stage II)",
    image: "/images/buildings/distillation_stage_ii.png",
    metadata: [
      { key: "construction", value: "70" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "3.0 / 60" },
      { key: "footprint", value: "5x5" },
      { key: "required research", value: "Advanced Diesel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
      { key: "variants", value: "Distillation (Stage I)Distillation (Stage III)" },
    ]
  },
  {
    id: "distillation_stage_iii",
    name: "Distillation (Stage III)",
    image: "/images/buildings/distillation_stage_iii.png",
    metadata: [
      { key: "construction", value: "70" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "3.0 / 60" },
      { key: "footprint", value: "5x5" },
      { key: "required research", value: "Naphtha Processing" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
      { key: "variants", value: "Distillation (Stage I)Distillation (Stage II)" },
    ]
  },
  {
    id: "electrolyzer",
    name: "Electrolyzer",
    image: "/images/buildings/electrolyzer.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "3" },
      { key: "electricity", value: "300 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "8x5" },
      { key: "required research", value: "Electrolysis" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Electrolyzer II" },
    ]
  },
  {
    id: "electrolyzer_ii",
    name: "Electrolyzer II",
    image: "/images/buildings/electrolyzer_ii.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "3" },
      { key: "electricity", value: "1.10 MW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "8x5" },
      { key: "required research", value: "Electrolyzer II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Electrolyzer" },
    ]
  },
  {
    id: "enrichment_plant",
    name: "Enrichment Plant",
    image: "/images/buildings/enrichment_plant.png",
    metadata: [
      { key: "construction", value: "80" },
      { key: "workers", value: "14" },
      { key: "electricity", value: "1.2 MW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "14x8" },
      { key: "required research", value: "Uranium Enrichment" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
    ]
  },
  {
    id: "evaporation_pond",
    name: "Evaporation Pond",
    image: "/images/buildings/evaporation_pond.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "1.0 / 60" },
      { key: "footprint", value: "15x9" },
      { key: "required research", value: "Salt Production" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Evaporation Pond (Heated)" },
    ]
  },
  {
    id: "evaporation_pond_heated",
    name: "Evaporation Pond (Heated)",
    image: "/images/buildings/evaporation_pond_heated.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "250 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "15x9" },
      { key: "required research", value: "Salt Production" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Evaporation Pond" },
    ]
  },
  {
    id: "exhaust_scrubber",
    name: "Exhaust Scrubber",
    image: "/images/buildings/exhaust_scrubber.png",
    metadata: [
      { key: "construction", value: "80" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "200 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "8x6*" },
      { key: "required research", value: "Exhaust Filtration" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "farm",
    name: "Farm",
    image: "/images/buildings/farm.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "10" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "61x41" },
      { key: "required research", value: "Basic Farming" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Food Production" },
      { key: "variants", value: "Irrigated FarmGreenhouseGreenhouse II" },
    ]
  },
  {
    id: "fast_breeder_reactor",
    name: "Fast Breeder Reactor",
    image: "/images/buildings/fast_breeder_reactor.png",
    metadata: [
      { key: "construction", value: "1500+File:Titanium Alloy.png200+200" },
      { key: "workers", value: "200" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "43.0 / 60" },
      { key: "footprint", value: "45x21*" },
      { key: "required research", value: "Fast Breeder Reactor" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Nuclear ReactorNuclear Reactor II" },
    ]
  },
  {
    id: "fermentation_tank",
    name: "Fermentation Tank",
    image: "/images/buildings/fermentation_tank.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "20 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "8x6" },
      { key: "required research", value: "Fermentation" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
    ]
  },
  {
    id: "flare",
    name: "Flare",
    image: "/images/buildings/flare.png",
    metadata: [
      { key: "construction", value: "10" },
      { key: "workers", value: "1" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "1x1" },
      { key: "required research", value: "Advanced Diesel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "food_processor",
    name: "Food Processor",
    image: "/images/buildings/food_processor.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "7x7" },
      { key: "required research", value: "Soybean FarmingorChicken Farm" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Food Production" },
    ]
  },
  {
    id: "gas_injection_pump",
    name: "Gas Injection Pump",
    image: "/images/buildings/gas_injection_pump.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "6x4*" },
      { key: "required research", value: "Wastewater Treatment" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "glass_maker",
    name: "Glass Maker",
    image: "/images/buildings/glass_maker.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "350 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "12x5" },
      { key: "required research", value: "Glass Making" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Glass Maker II" },
    ]
  },
  {
    id: "glass_maker_ii",
    name: "Glass Maker II",
    image: "/images/buildings/glass_maker_ii.png",
    metadata: [
      { key: "construction", value: "120" },
      { key: "workers", value: "14" },
      { key: "electricity", value: "800 KW" },
      { key: "maintenance", value: "8.0 / 60" },
      { key: "footprint", value: "28x5" },
      { key: "required research", value: "Glass Making II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Glass Maker" },
    ]
  },
  {
    id: "gold_furnace",
    name: "Gold Furnace",
    image: "/images/buildings/gold_furnace.png",
    metadata: [
      { key: "construction", value: "70" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "800 KW" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "6x4*" },
      { key: "required research", value: "Gold Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "greenhouse",
    name: "Greenhouse",
    image: "/images/buildings/greenhouse.png",
    metadata: [
      { key: "construction", value: "100+320" },
      { key: "workers", value: "18" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "6.0 / 60" },
      { key: "footprint", value: "61x41" },
      { key: "required research", value: "Greenhouse" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Food Production" },
      { key: "variants", value: "FarmIrrigated FarmGreenhouse II" },
    ]
  },
  {
    id: "greenhouse_ii",
    name: "Greenhouse II",
    image: "/images/buildings/greenhouse_ii.png",
    metadata: [
      { key: "construction", value: "200+640" },
      { key: "workers", value: "24" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "8.0 / 60" },
      { key: "footprint", value: "61x41" },
      { key: "required research", value: "Greenhouse II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Food Production" },
      { key: "variants", value: "FarmIrrigated FarmGreenhouse" },
    ]
  },
  {
    id: "groundwater_pump",
    name: "Groundwater Pump",
    image: "/images/buildings/groundwater_pump.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "120 KW" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "6x4*" },
      { key: "cargo", value: "Water" },
      { key: "required research", value: "Groundwater Pump" },
      { key: "designation", value: "Water Extraction & Processing" },
    ]
  },
  {
    id: "high-pressure_turbine",
    name: "High-Pressure Turbine",
    image: "/images/buildings/high-pressure_turbine.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "6x3" },
      { key: "required research", value: "Power Generation II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Super-Pressure TurbineHigh-Pressure Turbine IILow-Pressure TurbineLow-Pressure Turbine II" },
    ]
  },
  {
    id: "high-pressure_turbine_ii",
    name: "High-Pressure Turbine II",
    image: "/images/buildings/high-pressure_turbine_ii.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "6x3" },
      { key: "required research", value: "Power Generation IV" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Super-Pressure TurbineHigh-Pressure TurbineLow-Pressure TurbineLow-Pressure Turbine II" },
    ]
  },
  {
    id: "hydrogen_reformer",
    name: "Hydrogen Reformer",
    image: "/images/buildings/hydrogen_reformer.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "12" },
      { key: "electricity", value: "250 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "9x6" },
      { key: "required research", value: "Hydrogen Production" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
    ]
  },
  {
    id: "incineration_plant",
    name: "Incineration Plant",
    image: "/images/buildings/incineration_plant.png",
    metadata: [
      { key: "construction", value: "180" },
      { key: "workers", value: "18" },
      { key: "electricity", value: "500 KW" },
      { key: "footprint", value: "14x8*" },
      { key: "required research", value: "Incineration Plant" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "irrigated_farm",
    name: "Irrigated Farm",
    image: "/images/buildings/irrigated_farm.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "12" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "61x41" },
      { key: "required research", value: "Irrigated Farms" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Food Production" },
      { key: "variants", value: "FarmGreenhouseGreenhouse II" },
    ]
  },
  {
    id: "kiln",
    name: "Kiln",
    image: "/images/buildings/kiln.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "6x6" },
      { key: "required research", value: "Basic Concrete" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
    ]
  },
  {
    id: "lens_polisher",
    name: "Lens Polisher",
    image: "/images/buildings/lens_polisher.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "200 KW" },
      { key: "computing", value: "4 TFlops" },
      { key: "maintenance", value: "1.7 / 60" },
      { key: "footprint", value: "?" },
      { key: "required research", value: "Electronics IV" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "liquid_dump",
    name: "Liquid Dump",
    image: "/images/buildings/liquid_dump.png",
    metadata: [
      { key: "construction", value: "20" },
      { key: "workers", value: "1" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "3x2 on shore+ 14x5 over ocean" },
      { key: "required research", value: "Basic Diesel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "low-pressure_turbine",
    name: "Low-Pressure Turbine",
    image: "/images/buildings/low-pressure_turbine.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Power Generation III" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Super-Pressure TurbineHigh-Pressure Turbine IIHigh-Pressure TurbineLow-Pressure Turbine II" },
    ]
  },
  {
    id: "low-pressure_turbine_ii",
    name: "Low-Pressure Turbine II",
    image: "/images/buildings/low-pressure_turbine_ii.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Power Generation IV" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Super-Pressure TurbineHigh-Pressure Turbine IIHigh-Pressure TurbineLow-Pressure Turbine" },
    ]
  },
  {
    id: "maintenance_depot",
    name: "Maintenance Depot",
    image: "/images/buildings/maintenance_depot.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "20" },
      { key: "electricity", value: "250 KW" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x6" },
      { key: "cargo", value: "Maintenance I" },
      { key: "storage", value: "2880" },
      { key: "required research", value: "Maintenance II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Maintenance Depot (Basic)Maintenance II DepotMaintenance III Depot" },
    ]
  },
  {
    id: "maintenance_depot_basic",
    name: "Maintenance Depot (Basic)",
    image: "/images/buildings/maintenance_depot_basic.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x6" },
      { key: "cargo", value: "Maintenance I" },
      { key: "storage", value: "630" },
      { key: "required research", value: "Power & Maintenance" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Maintenance DepotMaintenance II DepotMaintenance III Depot" },
    ]
  },
  {
    id: "maintenance_ii_depot",
    name: "Maintenance II Depot",
    image: "/images/buildings/maintenance_ii_depot.png",
    metadata: [
      { key: "construction", value: "40+10" },
      { key: "workers", value: "20" },
      { key: "electricity", value: "250 KW" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x6" },
      { key: "cargo", value: "Maintenance II" },
      { key: "storage", value: "1280" },
      { key: "required research", value: "Construction IV" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Maintenance Depot (Basic)Maintenance DepotMaintenance III Depot" },
    ]
  },
  {
    id: "maintenance_iii_depot",
    name: "Maintenance III Depot",
    image: "/images/buildings/maintenance_iii_depot.png",
    metadata: [
      { key: "construction", value: "40+20" },
      { key: "workers", value: "28" },
      { key: "electricity", value: "600 KW" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x6" },
      { key: "cargo", value: "Maintenance III" },
      { key: "storage", value: "480" },
      { key: "required research", value: "Datacenter" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Maintenance Depot (Basic)Maintenance DepotMaintenance II Depot" },
    ]
  },
  {
    id: "metal_caster",
    name: "Metal Caster",
    image: "/images/buildings/metal_caster.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Iron Smelting (From Scrap)" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Metal Caster II" },
    ]
  },
  {
    id: "metal_caster_ii",
    name: "Metal Caster II",
    image: "/images/buildings/metal_caster_ii.png",
    metadata: [
      { key: "construction", value: "40+20" },
      { key: "workers", value: "3" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Advanced Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Metal Caster" },
    ]
  },
  {
    id: "microchip_machine",
    name: "Microchip Machine",
    image: "/images/buildings/microchip_machine.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "200 KW" },
      { key: "computing", value: "4 TFlops" },
      { key: "maintenance", value: "5.8 / 60" },
      { key: "footprint", value: "7x4" },
      { key: "required research", value: "Microchip Production" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Microchip Machine II" },
    ]
  },
  {
    id: "microchip_machine_ii",
    name: "Microchip Machine II",
    image: "/images/buildings/microchip_machine_ii.png",
    metadata: [
      { key: "construction", value: "180" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "500 KW" },
      { key: "computing", value: "12 TFlops" },
      { key: "maintenance", value: "7.7 / 60" },
      { key: "footprint", value: "7x4" },
      { key: "required research", value: "Microchip Production II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Microchip Machine" },
    ]
  },
  {
    id: "mill",
    name: "Mill",
    image: "/images/buildings/mill.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "5" },
      { key: "electricity", value: "120 KW" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "5x8" },
      { key: "required research", value: "Wheat Farming & Processing" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Food Production" },
    ]
  },
  {
    id: "mixer",
    name: "Mixer",
    image: "/images/buildings/mixer.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "7x6*" },
      { key: "required research", value: "Organic FertilizerorSulfur ProcessingorGlass Making" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Mixer II" },
    ]
  },
  {
    id: "mixer_ii",
    name: "Mixer II",
    image: "/images/buildings/mixer_ii.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "200 KW" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "7x6*" },
      { key: "required research", value: "Mixer II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
      { key: "variants", value: "Mixer" },
    ]
  },
  {
    id: "nuclear_reactor",
    name: "Nuclear Reactor",
    image: "/images/buildings/nuclear_reactor.png",
    metadata: [
      { key: "construction", value: "400" },
      { key: "workers", value: "80" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "24.0 / 60" },
      { key: "footprint", value: "32x16*" },
      { key: "required research", value: "Nuclear Reactor" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Nuclear Reactor IIFast Breeder Reactor" },
    ]
  },
  {
    id: "nuclear_reactor_ii",
    name: "Nuclear Reactor II",
    image: "/images/buildings/nuclear_reactor_ii.png",
    metadata: [
      { key: "construction", value: "700" },
      { key: "workers", value: "110" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "36.0 / 60" },
      { key: "footprint", value: "32x16*" },
      { key: "required research", value: "Nuclear Reactor II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Nuclear ReactorFast Breeder Reactor" },
    ]
  },
  {
    id: "nuclear_reprocessing_plant",
    name: "Nuclear Reprocessing Plant",
    image: "/images/buildings/nuclear_reprocessing_plant.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "30" },
      { key: "electricity", value: "1.20 MW" },
      { key: "computing", value: "16 TFlops" },
      { key: "maintenance", value: "10.0 / 60" },
      { key: "footprint", value: "21x10" },
      { key: "required research", value: "Nuclear Reactor II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Power Production" },
    ]
  },
  {
    id: "oil_pump",
    name: "Oil Pump",
    image: "/images/buildings/oil_pump.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "1" },
      { key: "electricity", value: "80 KW" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "5x3" },
      { key: "required research", value: "Basic Diesel" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
    ]
  },
  {
    id: "oxygen_furnace",
    name: "Oxygen Furnace",
    image: "/images/buildings/oxygen_furnace.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "120 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Steel Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Oxygen Furnace II" },
    ]
  },
  {
    id: "oxygen_furnace_ii",
    name: "Oxygen Furnace II",
    image: "/images/buildings/oxygen_furnace_ii.png",
    metadata: [
      { key: "construction", value: "70" },
      { key: "workers", value: "10" },
      { key: "electricity", value: "200 KW" },
      { key: "maintenance", value: "6.0 / 60" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Advanced Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Oxygen Furnace" },
    ]
  },
  {
    id: "polymerization_plant",
    name: "Polymerization Plant",
    image: "/images/buildings/polymerization_plant.png",
    metadata: [
      { key: "construction", value: "100" },
      { key: "workers", value: "12" },
      { key: "electricity", value: "400 KW" },
      { key: "maintenance", value: "6.0 / 60" },
      { key: "footprint", value: "8x7" },
      { key: "required research", value: "Plastic" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
    ]
  },
  {
    id: "power_generator",
    name: "Power Generator",
    image: "/images/buildings/power_generator.png",
    metadata: [
      { key: "construction", value: "20+20" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "+3 MW" },
      { key: "maintenance", value: "1.0 / 60" },
      { key: "footprint", value: "5x2" },
      { key: "required research", value: "Power Generation II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Power Generator (Large)" },
    ]
  },
  {
    id: "power_generator_large",
    name: "Power Generator (Large)",
    image: "/images/buildings/power_generator_large.png",
    metadata: [
      { key: "construction", value: "40+180" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "+2500 KW" },
      { key: "maintenance", value: "8.0 / 60" },
      { key: "footprint", value: "7x5" },
      { key: "required research", value: "Power Generation IV" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "Power Generator" },
    ]
  },
  {
    id: "rainwater_harvester",
    name: "Rainwater Harvester",
    image: "/images/buildings/rainwater_harvester.png",
    metadata: [
      { key: "construction", value: "20+30" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "0.9 / 60" },
      { key: "footprint", value: "19x19*" },
      { key: "required research", value: "Bricks Production" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Water Extraction & Processing" },
    ]
  },
  {
    id: "research_lab_i",
    name: "Research Lab I",
    image: "/images/buildings/research_lab_i.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "40 KW" },
      { key: "unity", value: "-0.25 /month" },
      { key: "research speed", value: "3.2/ 60" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "15x15*" },
      { key: "required research", value: "None" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Research Lab IIResearch Lab IIIResearch Lab IVResearch Lab V" },
    ]
  },
  {
    id: "research_lab_ii",
    name: "Research Lab II",
    image: "/images/buildings/research_lab_ii.png",
    metadata: [
      { key: "construction", value: "60+10" },
      { key: "workers", value: "8" },
      { key: "electricity", value: "200 KW" },
      { key: "unity", value: "-0.25 /month" },
      { key: "research speed", value: "4.0/ 60" },
      { key: "maintenance", value: "8.0 / 60" },
      { key: "footprint", value: "15x15*" },
      { key: "required research", value: "Research Lab II" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Research Lab IResearch Lab IIIResearch Lab IVResearch Lab V" },
    ]
  },
  {
    id: "research_lab_iii",
    name: "Research Lab III",
    image: "/images/buildings/research_lab_iii.png",
    metadata: [
      { key: "construction", value: "120+20" },
      { key: "workers", value: "16" },
      { key: "electricity", value: "400 KW" },
      { key: "unity", value: "-0.20 /month" },
      { key: "research speed", value: "4.8/ 60" },
      { key: "maintenance", value: "12.0 / 60" },
      { key: "footprint", value: "15x15*" },
      { key: "required research", value: "Research Lab III" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Research Lab IResearch Lab IIResearch Lab IVResearch Lab V" },
    ]
  },
  {
    id: "research_lab_iv",
    name: "Research Lab IV",
    image: "/images/buildings/research_lab_iv.png",
    metadata: [
      { key: "construction", value: "120+20" },
      { key: "workers", value: "30" },
      { key: "electricity", value: "600 KW" },
      { key: "unity", value: "-0.20 /month" },
      { key: "research speed", value: "5.6/ 60" },
      { key: "maintenance", value: "12.0 / 60" },
      { key: "footprint", value: "15x15*" },
      { key: "required research", value: "Research Lab IV" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Buildings" },
      { key: "variants", value: "Research Lab IResearch Lab IIResearch Lab IIIResearch Lab V" },
    ]
  },
  {
    id: "rotary_kiln",
    name: "Rotary Kiln",
    image: "/images/buildings/rotary_kiln.png",
    metadata: [
      { key: "construction", value: "30" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "14x4" },
      { key: "required research", value: "Concrete Production" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Rotary Kiln (Gas)" },
    ]
  },
  {
    id: "rotary_kiln_gas",
    name: "Rotary Kiln (Gas)",
    image: "/images/buildings/rotary_kiln_gas.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "10" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "3.0 / 60" },
      { key: "footprint", value: "14x4" },
      { key: "required research", value: "Rotary Kiln (Gas)" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
      { key: "variants", value: "Rotary Kiln" },
    ]
  },
  {
    id: "rubber_maker",
    name: "Rubber Maker",
    image: "/images/buildings/rubber_maker.png",
    metadata: [
      { key: "construction", value: "60" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "300 KW" },
      { key: "maintenance", value: "2.0 / 60" },
      { key: "footprint", value: "8x6*" },
      { key: "required research", value: "Synthetic Rubber" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
    ]
  },
  {
    id: "seawater_pump",
    name: "Seawater Pump",
    image: "/images/buildings/seawater_pump.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "1" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "4x4 on land+ 12x6 over ocean" },
      { key: "required research", value: "Basic DesalinationorSalt ProductionorThermal Desalination" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Seawater Pump (Tall)" },
    ]
  },
  {
    id: "seawater_pump_tall",
    name: "Seawater Pump (Tall)",
    image: "/images/buildings/seawater_pump_tall.png",
    metadata: [
      { key: "construction", value: "50" },
      { key: "workers", value: "1" },
      { key: "electricity", value: "300 KW" },
      { key: "maintenance", value: "3.8 / 60" },
      { key: "footprint", value: "4x4 on land+ 15x6 over ocean" },
      { key: "cargo", value: "Water" },
      { key: "required research", value: "Thermal Desalination" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
      { key: "variants", value: "Seawater Pump" },
    ]
  },
  {
    id: "settling_tank",
    name: "Settling Tank",
    image: "/images/buildings/settling_tank.png",
    metadata: [
      { key: "construction", value: "80" },
      { key: "workers", value: "6" },
      { key: "electricity", value: "120 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "9x5*" },
      { key: "required research", value: "Uranium EnrichmentorGold Smelting" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "General Machines" },
    ]
  },
  {
    id: "shredder",
    name: "Shredder",
    image: "/images/buildings/shredder.png",
    metadata: [
      { key: "construction", value: "25" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "100 KW" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "3x6" },
      { key: "required research", value: "Chemical Plant & PaperorCompactor" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "silicon_reactor",
    name: "Silicon Reactor",
    image: "/images/buildings/silicon_reactor.png",
    metadata: [
      { key: "construction", value: "20" },
      { key: "workers", value: "2" },
      { key: "electricity", value: "80 KW" },
      { key: "maintenance", value: "1.0 / 60" },
      { key: "footprint", value: "3x4*" },
      { key: "required research", value: "Silicon & Electronics II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Metallurgy & Smelting" },
    ]
  },
  {
    id: "smoke_stack",
    name: "Smoke Stack",
    image: "/images/buildings/smoke_stack.png",
    metadata: [
      { key: "construction", value: "10" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "1x1" },
      { key: "required research", value: "Iron Smelting (From Scrap)" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
      { key: "variants", value: "Smoke Stack (Large)" },
    ]
  },
  {
    id: "smoke_stack_large",
    name: "Smoke Stack (Large)",
    image: "/images/buildings/smoke_stack_large.png",
    metadata: [
      { key: "construction", value: "10+40" },
      { key: "workers", value: "None" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "None" },
      { key: "footprint", value: "2x2" },
      { key: "required research", value: "Pipes II" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "sour_water_stripper",
    name: "Sour Water Stripper",
    image: "/images/buildings/sour_water_stripper.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "10" },
      { key: "electricity", value: "160 KW" },
      { key: "maintenance", value: "4.0 / 60" },
      { key: "footprint", value: "5x9*" },
      { key: "required research", value: "Sulfur Processing" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Crude Oil Refining" },
    ]
  },
  {
    id: "super-pressure_turbine",
    name: "Super-Pressure Turbine",
    image: "/images/buildings/super-pressure_turbine.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "1" },
      { key: "electricity", value: "None" },
      { key: "maintenance", value: "3.0 / 60" },
      { key: "footprint", value: "6x3" },
      { key: "required research", value: "Super Heated Steam" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Power Production" },
      { key: "variants", value: "High-Pressure Turbine IIHigh-Pressure TurbineLow-Pressure TurbineLow-Pressure Turbine II" },
    ]
  },
  {
    id: "thermal_desalinator",
    name: "Thermal Desalinator",
    image: "/images/buildings/thermal_desalinator.png",
    metadata: [
      { key: "construction", value: "30+30" },
      { key: "workers", value: "4" },
      { key: "electricity", value: "400 KW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "11x4" },
      { key: "required research", value: "Thermal Desalination" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
    ]
  },
  {
    id: "waste_sorting_plant",
    name: "Waste Sorting Plant",
    image: "/images/buildings/waste_sorting_plant.png",
    metadata: [
      { key: "construction", value: "400" },
      { key: "workers", value: "45" },
      { key: "electricity", value: "300 KW" },
      { key: "maintenance", value: "20.0 / 60" },
      { key: "footprint", value: "25x9" },
      { key: "required research", value: "Recycling" },
      { key: "boostByUnity", value: "Not Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "wastewater_treatment",
    name: "Wastewater Treatment",
    image: "/images/buildings/wastewater_treatment.png",
    metadata: [
      { key: "construction", value: "140" },
      { key: "workers", value: "26" },
      { key: "electricity", value: "600 KW" },
      { key: "maintenance", value: "10.0 / 60" },
      { key: "footprint", value: "8x6*" },
      { key: "required research", value: "Wastewater Treatment" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Waste Management" },
    ]
  },
  {
    id: "water_chiller",
    name: "Water Chiller",
    image: "/images/buildings/water_chiller.png",
    metadata: [
      { key: "construction", value: "40" },
      { key: "workers", value: "3" },
      { key: "electricity", value: "1 MW" },
      { key: "maintenance", value: "1.9 / 60" },
      { key: "footprint", value: "4x4" },
      { key: "required research", value: "Datacenter" },
      { key: "boostByUnity", value: "Available" },
      { key: "designation", value: "Water Extraction & Processing" },
    ]
  },
];

export const coiRecipes: Recipe[] = [
  {
    id: "air_separator_0",
    name: "AirSeparation",
    buildingId: "air_separator",
    inputs: [
    ],
    outputs: [
      { resourceId: "oxygen", amount: 12 },
      { resourceId: "nitrogen", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "alloy_mixer_1",
    name: "TitaniumAlloyMixing",
    buildingId: "alloy_mixer",
    inputs: [
      { resourceId: "molten_titanium", amount: 32 },
      { resourceId: "molten_aluminum", amount: 4 },
    ],
    outputs: [
      { resourceId: "molten_titanium_alloy", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "aluminum_cell_2",
    name: "AluminumElectrolysis",
    buildingId: "aluminum_cell",
    inputs: [
      { resourceId: "alumina", amount: 16 },
      { resourceId: "graphite", amount: 4 },
    ],
    outputs: [
      { resourceId: "molten_aluminum", amount: 16 },
      { resourceId: "carbon_dioxide", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "anaerobic_digester_3",
    name: "SludgeDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "sludge", amount: 18 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 8 },
      { resourceId: "compost", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_4",
    name: "PotatoDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "potato", amount: 14 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 8 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_5",
    name: "VegetablesDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "vegetables", amount: 14 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 8 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_6",
    name: "FruitDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "fruit", amount: 12 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 12 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_7",
    name: "PoppyDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "poppy", amount: 14 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 8 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_8",
    name: "WheatDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "wheat", amount: 12 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 12 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_9",
    name: "CornDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "corn", amount: 14 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 14 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_10",
    name: "SoybeanDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "soybean", amount: 14 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 12 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_11",
    name: "SugarCaneDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "sugar_cane", amount: 12 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 8 },
      { resourceId: "compost", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "anaerobic_digester_12",
    name: "MeatTrimmingsDigestion",
    buildingId: "anaerobic_digester",
    inputs: [
      { resourceId: "meat_trimmings", amount: 8 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 4 },
      { resourceId: "compost", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "arc_furnace_13",
    name: "IronSmeltingArcScrapT1",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "iron_scrap", amount: 8 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 8 },
      { resourceId: "exhaust", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_14",
    name: "IronSmeltingArcT1",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "iron_ore_crushed", amount: 8 },
      { resourceId: "limestone", amount: 1 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 8 },
      { resourceId: "slag", amount: 3 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_15",
    name: "CopperSmeltingArcScrapT1",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "copper_scrap", amount: 8 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 8 },
      { resourceId: "exhaust", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_16",
    name: "CopperSmeltingArcT1",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "copper_ore_crushed", amount: 8 },
      { resourceId: "sand", amount: 1 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 8 },
      { resourceId: "slag", amount: 3 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_17",
    name: "GlassSmeltingArcT1",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "glass_mix", amount: 10 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 8 },
      { resourceId: "slag", amount: 4 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_18",
    name: "GlassSmeltingArcT1WithBroken",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "broken_glass", amount: 12 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 8 },
      { resourceId: "exhaust", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_19",
    name: "SiliconSmeltingArc",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "sand", amount: 16 },
      { resourceId: "coal", amount: 4 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_silicon", amount: 12 },
      { resourceId: "slag", amount: 6 },
      { resourceId: "exhaust", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_20",
    name: "AluminumSmeltingScrapArcT1",
    buildingId: "arc_furnace",
    inputs: [
      { resourceId: "aluminum_scrap", amount: 8 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "molten_aluminum", amount: 8 },
      { resourceId: "exhaust", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_21",
    name: "IronSmeltingArcScrap",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "iron_scrap", amount: 16 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 16 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_22",
    name: "IronSmeltingArc",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "iron_ore_crushed", amount: 16 },
      { resourceId: "limestone", amount: 2 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 16 },
      { resourceId: "slag", amount: 6 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_23",
    name: "CopperSmeltingArcScrap",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "copper_scrap", amount: 16 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 16 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_24",
    name: "CopperSmeltingArc",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "copper_ore_crushed", amount: 16 },
      { resourceId: "sand", amount: 2 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 16 },
      { resourceId: "slag", amount: 6 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_25",
    name: "GlassSmeltingArc",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "glass_mix", amount: 20 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 16 },
      { resourceId: "slag", amount: 8 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_26",
    name: "GlassSmeltingArcWithBroken",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "broken_glass", amount: 24 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 16 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_27",
    name: "SiliconSmeltingArc2",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "sand", amount: 32 },
      { resourceId: "coal", amount: 8 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_silicon", amount: 24 },
      { resourceId: "slag", amount: 12 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_28",
    name: "AluminumSmeltingScrapArcT2",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "aluminum_scrap", amount: 16 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_aluminum", amount: 16 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_29",
    name: "IlmeniteSmeltingArc2",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "titanium_ore_crushed", amount: 16 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 4 },
      { resourceId: "titanium_slag", amount: 12 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "arc_furnace_ii_30",
    name: "TitaniumSmeltingArc2",
    buildingId: "arc_furnace_ii",
    inputs: [
      { resourceId: "titanium_sponge", amount: 16 },
      { resourceId: "graphite", amount: 1 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_titanium", amount: 16 },
      { resourceId: "steam_low", amount: 2 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_i_31",
    name: "CpAssemblyT1",
    buildingId: "assembly_i",
    inputs: [
      { resourceId: "iron", amount: 3 },
      { resourceId: "wood", amount: 3 },
      { resourceId: "concrete_slab", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_i_32",
    name: "Cp2AssemblyT1",
    buildingId: "assembly_i",
    inputs: [
      { resourceId: "construction_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_ii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "80" },
    ]
  },
  {
    id: "assembly_i_33",
    name: "MechPartsAssemblyT1",
    buildingId: "assembly_i",
    inputs: [
      { resourceId: "iron", amount: 5 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_i_34",
    name: "VehicleParts1AssemblyT1",
    buildingId: "assembly_i",
    inputs: [
      { resourceId: "mechanical_parts", amount: 3 },
      { resourceId: "electronics", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_i_35",
    name: "ElectronicsAssemblyT1",
    buildingId: "assembly_i",
    inputs: [
      { resourceId: "rubber", amount: 1 },
      { resourceId: "copper", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_ii_36",
    name: "CpAssemblyT2",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "iron", amount: 3 },
      { resourceId: "wood", amount: 3 },
      { resourceId: "concrete_slab", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_ii_37",
    name: "Cp2AssemblyT2",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "construction_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_ii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_ii_38",
    name: "Cp3AssemblyT1",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "construction_parts_ii", amount: 8 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_iii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "80" },
    ]
  },
  {
    id: "assembly_ii_39",
    name: "MechPartsAssemblyT2",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "iron", amount: 5 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_ii_40",
    name: "VehicleParts1AssemblyT2",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "mechanical_parts", amount: 3 },
      { resourceId: "electronics", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_ii_41",
    name: "LabEquipment1AssemblyT1",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "mechanical_parts", amount: 4 },
      { resourceId: "electronics", amount: 2 },
    ],
    outputs: [
      { resourceId: "lab_equipment", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_ii_42",
    name: "HouseholdGoodsAssemblyT1",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "steel", amount: 2 },
      { resourceId: "wood", amount: 4 },
    ],
    outputs: [
      { resourceId: "household_goods", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_ii_43",
    name: "ElectronicsAssemblyT2",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "rubber", amount: 1 },
      { resourceId: "copper", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iii_44",
    name: "CpAssemblyT3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "iron", amount: 3 },
      { resourceId: "wood", amount: 3 },
      { resourceId: "concrete_slab", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iii_45",
    name: "CpAssemblySteelT3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "steel", amount: 2 },
      { resourceId: "wood", amount: 2 },
      { resourceId: "concrete_slab", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iii_46",
    name: "Cp2AssemblyT3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "construction_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_ii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iii_47",
    name: "Cp3AssemblyT2",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "construction_parts_ii", amount: 8 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_iii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_iii_48",
    name: "Cp4AssemblyElectrifiedT2",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "construction_parts_iii", amount: 8 },
      { resourceId: "electronics_ii", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_iv", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "80" },
    ]
  },
  {
    id: "assembly_iii_49",
    name: "MechPartsAssemblyT3Iron",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "iron", amount: 5 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iii_50",
    name: "MechPartsAssemblyT3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iii_51",
    name: "VehicleParts1AssemblyT3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "mechanical_parts", amount: 3 },
      { resourceId: "electronics", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_iii_52",
    name: "VehicleParts2AssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "vehicle_parts", amount: 4 },
      { resourceId: "steel", amount: 2 },
      { resourceId: "glass", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts_ii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_53",
    name: "VehicleParts3AssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "vehicle_parts_ii", amount: 4 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts_iii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_54",
    name: "LabEquipment1AssemblyT2",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "mechanical_parts", amount: 4 },
      { resourceId: "electronics", amount: 2 },
    ],
    outputs: [
      { resourceId: "lab_equipment", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iii_55",
    name: "LabEquipment2AssemblyT2",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "lab_equipment", amount: 6 },
      { resourceId: "paper", amount: 2 },
      { resourceId: "glass", amount: 2 },
    ],
    outputs: [
      { resourceId: "lab_equipment_ii", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_56",
    name: "LabEquipment3AssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 6 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "lab_equipment_iii", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_57",
    name: "RailPartsAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "concrete_slab", amount: 2 },
      { resourceId: "steel", amount: 1 },
    ],
    outputs: [
      { resourceId: "rail_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iii_58",
    name: "HouseholdGoodsAssemblyT2",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "steel", amount: 2 },
      { resourceId: "wood", amount: 4 },
    ],
    outputs: [
      { resourceId: "household_goods", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_59",
    name: "HouseholdAppliancesAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "electronics", amount: 8 },
      { resourceId: "electronics_ii", amount: 4 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "household_appliances", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iii_60",
    name: "LuxuryGoodsAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "gold", amount: 2 },
      { resourceId: "imported_goods", amount: 6 },
    ],
    outputs: [
      { resourceId: "luxury_goods", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iii_61",
    name: "PCBAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "plastic", amount: 4 },
      { resourceId: "copper", amount: 2 },
    ],
    outputs: [
      { resourceId: "pcb", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_iii_62",
    name: "ElectronicsAssemblyT3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "rubber", amount: 1 },
      { resourceId: "copper", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iii_63",
    name: "Electronics2AssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "pcb", amount: 4 },
      { resourceId: "electronics", amount: 8 },
      { resourceId: "silicon_poly", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics_ii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_iii_64",
    name: "UraniumRodsAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "enriched_uranium_4", amount: 2 },
      { resourceId: "steel", amount: 1 },
    ],
    outputs: [
      { resourceId: "uranium_rod", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iii_65",
    name: "SolarCellAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "steel", amount: 1 },
      { resourceId: "silicon_poly", amount: 12 },
      { resourceId: "glass", amount: 4 },
    ],
    outputs: [
      { resourceId: "solar_cell", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "120" },
    ]
  },
  {
    id: "assembly_iii_66",
    name: "MedicalEquipmentAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "steel", amount: 4 },
      { resourceId: "plastic", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_equipment", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_iii_67",
    name: "MedicalSuppliesAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "medical_equipment", amount: 4 },
      { resourceId: "disinfectant", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_supplies", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iii_68",
    name: "MedicalSupplies2AssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "medical_supplies", amount: 8 },
      { resourceId: "antibiotics", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_supplies_ii", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iii_69",
    name: "MedicalSupplies3AssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "medical_supplies_ii", amount: 8 },
      { resourceId: "anesthetics", amount: 4 },
      { resourceId: "morphine", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_supplies_iii", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iii_70",
    name: "FoodPackAssemblyMeat",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "meat", amount: 3 },
      { resourceId: "bread", amount: 6 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_71",
    name: "FoodPackAssemblyEggs",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "eggs", amount: 3 },
      { resourceId: "bread", amount: 6 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_72",
    name: "FoodPackAssemblyTofu",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "tofu", amount: 6 },
      { resourceId: "vegetables", amount: 8 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_73",
    name: "OfficeSuppliesAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "paper", amount: 3 },
      { resourceId: "household_goods", amount: 2 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "office_supplies", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iii_74",
    name: "CompositePanelAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "aluminum", amount: 8 },
      { resourceId: "steel", amount: 1 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "composite_panel", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iii_75",
    name: "CompositeCoreBasicAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "composite_panel", amount: 8 },
      { resourceId: "steel", amount: 4 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "composite_core_basic", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iii_76",
    name: "StationPartsBasicAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "composite_core_basic", amount: 4 },
      { resourceId: "solar_cell", amount: 2 },
      { resourceId: "chemical_fuel", amount: 1 },
    ],
    outputs: [
      { resourceId: "station_parts_basic", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iii_77",
    name: "CrewSuppliesAssemblyT1",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "food_pack", amount: 2 },
      { resourceId: "medical_supplies_ii", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "crew_supplies", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iv_78",
    name: "CpAssemblyT4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "iron", amount: 6 },
      { resourceId: "wood", amount: 6 },
      { resourceId: "concrete_slab", amount: 8 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_79",
    name: "CpAssemblySteelT4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "steel", amount: 4 },
      { resourceId: "wood", amount: 4 },
      { resourceId: "concrete_slab", amount: 8 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_80",
    name: "Cp2AssemblyT4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "construction_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_ii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_81",
    name: "Cp3AssemblyT3",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "construction_parts_ii", amount: 8 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_iii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iv_82",
    name: "Cp4AssemblyRoboticT1",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "construction_parts_iii", amount: 8 },
      { resourceId: "electronics_ii", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_iv", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_iv_83",
    name: "MechPartsAssemblyT4Iron",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "iron", amount: 10 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_84",
    name: "MechPartsAssemblyT4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_85",
    name: "VehicleParts1AssemblyT4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "mechanical_parts", amount: 6 },
      { resourceId: "electronics", amount: 2 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_iv_86",
    name: "VehicleParts2AssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "vehicle_parts", amount: 4 },
      { resourceId: "steel", amount: 2 },
      { resourceId: "glass", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts_ii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_87",
    name: "VehicleParts3AssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "vehicle_parts_ii", amount: 4 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts_iii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_88",
    name: "LabEquipment1AssemblyT3",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "mechanical_parts", amount: 4 },
      { resourceId: "electronics", amount: 2 },
    ],
    outputs: [
      { resourceId: "lab_equipment", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_iv_89",
    name: "LabEquipment2AssemblyT3",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "lab_equipment", amount: 6 },
      { resourceId: "paper", amount: 2 },
      { resourceId: "glass", amount: 2 },
    ],
    outputs: [
      { resourceId: "lab_equipment_ii", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_90",
    name: "LabEquipment3AssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 6 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "lab_equipment_iii", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_91",
    name: "LabEquipment4AssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "lab_equipment_iii", amount: 8 },
      { resourceId: "electronics_iii", amount: 1 },
    ],
    outputs: [
      { resourceId: "lab_equipment_iv", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iv_92",
    name: "RailPartsAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "concrete_slab", amount: 4 },
      { resourceId: "steel", amount: 2 },
    ],
    outputs: [
      { resourceId: "rail_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_93",
    name: "HouseholdGoodsAssemblyT3",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "steel", amount: 2 },
      { resourceId: "wood", amount: 4 },
    ],
    outputs: [
      { resourceId: "household_goods", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_94",
    name: "HouseholdAppliancesAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "electronics", amount: 8 },
      { resourceId: "electronics_ii", amount: 4 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "household_appliances", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iv_95",
    name: "LuxuryGoodsAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "gold", amount: 2 },
      { resourceId: "imported_goods", amount: 6 },
    ],
    outputs: [
      { resourceId: "luxury_goods", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iv_96",
    name: "PCBAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "plastic", amount: 4 },
      { resourceId: "copper", amount: 2 },
    ],
    outputs: [
      { resourceId: "pcb", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iv_97",
    name: "ElectronicsAssemblyT4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "rubber", amount: 2 },
      { resourceId: "copper", amount: 8 },
    ],
    outputs: [
      { resourceId: "electronics", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_98",
    name: "Electronics2AssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "pcb", amount: 4 },
      { resourceId: "electronics", amount: 8 },
      { resourceId: "silicon_poly", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics_ii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iv_99",
    name: "UraniumRodsAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "enriched_uranium_4", amount: 2 },
      { resourceId: "steel", amount: 1 },
    ],
    outputs: [
      { resourceId: "uranium_rod", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iv_100",
    name: "UraniumEnrichedAssemblyT1",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "plutonium", amount: 1 },
      { resourceId: "enriched_uranium_4", amount: 1 },
    ],
    outputs: [
      { resourceId: "enriched_uranium_20", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iv_101",
    name: "SolarCellAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "steel", amount: 1 },
      { resourceId: "silicon_poly", amount: 12 },
      { resourceId: "glass", amount: 4 },
    ],
    outputs: [
      { resourceId: "solar_cell", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iv_102",
    name: "Electronics3AssemblyRoboticT1",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "microchips", amount: 2 },
      { resourceId: "electronics_ii", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics_iii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_iv_103",
    name: "ServerAssemblyT1",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "steel", amount: 2 },
      { resourceId: "electronics_iii", amount: 4 },
    ],
    outputs: [
      { resourceId: "server", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_iv_104",
    name: "MedicalEquipmentAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "steel", amount: 4 },
      { resourceId: "plastic", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_equipment", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_iv_105",
    name: "MedicalSuppliesAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "medical_equipment", amount: 4 },
      { resourceId: "disinfectant", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_supplies", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_106",
    name: "MedicalSupplies2AssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "medical_supplies", amount: 8 },
      { resourceId: "antibiotics", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_supplies_ii", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_107",
    name: "MedicalSupplies3AssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "medical_supplies_ii", amount: 8 },
      { resourceId: "anesthetics", amount: 4 },
      { resourceId: "morphine", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_supplies_iii", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_iv_108",
    name: "FoodPackAssemblyMeatT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "meat", amount: 3 },
      { resourceId: "bread", amount: 6 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_109",
    name: "FoodPackAssemblyEggsT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "eggs", amount: 3 },
      { resourceId: "bread", amount: 6 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_110",
    name: "FoodPackAssemblyTofuT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "tofu", amount: 6 },
      { resourceId: "vegetables", amount: 8 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_111",
    name: "OfficeSuppliesAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "paper", amount: 3 },
      { resourceId: "household_goods", amount: 2 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "office_supplies", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_iv_112",
    name: "CompositePanelAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "aluminum", amount: 8 },
      { resourceId: "steel", amount: 1 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "composite_panel", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iv_113",
    name: "CompositeCoreBasicAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "composite_panel", amount: 8 },
      { resourceId: "steel", amount: 4 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "composite_core_basic", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iv_114",
    name: "StationPartsBasicAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "composite_core_basic", amount: 4 },
      { resourceId: "solar_cell", amount: 2 },
      { resourceId: "chemical_fuel", amount: 1 },
    ],
    outputs: [
      { resourceId: "station_parts_basic", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_iv_115",
    name: "CrewSuppliesAssemblyT2",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "food_pack", amount: 2 },
      { resourceId: "medical_supplies_ii", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "crew_supplies", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_v_116",
    name: "CpAssemblyT5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "iron", amount: 12 },
      { resourceId: "wood", amount: 12 },
      { resourceId: "concrete_slab", amount: 16 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_117",
    name: "CpAssemblySteelT5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "steel", amount: 8 },
      { resourceId: "wood", amount: 8 },
      { resourceId: "concrete_slab", amount: 16 },
    ],
    outputs: [
      { resourceId: "construction_parts", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_118",
    name: "Cp2AssemblyT5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "construction_parts", amount: 16 },
      { resourceId: "electronics", amount: 8 },
    ],
    outputs: [
      { resourceId: "construction_parts_ii", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_119",
    name: "Cp3AssemblyT4",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "construction_parts_ii", amount: 8 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_iii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_120",
    name: "Cp4AssemblyRoboticT2",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "construction_parts_iii", amount: 8 },
      { resourceId: "electronics_ii", amount: 4 },
    ],
    outputs: [
      { resourceId: "construction_parts_iv", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_v_121",
    name: "MechPartsAssemblyT5Iron",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "iron", amount: 20 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_122",
    name: "MechPartsAssemblyT5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "steel", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_123",
    name: "VehicleParts1AssemblyT5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "mechanical_parts", amount: 12 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_124",
    name: "VehicleParts2AssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "vehicle_parts", amount: 4 },
      { resourceId: "steel", amount: 2 },
      { resourceId: "glass", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts_ii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_125",
    name: "VehicleParts3AssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "vehicle_parts_ii", amount: 4 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts_iii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_126",
    name: "LabEquipment1AssemblyT4",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "mechanical_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "lab_equipment", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_127",
    name: "LabEquipment2AssemblyT4",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "lab_equipment", amount: 6 },
      { resourceId: "paper", amount: 2 },
      { resourceId: "glass", amount: 2 },
    ],
    outputs: [
      { resourceId: "lab_equipment_ii", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_128",
    name: "LabEquipment3AssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 6 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "lab_equipment_iii", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_129",
    name: "LabEquipment4AssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "lab_equipment_iii", amount: 8 },
      { resourceId: "electronics_iii", amount: 1 },
    ],
    outputs: [
      { resourceId: "lab_equipment_iv", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_130",
    name: "RailPartsAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "concrete_slab", amount: 8 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "rail_parts", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_131",
    name: "HouseholdGoodsAssemblyT4",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "steel", amount: 2 },
      { resourceId: "wood", amount: 4 },
    ],
    outputs: [
      { resourceId: "household_goods", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_132",
    name: "HouseholdAppliancesAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "electronics", amount: 8 },
      { resourceId: "electronics_ii", amount: 4 },
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "household_appliances", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_133",
    name: "LuxuryGoodsAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "gold", amount: 2 },
      { resourceId: "imported_goods", amount: 6 },
    ],
    outputs: [
      { resourceId: "luxury_goods", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_134",
    name: "PCBAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "plastic", amount: 4 },
      { resourceId: "copper", amount: 2 },
    ],
    outputs: [
      { resourceId: "pcb", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_135",
    name: "ElectronicsAssemblyT5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "rubber", amount: 4 },
      { resourceId: "copper", amount: 16 },
    ],
    outputs: [
      { resourceId: "electronics", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_136",
    name: "Electronics2AssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "pcb", amount: 4 },
      { resourceId: "electronics", amount: 8 },
      { resourceId: "silicon_poly", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics_ii", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_137",
    name: "SolarCellAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "steel", amount: 1 },
      { resourceId: "silicon_poly", amount: 12 },
      { resourceId: "glass", amount: 4 },
    ],
    outputs: [
      { resourceId: "solar_cell", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "assembly_v_138",
    name: "SolarCellMonoAssemblyT1",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "aluminum", amount: 1 },
      { resourceId: "silicon_wafer", amount: 9 },
      { resourceId: "glass", amount: 4 },
    ],
    outputs: [
      { resourceId: "solar_cell_mono", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_v_139",
    name: "Electronics3AssemblyRoboticT2",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "microchips", amount: 2 },
      { resourceId: "electronics_ii", amount: 4 },
    ],
    outputs: [
      { resourceId: "electronics_iii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "assembly_v_140",
    name: "Electronics4Assembly",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "electronics_iii", amount: 3 },
      { resourceId: "lens", amount: 2 },
      { resourceId: "diamond", amount: 1 },
    ],
    outputs: [
      { resourceId: "electronics_iv", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_v_141",
    name: "ServerAssemblyT2",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "steel", amount: 2 },
      { resourceId: "electronics_iii", amount: 4 },
    ],
    outputs: [
      { resourceId: "server", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_v_142",
    name: "ConsumerElectronicsAssemblyT1",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "electronics_iii", amount: 2 },
      { resourceId: "plastic", amount: 4 },
      { resourceId: "aluminum", amount: 3 },
    ],
    outputs: [
      { resourceId: "consumer_electronics", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "assembly_v_143",
    name: "MedicalEquipmentAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "steel", amount: 4 },
      { resourceId: "plastic", amount: 4 },
    ],
    outputs: [
      { resourceId: "medical_equipment", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_144",
    name: "MedicalSuppliesAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "medical_equipment", amount: 8 },
      { resourceId: "disinfectant", amount: 8 },
    ],
    outputs: [
      { resourceId: "medical_supplies", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_145",
    name: "MedicalSupplies2AssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "medical_supplies", amount: 16 },
      { resourceId: "antibiotics", amount: 8 },
    ],
    outputs: [
      { resourceId: "medical_supplies_ii", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_146",
    name: "MedicalSupplies3AssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "medical_supplies_ii", amount: 16 },
      { resourceId: "anesthetics", amount: 8 },
      { resourceId: "morphine", amount: 8 },
    ],
    outputs: [
      { resourceId: "medical_supplies_iii", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "assembly_v_147",
    name: "FoodPackAssemblyMeatT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "meat", amount: 3 },
      { resourceId: "bread", amount: 6 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_148",
    name: "FoodPackAssemblyEggsT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "eggs", amount: 3 },
      { resourceId: "bread", amount: 6 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_149",
    name: "FoodPackAssemblyTofuT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "tofu", amount: 6 },
      { resourceId: "vegetables", amount: 8 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_150",
    name: "OfficeSuppliesAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "paper", amount: 3 },
      { resourceId: "household_goods", amount: 2 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "office_supplies", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "assembly_v_151",
    name: "CompositePanelAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "aluminum", amount: 8 },
      { resourceId: "steel", amount: 1 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "composite_panel", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_152",
    name: "CompositeCoreBasicAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "composite_panel", amount: 8 },
      { resourceId: "steel", amount: 4 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "composite_core_basic", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_153",
    name: "CompositeCoreAssembly",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "composite_panel", amount: 8 },
      { resourceId: "titanium_alloy", amount: 4 },
      { resourceId: "electronics_iii", amount: 1 },
    ],
    outputs: [
      { resourceId: "composite_core", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_v_154",
    name: "StationPartsBasicAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "composite_core_basic", amount: 4 },
      { resourceId: "solar_cell", amount: 2 },
      { resourceId: "chemical_fuel", amount: 1 },
    ],
    outputs: [
      { resourceId: "station_parts_basic", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_155",
    name: "StationPartsAssembly",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "composite_core", amount: 4 },
      { resourceId: "solar_cell_mono", amount: 2 },
      { resourceId: "chemical_fuel", amount: 1 },
    ],
    outputs: [
      { resourceId: "station_parts", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_v_156",
    name: "CrewSuppliesAssemblyT3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "food_pack", amount: 2 },
      { resourceId: "medical_supplies_ii", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "crew_supplies", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "assembly_v_157",
    name: "ProbePartsAssembly",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "composite_core", amount: 8 },
      { resourceId: "electronics_iv", amount: 6 },
      { resourceId: "plutonium", amount: 1 },
    ],
    outputs: [
      { resourceId: "space_probe_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_v_158",
    name: "CompactReactorAssembly",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "titanium_alloy", amount: 6 },
      { resourceId: "electronics_iv", amount: 3 },
      { resourceId: "enriched_uranium_20", amount: 1 },
    ],
    outputs: [
      { resourceId: "compact_reactor", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "assembly_v_159",
    name: "AsteroidBoosterPartsAssembly",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "composite_core", amount: 8 },
      { resourceId: "compact_reactor", amount: 4 },
      { resourceId: "diamond", amount: 2 },
    ],
    outputs: [
      { resourceId: "asteroid_booster_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "baking_unit_160",
    name: "BreadProduction",
    buildingId: "baking_unit",
    inputs: [
      { resourceId: "flour", amount: 8 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "bread", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "baking_unit_161",
    name: "CakeProduction",
    buildingId: "baking_unit",
    inputs: [
      { resourceId: "flour", amount: 5 },
      { resourceId: "sugar", amount: 2 },
      { resourceId: "cooking_oil", amount: 1 },
      { resourceId: "eggs", amount: 1 },
      { resourceId: "fruit", amount: 1 },
    ],
    outputs: [
      { resourceId: "cake", amount: 7 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "basic_distiller_162",
    name: "DieselDistillationBasic",
    buildingId: "basic_distiller",
    inputs: [
      { resourceId: "crude_oil", amount: 20 },
      { resourceId: "coal", amount: 2 },
    ],
    outputs: [
      { resourceId: "diesel", amount: 9 },
      { resourceId: "waste_water", amount: 5 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "basic_distiller_163",
    name: "WaterDesalinationBasic",
    buildingId: "basic_distiller",
    inputs: [
      { resourceId: "seawater", amount: 10 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "water", amount: 6 },
      { resourceId: "brine", amount: 4 },
      { resourceId: "exhaust", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "blast_furnace_164",
    name: "IronSmeltingT1Scrap",
    buildingId: "blast_furnace",
    inputs: [
      { resourceId: "iron_scrap", amount: 8 },
      { resourceId: "coal", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 8 },
      { resourceId: "exhaust", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_165",
    name: "IronSmeltingT1Coal",
    buildingId: "blast_furnace",
    inputs: [
      { resourceId: "iron_ore", amount: 10 },
      { resourceId: "coal", amount: 4 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 8 },
      { resourceId: "slag", amount: 4 },
      { resourceId: "exhaust", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_166",
    name: "CopperSmeltingT1Scrap",
    buildingId: "blast_furnace",
    inputs: [
      { resourceId: "copper_scrap", amount: 8 },
      { resourceId: "coal", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 8 },
      { resourceId: "exhaust", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_167",
    name: "CopperSmeltingT1",
    buildingId: "blast_furnace",
    inputs: [
      { resourceId: "copper_ore", amount: 10 },
      { resourceId: "coal", amount: 4 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 8 },
      { resourceId: "slag", amount: 4 },
      { resourceId: "exhaust", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_168",
    name: "GlassSmelting",
    buildingId: "blast_furnace",
    inputs: [
      { resourceId: "glass_mix", amount: 10 },
      { resourceId: "coal", amount: 4 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 8 },
      { resourceId: "slag", amount: 4 },
      { resourceId: "exhaust", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_169",
    name: "GlassSmeltingWithBroken",
    buildingId: "blast_furnace",
    inputs: [
      { resourceId: "broken_glass", amount: 12 },
      { resourceId: "coal", amount: 2 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 8 },
      { resourceId: "exhaust", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_ii_170",
    name: "IronSmeltingT2Scrap",
    buildingId: "blast_furnace_ii",
    inputs: [
      { resourceId: "iron_scrap", amount: 16 },
      { resourceId: "coal", amount: 3 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 16 },
      { resourceId: "exhaust", amount: 9 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_ii_171",
    name: "IronSmeltingT2",
    buildingId: "blast_furnace_ii",
    inputs: [
      { resourceId: "iron_ore_crushed", amount: 16 },
      { resourceId: "limestone", amount: 2 },
      { resourceId: "coal", amount: 5 },
    ],
    outputs: [
      { resourceId: "molten_iron", amount: 16 },
      { resourceId: "slag", amount: 6 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_ii_172",
    name: "CopperSmeltingT2Scrap",
    buildingId: "blast_furnace_ii",
    inputs: [
      { resourceId: "copper_scrap", amount: 16 },
      { resourceId: "coal", amount: 3 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 16 },
      { resourceId: "exhaust", amount: 9 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_ii_173",
    name: "CopperSmeltingT2",
    buildingId: "blast_furnace_ii",
    inputs: [
      { resourceId: "copper_ore_crushed", amount: 16 },
      { resourceId: "sand", amount: 2 },
      { resourceId: "coal", amount: 5 },
    ],
    outputs: [
      { resourceId: "molten_copper", amount: 16 },
      { resourceId: "slag", amount: 6 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_ii_174",
    name: "GlassSmeltingT2",
    buildingId: "blast_furnace_ii",
    inputs: [
      { resourceId: "glass_mix", amount: 20 },
      { resourceId: "coal", amount: 5 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 16 },
      { resourceId: "slag", amount: 8 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "blast_furnace_ii_175",
    name: "GlassSmeltingT2WithBroken",
    buildingId: "blast_furnace_ii",
    inputs: [
      { resourceId: "broken_glass", amount: 24 },
      { resourceId: "coal", amount: 3 },
    ],
    outputs: [
      { resourceId: "molten_glass", amount: 16 },
      { resourceId: "exhaust", amount: 9 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "boiler_176",
    name: "SteamGenerationCoal",
    buildingId: "boiler",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "coal", amount: 5 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_177",
    name: "SteamGenerationWood",
    buildingId: "boiler",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "woodchips", amount: 8 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_178",
    name: "SteamGenerationBiomass",
    buildingId: "boiler",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "biomass", amount: 12 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_179",
    name: "SteamGenerationAnimalFeed",
    buildingId: "boiler",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "animal_feed", amount: 12 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_electric_180",
    name: "SteamGenerationElectric",
    buildingId: "boiler_electric",
    inputs: [
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_electric_181",
    name: "SteamGenerationElectricHalf",
    buildingId: "boiler_electric",
    inputs: [
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_electric_182",
    name: "SteamGenerationSpElectric",
    buildingId: "boiler_electric",
    inputs: [
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "steam_super", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_gas_183",
    name: "SteamGenerationHeavyOil",
    buildingId: "boiler_gas",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "heavy_oil", amount: 6 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 15 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_gas_184",
    name: "SteamGenerationMediumOil",
    buildingId: "boiler_gas",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "medium_oil", amount: 7 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 15 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_gas_185",
    name: "SteamGenerationLightOil",
    buildingId: "boiler_gas",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "light_oil", amount: 9 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_gas_186",
    name: "SteamGenerationNaphtha",
    buildingId: "boiler_gas",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "naphtha", amount: 9 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_gas_187",
    name: "SteamGenerationEthanol",
    buildingId: "boiler_gas",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "ethanol", amount: 9 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "carbon_dioxide", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_gas_188",
    name: "SteamGenerationFuelGas",
    buildingId: "boiler_gas",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "fuel_gas", amount: 12 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "carbon_dioxide", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "boiler_gas_189",
    name: "SteamGenerationHydrogen",
    buildingId: "boiler_gas",
    inputs: [
      { resourceId: "water", amount: 8 },
      { resourceId: "hydrogen", amount: 12 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 8 },
      { resourceId: "steam_depleted", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "burner_solid_190",
    name: "LandfillBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "waste", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "burner_solid_191",
    name: "BiomassBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "biomass", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "burner_solid_192",
    name: "AnimalFeedBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "animal_feed", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "burner_solid_193",
    name: "CanolaBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "canola", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "burner_solid_194",
    name: "MeatTrimmingsBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "meat_trimmings", amount: 4 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "burner_solid_195",
    name: "ChickenCarcassBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "chicken_carcass", amount: 4 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "burner_solid_196",
    name: "SulfurBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "sulfur", amount: 2 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "burner_solid_197",
    name: "SludgeBurning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "sludge", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_198",
    name: "FertilizerProduction",
    buildingId: "chemical_plant",
    inputs: [
      { resourceId: "ammonia", amount: 4 },
      { resourceId: "oxygen", amount: 6 },
    ],
    outputs: [
      { resourceId: "fertilizer_i", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_199",
    name: "FertilizerProductionFromOrganic",
    buildingId: "chemical_plant",
    inputs: [
      { resourceId: "fertilizer_organic", amount: 10 },
      { resourceId: "ammonia", amount: 4 },
      { resourceId: "oxygen", amount: 6 },
    ],
    outputs: [
      { resourceId: "fertilizer_i", amount: 15 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_200",
    name: "AmmoniaSynthesis",
    buildingId: "chemical_plant",
    inputs: [
      { resourceId: "hydrogen", amount: 4 },
      { resourceId: "nitrogen", amount: 8 },
    ],
    outputs: [
      { resourceId: "ammonia", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "chemical_plant_201",
    name: "PaperProduction",
    buildingId: "chemical_plant",
    inputs: [
      { resourceId: "woodchips", amount: 4 },
      { resourceId: "limestone", amount: 1 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "paper", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "chemical_plant_202",
    name: "EthanolCookingOilReforming",
    buildingId: "chemical_plant",
    inputs: [
      { resourceId: "ethanol", amount: 5 },
      { resourceId: "cooking_oil", amount: 10 },
    ],
    outputs: [
      { resourceId: "diesel", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "chemical_plant_203",
    name: "GraphiteProductionT1",
    buildingId: "chemical_plant",
    inputs: [
      { resourceId: "coal", amount: 4 },
      { resourceId: "chlorine", amount: 12 },
    ],
    outputs: [
      { resourceId: "graphite", amount: 12 },
      { resourceId: "sour_water", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "chemical_plant_204",
    name: "DisinfectantProduction",
    buildingId: "chemical_plant",
    inputs: [
      { resourceId: "ethanol", amount: 3 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "disinfectant", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "chemical_plant_ii_205",
    name: "FertilizerProductionT2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "ammonia", amount: 4 },
      { resourceId: "oxygen", amount: 6 },
    ],
    outputs: [
      { resourceId: "fertilizer_i", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "chemical_plant_ii_206",
    name: "FertilizerProductionFromOrganicT2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "fertilizer_organic", amount: 10 },
      { resourceId: "ammonia", amount: 4 },
      { resourceId: "oxygen", amount: 6 },
    ],
    outputs: [
      { resourceId: "fertilizer_i", amount: 15 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "chemical_plant_ii_207",
    name: "AmmoniaSynthesisT2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "hydrogen", amount: 4 },
      { resourceId: "nitrogen", amount: 8 },
    ],
    outputs: [
      { resourceId: "ammonia", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_208",
    name: "PaperProductionT2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "woodchips", amount: 4 },
      { resourceId: "limestone", amount: 1 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "paper", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_209",
    name: "EthanolCookingOilReformingT2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "ethanol", amount: 5 },
      { resourceId: "cooking_oil", amount: 10 },
    ],
    outputs: [
      { resourceId: "diesel", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_210",
    name: "FuelGasSynthesis",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "hydrogen", amount: 14 },
      { resourceId: "carbon_dioxide", amount: 12 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 12 },
      { resourceId: "water", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "chemical_plant_ii_211",
    name: "GraphiteProductionT2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "coal", amount: 4 },
      { resourceId: "chlorine", amount: 12 },
    ],
    outputs: [
      { resourceId: "graphite", amount: 12 },
      { resourceId: "sour_water", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "chemical_plant_ii_212",
    name: "GraphiteProductionCo2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 24 },
    ],
    outputs: [
      { resourceId: "graphite", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "chemical_plant_ii_213",
    name: "CarbonToEthanolProduction",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "hydrogen", amount: 12 },
      { resourceId: "carbon_dioxide", amount: 9 },
    ],
    outputs: [
      { resourceId: "ethanol", amount: 6 },
      { resourceId: "water", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_214",
    name: "DisinfectantProductionT2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "ethanol", amount: 3 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "disinfectant", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_215",
    name: "AnestheticsProduction",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "ammonia", amount: 2 },
      { resourceId: "hydrogen_fluoride", amount: 4 },
      { resourceId: "steel", amount: 1 },
    ],
    outputs: [
      { resourceId: "anesthetics", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_216",
    name: "MorphineProduction",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "poppy", amount: 4 },
      { resourceId: "acid", amount: 2 },
      { resourceId: "glass", amount: 2 },
    ],
    outputs: [
      { resourceId: "morphine", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_217",
    name: "BauxiteDigestion",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "bauxite_powder", amount: 36 },
      { resourceId: "brine", amount: 12 },
    ],
    outputs: [
      { resourceId: "hydrated_alumina", amount: 18 },
      { resourceId: "red_mud", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "chemical_plant_ii_218",
    name: "TitaniumChlorination",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "titanium_slag", amount: 12 },
      { resourceId: "chlorine", amount: 6 },
      { resourceId: "graphite", amount: 1 },
    ],
    outputs: [
      { resourceId: "titanium_chloride", amount: 4 },
      { resourceId: "slag", amount: 4 },
      { resourceId: "carbon_dioxide", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_219",
    name: "TitaniumChlorideReduction",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "titanium_chloride_pure", amount: 8 },
      { resourceId: "salt", amount: 4 },
    ],
    outputs: [
      { resourceId: "titanium_sponge", amount: 8 },
      { resourceId: "chlorine", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "chemical_plant_ii_220",
    name: "ChemicalFuelProduction",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "ammonia", amount: 6 },
      { resourceId: "fuel_gas", amount: 6 },
      { resourceId: "aluminum", amount: 4 },
    ],
    outputs: [
      { resourceId: "chemical_fuel", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "chemical_plant_ii_221",
    name: "MoxRodsAssemblyT1",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "plutonium", amount: 1 },
      { resourceId: "depleted_uranium", amount: 4 },
    ],
    outputs: [
      { resourceId: "mox_rod", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "chemical_plant_ii_222",
    name: "BlanketFuelFromDepleted",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "blanket_fuel_enriched", amount: 2 },
      { resourceId: "depleted_uranium", amount: 10 },
      { resourceId: "salt", amount: 4 },
    ],
    outputs: [
      { resourceId: "blanket_fuel", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "chemical_plant_ii_223",
    name: "BlanketFuelFromYellowcake",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "yellowcake", amount: 12 },
      { resourceId: "salt", amount: 4 },
    ],
    outputs: [
      { resourceId: "blanket_fuel", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "chemical_plant_ii_224",
    name: "CoreFuelFromEnriched",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "enriched_uranium_20", amount: 2 },
      { resourceId: "salt", amount: 4 },
    ],
    outputs: [
      { resourceId: "core_fuel", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "chemical_plant_ii_225",
    name: "CoreFuelFromPu",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "plutonium", amount: 1 },
      { resourceId: "salt", amount: 4 },
    ],
    outputs: [
      { resourceId: "core_fuel", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "chemical_plant_ii_226",
    name: "DiamondPasteFromCookingOil",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "diamond", amount: 2 },
      { resourceId: "cooking_oil", amount: 2 },
    ],
    outputs: [
      { resourceId: "diamond_paste", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "chemical_plant_ii_227",
    name: "DiamondPasteFromHeavyOil",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "diamond", amount: 2 },
      { resourceId: "heavy_oil", amount: 1 },
    ],
    outputs: [
      { resourceId: "diamond_paste", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "chicken_farm_228",
    name: "ChickenFarm",
    buildingId: "chicken_farm",
    inputs: [
      { resourceId: "animal_feed", amount: 15 },
      { resourceId: "water", amount: 18 },
    ],
    outputs: [
      { resourceId: "eggs", amount: 7 },
      { resourceId: "chicken_carcass", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "coal_maker_229",
    name: "CharcoalBurning",
    buildingId: "coal_maker",
    inputs: [
      { resourceId: "wood", amount: 12 },
    ],
    outputs: [
      { resourceId: "coal", amount: 5 },
      { resourceId: "exhaust", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "compactor_230",
    name: "PressingOfRecyclables",
    buildingId: "compactor",
    inputs: [
      { resourceId: "recyclables", amount: 6 },
    ],
    outputs: [
      { resourceId: "recyclables_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "compactor_231",
    name: "PressingOfCopperScrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "copper_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "copper_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "compactor_232",
    name: "PressingOfIronScrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "iron_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "iron_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "compactor_233",
    name: "PressingOfAluminumScrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "aluminum_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "aluminum_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "compactor_234",
    name: "PressingOfGoldScrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "gold_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "gold_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "compactor_235",
    name: "PressingOfWaste",
    buildingId: "compactor",
    inputs: [
      { resourceId: "waste", amount: 6 },
    ],
    outputs: [
      { resourceId: "waste_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "concrete_mixer_236",
    name: "ConcreteMixingSlag",
    buildingId: "concrete_mixer",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "sand", amount: 2 },
      { resourceId: "slag_crushed", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "concrete_mixer_237",
    name: "ConcreteMixingGravel",
    buildingId: "concrete_mixer",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "sand", amount: 2 },
      { resourceId: "gravel", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "concrete_mixer_238",
    name: "ConcreteMixingGravelM",
    buildingId: "concrete_mixer",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "manufactured_sand", amount: 2 },
      { resourceId: "gravel", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "concrete_mixer_239",
    name: "ConcreteMixingSlagM",
    buildingId: "concrete_mixer",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "manufactured_sand", amount: 2 },
      { resourceId: "slag_crushed", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "concrete_mixer_ii_240",
    name: "ConcreteMixingSlagT2",
    buildingId: "concrete_mixer_ii",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "sand", amount: 2 },
      { resourceId: "slag_crushed", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "concrete_mixer_ii_241",
    name: "ConcreteMixingGravelT2",
    buildingId: "concrete_mixer_ii",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "sand", amount: 2 },
      { resourceId: "gravel", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "concrete_mixer_ii_242",
    name: "ConcreteMixingSlagMT2",
    buildingId: "concrete_mixer_ii",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "manufactured_sand", amount: 2 },
      { resourceId: "slag_crushed", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "concrete_mixer_ii_243",
    name: "ConcreteMixingGravelMT2",
    buildingId: "concrete_mixer_ii",
    inputs: [
      { resourceId: "cement", amount: 1 },
      { resourceId: "manufactured_sand", amount: 2 },
      { resourceId: "gravel", amount: 6 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "concrete_mixer_iii_244",
    name: "ConcreteMixingSlagT3",
    buildingId: "concrete_mixer_iii",
    inputs: [
      { resourceId: "cement", amount: 2 },
      { resourceId: "sand", amount: 4 },
      { resourceId: "slag_crushed", amount: 12 },
      { resourceId: "water", amount: 8 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "concrete_mixer_iii_245",
    name: "ConcreteMixingGravelT3",
    buildingId: "concrete_mixer_iii",
    inputs: [
      { resourceId: "cement", amount: 2 },
      { resourceId: "sand", amount: 4 },
      { resourceId: "gravel", amount: 12 },
      { resourceId: "water", amount: 8 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "concrete_mixer_iii_246",
    name: "ConcreteMixingSlagMT3",
    buildingId: "concrete_mixer_iii",
    inputs: [
      { resourceId: "cement", amount: 2 },
      { resourceId: "manufactured_sand", amount: 4 },
      { resourceId: "slag_crushed", amount: 12 },
      { resourceId: "water", amount: 8 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "concrete_mixer_iii_247",
    name: "ConcreteMixingGravelMT3",
    buildingId: "concrete_mixer_iii",
    inputs: [
      { resourceId: "cement", amount: 2 },
      { resourceId: "manufactured_sand", amount: 4 },
      { resourceId: "gravel", amount: 12 },
      { resourceId: "water", amount: 8 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "cooled_caster_248",
    name: "SteelCastingCooled",
    buildingId: "cooled_caster",
    inputs: [
      { resourceId: "molten_steel", amount: 8 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "steel", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "cooled_caster_ii_249",
    name: "SteelCastingCooledT2",
    buildingId: "cooled_caster_ii",
    inputs: [
      { resourceId: "molten_steel", amount: 8 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "steel", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "cooled_caster_ii_250",
    name: "TitaniumAlloyCastingT2",
    buildingId: "cooled_caster_ii",
    inputs: [
      { resourceId: "molten_titanium_alloy", amount: 8 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "titanium_alloy", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "cooling_tower_251",
    name: "SteamHpCondensation",
    buildingId: "cooling_tower",
    inputs: [
      { resourceId: "steam_high", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "cooling_tower_252",
    name: "SteamLpCondensation",
    buildingId: "cooling_tower",
    inputs: [
      { resourceId: "steam_low", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "cooling_tower_253",
    name: "SteamDepletedCondensation",
    buildingId: "cooling_tower",
    inputs: [
      { resourceId: "steam_depleted", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "cooling_tower_large_254",
    name: "SteamSpCondensationT2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_super", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "cooling_tower_large_255",
    name: "SteamHpCondensationT2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_high", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "cooling_tower_large_256",
    name: "SteamLpCondensationT2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_low", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "cooling_tower_large_257",
    name: "SteamDepletedCondensationT2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_depleted", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "copper_electrolysis_258",
    name: "CopperElectrolysisProcess",
    buildingId: "copper_electrolysis",
    inputs: [
      { resourceId: "impure_copper", amount: 16 },
      { resourceId: "acid", amount: 4 },
    ],
    outputs: [
      { resourceId: "copper", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "copper_electrolysis_259",
    name: "CopperElectrolysisWithWater",
    buildingId: "copper_electrolysis",
    inputs: [
      { resourceId: "impure_copper", amount: 16 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "copper", amount: 13 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "cracking_unit_260",
    name: "HeavyOilCracking",
    buildingId: "cracking_unit",
    inputs: [
      { resourceId: "heavy_oil", amount: 8 },
      { resourceId: "hydrogen", amount: 3 },
    ],
    outputs: [
      { resourceId: "diesel", amount: 12 },
      { resourceId: "fuel_gas", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "cracking_unit_261",
    name: "HeavyOilCrackingToNaphtha",
    buildingId: "cracking_unit",
    inputs: [
      { resourceId: "heavy_oil", amount: 8 },
      { resourceId: "hydrogen", amount: 3 },
    ],
    outputs: [
      { resourceId: "naphtha", amount: 12 },
      { resourceId: "fuel_gas", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "cracking_unit_262",
    name: "NaphthaReforming",
    buildingId: "cracking_unit",
    inputs: [
      { resourceId: "naphtha", amount: 8 },
      { resourceId: "hydrogen", amount: 3 },
    ],
    outputs: [
      { resourceId: "diesel", amount: 8 },
      { resourceId: "fuel_gas", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "cracking_unit_263",
    name: "DieselReforming",
    buildingId: "cracking_unit",
    inputs: [
      { resourceId: "diesel", amount: 8 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "naphtha", amount: 6 },
      { resourceId: "fuel_gas", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "cracking_unit_264",
    name: "NaphthaReformingToGas",
    buildingId: "cracking_unit",
    inputs: [
      { resourceId: "naphtha", amount: 12 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "fuel_gas", amount: 12 },
      { resourceId: "hydrogen", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "cracking_unit_265",
    name: "FuelGasReforming",
    buildingId: "cracking_unit",
    inputs: [
      { resourceId: "fuel_gas", amount: 12 },
      { resourceId: "oxygen", amount: 6 },
    ],
    outputs: [
      { resourceId: "diesel", amount: 8 },
      { resourceId: "water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_266",
    name: "IronOreCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "iron_ore", amount: 16 },
    ],
    outputs: [
      { resourceId: "iron_ore_crushed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "crusher_267",
    name: "CopperOreCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "copper_ore", amount: 16 },
    ],
    outputs: [
      { resourceId: "copper_ore_crushed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "crusher_268",
    name: "SlagCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "slag", amount: 8 },
    ],
    outputs: [
      { resourceId: "slag_crushed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_269",
    name: "RockCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "rock", amount: 8 },
    ],
    outputs: [
      { resourceId: "gravel", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_270",
    name: "GravelCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "gravel", amount: 8 },
    ],
    outputs: [
      { resourceId: "manufactured_sand", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "crusher_271",
    name: "QuartzCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "quartz", amount: 16 },
    ],
    outputs: [
      { resourceId: "quartz_crushed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_272",
    name: "QuartzMilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "quartz_crushed", amount: 16 },
    ],
    outputs: [
      { resourceId: "sand", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "crusher_273",
    name: "UraniumCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "uranium_ore", amount: 12 },
    ],
    outputs: [
      { resourceId: "uranium_ore_powder", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "crusher_274",
    name: "GoldOreCrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "gold_ore", amount: 8 },
    ],
    outputs: [
      { resourceId: "gold_ore_crushed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_275",
    name: "GoldMilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "gold_ore_crushed", amount: 8 },
    ],
    outputs: [
      { resourceId: "gold_ore_powder", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "crusher_276",
    name: "BauxiteMilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "bauxite", amount: 8 },
    ],
    outputs: [
      { resourceId: "bauxite_powder", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "crusher_277",
    name: "IlmeniteMilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "titanium_ore", amount: 8 },
    ],
    outputs: [
      { resourceId: "titanium_ore_crushed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "crusher_large_278",
    name: "IronOreCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "iron_ore", amount: 96 },
    ],
    outputs: [
      { resourceId: "iron_ore_crushed", amount: 96 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "crusher_large_279",
    name: "CopperOreCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "copper_ore", amount: 96 },
    ],
    outputs: [
      { resourceId: "copper_ore_crushed", amount: 96 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "crusher_large_280",
    name: "SlagCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "slag", amount: 48 },
    ],
    outputs: [
      { resourceId: "slag_crushed", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_large_281",
    name: "RockCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "rock", amount: 48 },
    ],
    outputs: [
      { resourceId: "gravel", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_large_282",
    name: "GravelCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "gravel", amount: 48 },
    ],
    outputs: [
      { resourceId: "manufactured_sand", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "crusher_large_283",
    name: "QuartzCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "quartz", amount: 96 },
    ],
    outputs: [
      { resourceId: "quartz_crushed", amount: 96 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_large_284",
    name: "QuartzMillingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "quartz_crushed", amount: 96 },
    ],
    outputs: [
      { resourceId: "sand", amount: 96 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "crusher_large_285",
    name: "UraniumCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "uranium_ore", amount: 72 },
    ],
    outputs: [
      { resourceId: "uranium_ore_powder", amount: 72 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "crusher_large_286",
    name: "GoldOreCrushingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "gold_ore", amount: 48 },
    ],
    outputs: [
      { resourceId: "gold_ore_crushed", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "crusher_large_287",
    name: "GoldOreMillingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "gold_ore_crushed", amount: 48 },
    ],
    outputs: [
      { resourceId: "gold_ore_powder", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "crusher_large_288",
    name: "BauxiteMillingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "bauxite", amount: 48 },
    ],
    outputs: [
      { resourceId: "bauxite_powder", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "crusher_large_289",
    name: "IlmeniteMillingT2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "titanium_ore", amount: 48 },
    ],
    outputs: [
      { resourceId: "titanium_ore_crushed", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "crystallizer_290",
    name: "SiliconCrystallization",
    buildingId: "crystallizer",
    inputs: [
      { resourceId: "silicon_poly", amount: 24 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "silicon_wafer", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "crystallizer_291",
    name: "AluminaCrystallization",
    buildingId: "crystallizer",
    inputs: [
      { resourceId: "alumina", amount: 4 },
    ],
    outputs: [
      { resourceId: "sapphire_wafer", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "data_center_292",
    name: "BasicServerRack",
    buildingId: "data_center",
    inputs: [
      { resourceId: "chilled_water", amount: 24 },
      { resourceId: "maintenance_iii", amount: 42 },
      { resourceId: "electricity", amount: 4,080 },
    ],
    outputs: [
      { resourceId: "water", amount: 24 },
      { resourceId: "computing", amount: 192 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "diamond_reactor_293",
    name: "DiamondSynthesis",
    buildingId: "diamond_reactor",
    inputs: [
      { resourceId: "graphite", amount: 2 },
      { resourceId: "salt", amount: 2 },
    ],
    outputs: [
      { resourceId: "diamond", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "diesel_generator_294",
    name: "DieselGenerator",
    buildingId: "diesel_generator",
    inputs: [
      { resourceId: "diesel", amount: 1 },
    ],
    outputs: [
      { resourceId: "electricity", amount: 800 },
      { resourceId: "air_pollution", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "diesel_generator_ii_295",
    name: "DieselGeneratorT2",
    buildingId: "diesel_generator_ii",
    inputs: [
      { resourceId: "diesel", amount: 6 },
    ],
    outputs: [
      { resourceId: "electricity", amount: 5,000 },
      { resourceId: "exhaust", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "distillation_stage_i_296",
    name: "CrudeOilRefiningT1",
    buildingId: "distillation_stage_i",
    inputs: [
      { resourceId: "crude_oil", amount: 20 },
      { resourceId: "steam_high", amount: 2 },
    ],
    outputs: [
      { resourceId: "medium_oil", amount: 16 },
      { resourceId: "heavy_oil", amount: 4 },
      { resourceId: "sour_water", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "distillation_stage_ii_297",
    name: "CrudeOilRefiningT2",
    buildingId: "distillation_stage_ii",
    inputs: [
      { resourceId: "medium_oil", amount: 16 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "diesel", amount: 12 },
      { resourceId: "light_oil", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "distillation_stage_iii_298",
    name: "HeavyDistillateRefining",
    buildingId: "distillation_stage_iii",
    inputs: [
      { resourceId: "light_oil", amount: 10 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "naphtha", amount: 8 },
      { resourceId: "fuel_gas", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "distillation_stage_iii_299",
    name: "TitaniumPurification",
    buildingId: "distillation_stage_iii",
    inputs: [
      { resourceId: "titanium_chloride", amount: 4 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "titanium_chloride_pure", amount: 4 },
      { resourceId: "steam_depleted", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "electrolyzer_300",
    name: "BrineElectrolysis",
    buildingId: "electrolyzer",
    inputs: [
      { resourceId: "brine", amount: 3 },
    ],
    outputs: [
      { resourceId: "chlorine", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "electrolyzer_301",
    name: "WaterElectrolysis",
    buildingId: "electrolyzer",
    inputs: [
      { resourceId: "water", amount: 1 },
    ],
    outputs: [
      { resourceId: "oxygen", amount: 4 },
      { resourceId: "hydrogen", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "electrolyzer_302",
    name: "AmmoniaElectrolysis",
    buildingId: "electrolyzer",
    inputs: [
      { resourceId: "ammonia", amount: 2 },
    ],
    outputs: [
      { resourceId: "nitrogen", amount: 4 },
      { resourceId: "hydrogen", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "electrolyzer_ii_303",
    name: "BrineElectrolysisT2",
    buildingId: "electrolyzer_ii",
    inputs: [
      { resourceId: "brine", amount: 12 },
    ],
    outputs: [
      { resourceId: "chlorine", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "electrolyzer_ii_304",
    name: "WaterElectrolysisT2",
    buildingId: "electrolyzer_ii",
    inputs: [
      { resourceId: "water", amount: 1 },
    ],
    outputs: [
      { resourceId: "oxygen", amount: 4 },
      { resourceId: "hydrogen", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "8" },
    ]
  },
  {
    id: "electrolyzer_ii_305",
    name: "AmmoniaElectrolysisT2",
    buildingId: "electrolyzer_ii",
    inputs: [
      { resourceId: "ammonia", amount: 8 },
    ],
    outputs: [
      { resourceId: "nitrogen", amount: 16 },
      { resourceId: "hydrogen", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "enrichment_plant_306",
    name: "UraniumEnrichment",
    buildingId: "enrichment_plant",
    inputs: [
      { resourceId: "yellowcake", amount: 6 },
      { resourceId: "hydrogen_fluoride", amount: 2 },
    ],
    outputs: [
      { resourceId: "enriched_uranium_4", amount: 1 },
      { resourceId: "depleted_uranium", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "120" },
    ]
  },
  {
    id: "enrichment_plant_307",
    name: "ReprocessedUraniumEnrichment",
    buildingId: "enrichment_plant",
    inputs: [
      { resourceId: "reprocessed_uranium_1", amount: 4 },
      { resourceId: "hydrogen_fluoride", amount: 2 },
    ],
    outputs: [
      { resourceId: "enriched_uranium_4", amount: 1 },
      { resourceId: "depleted_uranium", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "120" },
    ]
  },
  {
    id: "enrichment_plant_308",
    name: "UraniumEnrichment20",
    buildingId: "enrichment_plant",
    inputs: [
      { resourceId: "enriched_uranium_4", amount: 5 },
      { resourceId: "hydrogen_fluoride", amount: 2 },
    ],
    outputs: [
      { resourceId: "enriched_uranium_20", amount: 1 },
      { resourceId: "depleted_uranium", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "120" },
    ]
  },
  {
    id: "enrichment_plant_309",
    name: "BlanketFuelReprocessing",
    buildingId: "enrichment_plant",
    inputs: [
      { resourceId: "blanket_fuel_enriched", amount: 8 },
    ],
    outputs: [
      { resourceId: "blanket_fuel", amount: 6 },
      { resourceId: "core_fuel", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "enrichment_plant_310",
    name: "BlanketFuelReprocessingToPu",
    buildingId: "enrichment_plant",
    inputs: [
      { resourceId: "blanket_fuel_enriched", amount: 16 },
    ],
    outputs: [
      { resourceId: "blanket_fuel", amount: 12 },
      { resourceId: "plutonium", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "enrichment_plant_311",
    name: "BlanketFuelReprocessingToU30",
    buildingId: "enrichment_plant",
    inputs: [
      { resourceId: "blanket_fuel_enriched", amount: 16 },
    ],
    outputs: [
      { resourceId: "blanket_fuel", amount: 12 },
      { resourceId: "enriched_uranium_20", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "evaporation_pond_312",
    name: "BrineMaking",
    buildingId: "evaporation_pond",
    inputs: [
      { resourceId: "seawater", amount: 32 },
    ],
    outputs: [
      { resourceId: "brine", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "evaporation_pond_313",
    name: "SaltMaking",
    buildingId: "evaporation_pond",
    inputs: [
      { resourceId: "seawater", amount: 48 },
    ],
    outputs: [
      { resourceId: "salt", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "evaporation_pond_314",
    name: "SaltMakingFromBrine",
    buildingId: "evaporation_pond",
    inputs: [
      { resourceId: "brine", amount: 32 },
    ],
    outputs: [
      { resourceId: "salt", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "evaporation_pond_heated_315",
    name: "BrineMakingHeated",
    buildingId: "evaporation_pond_heated",
    inputs: [
      { resourceId: "seawater", amount: 32 },
    ],
    outputs: [
      { resourceId: "brine", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "evaporation_pond_heated_316",
    name: "SaltMakingHeated",
    buildingId: "evaporation_pond_heated",
    inputs: [
      { resourceId: "seawater", amount: 48 },
    ],
    outputs: [
      { resourceId: "salt", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "evaporation_pond_heated_317",
    name: "SaltMakingFromBrineHeated",
    buildingId: "evaporation_pond_heated",
    inputs: [
      { resourceId: "brine", amount: 32 },
    ],
    outputs: [
      { resourceId: "salt", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "exhaust_scrubber_318",
    name: "ExhaustFiltering",
    buildingId: "exhaust_scrubber",
    inputs: [
      { resourceId: "exhaust", amount: 40 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "sulfur", amount: 1 },
      { resourceId: "carbon_dioxide", amount: 16 },
      { resourceId: "steam_low", amount: 4 },
      { resourceId: "air_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "exhaust_scrubber_319",
    name: "ExhaustFilteringLime",
    buildingId: "exhaust_scrubber",
    inputs: [
      { resourceId: "exhaust", amount: 160 },
      { resourceId: "water", amount: 16 },
      { resourceId: "limestone", amount: 3 },
    ],
    outputs: [
      { resourceId: "sulfur", amount: 4 },
      { resourceId: "carbon_dioxide", amount: 64 },
      { resourceId: "steam_low", amount: 16 },
      { resourceId: "slag", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "farm_320",
    name: "Crop_Potato",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "farm_321",
    name: "Crop_Corn",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "farm_322",
    name: "Crop_Wheat",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "farm_323",
    name: "Crop_TreeSapling",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "farm_324",
    name: "Crop_Soybeans",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "soybean", amount: 22 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "farm_325",
    name: "Crop_Vegetables",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "vegetables", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "farm_326",
    name: "Crop_Canola",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "fast_breeder_reactor_327",
    name: "FastBreederReactor",
    buildingId: "fast_breeder_reactor",
    inputs: [
      { resourceId: "water", amount: 384 },
      { resourceId: "core_fuel", amount: 16 },
    ],
    outputs: [
      { resourceId: "steam_super", amount: 384 },
      { resourceId: "core_fuel_spent", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "fast_breeder_reactor_328",
    name: "FastBreederReactor1",
    buildingId: "fast_breeder_reactor",
    inputs: [
      { resourceId: "water", amount: 384 },
      { resourceId: "core_fuel", amount: 16 },
      { resourceId: "blanket_fuel", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_super", amount: 384 },
      { resourceId: "core_fuel_spent", amount: 16 },
      { resourceId: "blanket_fuel_enriched", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "fast_breeder_reactor_329",
    name: "FastBreederReactor2",
    buildingId: "fast_breeder_reactor",
    inputs: [
      { resourceId: "water", amount: 384 },
      { resourceId: "core_fuel", amount: 16 },
    ],
    outputs: [
      { resourceId: "steam_super", amount: 384 },
      { resourceId: "core_fuel_spent", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "fast_breeder_reactor_330",
    name: "FastBreederReactor3",
    buildingId: "fast_breeder_reactor",
    inputs: [
      { resourceId: "water", amount: 384 },
      { resourceId: "core_fuel", amount: 16 },
      { resourceId: "blanket_fuel", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_super", amount: 384 },
      { resourceId: "core_fuel_spent", amount: 16 },
      { resourceId: "blanket_fuel_enriched", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "fermentation_tank_331",
    name: "SugarToEthanolFermentation",
    buildingId: "fermentation_tank",
    inputs: [
      { resourceId: "sugar", amount: 8 },
      { resourceId: "oxygen", amount: 8 },
    ],
    outputs: [
      { resourceId: "ethanol", amount: 6 },
      { resourceId: "carbon_dioxide", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "fermentation_tank_332",
    name: "CornToEthanolFermentation",
    buildingId: "fermentation_tank",
    inputs: [
      { resourceId: "corn_mash", amount: 6 },
      { resourceId: "oxygen", amount: 8 },
    ],
    outputs: [
      { resourceId: "ethanol", amount: 4 },
      { resourceId: "carbon_dioxide", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "fermentation_tank_333",
    name: "AntibioticsFermentation",
    buildingId: "fermentation_tank",
    inputs: [
      { resourceId: "sugar", amount: 4 },
      { resourceId: "ammonia", amount: 1 },
      { resourceId: "oxygen", amount: 8 },
    ],
    outputs: [
      { resourceId: "antibiotics", amount: 8 },
      { resourceId: "carbon_dioxide", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "flare_334",
    name: "FlareDiesel",
    buildingId: "flare",
    inputs: [
      { resourceId: "diesel", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "flare_335",
    name: "FlareHeavyOil",
    buildingId: "flare",
    inputs: [
      { resourceId: "heavy_oil", amount: 8 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "flare_336",
    name: "FlareLightOil",
    buildingId: "flare",
    inputs: [
      { resourceId: "light_oil", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "flare_337",
    name: "FlareNaphtha",
    buildingId: "flare",
    inputs: [
      { resourceId: "naphtha", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "flare_338",
    name: "FlareEthanol",
    buildingId: "flare",
    inputs: [
      { resourceId: "ethanol", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "flare_339",
    name: "FlareFuelGas",
    buildingId: "flare",
    inputs: [
      { resourceId: "fuel_gas", amount: 16 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "flare_340",
    name: "FlareAmmonia",
    buildingId: "flare",
    inputs: [
      { resourceId: "ammonia", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "flare_341",
    name: "FlareHydrogen",
    buildingId: "flare",
    inputs: [
      { resourceId: "hydrogen", amount: 16 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "food_processor_342",
    name: "TofuProduction",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "soybean", amount: 6 },
      { resourceId: "water", amount: 4 },
      { resourceId: "sulfur", amount: 1 },
      { resourceId: "limestone", amount: 1 },
    ],
    outputs: [
      { resourceId: "tofu", amount: 8 },
      { resourceId: "animal_feed", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "food_processor_343",
    name: "MeatProcessing",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "chicken_carcass", amount: 10 },
      { resourceId: "water", amount: 3 },
      { resourceId: "salt", amount: 1 },
    ],
    outputs: [
      { resourceId: "meat", amount: 5 },
      { resourceId: "meat_trimmings", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "food_processor_344",
    name: "MeatProcessingTrimmings",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "chicken_carcass", amount: 10 },
    ],
    outputs: [
      { resourceId: "meat_trimmings", amount: 9 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "food_processor_345",
    name: "SausageProduction",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "meat_trimmings", amount: 8 },
      { resourceId: "flour", amount: 2 },
      { resourceId: "salt", amount: 3 },
    ],
    outputs: [
      { resourceId: "sausage", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "food_processor_346",
    name: "SnackProductionPotato",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "potato", amount: 8 },
      { resourceId: "salt", amount: 2 },
      { resourceId: "cooking_oil", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "snack", amount: 6 },
      { resourceId: "biomass", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "food_processor_347",
    name: "SnackProductionCorn",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "corn", amount: 8 },
      { resourceId: "salt", amount: 2 },
      { resourceId: "cooking_oil", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "snack", amount: 8 },
      { resourceId: "biomass", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "food_processor_348",
    name: "SugarRefiningCane",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "sugar_cane", amount: 10 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "sugar", amount: 8 },
      { resourceId: "biomass", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "gas_injection_pump_349",
    name: "CarbonDioxideInjection",
    buildingId: "gas_injection_pump",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 12 },
      { resourceId: "seawater", amount: 4 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "glass_maker_350",
    name: "GlassCastingT1",
    buildingId: "glass_maker",
    inputs: [
      { resourceId: "molten_glass", amount: 8 },
    ],
    outputs: [
      { resourceId: "glass", amount: 4 },
      { resourceId: "broken_glass", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "glass_maker_ii_351",
    name: "GlassCastingT2",
    buildingId: "glass_maker_ii",
    inputs: [
      { resourceId: "molten_glass", amount: 8 },
    ],
    outputs: [
      { resourceId: "glass", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "gold_furnace_352",
    name: "GoldSmelting",
    buildingId: "gold_furnace",
    inputs: [
      { resourceId: "gold_ore_concentrate", amount: 6 },
      { resourceId: "sand", amount: 1 },
    ],
    outputs: [
      { resourceId: "gold", amount: 3 },
      { resourceId: "exhaust", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "gold_furnace_353",
    name: "GoldScrapSmelting",
    buildingId: "gold_furnace",
    inputs: [
      { resourceId: "gold_scrap", amount: 3 },
    ],
    outputs: [
      { resourceId: "gold", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "greenhouse_354",
    name: "Crop_Potato_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 122 },
      { resourceId: "fertilizer_i", amount: 18 },
    ],
    outputs: [
      { resourceId: "potato", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_355",
    name: "Crop_Potato_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 122 },
      { resourceId: "fertilizer_ii", amount: 14 },
    ],
    outputs: [
      { resourceId: "potato", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_356",
    name: "Crop_Potato_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 122 },
      { resourceId: "fertilizer_organic", amount: 35 },
    ],
    outputs: [
      { resourceId: "potato", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_357",
    name: "Crop_Corn_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_i", amount: 27 },
    ],
    outputs: [
      { resourceId: "corn", amount: 83 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_358",
    name: "Crop_Corn_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_ii", amount: 22 },
    ],
    outputs: [
      { resourceId: "corn", amount: 83 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_359",
    name: "Crop_Corn_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_organic", amount: 54 },
    ],
    outputs: [
      { resourceId: "corn", amount: 83 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_360",
    name: "Crop_Wheat_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 215 },
      { resourceId: "fertilizer_i", amount: 35 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "greenhouse_361",
    name: "Crop_Wheat_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 215 },
      { resourceId: "fertilizer_ii", amount: 28 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "greenhouse_362",
    name: "Crop_Wheat_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 215 },
      { resourceId: "fertilizer_organic", amount: 71 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "greenhouse_363",
    name: "Crop_TreeSapling_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 365 },
      { resourceId: "fertilizer_i", amount: 40 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "greenhouse_364",
    name: "Crop_TreeSapling_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 365 },
      { resourceId: "fertilizer_ii", amount: 32 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "greenhouse_365",
    name: "Crop_TreeSapling_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 365 },
      { resourceId: "fertilizer_organic", amount: 81 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "greenhouse_366",
    name: "Crop_Soybeans_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 162 },
      { resourceId: "fertilizer_i", amount: 34 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 28 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_367",
    name: "Crop_Soybeans_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 162 },
      { resourceId: "fertilizer_ii", amount: 27 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 28 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_368",
    name: "Crop_Soybeans_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 162 },
      { resourceId: "fertilizer_organic", amount: 67 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 28 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_369",
    name: "Crop_SugarCane_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 486 },
      { resourceId: "fertilizer_i", amount: 76 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 248 },
    ],
    metadata: [
      { key: "time", value: "540" },
    ]
  },
  {
    id: "greenhouse_370",
    name: "Crop_SugarCane_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 486 },
      { resourceId: "fertilizer_ii", amount: 61 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 248 },
    ],
    metadata: [
      { key: "time", value: "540" },
    ]
  },
  {
    id: "greenhouse_371",
    name: "Crop_SugarCane_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 486 },
      { resourceId: "fertilizer_organic", amount: 152 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 248 },
    ],
    metadata: [
      { key: "time", value: "540" },
    ]
  },
  {
    id: "greenhouse_372",
    name: "Crop_Vegetables_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 144 },
      { resourceId: "fertilizer_i", amount: 24 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_373",
    name: "Crop_Vegetables_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 144 },
      { resourceId: "fertilizer_ii", amount: 19 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_374",
    name: "Crop_Vegetables_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 144 },
      { resourceId: "fertilizer_organic", amount: 47 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_375",
    name: "Crop_Fruits_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 359 },
      { resourceId: "fertilizer_i", amount: 40 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 100 },
    ],
    metadata: [
      { key: "time", value: "480" },
    ]
  },
  {
    id: "greenhouse_376",
    name: "Crop_Fruits_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 359 },
      { resourceId: "fertilizer_ii", amount: 32 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 100 },
    ],
    metadata: [
      { key: "time", value: "480" },
    ]
  },
  {
    id: "greenhouse_377",
    name: "Crop_Fruits_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 359 },
      { resourceId: "fertilizer_organic", amount: 81 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 100 },
    ],
    metadata: [
      { key: "time", value: "480" },
    ]
  },
  {
    id: "greenhouse_378",
    name: "Crop_Canola_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 94 },
      { resourceId: "fertilizer_i", amount: 15 },
    ],
    outputs: [
      { resourceId: "canola", amount: 45 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_379",
    name: "Crop_Canola_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 94 },
      { resourceId: "fertilizer_ii", amount: 12 },
    ],
    outputs: [
      { resourceId: "canola", amount: 45 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_380",
    name: "Crop_Canola_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 94 },
      { resourceId: "fertilizer_organic", amount: 30 },
    ],
    outputs: [
      { resourceId: "canola", amount: 45 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_381",
    name: "Crop_Poppy_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 122 },
      { resourceId: "fertilizer_i", amount: 20 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 31 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_382",
    name: "Crop_Poppy_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 122 },
      { resourceId: "fertilizer_ii", amount: 16 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 31 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_383",
    name: "Crop_Poppy_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 122 },
      { resourceId: "fertilizer_organic", amount: 40 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 31 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_384",
    name: "Crop_Flowers_Product_Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 203 },
      { resourceId: "fertilizer_i", amount: 34 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 30 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_385",
    name: "Crop_Flowers_Product_Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 203 },
      { resourceId: "fertilizer_ii", amount: 27 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 30 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_386",
    name: "Crop_Flowers_Product_FertilizerOrganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 203 },
      { resourceId: "fertilizer_organic", amount: 67 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 30 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_387",
    name: "Crop_Corn_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 200 },
      { resourceId: "fertilizer_organic", amount: 60 },
    ],
    outputs: [
      { resourceId: "corn", amount: 99 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_388",
    name: "Crop_Wheat_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 238 },
      { resourceId: "fertilizer_i", amount: 39 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "greenhouse_ii_389",
    name: "Crop_Wheat_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 238 },
      { resourceId: "fertilizer_ii", amount: 32 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "greenhouse_ii_390",
    name: "Crop_Wheat_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 238 },
      { resourceId: "fertilizer_organic", amount: 79 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "greenhouse_ii_391",
    name: "Crop_TreeSapling_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 405 },
      { resourceId: "fertilizer_i", amount: 45 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "greenhouse_ii_392",
    name: "Crop_TreeSapling_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 405 },
      { resourceId: "fertilizer_ii", amount: 36 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "greenhouse_ii_393",
    name: "Crop_TreeSapling_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 405 },
      { resourceId: "fertilizer_organic", amount: 90 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "greenhouse_ii_394",
    name: "Crop_Soybeans_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_i", amount: 37 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 33 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_395",
    name: "Crop_Soybeans_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_ii", amount: 30 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 33 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_396",
    name: "Crop_Soybeans_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_organic", amount: 75 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 33 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_397",
    name: "Crop_SugarCane_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 540 },
      { resourceId: "fertilizer_i", amount: 84 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 297 },
    ],
    metadata: [
      { key: "time", value: "540" },
    ]
  },
  {
    id: "greenhouse_ii_398",
    name: "Crop_SugarCane_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 540 },
      { resourceId: "fertilizer_ii", amount: 67 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 297 },
    ],
    metadata: [
      { key: "time", value: "540" },
    ]
  },
  {
    id: "greenhouse_ii_399",
    name: "Crop_SugarCane_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 540 },
      { resourceId: "fertilizer_organic", amount: 169 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 297 },
    ],
    metadata: [
      { key: "time", value: "540" },
    ]
  },
  {
    id: "greenhouse_ii_400",
    name: "Crop_Vegetables_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 161 },
      { resourceId: "fertilizer_i", amount: 26 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_401",
    name: "Crop_Vegetables_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 161 },
      { resourceId: "fertilizer_ii", amount: 21 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_402",
    name: "Crop_Vegetables_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 161 },
      { resourceId: "fertilizer_organic", amount: 53 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_403",
    name: "Crop_Fruits_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 399 },
      { resourceId: "fertilizer_i", amount: 45 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 120 },
    ],
    metadata: [
      { key: "time", value: "480" },
    ]
  },
  {
    id: "greenhouse_ii_404",
    name: "Crop_Fruits_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 399 },
      { resourceId: "fertilizer_ii", amount: 36 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 120 },
    ],
    metadata: [
      { key: "time", value: "480" },
    ]
  },
  {
    id: "greenhouse_ii_405",
    name: "Crop_Fruits_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 399 },
      { resourceId: "fertilizer_organic", amount: 90 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 120 },
    ],
    metadata: [
      { key: "time", value: "480" },
    ]
  },
  {
    id: "greenhouse_ii_406",
    name: "Crop_Canola_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 105 },
      { resourceId: "fertilizer_i", amount: 17 },
    ],
    outputs: [
      { resourceId: "canola", amount: 54 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_ii_407",
    name: "Crop_Canola_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 105 },
      { resourceId: "fertilizer_ii", amount: 13 },
    ],
    outputs: [
      { resourceId: "canola", amount: 54 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_ii_408",
    name: "Crop_Canola_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 105 },
      { resourceId: "fertilizer_organic", amount: 34 },
    ],
    outputs: [
      { resourceId: "canola", amount: 54 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_ii_409",
    name: "Crop_Poppy_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_i", amount: 22 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 38 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_410",
    name: "Crop_Poppy_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_ii", amount: 18 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 38 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_411",
    name: "Crop_Poppy_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_organic", amount: 45 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 38 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_412",
    name: "Crop_Flowers_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 225 },
      { resourceId: "fertilizer_i", amount: 37 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_413",
    name: "Crop_Flowers_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 225 },
      { resourceId: "fertilizer_ii", amount: 30 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_414",
    name: "Crop_Flowers_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 225 },
      { resourceId: "fertilizer_organic", amount: 75 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_415",
    name: "Crop_Potato_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_i", amount: 20 },
    ],
    outputs: [
      { resourceId: "potato", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_ii_416",
    name: "Crop_Potato_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_ii", amount: 16 },
    ],
    outputs: [
      { resourceId: "potato", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_ii_417",
    name: "Crop_Potato_Product_FertilizerOrganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_organic", amount: 39 },
    ],
    outputs: [
      { resourceId: "potato", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "greenhouse_ii_418",
    name: "Crop_Corn_Product_Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 200 },
      { resourceId: "fertilizer_i", amount: 30 },
    ],
    outputs: [
      { resourceId: "corn", amount: 99 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "greenhouse_ii_419",
    name: "Crop_Corn_Product_Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 200 },
      { resourceId: "fertilizer_ii", amount: 24 },
    ],
    outputs: [
      { resourceId: "corn", amount: 99 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "groundwater_pump_420",
    name: "LandWaterPumping",
    buildingId: "groundwater_pump",
    inputs: [
    ],
    outputs: [
      { resourceId: "water", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "high-pressure_turbine_421",
    name: "TurbineHighPress",
    buildingId: "high-pressure_turbine",
    inputs: [
      { resourceId: "steam_high", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 6,000 },
      { resourceId: "steam_low", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "high-pressure_turbine_ii_422",
    name: "TurbineHighPressT2",
    buildingId: "high-pressure_turbine_ii",
    inputs: [
      { resourceId: "steam_high", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 12,000 },
      { resourceId: "steam_low", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "hydrogen_reformer_423",
    name: "HydrogenReforming",
    buildingId: "hydrogen_reformer",
    inputs: [
      { resourceId: "fuel_gas", amount: 12 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "hydrogen", amount: 14 },
      { resourceId: "carbon_dioxide", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "hydrogen_reformer_424",
    name: "HydrogenProductionFromSteamSp",
    buildingId: "hydrogen_reformer",
    inputs: [
      { resourceId: "water", amount: 4 },
      { resourceId: "steam_super", amount: 3 },
    ],
    outputs: [
      { resourceId: "hydrogen", amount: 8 },
      { resourceId: "oxygen", amount: 8 },
      { resourceId: "steam_depleted", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "incineration_plant_425",
    name: "IncinerationOfWaste",
    buildingId: "incineration_plant",
    inputs: [
      { resourceId: "waste", amount: 48 },
      { resourceId: "fuel_gas", amount: 2 },
      { resourceId: "water", amount: 6 },
    ],
    outputs: [
      { resourceId: "exhaust", amount: 24 },
      { resourceId: "steam_high", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "incineration_plant_426",
    name: "IncinerationOfWastePressed",
    buildingId: "incineration_plant",
    inputs: [
      { resourceId: "waste_pressed", amount: 16 },
      { resourceId: "fuel_gas", amount: 2 },
      { resourceId: "water", amount: 6 },
    ],
    outputs: [
      { resourceId: "exhaust", amount: 24 },
      { resourceId: "steam_high", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "incineration_plant_427",
    name: "IncinerationOfWasteHydrogen",
    buildingId: "incineration_plant",
    inputs: [
      { resourceId: "waste", amount: 48 },
      { resourceId: "hydrogen", amount: 2 },
      { resourceId: "water", amount: 6 },
    ],
    outputs: [
      { resourceId: "exhaust", amount: 24 },
      { resourceId: "steam_high", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "incineration_plant_428",
    name: "IncinerationOfWastePressedHydrogen",
    buildingId: "incineration_plant",
    inputs: [
      { resourceId: "waste_pressed", amount: 16 },
      { resourceId: "hydrogen", amount: 2 },
      { resourceId: "water", amount: 6 },
    ],
    outputs: [
      { resourceId: "exhaust", amount: 24 },
      { resourceId: "steam_high", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "irrigated_farm_429",
    name: "Crop_Potato_Product_Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 108 },
      { resourceId: "fertilizer_i", amount: 16 },
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "irrigated_farm_430",
    name: "Crop_Potato_Product_Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 108 },
      { resourceId: "fertilizer_ii", amount: 13 },
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "irrigated_farm_431",
    name: "Crop_Potato_Product_FertilizerOrganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 108 },
      { resourceId: "fertilizer_organic", amount: 32 },
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "irrigated_farm_432",
    name: "Crop_Corn_Product_Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 160 },
      { resourceId: "fertilizer_i", amount: 24 },
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_433",
    name: "Crop_Corn_Product_Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 160 },
      { resourceId: "fertilizer_ii", amount: 19 },
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_434",
    name: "Crop_Corn_Product_FertilizerOrganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 160 },
      { resourceId: "fertilizer_organic", amount: 48 },
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_435",
    name: "Crop_Wheat_Product_Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 191 },
      { resourceId: "fertilizer_i", amount: 32 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "irrigated_farm_436",
    name: "Crop_Wheat_Product_Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 191 },
      { resourceId: "fertilizer_ii", amount: 25 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "irrigated_farm_437",
    name: "Crop_Wheat_Product_FertilizerOrganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 191 },
      { resourceId: "fertilizer_organic", amount: 63 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
    ]
  },
  {
    id: "irrigated_farm_438",
    name: "Crop_TreeSapling_Product_Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 324 },
      { resourceId: "fertilizer_i", amount: 36 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "irrigated_farm_439",
    name: "Crop_TreeSapling_Product_Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 324 },
      { resourceId: "fertilizer_ii", amount: 29 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "irrigated_farm_440",
    name: "Crop_TreeSapling_Product_FertilizerOrganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 324 },
      { resourceId: "fertilizer_organic", amount: 72 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "irrigated_farm_441",
    name: "Crop_Soybeans_Product_Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 144 },
      { resourceId: "fertilizer_i", amount: 30 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 22 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_442",
    name: "Crop_Soybeans_Product_Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 144 },
      { resourceId: "fertilizer_ii", amount: 24 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 22 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_443",
    name: "Crop_Soybeans_Product_FertilizerOrganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 144 },
      { resourceId: "fertilizer_organic", amount: 60 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 22 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_444",
    name: "Crop_Vegetables_Product_Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 128 },
      { resourceId: "fertilizer_i", amount: 21 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_445",
    name: "Crop_Vegetables_Product_Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 128 },
      { resourceId: "fertilizer_ii", amount: 17 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_446",
    name: "Crop_Vegetables_Product_FertilizerOrganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 128 },
      { resourceId: "fertilizer_organic", amount: 42 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "240" },
    ]
  },
  {
    id: "irrigated_farm_447",
    name: "Crop_Canola_Product_Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 84 },
      { resourceId: "fertilizer_i", amount: 13 },
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "irrigated_farm_448",
    name: "Crop_Canola_Product_Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 84 },
      { resourceId: "fertilizer_ii", amount: 11 },
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "irrigated_farm_449",
    name: "Crop_Canola_Product_FertilizerOrganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 84 },
      { resourceId: "fertilizer_organic", amount: 27 },
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
    ]
  },
  {
    id: "kiln_450",
    name: "SimpleConcreteMaking",
    buildingId: "kiln",
    inputs: [
      { resourceId: "limestone", amount: 12 },
      { resourceId: "coal", amount: 2 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "concrete_slab", amount: 8 },
      { resourceId: "exhaust", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "lens_polisher_451",
    name: "LensMaking",
    buildingId: "lens_polisher",
    inputs: [
      { resourceId: "sapphire_wafer", amount: 1 },
      { resourceId: "diamond_paste", amount: 1 },
      { resourceId: "ethanol", amount: 1 },
    ],
    outputs: [
      { resourceId: "lens", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "liquid_dump_452",
    name: "OceanWaterDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "liquid_dump_453",
    name: "BrineDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "brine", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "liquid_dump_454",
    name: "OceanWasteWaterPumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "waste_water", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "liquid_dump_455",
    name: "SourWaterDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "sour_water", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "liquid_dump_456",
    name: "WasteAcidDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "acid", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "liquid_dump_457",
    name: "ToxicSlurryDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "toxic_slurry", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "liquid_dump_458",
    name: "SeaWaterDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "seawater", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "liquid_dump_459",
    name: "FertilizerOrganicDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "fertilizer_organic", amount: 4 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "4" },
    ]
  },
  {
    id: "liquid_dump_460",
    name: "FertilizerChem1Dumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "fertilizer_i", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "4" },
    ]
  },
  {
    id: "liquid_dump_461",
    name: "FertilizerChem2Dumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "fertilizer_ii", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "4" },
    ]
  },
  {
    id: "liquid_dump_462",
    name: "RedMudDumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "red_mud", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "2" },
    ]
  },
  {
    id: "low-pressure_turbine_463",
    name: "TurbineLowPress",
    buildingId: "low-pressure_turbine",
    inputs: [
      { resourceId: "steam_low", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 3,000 },
      { resourceId: "steam_depleted", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "low-pressure_turbine_ii_464",
    name: "TurbineLowPressT2",
    buildingId: "low-pressure_turbine_ii",
    inputs: [
      { resourceId: "steam_low", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 6,000 },
      { resourceId: "steam_depleted", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "maintenance_depot_465",
    name: "MaintenanceT1Recipe",
    buildingId: "maintenance_depot",
    inputs: [
      { resourceId: "mechanical_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "maintenance_i", amount: 160 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "maintenance_depot_466",
    name: "MaintenanceT1Recycling",
    buildingId: "maintenance_depot",
    inputs: [
      { resourceId: "mechanical_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "maintenance_i", amount: 160 },
      { resourceId: "recyclables", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "maintenance_depot_basic_467",
    name: "MaintenanceT0Recipe",
    buildingId: "maintenance_depot_basic",
    inputs: [
      { resourceId: "mechanical_parts", amount: 6 },
      { resourceId: "electronics", amount: 3 },
    ],
    outputs: [
      { resourceId: "maintenance_i", amount: 110 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "maintenance_ii_depot_468",
    name: "MaintenanceT2Recipe",
    buildingId: "maintenance_ii_depot",
    inputs: [
      { resourceId: "mechanical_parts", amount: 6 },
      { resourceId: "electronics_ii", amount: 4 },
    ],
    outputs: [
      { resourceId: "maintenance_ii", amount: 160 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "maintenance_ii_depot_469",
    name: "MaintenanceT2Recycling",
    buildingId: "maintenance_ii_depot",
    inputs: [
      { resourceId: "mechanical_parts", amount: 6 },
      { resourceId: "electronics_ii", amount: 4 },
    ],
    outputs: [
      { resourceId: "maintenance_ii", amount: 160 },
      { resourceId: "recyclables", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "maintenance_iii_depot_470",
    name: "MaintenanceT3Recipe",
    buildingId: "maintenance_iii_depot",
    inputs: [
      { resourceId: "mechanical_parts", amount: 3 },
      { resourceId: "electronics_iii", amount: 2 },
    ],
    outputs: [
      { resourceId: "maintenance_iii", amount: 80 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "maintenance_iii_depot_471",
    name: "MaintenanceT3Recycling",
    buildingId: "maintenance_iii_depot",
    inputs: [
      { resourceId: "mechanical_parts", amount: 3 },
      { resourceId: "electronics_iii", amount: 2 },
    ],
    outputs: [
      { resourceId: "maintenance_iii", amount: 80 },
      { resourceId: "recyclables", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "metal_caster_472",
    name: "IronCasting",
    buildingId: "metal_caster",
    inputs: [
      { resourceId: "molten_iron", amount: 8 },
    ],
    outputs: [
      { resourceId: "iron", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "metal_caster_473",
    name: "CopperCasting",
    buildingId: "metal_caster",
    inputs: [
      { resourceId: "molten_copper", amount: 8 },
    ],
    outputs: [
      { resourceId: "impure_copper", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "metal_caster_474",
    name: "AluminumCasting",
    buildingId: "metal_caster",
    inputs: [
      { resourceId: "molten_aluminum", amount: 8 },
    ],
    outputs: [
      { resourceId: "aluminum", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "metal_caster_ii_475",
    name: "IronCastingCooled",
    buildingId: "metal_caster_ii",
    inputs: [
      { resourceId: "molten_iron", amount: 8 },
    ],
    outputs: [
      { resourceId: "iron", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "metal_caster_ii_476",
    name: "CopperCastingCooled",
    buildingId: "metal_caster_ii",
    inputs: [
      { resourceId: "molten_copper", amount: 8 },
    ],
    outputs: [
      { resourceId: "impure_copper", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "metal_caster_ii_477",
    name: "AluminumCastingT2",
    buildingId: "metal_caster_ii",
    inputs: [
      { resourceId: "molten_aluminum", amount: 8 },
    ],
    outputs: [
      { resourceId: "aluminum", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_478",
    name: "MicrochipMachine_MicrochipProdStage1A",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "silicon_wafer", amount: 3 },
      { resourceId: "acid", amount: 1 },
      { resourceId: "water", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_1_a", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_479",
    name: "MicrochipMachine_MicrochipProdStage2A",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_1_a", amount: 3 },
      { resourceId: "copper", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_1_b", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_480",
    name: "MicrochipMachine_MicrochipProdStage3A",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_1_b", amount: 3 },
      { resourceId: "gold", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_1_c", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_481",
    name: "MicrochipMachine_MicrochipProdStage1B",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_1_c", amount: 3 },
      { resourceId: "acid", amount: 1 },
      { resourceId: "water", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_2_a", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_482",
    name: "MicrochipMachine_MicrochipProdStage2B",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_2_a", amount: 3 },
      { resourceId: "copper", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_2_b", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_483",
    name: "MicrochipMachine_MicrochipProdStage3B",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_2_b", amount: 3 },
      { resourceId: "gold", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_2_c", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_484",
    name: "MicrochipMachine_MicrochipProdStage1C",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_2_c", amount: 3 },
      { resourceId: "acid", amount: 1 },
      { resourceId: "water", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_3_a", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_485",
    name: "MicrochipMachine_MicrochipProdStage2C",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_3_a", amount: 3 },
      { resourceId: "copper", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_3_b", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_486",
    name: "MicrochipMachine_MicrochipProdStage3C",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_3_b", amount: 3 },
      { resourceId: "gold", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_3_c", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_487",
    name: "MicrochipMachine_MicrochipProdStage1D",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_3_c", amount: 3 },
      { resourceId: "acid", amount: 1 },
      { resourceId: "water", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_4_a", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_488",
    name: "MicrochipMachine_MicrochipProdStage2D",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_4_a", amount: 3 },
      { resourceId: "copper", amount: 1 },
      { resourceId: "plastic", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_4_b", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_489",
    name: "MicrochipMachine_MicrochipProdFinalStage",
    buildingId: "microchip_machine",
    inputs: [
      { resourceId: "microchips_stage_4_b", amount: 3 },
      { resourceId: "gold", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "microchip_machine_ii_490",
    name: "MicrochipMachineT2_MicrochipProdStage1A",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "silicon_wafer", amount: 6 },
      { resourceId: "acid", amount: 2 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_1_a", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_491",
    name: "MicrochipMachineT2_MicrochipProdStage2A",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_1_a", amount: 6 },
      { resourceId: "copper", amount: 2 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_1_b", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_492",
    name: "MicrochipMachineT2_MicrochipProdStage3A",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_1_b", amount: 6 },
      { resourceId: "gold", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_1_c", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_493",
    name: "MicrochipMachineT2_MicrochipProdStage1B",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_1_c", amount: 6 },
      { resourceId: "acid", amount: 2 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_2_a", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_494",
    name: "MicrochipMachineT2_MicrochipProdStage2B",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_2_a", amount: 6 },
      { resourceId: "copper", amount: 2 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_2_b", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_495",
    name: "MicrochipMachineT2_MicrochipProdStage3B",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_2_b", amount: 6 },
      { resourceId: "gold", amount: 1 },
    ],
    outputs: [
      { resourceId: "microchips_stage_2_c", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_496",
    name: "MicrochipMachineT2_MicrochipProdStage1C",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_2_c", amount: 6 },
      { resourceId: "acid", amount: 2 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_3_a", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_497",
    name: "MicrochipMachineT2_MicrochipProdStage2C",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_3_a", amount: 6 },
      { resourceId: "copper", amount: 2 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_3_b", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_498",
    name: "MicrochipMachineT2_MicrochipProdStage3C",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_3_b", amount: 6 },
      { resourceId: "gold", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_3_c", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_499",
    name: "MicrochipMachineT2_MicrochipProdStage1D",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_3_c", amount: 6 },
      { resourceId: "acid", amount: 2 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_4_a", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_500",
    name: "MicrochipMachineT2_MicrochipProdStage2D",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_4_a", amount: 6 },
      { resourceId: "copper", amount: 2 },
      { resourceId: "plastic", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips_stage_4_b", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "microchip_machine_ii_501",
    name: "MicrochipMachineT2_MicrochipProdFinalStage",
    buildingId: "microchip_machine_ii",
    inputs: [
      { resourceId: "microchips_stage_4_b", amount: 6 },
      { resourceId: "gold", amount: 2 },
    ],
    outputs: [
      { resourceId: "microchips", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mill_502",
    name: "WheatMilling",
    buildingId: "mill",
    inputs: [
      { resourceId: "wheat", amount: 8 },
    ],
    outputs: [
      { resourceId: "flour", amount: 8 },
      { resourceId: "animal_feed", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "mill_503",
    name: "SoybeanMilling",
    buildingId: "mill",
    inputs: [
      { resourceId: "soybean", amount: 8 },
    ],
    outputs: [
      { resourceId: "cooking_oil", amount: 3 },
      { resourceId: "animal_feed", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "mill_504",
    name: "CanolaMilling",
    buildingId: "mill",
    inputs: [
      { resourceId: "canola", amount: 8 },
    ],
    outputs: [
      { resourceId: "cooking_oil", amount: 6 },
      { resourceId: "animal_feed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "mill_505",
    name: "CornMilling",
    buildingId: "mill",
    inputs: [
      { resourceId: "corn", amount: 8 },
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "corn_mash", amount: 6 },
      { resourceId: "animal_feed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "mixer_506",
    name: "GlassMixMixing",
    buildingId: "mixer",
    inputs: [
      { resourceId: "sand", amount: 20 },
      { resourceId: "limestone", amount: 5 },
      { resourceId: "salt", amount: 2 },
    ],
    outputs: [
      { resourceId: "glass_mix", amount: 20 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_507",
    name: "GlassMixMixingWithAcid",
    buildingId: "mixer",
    inputs: [
      { resourceId: "sand", amount: 16 },
      { resourceId: "limestone", amount: 4 },
      { resourceId: "salt", amount: 2 },
      { resourceId: "acid", amount: 4 },
    ],
    outputs: [
      { resourceId: "glass_mix", amount: 20 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_508",
    name: "AcidMixMixing",
    buildingId: "mixer",
    inputs: [
      { resourceId: "sulfur", amount: 2 },
      { resourceId: "water", amount: 10 },
    ],
    outputs: [
      { resourceId: "acid", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_509",
    name: "SulfurNeutralization",
    buildingId: "mixer",
    inputs: [
      { resourceId: "sulfur", amount: 10 },
      { resourceId: "limestone", amount: 2 },
    ],
    outputs: [
      { resourceId: "slag", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_510",
    name: "BrineProduction",
    buildingId: "mixer",
    inputs: [
      { resourceId: "salt", amount: 2 },
      { resourceId: "water", amount: 14 },
    ],
    outputs: [
      { resourceId: "brine", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_511",
    name: "FilterMediaMixing",
    buildingId: "mixer",
    inputs: [
      { resourceId: "gravel", amount: 8 },
      { resourceId: "sand", amount: 4 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "filter_media", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_512",
    name: "FilterMediaMixingM",
    buildingId: "mixer",
    inputs: [
      { resourceId: "gravel", amount: 8 },
      { resourceId: "manufactured_sand", amount: 4 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "filter_media", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_513",
    name: "OrganicFertilizerProduction",
    buildingId: "mixer",
    inputs: [
      { resourceId: "compost", amount: 12 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "fertilizer_organic", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_514",
    name: "OrganicFertilizerProductionDirt",
    buildingId: "mixer",
    inputs: [
      { resourceId: "compost", amount: 4 },
      { resourceId: "dirt", amount: 8 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "fertilizer_organic", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_515",
    name: "Fertilizer2Production",
    buildingId: "mixer",
    inputs: [
      { resourceId: "fertilizer_i", amount: 15 },
      { resourceId: "limestone", amount: 3 },
      { resourceId: "sulfur", amount: 3 },
    ],
    outputs: [
      { resourceId: "fertilizer_ii", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "mixer_516",
    name: "DirtMixing",
    buildingId: "mixer",
    inputs: [
      { resourceId: "gravel", amount: 8 },
      { resourceId: "compost", amount: 8 },
    ],
    outputs: [
      { resourceId: "dirt", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "mixer_517",
    name: "AnimalFeedFromPotato",
    buildingId: "mixer",
    inputs: [
      { resourceId: "potato", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_518",
    name: "AnimalFeedFromWheat",
    buildingId: "mixer",
    inputs: [
      { resourceId: "wheat", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_519",
    name: "AnimalFeedFromCorn",
    buildingId: "mixer",
    inputs: [
      { resourceId: "corn", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_520",
    name: "AnimalFeedFromSoybean",
    buildingId: "mixer",
    inputs: [
      { resourceId: "soybean", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_521",
    name: "AnimalFeedCompost",
    buildingId: "mixer",
    inputs: [
      { resourceId: "animal_feed", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "mixer_522",
    name: "BiomassCompost",
    buildingId: "mixer",
    inputs: [
      { resourceId: "biomass", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "mixer_523",
    name: "MeatTrimmingsCompost",
    buildingId: "mixer",
    inputs: [
      { resourceId: "meat_trimmings", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "mixer_ii_524",
    name: "GlassMixMixingT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "sand", amount: 20 },
      { resourceId: "limestone", amount: 5 },
      { resourceId: "salt", amount: 2 },
    ],
    outputs: [
      { resourceId: "glass_mix", amount: 20 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_525",
    name: "GlassMixMixingWithAcidT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "sand", amount: 16 },
      { resourceId: "limestone", amount: 4 },
      { resourceId: "salt", amount: 2 },
      { resourceId: "acid", amount: 4 },
    ],
    outputs: [
      { resourceId: "glass_mix", amount: 20 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_526",
    name: "AcidMixMixingT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "sulfur", amount: 2 },
      { resourceId: "water", amount: 10 },
    ],
    outputs: [
      { resourceId: "acid", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_527",
    name: "SulfurNeutralizationT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "sulfur", amount: 10 },
      { resourceId: "limestone", amount: 2 },
    ],
    outputs: [
      { resourceId: "slag", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_528",
    name: "BrineProductionT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "salt", amount: 2 },
      { resourceId: "water", amount: 14 },
    ],
    outputs: [
      { resourceId: "brine", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_529",
    name: "FilterMediaMixingT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "gravel", amount: 8 },
      { resourceId: "sand", amount: 4 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "filter_media", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_530",
    name: "FilterMediaMixingMT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "gravel", amount: 8 },
      { resourceId: "manufactured_sand", amount: 4 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "filter_media", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_531",
    name: "OrganicFertilizerProductionT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "compost", amount: 12 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "fertilizer_organic", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_532",
    name: "OrganicFertilizerProductionDirtT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "compost", amount: 4 },
      { resourceId: "dirt", amount: 8 },
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "fertilizer_organic", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_533",
    name: "Fertilizer2ProductionT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "fertilizer_i", amount: 15 },
      { resourceId: "limestone", amount: 3 },
      { resourceId: "sulfur", amount: 3 },
    ],
    outputs: [
      { resourceId: "fertilizer_ii", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "mixer_ii_534",
    name: "DirtMixingT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "gravel", amount: 8 },
      { resourceId: "compost", amount: 8 },
    ],
    outputs: [
      { resourceId: "dirt", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_535",
    name: "AnimalFeedFromPotatoT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "potato", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_536",
    name: "AnimalFeedFromWheatT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "wheat", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 32 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_537",
    name: "AnimalFeedFromCornT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "corn", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 24 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_538",
    name: "AnimalFeedFromSoybeanT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "soybean", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "mixer_ii_539",
    name: "AnimalFeedCompostT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "animal_feed", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "mixer_ii_540",
    name: "BiomassCompostT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "biomass", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "mixer_ii_541",
    name: "MeatTrimmingsCompostT2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "meat_trimmings", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "nuclear_reactor_542",
    name: "NuclearReactor",
    buildingId: "nuclear_reactor",
    inputs: [
      { resourceId: "water", amount: 192 },
      { resourceId: "uranium_rod", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 192 },
      { resourceId: "spent_fuel", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "nuclear_reactor_543",
    name: "NuclearReactor1",
    buildingId: "nuclear_reactor",
    inputs: [
      { resourceId: "water", amount: 192 },
      { resourceId: "uranium_rod", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 192 },
      { resourceId: "spent_fuel", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "120" },
    ]
  },
  {
    id: "nuclear_reactor_ii_544",
    name: "NuclearReactorT2",
    buildingId: "nuclear_reactor_ii",
    inputs: [
      { resourceId: "water", amount: 192 },
      { resourceId: "mox_rod", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 192 },
      { resourceId: "spent_mox", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "nuclear_reactor_ii_545",
    name: "NuclearReactorT21",
    buildingId: "nuclear_reactor_ii",
    inputs: [
      { resourceId: "water", amount: 192 },
      { resourceId: "uranium_rod", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 192 },
      { resourceId: "spent_fuel", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "nuclear_reactor_ii_546",
    name: "NuclearReactorT22",
    buildingId: "nuclear_reactor_ii",
    inputs: [
      { resourceId: "water", amount: 192 },
      { resourceId: "mox_rod", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 192 },
      { resourceId: "spent_mox", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "120" },
    ]
  },
  {
    id: "nuclear_reactor_ii_547",
    name: "NuclearReactorT23",
    buildingId: "nuclear_reactor_ii",
    inputs: [
      { resourceId: "water", amount: 192 },
      { resourceId: "uranium_rod", amount: 1 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 192 },
      { resourceId: "spent_fuel", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "120" },
    ]
  },
  {
    id: "nuclear_reprocessing_plant_548",
    name: "SpentFuelToBlanket",
    buildingId: "nuclear_reprocessing_plant",
    inputs: [
      { resourceId: "spent_fuel", amount: 1 },
      { resourceId: "acid", amount: 1 },
      { resourceId: "molten_glass", amount: 1 },
      { resourceId: "salt", amount: 1 },
    ],
    outputs: [
      { resourceId: "blanket_fuel", amount: 1 },
      { resourceId: "fission_product", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "nuclear_reprocessing_plant_549",
    name: "SpentMoxToBlanket",
    buildingId: "nuclear_reprocessing_plant",
    inputs: [
      { resourceId: "spent_mox", amount: 1 },
      { resourceId: "acid", amount: 1 },
      { resourceId: "molten_glass", amount: 1 },
      { resourceId: "salt", amount: 1 },
    ],
    outputs: [
      { resourceId: "blanket_fuel", amount: 1 },
      { resourceId: "fission_product", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "nuclear_reprocessing_plant_550",
    name: "CoreFuelReprocessing",
    buildingId: "nuclear_reprocessing_plant",
    inputs: [
      { resourceId: "core_fuel_spent", amount: 16 },
      { resourceId: "acid", amount: 2 },
      { resourceId: "molten_glass", amount: 2 },
      { resourceId: "steel", amount: 1 },
    ],
    outputs: [
      { resourceId: "core_fuel", amount: 12 },
      { resourceId: "fission_product", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "nuclear_reprocessing_plant_551",
    name: "SpentFuelReprocessing",
    buildingId: "nuclear_reprocessing_plant",
    inputs: [
      { resourceId: "spent_fuel", amount: 8 },
      { resourceId: "acid", amount: 6 },
      { resourceId: "molten_glass", amount: 4 },
    ],
    outputs: [
      { resourceId: "reprocessed_uranium_1", amount: 6 },
      { resourceId: "plutonium", amount: 1 },
      { resourceId: "fission_product", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "oil_pump_552",
    name: "OilGroundPumping",
    buildingId: "oil_pump",
    inputs: [
    ],
    outputs: [
      { resourceId: "crude_oil", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "15" },
    ]
  },
  {
    id: "oxygen_furnace_553",
    name: "SteelSmelting",
    buildingId: "oxygen_furnace",
    inputs: [
      { resourceId: "molten_iron", amount: 16 },
      { resourceId: "oxygen", amount: 12 },
    ],
    outputs: [
      { resourceId: "molten_steel", amount: 8 },
      { resourceId: "exhaust", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "oxygen_furnace_ii_554",
    name: "SteelSmeltingT2",
    buildingId: "oxygen_furnace_ii",
    inputs: [
      { resourceId: "molten_iron", amount: 32 },
      { resourceId: "oxygen", amount: 12 },
    ],
    outputs: [
      { resourceId: "molten_steel", amount: 16 },
      { resourceId: "exhaust", amount: 24 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "polymerization_plant_555",
    name: "PlasticMaking",
    buildingId: "polymerization_plant",
    inputs: [
      { resourceId: "naphtha", amount: 6 },
      { resourceId: "chlorine", amount: 4 },
    ],
    outputs: [
      { resourceId: "plastic", amount: 18 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "polymerization_plant_556",
    name: "PlasticMakingEthanol",
    buildingId: "polymerization_plant",
    inputs: [
      { resourceId: "ethanol", amount: 6 },
      { resourceId: "chlorine", amount: 4 },
    ],
    outputs: [
      { resourceId: "plastic", amount: 18 },
      { resourceId: "exhaust", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "power_generator_557",
    name: "PowerGeneratorT1",
    buildingId: "power_generator",
    inputs: [
      { resourceId: "mechanical_power", amount: 3,000 },
    ],
    outputs: [
      { resourceId: "electricity", amount: 2,000 },
    ],
    metadata: [
    ]
  },
  {
    id: "power_generator_large_558",
    name: "PowerGeneratorT2",
    buildingId: "power_generator_large",
    inputs: [
      { resourceId: "mechanical_power", amount: 18,000 },
    ],
    outputs: [
      { resourceId: "electricity", amount: 15,000 },
    ],
    metadata: [
    ]
  },
  {
    id: "rainwater_harvester_559",
    name: "RainwaterHarvester",
    buildingId: "rainwater_harvester",
    inputs: [
    ],
    outputs: [
      { resourceId: "water", amount: 37 },
    ],
    metadata: [
      { key: "time", value: "720" },
    ]
  },
  {
    id: "research_lab_i_560",
    name: "ResearchLab2",
    buildingId: "research_lab_i",
    inputs: [
      { resourceId: "lab_equipment", amount: 1 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "research_lab_i_561",
    name: "ResearchLab21",
    buildingId: "research_lab_i",
    inputs: [
      { resourceId: "lab_equipment", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "research_lab_ii_562",
    name: "ResearchLab3",
    buildingId: "research_lab_ii",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 1 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "research_lab_ii_563",
    name: "ResearchLab31",
    buildingId: "research_lab_ii",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "research_lab_iii_564",
    name: "ResearchLab4",
    buildingId: "research_lab_iii",
    inputs: [
      { resourceId: "lab_equipment_iii", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "research_lab_iii_565",
    name: "ResearchLab41",
    buildingId: "research_lab_iii",
    inputs: [
      { resourceId: "lab_equipment_iii", amount: 2 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "research_lab_iv_566",
    name: "ResearchLab5",
    buildingId: "research_lab_iv",
    inputs: [
      { resourceId: "lab_equipment_iv", amount: 4 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "research_lab_iv_567",
    name: "ResearchLab51",
    buildingId: "research_lab_iv",
    inputs: [
      { resourceId: "lab_equipment_iv", amount: 4 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "5" },
    ]
  },
  {
    id: "rotary_kiln_568",
    name: "CementProduction",
    buildingId: "rotary_kiln",
    inputs: [
      { resourceId: "limestone", amount: 6 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "cement", amount: 2 },
      { resourceId: "exhaust", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "rotary_kiln_gas_569",
    name: "CementProductionGas",
    buildingId: "rotary_kiln_gas",
    inputs: [
      { resourceId: "limestone", amount: 12 },
      { resourceId: "fuel_gas", amount: 4 },
    ],
    outputs: [
      { resourceId: "cement", amount: 4 },
      { resourceId: "carbon_dioxide", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "rotary_kiln_gas_570",
    name: "CementProductionHydrogen",
    buildingId: "rotary_kiln_gas",
    inputs: [
      { resourceId: "limestone", amount: 12 },
      { resourceId: "hydrogen", amount: 4 },
    ],
    outputs: [
      { resourceId: "cement", amount: 4 },
      { resourceId: "steam_depleted", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "rotary_kiln_gas_571",
    name: "AluminaCalcificationGas",
    buildingId: "rotary_kiln_gas",
    inputs: [
      { resourceId: "hydrated_alumina", amount: 18 },
      { resourceId: "fuel_gas", amount: 3 },
    ],
    outputs: [
      { resourceId: "alumina", amount: 12 },
      { resourceId: "carbon_dioxide", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "rotary_kiln_gas_572",
    name: "AluminaCalcificationHydrogen",
    buildingId: "rotary_kiln_gas",
    inputs: [
      { resourceId: "hydrated_alumina", amount: 18 },
      { resourceId: "hydrogen", amount: 3 },
    ],
    outputs: [
      { resourceId: "alumina", amount: 12 },
      { resourceId: "steam_depleted", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "rubber_maker_573",
    name: "RubberProductionNaphtha",
    buildingId: "rubber_maker",
    inputs: [
      { resourceId: "naphtha", amount: 4 },
      { resourceId: "sulfur", amount: 1 },
    ],
    outputs: [
      { resourceId: "rubber", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "rubber_maker_574",
    name: "RubberProductionNaphthaAlt",
    buildingId: "rubber_maker",
    inputs: [
      { resourceId: "naphtha", amount: 4 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "rubber", amount: 8 },
      { resourceId: "waste_water", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "rubber_maker_575",
    name: "RubberProductionEthanol",
    buildingId: "rubber_maker",
    inputs: [
      { resourceId: "ethanol", amount: 4 },
      { resourceId: "sulfur", amount: 1 },
    ],
    outputs: [
      { resourceId: "rubber", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "rubber_maker_576",
    name: "RubberProductionDiesel",
    buildingId: "rubber_maker",
    inputs: [
      { resourceId: "diesel", amount: 4 },
      { resourceId: "sulfur", amount: 1 },
    ],
    outputs: [
      { resourceId: "rubber", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "rubber_maker_577",
    name: "RubberProductionDieselWithCoal",
    buildingId: "rubber_maker",
    inputs: [
      { resourceId: "diesel", amount: 4 },
      { resourceId: "coal", amount: 1 },
    ],
    outputs: [
      { resourceId: "rubber", amount: 8 },
      { resourceId: "waste_water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "seawater_pump_578",
    name: "OceanWaterPumping",
    buildingId: "seawater_pump",
    inputs: [
    ],
    outputs: [
      { resourceId: "seawater", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "seawater_pump_tall_579",
    name: "OceanWaterPumpingT2",
    buildingId: "seawater_pump_tall",
    inputs: [
    ],
    outputs: [
      { resourceId: "seawater", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "settling_tank_580",
    name: "GoldSettling",
    buildingId: "settling_tank",
    inputs: [
      { resourceId: "gold_ore_powder", amount: 12 },
      { resourceId: "acid", amount: 4 },
    ],
    outputs: [
      { resourceId: "gold_ore_concentrate", amount: 3 },
      { resourceId: "toxic_slurry", amount: 9 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "settling_tank_581",
    name: "UraniumLeaching",
    buildingId: "settling_tank",
    inputs: [
      { resourceId: "uranium_ore_powder", amount: 36 },
      { resourceId: "acid", amount: 12 },
    ],
    outputs: [
      { resourceId: "yellowcake", amount: 6 },
      { resourceId: "toxic_slurry", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "60" },
    ]
  },
  {
    id: "settling_tank_582",
    name: "FluorideLeaching",
    buildingId: "settling_tank",
    inputs: [
      { resourceId: "rock", amount: 8 },
      { resourceId: "acid", amount: 4 },
    ],
    outputs: [
      { resourceId: "hydrogen_fluoride", amount: 8 },
      { resourceId: "slag", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "40" },
    ]
  },
  {
    id: "settling_tank_583",
    name: "RedMudSettling",
    buildingId: "settling_tank",
    inputs: [
      { resourceId: "red_mud", amount: 9 },
      { resourceId: "seawater", amount: 4 },
      { resourceId: "limestone", amount: 1 },
    ],
    outputs: [
      { resourceId: "slag", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "settling_tank_584",
    name: "RedMudSettlingAcid",
    buildingId: "settling_tank",
    inputs: [
      { resourceId: "red_mud", amount: 9 },
      { resourceId: "acid", amount: 6 },
      { resourceId: "limestone", amount: 1 },
    ],
    outputs: [
      { resourceId: "slag", amount: 4 },
      { resourceId: "iron_ore_crushed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "shredder_585",
    name: "ShreddingWood",
    buildingId: "shredder",
    inputs: [
      { resourceId: "wood", amount: 4 },
    ],
    outputs: [
      { resourceId: "woodchips", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_586",
    name: "ShreddingSaplings",
    buildingId: "shredder",
    inputs: [
      { resourceId: "tree_sapling", amount: 4 },
    ],
    outputs: [
      { resourceId: "biomass", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_587",
    name: "ShreddingIronScrap",
    buildingId: "shredder",
    inputs: [
      { resourceId: "iron_scrap_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "iron_scrap", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_588",
    name: "ShreddingAluminumScrap",
    buildingId: "shredder",
    inputs: [
      { resourceId: "aluminum_scrap_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "aluminum_scrap", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_589",
    name: "ShreddingCopperScrap",
    buildingId: "shredder",
    inputs: [
      { resourceId: "copper_scrap_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "copper_scrap", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_590",
    name: "ShreddingGoldScrap",
    buildingId: "shredder",
    inputs: [
      { resourceId: "gold_scrap_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "gold_scrap", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_591",
    name: "ShreddingWaste",
    buildingId: "shredder",
    inputs: [
      { resourceId: "waste_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "waste", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_592",
    name: "ShreddingRetiredWaste",
    buildingId: "shredder",
    inputs: [
      { resourceId: "retired_waste", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "shredder_593",
    name: "ShreddingPolyCells",
    buildingId: "shredder",
    inputs: [
      { resourceId: "solar_cell", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "silicon_reactor_594",
    name: "SiliconTreatment",
    buildingId: "silicon_reactor",
    inputs: [
      { resourceId: "molten_silicon", amount: 9 },
      { resourceId: "hydrogen", amount: 2 },
    ],
    outputs: [
      { resourceId: "silicon_poly", amount: 9 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "smoke_stack_595",
    name: "SmokeStackDepletedSteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_depleted", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_596",
    name: "SmokeStackLpSteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_low", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_597",
    name: "SmokeStackHpSteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_high", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_598",
    name: "SmokeStackSpSteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_super", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_599",
    name: "SmokeStackOxygen",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "oxygen", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_600",
    name: "SmokeStackNitrogen",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "nitrogen", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_601",
    name: "SmokeStackExhaust",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "exhaust", amount: 20 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_602",
    name: "SmokeStackCarbonDioxide",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 20 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_603",
    name: "SmokeStackLargeDepletedSteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_depleted", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_604",
    name: "SmokeStackLargeLpSteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_low", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_605",
    name: "SmokeStackLargeHpSteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_high", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_606",
    name: "SmokeStackLargeSpSteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_super", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_607",
    name: "SmokeStackLargeOxygen",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "oxygen", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_608",
    name: "SmokeStackLargeNitrogen",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "nitrogen", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_609",
    name: "SmokeStackLargeExhaust",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "exhaust", amount: 300 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 150 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "smoke_stack_large_610",
    name: "SmokeStackLargeCarbonDioxide",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 300 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "sour_water_stripper_611",
    name: "SourWaterStripping",
    buildingId: "sour_water_stripper",
    inputs: [
      { resourceId: "sour_water", amount: 12 },
      { resourceId: "steam_high", amount: 1 },
    ],
    outputs: [
      { resourceId: "sulfur", amount: 3 },
      { resourceId: "ammonia", amount: 3 },
      { resourceId: "water", amount: 7 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "super-pressure_turbine_612",
    name: "TurbineSuperPress",
    buildingId: "super-pressure_turbine",
    inputs: [
      { resourceId: "steam_super", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 18,000 },
      { resourceId: "steam_high", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "thermal_desalinator_613",
    name: "DesalinationFromSP",
    buildingId: "thermal_desalinator",
    inputs: [
      { resourceId: "seawater", amount: 18 },
      { resourceId: "steam_super", amount: 1 },
    ],
    outputs: [
      { resourceId: "water", amount: 12 },
      { resourceId: "brine", amount: 7 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "thermal_desalinator_614",
    name: "DesalinationFromHP",
    buildingId: "thermal_desalinator",
    inputs: [
      { resourceId: "seawater", amount: 18 },
      { resourceId: "steam_high", amount: 2 },
    ],
    outputs: [
      { resourceId: "water", amount: 13 },
      { resourceId: "brine", amount: 7 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "thermal_desalinator_615",
    name: "DesalinationFromLP",
    buildingId: "thermal_desalinator",
    inputs: [
      { resourceId: "seawater", amount: 12 },
      { resourceId: "steam_low", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 12 },
      { resourceId: "brine", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
    ]
  },
  {
    id: "thermal_desalinator_616",
    name: "DesalinationFromDepleted",
    buildingId: "thermal_desalinator",
    inputs: [
      { resourceId: "seawater", amount: 5 },
      { resourceId: "steam_depleted", amount: 8 },
    ],
    outputs: [
      { resourceId: "water", amount: 11 },
      { resourceId: "brine", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "waste_sorting_plant_617",
    name: "WasteSortingPlant",
    buildingId: "waste_sorting_plant",
    inputs: [
      { resourceId: "recyclables", amount: 48 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "waste_sorting_plant_618",
    name: "WasteSortingPlant1",
    buildingId: "waste_sorting_plant",
    inputs: [
      { resourceId: "recyclables_pressed", amount: 16 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "wastewater_treatment_619",
    name: "WaterTreatment",
    buildingId: "wastewater_treatment",
    inputs: [
      { resourceId: "waste_water", amount: 80 },
      { resourceId: "sand", amount: 4 },
      { resourceId: "chlorine", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 40 },
      { resourceId: "sludge", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "wastewater_treatment_620",
    name: "WaterTreatmentT2",
    buildingId: "wastewater_treatment",
    inputs: [
      { resourceId: "waste_water", amount: 80 },
      { resourceId: "filter_media", amount: 4 },
      { resourceId: "chlorine", amount: 8 },
    ],
    outputs: [
      { resourceId: "water", amount: 60 },
      { resourceId: "sludge", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "30" },
    ]
  },
  {
    id: "wastewater_treatment_621",
    name: "ToxicSlurryTreatment",
    buildingId: "wastewater_treatment",
    inputs: [
      { resourceId: "toxic_slurry", amount: 36 },
      { resourceId: "filter_media", amount: 2 },
      { resourceId: "brine", amount: 6 },
    ],
    outputs: [
      { resourceId: "water", amount: 12 },
      { resourceId: "slag", amount: 20 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
  {
    id: "water_chiller_622",
    name: "WaterChilling",
    buildingId: "water_chiller",
    inputs: [
      { resourceId: "water", amount: 10 },
    ],
    outputs: [
      { resourceId: "chilled_water", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
    ]
  },
];
