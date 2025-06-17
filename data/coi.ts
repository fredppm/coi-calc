import { Resource, Building, Recipe } from '../types';

export const coiResources: Resource[] = [
  { id: "acid", name: "Acid", color: "#FFFF00", image: "/images/resources/acid.png" },
  { id: "air_pollution", name: "Air Pollution", color: "#696969", image: "/images/resources/airpollution.png" },
  { id: "alumina", name: "Alumina", color: "#95A5A6", image: "/images/resources/alumina.png" },
  { id: "aluminum", name: "Aluminum", color: "#C0C0C0", image: "/images/resources/aluminum.png" },
  { id: "aluminum_scrap", name: "Aluminum Scrap", color: "#C0C0C0", image: "/images/resources/aluminumscrap.png" },
  { id: "aluminum_scrap_pressed", name: "Aluminum Scrap Pressed", color: "#C0C0C0", image: "/images/resources/aluminumscrappressed.png" },
  { id: "ammonia", name: "Ammonia", color: "#87CEEB", image: "/images/resources/ammonia.png" },
  { id: "anesthetics", name: "Anesthetics", color: "#95A5A6", image: "/images/resources/anesthetics.png" },
  { id: "animal_feed", name: "Animal Feed", color: "#95A5A6", image: "/images/resources/animalfood.png" },
  { id: "antibiotics", name: "Antibiotics", color: "#95A5A6", image: "/images/resources/penicillin.png" },
  { id: "asteroid_booster_parts", name: "Asteroid Booster Parts", color: "#95A5A6", image: "/images/resources/asteroidboosterparts.png" },
  { id: "bauxite", name: "Bauxite", color: "#95A5A6", image: "/images/resources/bauxite.png" },
  { id: "bauxite_powder", name: "Bauxite Powder", color: "#95A5A6", image: "/images/resources/bauxitepowder.png" },
  { id: "biomass", name: "Biomass", color: "#95A5A6", image: "/images/resources/biomass.png" },
  { id: "blanket_fuel", name: "Blanket Fuel", color: "#8B4513", image: "/images/resources/blanketfuel.png" },
  { id: "blanket_fuel_enriched", name: "Blanket Fuel (Enriched)", color: "#8B4513", image: "/images/resources/blanketfuelenriched.png" },
  { id: "bread", name: "Bread", color: "#CD853F", image: "/images/resources/bread.png" },
  { id: "brine", name: "Brine", color: "#008B8B", image: "/images/resources/brine.png" },
  { id: "broken_glass", name: "Broken Glass", color: "#E0FFFF", image: "/images/resources/brokenglass.png" },
  { id: "cake", name: "Cake", color: "#95A5A6", image: "/images/resources/cake.png" },
  { id: "canola", name: "Canola", color: "#95A5A6", image: "/images/resources/canola.png" },
  { id: "carbon_dioxide", name: "Carbon Dioxide", color: "#95A5A6", image: "/images/resources/carbondioxide.png" },
  { id: "cement", name: "Cement", color: "#A9A9A9", image: "/images/resources/cement.png" },
  { id: "chemical_fuel", name: "Chemical Fuel", color: "#8B4513", image: "/images/resources/chemicalfuel.png" },
  { id: "chicken_carcass", name: "Chicken Carcass", color: "#95A5A6", image: "/images/resources/chickencarcass.png" },
  { id: "chilled_water", name: "Chilled Water", color: "#1E90FF", image: "/images/resources/waterchilled.png" },
  { id: "chlorine", name: "Chlorine", color: "#7CFC00", image: "/images/resources/chlorine.png" },
  { id: "coal", name: "Coal", color: "#2F4F4F", image: "/images/resources/coal.png" },
  { id: "compact_reactor", name: "Compact Reactor", color: "#95A5A6", image: "/images/resources/compactreactor.png" },
  { id: "composite_core", name: "Composite Core", color: "#8B4513", image: "/images/resources/compositecore2.png" },
  { id: "composite_core_basic", name: "Composite Core Basic", color: "#8B4513", image: "/images/resources/compositecore1.png" },
  { id: "composite_panel", name: "Composite Panel", color: "#95A5A6", image: "/images/resources/compositepanel.png" },
  { id: "compost", name: "Compost", color: "#95A5A6", image: "/images/resources/digestate.png" },
  { id: "computing", name: "Computing", color: "#95A5A6", image: "/images/resources/computing.png" },
  { id: "concrete_slab", name: "Concrete Slab", color: "#808080", image: "/images/resources/concrete.png" },
  { id: "construction_parts", name: "Construction Parts", color: "#95A5A6", image: "/images/resources/constructionparts1.png" },
  { id: "construction_parts_ii", name: "Construction Parts II", color: "#95A5A6", image: "/images/resources/constructionparts2.png" },
  { id: "construction_parts_iii", name: "Construction Parts III", color: "#95A5A6", image: "/images/resources/constructionparts3.png" },
  { id: "construction_parts_iv", name: "Construction Parts IV", color: "#95A5A6", image: "/images/resources/constructionparts4.png" },
  { id: "consumer_electronics", name: "Consumer Electronics", color: "#95A5A6", image: "/images/resources/consumerelectronics.png" },
  { id: "cooking_oil", name: "Cooking Oil", color: "#000000", image: "/images/resources/cookingoil.png" },
  { id: "copper", name: "Copper", color: "#B87333", image: "/images/resources/copper.png" },
  { id: "copper_ore", name: "Copper Ore", color: "#B87333", image: "/images/resources/copperore.png" },
  { id: "copper_ore_crushed", name: "Copper Ore Crushed", color: "#B87333", image: "/images/resources/coppercrushed.png" },
  { id: "copper_scrap", name: "Copper Scrap", color: "#B87333", image: "/images/resources/copperscrap.png" },
  { id: "copper_scrap_pressed", name: "Copper Scrap Pressed", color: "#B87333", image: "/images/resources/copperscrappressed.png" },
  { id: "core_fuel", name: "Core Fuel", color: "#8B4513", image: "/images/resources/corefuel.png" },
  { id: "core_fuel_spent", name: "Core Fuel (Spent)", color: "#8B4513", image: "/images/resources/corefueldirty.png" },
  { id: "corn", name: "Corn", color: "#95A5A6", image: "/images/resources/corn.png" },
  { id: "corn_mash", name: "Corn Mash", color: "#C0C0C0", image: "/images/resources/cornmash.png" },
  { id: "crew_supplies", name: "Crew Supplies", color: "#95A5A6", image: "/images/resources/crewsupplies.png" },
  { id: "crude_oil", name: "Crude Oil", color: "#000000", image: "/images/resources/crudeoil.png" },
  { id: "depleted_uranium", name: "Depleted Uranium", color: "#95A5A6", image: "/images/resources/depleteduranium.png" },
  { id: "diamond", name: "Diamond", color: "#95A5A6", image: "/images/resources/diamond.png" },
  { id: "diamond_paste", name: "Diamond Paste", color: "#95A5A6", image: "/images/resources/diamondpaste.png" },
  { id: "diesel", name: "Diesel", color: "#8B4513", image: "/images/resources/diesel.png" },
  { id: "dirt", name: "Dirt", color: "#95A5A6", image: "/images/resources/dirt.png" },
  { id: "disinfectant", name: "Disinfectant", color: "#95A5A6", image: "/images/resources/disinfectant.png" },
  { id: "eggs", name: "Eggs", color: "#95A5A6", image: "/images/resources/eggs.png" },
  { id: "electricity", name: "Electricity", color: "#DDA0DD", image: "/images/resources/electricity.png" },
  { id: "electronics", name: "Electronics", color: "#95A5A6", image: "/images/resources/electronics1.png" },
  { id: "electronics_ii", name: "Electronics II", color: "#95A5A6", image: "/images/resources/electronics2.png" },
  { id: "electronics_iii", name: "Electronics III", color: "#95A5A6", image: "/images/resources/electronics3.png" },
  { id: "electronics_iv", name: "Electronics IV", color: "#95A5A6", image: "/images/resources/electronics4.png" },
  { id: "enriched_uranium_20", name: "Enriched Uranium (20%)", color: "#95A5A6", image: "/images/resources/uraniumenriched20perc.png" },
  { id: "enriched_uranium_4", name: "Enriched Uranium (4%)", color: "#95A5A6", image: "/images/resources/uraniumenriched4perc.png" },
  { id: "ethanol", name: "Ethanol", color: "#95A5A6", image: "/images/resources/ethanol.png" },
  { id: "exhaust", name: "Exhaust", color: "#A9A9A9", image: "/images/resources/exhaust.png" },
  { id: "fertilizer_organic", name: "Fertilizer (Organic)", color: "#95A5A6", image: "/images/resources/fertilizerorganic.png" },
  { id: "fertilizer_i", name: "Fertilizer I", color: "#95A5A6", image: "/images/resources/fertilizer.png" },
  { id: "fertilizer_ii", name: "Fertilizer II", color: "#95A5A6", image: "/images/resources/fertilizer2.png" },
  { id: "filter_media", name: "Filter Media", color: "#95A5A6", image: "/images/resources/filtermedia.png" },
  { id: "fission_product", name: "Fission Product", color: "#95A5A6", image: "/images/resources/fissionproduct.png" },
  { id: "flour", name: "Flour", color: "#F8C471", image: "/images/resources/flour.png" },
  { id: "flowers", name: "Flowers", color: "#95A5A6", image: "/images/resources/flowers.png" },
  { id: "food_pack", name: "Food Pack", color: "#95A5A6", image: "/images/resources/foodpack.png" },
  { id: "fruit", name: "Fruit", color: "#FF6347", image: "/images/resources/fruits.png" },
  { id: "fuel_gas", name: "Fuel Gas", color: "#8B4513", image: "/images/resources/fuelgas.png" },
  { id: "glass", name: "Glass", color: "#E0FFFF", image: "/images/resources/glass.png" },
  { id: "glass_mix", name: "Glass Mix", color: "#E0FFFF", image: "/images/resources/glassmix.png" },
  { id: "gold", name: "Gold", color: "#FFD700", image: "/images/resources/gold.png" },
  { id: "gold_ore", name: "Gold Ore", color: "#FFD700", image: "/images/resources/goldore.png" },
  { id: "gold_ore_concentrate", name: "Gold Ore Concentrate", color: "#FFD700", image: "/images/resources/goldoreconcentrate.png" },
  { id: "gold_ore_crushed", name: "Gold Ore Crushed", color: "#FFD700", image: "/images/resources/goldorecrushed.png" },
  { id: "gold_ore_powder", name: "Gold Ore Powder", color: "#FFD700", image: "/images/resources/goldorepowder.png" },
  { id: "gold_scrap", name: "Gold Scrap", color: "#FFD700", image: "/images/resources/goldscrap.png" },
  { id: "gold_scrap_pressed", name: "Gold Scrap Pressed", color: "#FFD700", image: "/images/resources/goldscrappressed.png" },
  { id: "graphite", name: "Graphite", color: "#95A5A6", image: "/images/resources/graphite.png" },
  { id: "gravel", name: "Gravel", color: "#C0C0C0", image: "/images/resources/gravel.png" },
  { id: "heavy_oil", name: "Heavy Oil", color: "#000000", image: "/images/resources/oilheavy.png" },
  { id: "household_appliances", name: "Household Appliances", color: "#95A5A6", image: "/images/resources/householdappliances.png" },
  { id: "household_goods", name: "Household Goods", color: "#95A5A6", image: "/images/resources/householdgoods.png" },
  { id: "hydrated_alumina", name: "Hydrated Alumina", color: "#95A5A6", image: "/images/resources/aluminahydrated.png" },
  { id: "hydrogen", name: "Hydrogen", color: "#E6E6FA", image: "/images/resources/hydrogen.png" },
  { id: "hydrogen_fluoride", name: "Hydrogen Fluoride", color: "#E6E6FA", image: "/images/resources/hydrogenfluoride.png" },
  { id: "imported_goods", name: "Imported Goods", color: "#95A5A6", image: "/images/resources/importedgoods.png" },
  { id: "impure_copper", name: "Impure Copper", color: "#B87333", image: "/images/resources/copperimpure.png" },
  { id: "iron", name: "Iron", color: "#A19D94", image: "/images/resources/iron.png" },
  { id: "iron_ore", name: "Iron Ore", color: "#A19D94", image: "/images/resources/ironore.png" },
  { id: "iron_ore_crushed", name: "Iron Ore Crushed", color: "#A19D94", image: "/images/resources/ironcrushed.png" },
  { id: "iron_scrap", name: "Iron Scrap", color: "#A19D94", image: "/images/resources/ironscrap.png" },
  { id: "iron_scrap_pressed", name: "Iron Scrap Pressed", color: "#A19D94", image: "/images/resources/ironscrappressed.png" },
  { id: "lab_equipment", name: "Lab Equipment", color: "#95A5A6", image: "/images/resources/labequipment1.png" },
  { id: "lab_equipment_ii", name: "Lab Equipment II", color: "#95A5A6", image: "/images/resources/labequipment2.png" },
  { id: "lab_equipment_iii", name: "Lab Equipment III", color: "#95A5A6", image: "/images/resources/labequipment3.png" },
  { id: "lab_equipment_iv", name: "Lab Equipment IV", color: "#95A5A6", image: "/images/resources/labequipment4.png" },
  { id: "lens", name: "Lens", color: "#95A5A6", image: "/images/resources/lens.png" },
  { id: "light_oil", name: "Light Oil", color: "#000000", image: "/images/resources/oillight.png" },
  { id: "limestone", name: "Limestone", color: "#D3D3D3", image: "/images/resources/limestone.png" },
  { id: "luxury_goods", name: "Luxury Goods", color: "#95A5A6", image: "/images/resources/luxurygoods.png" },
  { id: "mox_rod", name: "MOX Rod", color: "#95A5A6", image: "/images/resources/moxrod.png" },
  { id: "maintenance_i", name: "Maintenance I", color: "#95A5A6", image: "/images/resources/maintenance1.png" },
  { id: "maintenance_ii", name: "Maintenance II", color: "#95A5A6", image: "/images/resources/maintenance2.png" },
  { id: "maintenance_iii", name: "Maintenance III", color: "#95A5A6", image: "/images/resources/maintenance3.png" },
  { id: "manufactured_sand", name: "Manufactured Sand", color: "#F4A460", image: "/images/resources/manufacturedsand.png" },
  { id: "meat", name: "Meat", color: "#CD5C5C", image: "/images/resources/meat.png" },
  { id: "meat_trimmings", name: "Meat Trimmings", color: "#CD5C5C", image: "/images/resources/meattrimmings.png" },
  { id: "mechanical_parts", name: "Mechanical Parts", color: "#95A5A6", image: "/images/resources/mechanicalparts.png" },
  { id: "mechanical_power", name: "Mechanical Power", color: "#95A5A6", image: "/images/resources/mechanicalpower.png" },
  { id: "medical_equipment", name: "Medical Equipment", color: "#95A5A6", image: "/images/resources/medicalequipment.png" },
  { id: "medical_supplies", name: "Medical Supplies", color: "#95A5A6", image: "/images/resources/medicalsupplies.png" },
  { id: "medical_supplies_ii", name: "Medical Supplies II", color: "#95A5A6", image: "/images/resources/medicalsupplies2.png" },
  { id: "medical_supplies_iii", name: "Medical Supplies III", color: "#95A5A6", image: "/images/resources/medicalsupplies3.png" },
  { id: "medium_oil", name: "Medium Oil", color: "#000000", image: "/images/resources/oilmedium.png" },
  { id: "microchips", name: "Microchips", color: "#95A5A6", image: "/images/resources/microchip.png" },
  { id: "microchips_stage_1_a", name: "Microchips Stage 1 A", color: "#95A5A6", image: "/images/resources/microchipwafer1a.png" },
  { id: "microchips_stage_1_b", name: "Microchips Stage 1 B", color: "#95A5A6", image: "/images/resources/microchipwafer1b.png" },
  { id: "microchips_stage_1_c", name: "Microchips Stage 1 C", color: "#95A5A6", image: "/images/resources/microchipwafer1c.png" },
  { id: "microchips_stage_2_a", name: "Microchips Stage 2 A", color: "#95A5A6", image: "/images/resources/microchipwafer2a.png" },
  { id: "microchips_stage_2_b", name: "Microchips Stage 2 B", color: "#95A5A6", image: "/images/resources/microchipwafer2b.png" },
  { id: "microchips_stage_2_c", name: "Microchips Stage 2 C", color: "#95A5A6", image: "/images/resources/microchipwafer2c.png" },
  { id: "microchips_stage_3_a", name: "Microchips Stage 3 A", color: "#95A5A6", image: "/images/resources/microchipwafer3a.png" },
  { id: "microchips_stage_3_b", name: "Microchips Stage 3 B", color: "#95A5A6", image: "/images/resources/microchipwafer3b.png" },
  { id: "microchips_stage_3_c", name: "Microchips Stage 3 C", color: "#95A5A6", image: "/images/resources/microchipwafer3c.png" },
  { id: "microchips_stage_4_a", name: "Microchips Stage 4 A", color: "#95A5A6", image: "/images/resources/microchipwafer4a.png" },
  { id: "microchips_stage_4_b", name: "Microchips Stage 4 B", color: "#95A5A6", image: "/images/resources/microchipwafer4b.png" },
  { id: "molten_aluminum", name: "Molten Aluminum", color: "#C0C0C0", image: "/images/resources/aluminummolten.png" },
  { id: "molten_copper", name: "Molten Copper", color: "#B87333", image: "/images/resources/coppermolten.png" },
  { id: "molten_glass", name: "Molten Glass", color: "#E0FFFF", image: "/images/resources/glassmolten.png" },
  { id: "molten_iron", name: "Molten Iron", color: "#A19D94", image: "/images/resources/ironmolten.png" },
  { id: "molten_silicon", name: "Molten Silicon", color: "#95A5A6", image: "/images/resources/siliconmolten.png" },
  { id: "molten_steel", name: "Molten Steel", color: "#708090", image: "/images/resources/steelmolten.png" },
  { id: "molten_titanium", name: "Molten Titanium", color: "#95A5A6", image: "/images/resources/titaniummolten.png" },
  { id: "molten_titanium_alloy", name: "Molten Titanium Alloy", color: "#95A5A6", image: "/images/resources/titaniumalloymolten.png" },
  { id: "morphine", name: "Morphine", color: "#95A5A6", image: "/images/resources/morphine.png" },
  { id: "naphtha", name: "Naphtha", color: "#95A5A6", image: "/images/resources/naphtha.png" },
  { id: "nitrogen", name: "Nitrogen", color: "#95A5A6", image: "/images/resources/nitrogen.png" },
  { id: "office_supplies", name: "Office Supplies", color: "#95A5A6", image: "/images/resources/officesupplies.png" },
  { id: "oxygen", name: "Oxygen", color: "#ADD8E6", image: "/images/resources/oxygen.png" },
  { id: "pcb", name: "PCB", color: "#95A5A6", image: "/images/resources/pcb.png" },
  { id: "paper", name: "Paper", color: "#95A5A6", image: "/images/resources/paper.png" },
  { id: "plastic", name: "Plastic", color: "#95A5A6", image: "/images/resources/plastic.png" },
  { id: "plutonium", name: "Plutonium", color: "#95A5A6", image: "/images/resources/plutonium.png" },
  { id: "poppy", name: "Poppy", color: "#95A5A6", image: "/images/resources/poppy.png" },
  { id: "potato", name: "Potato", color: "#95A5A6", image: "/images/resources/potato.png" },
  { id: "quartz", name: "Quartz", color: "#95A5A6", image: "/images/resources/quartz.png" },
  { id: "quartz_crushed", name: "Quartz Crushed", color: "#95A5A6", image: "/images/resources/quartzcrushed.png" },
  { id: "rail_parts", name: "Rail Parts", color: "#95A5A6", image: "/images/resources/railparts.png" },
  { id: "recyclables", name: "Recyclables", color: "#95A5A6", image: "/images/resources/metalscrap.png" },
  { id: "recyclables_pressed", name: "Recyclables Pressed", color: "#95A5A6", image: "/images/resources/recyclablespressed.png" },
  { id: "red_mud", name: "Red Mud", color: "#95A5A6", image: "/images/resources/redmud.png" },
  { id: "reprocessed_uranium_1", name: "Reprocessed Uranium (1%)", color: "#95A5A6", image: "/images/resources/reprocesseduranium.png" },
  { id: "retired_waste", name: "Retired Waste", color: "#8B4513", image: "/images/resources/retiredwaste.png" },
  { id: "rock", name: "Rock", color: "#95A5A6", image: "/images/resources/rock.png" },
  { id: "rubber", name: "Rubber", color: "#95A5A6", image: "/images/resources/rubber.png" },
  { id: "salt", name: "Salt", color: "#F5F5F5", image: "/images/resources/salt.png" },
  { id: "sand", name: "Sand", color: "#F4A460", image: "/images/resources/sand.png" },
  { id: "sapphire_wafer", name: "Sapphire Wafer", color: "#95A5A6", image: "/images/resources/sapphirewafer.png" },
  { id: "sausage", name: "Sausage", color: "#95A5A6", image: "/images/resources/sausage.png" },
  { id: "seawater", name: "Seawater", color: "#1E90FF", image: "/images/resources/seawater.png" },
  { id: "server", name: "Server", color: "#95A5A6", image: "/images/resources/server.png" },
  { id: "silicon_poly", name: "Silicon (Poly)", color: "#95A5A6", image: "/images/resources/silicon.png" },
  { id: "silicon_wafer", name: "Silicon Wafer", color: "#95A5A6", image: "/images/resources/monowafer.png" },
  { id: "slag", name: "Slag", color: "#95A5A6", image: "/images/resources/slag.png" },
  { id: "slag_crushed", name: "Slag Crushed", color: "#95A5A6", image: "/images/resources/slagcrushed.png" },
  { id: "sludge", name: "Sludge", color: "#95A5A6", image: "/images/resources/sludge.png" },
  { id: "snack", name: "Snack", color: "#95A5A6", image: "/images/resources/snack.png" },
  { id: "solar_cell", name: "Solar Cell", color: "#95A5A6", image: "/images/resources/solarcell.png" },
  { id: "solar_cell_mono", name: "Solar Cell Mono", color: "#95A5A6", image: "/images/resources/solarcellmono.png" },
  { id: "sour_water", name: "Sour Water", color: "#1E90FF", image: "/images/resources/sourwater.png" },
  { id: "soybean", name: "Soybean", color: "#95A5A6", image: "/images/resources/soybean.png" },
  { id: "space_probe_parts", name: "Space Probe Parts", color: "#95A5A6", image: "/images/resources/spaceprobeparts.png" },
  { id: "spent_fuel", name: "Spent Fuel", color: "#8B4513", image: "/images/resources/spentfuel.png" },
  { id: "spent_mox", name: "Spent MOX", color: "#95A5A6", image: "/images/resources/spentmox.png" },
  { id: "station_parts", name: "Station Parts", color: "#95A5A6", image: "/images/resources/spacestationparts2.png" },
  { id: "station_parts_basic", name: "Station Parts (Basic)", color: "#95A5A6", image: "/images/resources/spacestationparts1.png" },
  { id: "steam_depleted", name: "Steam (Depleted)", color: "#FF6B6B", image: "/images/resources/steamdepleated.png" },
  { id: "steam_high", name: "Steam (High)", color: "#FF6B6B", image: "/images/resources/steamhp.png" },
  { id: "steam_low", name: "Steam (Low)", color: "#FF6B6B", image: "/images/resources/steamlp.png" },
  { id: "steam_super", name: "Steam (Super)", color: "#FF6B6B", image: "/images/resources/steamsp.png" },
  { id: "steel", name: "Steel", color: "#708090", image: "/images/resources/steel.png" },
  { id: "sugar", name: "Sugar", color: "#F5F5F5", image: "/images/resources/sugar.png" },
  { id: "sugar_cane", name: "Sugar Cane", color: "#F5F5F5", image: "/images/resources/sugarcane.png" },
  { id: "sulfur", name: "Sulfur", color: "#FFFF00", image: "/images/resources/sulfur.png" },
  { id: "titanium_alloy", name: "Titanium Alloy", color: "#95A5A6", image: "/images/resources/titanium.png" },
  { id: "titanium_chloride", name: "Titanium Chloride", color: "#95A5A6", image: "/images/resources/titaniumchloride.png" },
  { id: "titanium_chloride_pure", name: "Titanium Chloride (Pure)", color: "#95A5A6", image: "/images/resources/titaniumchloridepure.png" },
  { id: "titanium_ore", name: "Titanium Ore", color: "#8B4513", image: "/images/resources/titaniumore.png" },
  { id: "titanium_ore_crushed", name: "Titanium Ore Crushed", color: "#8B4513", image: "/images/resources/titaniumorecrushed.png" },
  { id: "titanium_slag", name: "Titanium Slag", color: "#95A5A6", image: "/images/resources/titaniumslag.png" },
  { id: "titanium_sponge", name: "Titanium Sponge", color: "#95A5A6", image: "/images/resources/titaniumsponge.png" },
  { id: "tofu", name: "Tofu", color: "#95A5A6", image: "/images/resources/tofu.png" },
  { id: "toxic_slurry", name: "Toxic Slurry", color: "#95A5A6", image: "/images/resources/toxicslurry.png" },
  { id: "tree_sapling", name: "Tree Sapling", color: "#95A5A6", image: "/images/resources/treesapling.png" },
  { id: "uranium_ore", name: "Uranium Ore", color: "#8B4513", image: "/images/resources/uraniumore.png" },
  { id: "uranium_ore_powder", name: "Uranium Ore Powder", color: "#8B4513", image: "/images/resources/uraniumorecrushed.png" },
  { id: "uranium_rod", name: "Uranium Rod", color: "#95A5A6", image: "/images/resources/uraniumrod.png" },
  { id: "vegetables", name: "Vegetables", color: "#32CD32", image: "/images/resources/vegetables.png" },
  { id: "vehicle_parts", name: "Vehicle Parts", color: "#95A5A6", image: "/images/resources/vehicleparts1.png" },
  { id: "vehicle_parts_ii", name: "Vehicle Parts II", color: "#95A5A6", image: "/images/resources/vehicleparts2.png" },
  { id: "vehicle_parts_iii", name: "Vehicle Parts III", color: "#95A5A6", image: "/images/resources/vehicleparts3.png" },
  { id: "waste", name: "Waste", color: "#8B4513", image: "/images/resources/waste.png" },
  { id: "waste_pressed", name: "Waste Pressed", color: "#8B4513", image: "/images/resources/wastepressed.png" },
  { id: "waste_water", name: "Waste Water", color: "#1E90FF", image: "/images/resources/wastewater.png" },
  { id: "water", name: "Water", color: "#1E90FF", image: "/images/resources/water.png" },
  { id: "water_pollution", name: "Water Pollution", color: "#1E90FF", image: "/images/resources/waterpollution.png" },
  { id: "wheat", name: "Wheat", color: "#F39C12", image: "/images/resources/wheat.png" },
  { id: "wood", name: "Wood", color: "#95A5A6", image: "/images/resources/wood.png" },
  { id: "woodchips", name: "Woodchips", color: "#95A5A6", image: "/images/resources/woodchips.png" },
  { id: "yellowcake", name: "Yellowcake", color: "#95A5A6", image: "/images/resources/yellowcake.png" },
];

export const coiBuildings: Building[] = [
  { id: "air_separator", name: "Air Separator", image: "/images/buildings/airseparator.png" },
  { id: "alloy_mixer", name: "Alloy Mixer", image: "/images/buildings/alloymixer.png" },
  { id: "aluminum_cell", name: "Aluminum Cell", image: "/images/buildings/aluminumcell.png" },
  { id: "anaerobic_digester", name: "Anaerobic Digester", image: "/images/buildings/anaerobicdigester.png" },
  { id: "arc_furnace", name: "Arc Furnace", image: "/images/buildings/arcfurnace.png" },
  { id: "arc_furnace_ii", name: "Arc Furnace II", image: "/images/buildings/arcfurnace2.png" },
  { 
    id: "assembly_i", 
    name: "Assembly I", 
    image: "/images/buildings/assemblymanual.png",
    metadata: [
      { key: "workers", value: "4" },
      { key: "electricity", value: "40" },
      { key: "maintenance", value: "none" },
      { key: "version", value: "0.7.0.0" }
    ]
  },
  { id: "assembly_ii", name: "Assembly II", image: "/images/buildings/assemblyelectrified.png" },
  { id: "assembly_iii", name: "Assembly III", image: "/images/buildings/assemblyelectrifiedt2.png" },
  { id: "assembly_iv", name: "Assembly IV", image: "/images/buildings/assemblyrobotict1.png" },
  { id: "assembly_v", name: "Assembly V", image: "/images/buildings/assemblyrobotict2.png" },
  { id: "baking_unit", name: "Baking Unit", image: "/images/buildings/bakingunit.png" },
  { id: "basic_distiller", name: "Basic Distiller", image: "/images/buildings/basicdieseldistiller.png" },
  { id: "blast_furnace", name: "Blast Furnace", image: "/images/buildings/smeltingfurnacet1.png" },
  { id: "blast_furnace_ii", name: "Blast Furnace II", image: "/images/buildings/smeltingfurnacet2.png" },
  { id: "boiler", name: "Boiler", image: "/images/buildings/boilercoal.png" },
  { id: "boiler_electric", name: "Boiler (Electric)", image: "/images/buildings/boilerelectric.png" },
  { id: "boiler_gas", name: "Boiler (Gas)", image: "/images/buildings/boilergas.png" },
  { id: "burner_solid", name: "Burner (Solid)", image: "/images/buildings/burner.png" },
  { id: "chemical_plant", name: "Chemical Plant", image: "/images/buildings/chemicalplant.png" },
  { id: "chemical_plant_ii", name: "Chemical Plant II", image: "/images/buildings/chemicalplant2.png" },
  { id: "chicken_farm", name: "Chicken Farm", image: "/images/buildings/chickenfarm.png" },
  { id: "coal_maker", name: "Coal Maker", image: "/images/buildings/charcoalmaker.png" },
  { id: "compactor", name: "Compactor", image: "/images/buildings/compactor.png" },
  { id: "concrete_mixer", name: "Concrete Mixer", image: "/images/buildings/concretemixer.png" },
  { id: "concrete_mixer_ii", name: "Concrete Mixer II", image: "/images/buildings/concretemixert2.png" },
  { id: "concrete_mixer_iii", name: "Concrete Mixer III", image: "/images/buildings/concretemixert3.png" },
  { id: "cooled_caster", name: "Cooled Caster", image: "/images/buildings/castercooled.png" },
  { id: "cooled_caster_ii", name: "Cooled Caster II", image: "/images/buildings/castercooledt2.png" },
  { id: "cooling_tower", name: "Cooling Tower", image: "/images/buildings/coolingtowert1.png" },
  { id: "cooling_tower_large", name: "Cooling Tower (Large)", image: "/images/buildings/coolingtowert2.png" },
  { id: "copper_electrolysis", name: "Copper Electrolysis", image: "/images/buildings/copperelectrolysis.png" },
  { id: "cracking_unit", name: "Cracking Unit", image: "/images/buildings/hydrocrackert1.png" },
  { id: "crusher", name: "Crusher", image: "/images/buildings/crusher.png" },
  { id: "crusher_large", name: "Crusher (Large)", image: "/images/buildings/crusherlarge.png" },
  { id: "crystallizer", name: "Crystallizer", image: "/images/buildings/siliconcrystallizer.png" },
  { id: "data_center", name: "Data Center", image: "/images/buildings/datacenter.png" },
  { id: "diamond_reactor", name: "Diamond Reactor", image: "/images/buildings/diamondreactor.png" },
  { id: "diesel_generator", name: "Diesel Generator", image: "/images/buildings/dieselgenerator.png" },
  { id: "diesel_generator_ii", name: "Diesel Generator II", image: "/images/buildings/dieselgeneratort2.png" },
  { id: "distillation_stage_i", name: "Distillation (Stage I)", image: "/images/buildings/distillationtowert1.png" },
  { id: "distillation_stage_ii", name: "Distillation (Stage II)", image: "/images/buildings/distillationtowert2.png" },
  { id: "distillation_stage_iii", name: "Distillation (Stage III)", image: "/images/buildings/distillationtowert3.png" },
  { id: "electrolyzer", name: "Electrolyzer", image: "/images/buildings/electrolyzer.png" },
  { id: "electrolyzer_ii", name: "Electrolyzer II", image: "/images/buildings/electrolyzert2.png" },
  { id: "enrichment_plant", name: "Enrichment Plant", image: "/images/buildings/uraniumenrichmentplant.png" },
  { id: "evaporation_pond", name: "Evaporation Pond", image: "/images/buildings/evaporationpond.png" },
  { id: "evaporation_pond_heated", name: "Evaporation Pond (Heated)", image: "/images/buildings/evaporationpondheated.png" },
  { id: "exhaust_scrubber", name: "Exhaust Scrubber", image: "/images/buildings/exhaustscrubber.png" },
  { id: "farm", name: "Farm", image: "/images/buildings/farmt1.png" },
  { id: "fast_breeder_reactor", name: "Fast Breeder Reactor", image: "/images/buildings/fastbreederreactor.png" },
  { id: "fermentation_tank", name: "Fermentation Tank", image: "/images/buildings/fermentationtank.png" },
  { id: "flare", name: "Flare", image: "/images/buildings/flare.png" },
  { id: "food_processor", name: "Food Processor", image: "/images/buildings/foodprocessor.png" },
  { id: "gas_injection_pump", name: "Gas Injection Pump", image: "/images/buildings/gasinjectionpump.png" },
  { id: "glass_maker", name: "Glass Maker", image: "/images/buildings/glassmakert1.png" },
  { id: "glass_maker_ii", name: "Glass Maker II", image: "/images/buildings/glassmakert2.png" },
  { id: "gold_furnace", name: "Gold Furnace", image: "/images/buildings/goldfurnace.png" },
  { id: "greenhouse", name: "Greenhouse", image: "/images/buildings/farmt3.png" },
  { id: "greenhouse_ii", name: "Greenhouse II", image: "/images/buildings/farmt4.png" },
  { id: "groundwater_pump", name: "Groundwater Pump", image: "/images/buildings/landwaterpump.png" },
  { id: "highpressure_turbine", name: "High-Pressure Turbine", image: "/images/buildings/turbinehighpress.png" },
  { id: "highpressure_turbine_ii", name: "High-Pressure Turbine II", image: "/images/buildings/turbinehighpresst2.png" },
  { id: "hydrogen_reformer", name: "Hydrogen Reformer", image: "/images/buildings/hydrogenreformer.png" },
  { id: "incineration_plant", name: "Incineration Plant", image: "/images/buildings/incinerationplant.png" },
  { id: "irrigated_farm", name: "Irrigated Farm", image: "/images/buildings/farmt2.png" },
  { id: "kiln", name: "Kiln", image: "/images/buildings/bricksmaker.png" },
  { id: "lens_polisher", name: "Lens Polisher", image: "/images/buildings/lensmaker.png" },
  { id: "liquid_dump", name: "Liquid Dump", image: "/images/buildings/wastedump.png" },
  { id: "lowpressure_turbine", name: "Low-Pressure Turbine", image: "/images/buildings/turbinelowpress.png" },
  { id: "lowpressure_turbine_ii", name: "Low-Pressure Turbine II", image: "/images/buildings/turbinelowpresst2.png" },
  { id: "maintenance_depot", name: "Maintenance Depot", image: "/images/buildings/maintenancedepott1.png" },
  { id: "maintenance_depot_basic", name: "Maintenance Depot (Basic)", image: "/images/buildings/maintenancedepott0.png" },
  { id: "maintenance_ii_depot", name: "Maintenance II Depot", image: "/images/buildings/maintenancedepott2.png" },
  { id: "maintenance_iii_depot", name: "Maintenance III Depot", image: "/images/buildings/maintenancedepott3.png" },
  { id: "metal_caster", name: "Metal Caster", image: "/images/buildings/caster.png" },
  { id: "metal_caster_ii", name: "Metal Caster II", image: "/images/buildings/castert2.png" },
  { id: "microchip_machine", name: "Microchip Machine", image: "/images/buildings/microchipmachine.png" },
  { id: "microchip_machine_ii", name: "Microchip Machine II", image: "/images/buildings/microchipmachinet2.png" },
  { id: "mill", name: "Mill", image: "/images/buildings/foodmill.png" },
  { id: "mixer", name: "Mixer", image: "/images/buildings/industrialmixer.png" },
  { id: "mixer_ii", name: "Mixer II", image: "/images/buildings/industrialmixert2.png" },
  { id: "nuclear_reactor", name: "Nuclear Reactor", image: "/images/buildings/nuclearreactor.png" },
  { id: "nuclear_reactor_ii", name: "Nuclear Reactor II", image: "/images/buildings/nuclearreactort2.png" },
  { id: "nuclear_reprocessing_plant", name: "Nuclear Reprocessing Plant", image: "/images/buildings/nuclearreprocessingplant.png" },
  { id: "oil_pump", name: "Oil Pump", image: "/images/buildings/oilpump.png" },
  { id: "oxygen_furnace", name: "Oxygen Furnace", image: "/images/buildings/oxygenfurnace.png" },
  { id: "oxygen_furnace_ii", name: "Oxygen Furnace II", image: "/images/buildings/oxygenfurnacet2.png" },
  { id: "polymerization_plant", name: "Polymerization Plant", image: "/images/buildings/polymerizationplant.png" },
  { id: "power_generator", name: "Power Generator", image: "/images/buildings/powergeneratort1.png" },
  { id: "power_generator_large", name: "Power Generator (Large)", image: "/images/buildings/powergeneratort2.png" },
  { id: "rainwater_harvester", name: "Rainwater Harvester", image: "/images/buildings/rainwaterharvester.png" },
  { id: "research_lab_i", name: "Research Lab I", image: "/images/buildings/researchlab2.png" },
  { id: "research_lab_ii", name: "Research Lab II", image: "/images/buildings/researchlab3.png" },
  { id: "research_lab_iii", name: "Research Lab III", image: "/images/buildings/researchlab4.png" },
  { id: "research_lab_iv", name: "Research Lab IV", image: "/images/buildings/researchlab5.png" },
  { id: "rotary_kiln", name: "Rotary Kiln", image: "/images/buildings/rotarykiln.png" },
  { id: "rotary_kiln_gas", name: "Rotary Kiln (Gas)", image: "/images/buildings/rotarykilngas.png" },
  { id: "rubber_maker", name: "Rubber Maker", image: "/images/buildings/vacuumdistillationtower.png" },
  { id: "seawater_pump", name: "Seawater Pump", image: "/images/buildings/oceanwaterpumpt1.png" },
  { id: "seawater_pump_tall", name: "Seawater Pump (Tall)", image: "/images/buildings/oceanwaterpumplarge.png" },
  { id: "settling_tank", name: "Settling Tank", image: "/images/buildings/settlingtank.png" },
  { id: "shredder", name: "Shredder", image: "/images/buildings/shredder.png" },
  { id: "silicon_reactor", name: "Silicon Reactor", image: "/images/buildings/siliconreactor.png" },
  { id: "smoke_stack", name: "Smoke Stack", image: "/images/buildings/smokestack.png" },
  { id: "smoke_stack_large", name: "Smoke Stack (Large)", image: "/images/buildings/smokestacklarge.png" },
  { id: "sour_water_stripper", name: "Sour Water Stripper", image: "/images/buildings/sourwaterstripper.png" },
  { id: "superpressure_turbine", name: "Super-Pressure Turbine", image: "/images/buildings/turbinesuperpress.png" },
  { id: "thermal_desalinator", name: "Thermal Desalinator", image: "/images/buildings/thermaldesalinator.png" },
  { id: "waste_sorting_plant", name: "Waste Sorting Plant", image: "/images/buildings/wastesortingplant.png" },
  { id: "wastewater_treatment", name: "Wastewater Treatment", image: "/images/buildings/watertreatmentplant.png" },
  { id: "water_chiller", name: "Water Chiller", image: "/images/buildings/waterchiller.png" },
];

export const coiRecipes: Recipe[] = [
  {
    id: "turbinesuperpress",
    name: "Turbinesuperpress",
    buildingId: "superpressure_turbine",
    inputs: [
      { resourceId: "steam_super", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 18000 },
      { resourceId: "steam_high", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "turbinehighpresst2",
    name: "Turbinehighpresst2",
    buildingId: "highpressure_turbine_ii",
    inputs: [
      { resourceId: "steam_high", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 12000 },
      { resourceId: "steam_low", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "turbinehighpress",
    name: "Turbinehighpress",
    buildingId: "highpressure_turbine",
    inputs: [
      { resourceId: "steam_high", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 6000 },
      { resourceId: "steam_low", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "turbinelowpresst2",
    name: "Turbinelowpresst2",
    buildingId: "lowpressure_turbine_ii",
    inputs: [
      { resourceId: "steam_low", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 6000 },
      { resourceId: "steam_depleted", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "turbinelowpress",
    name: "Turbinelowpress",
    buildingId: "lowpressure_turbine",
    inputs: [
      { resourceId: "steam_low", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_power", amount: 3000 },
      { resourceId: "steam_depleted", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "powergeneratort1",
    name: "Powergeneratort1",
    buildingId: "power_generator",
    inputs: [
      { resourceId: "mechanical_power", amount: 3000 },
    ],
    outputs: [
      { resourceId: "electricity", amount: 2000 },
    ],
    metadata: [
      { key: "time", value: "0" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "powergeneratort2",
    name: "Powergeneratort2",
    buildingId: "power_generator_large",
    inputs: [
      { resourceId: "mechanical_power", amount: 18000 },
    ],
    outputs: [
      { resourceId: "electricity", amount: 15000 },
    ],
    metadata: [
      { key: "time", value: "0" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "dieselgenerator",
    name: "Dieselgenerator",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "dieselgeneratort2",
    name: "Dieselgeneratort2",
    buildingId: "diesel_generator_ii",
    inputs: [
      { resourceId: "diesel", amount: 6 },
    ],
    outputs: [
      { resourceId: "electricity", amount: 5000 },
      { resourceId: "exhaust", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "wheatmilling",
    name: "Wheatmilling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "soybeanmilling",
    name: "Soybeanmilling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "canolamilling",
    name: "Canolamilling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cornmilling",
    name: "Cornmilling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "tofuproduction",
    name: "Tofuproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "meatprocessing",
    name: "Meatprocessing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "meatprocessingtrimmings",
    name: "Meatprocessingtrimmings",
    buildingId: "food_processor",
    inputs: [
      { resourceId: "chicken_carcass", amount: 10 },
    ],
    outputs: [
      { resourceId: "meat_trimmings", amount: 9 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sausageproduction",
    name: "Sausageproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "snackproductionpotato",
    name: "Snackproductionpotato",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "snackproductioncorn",
    name: "Snackproductioncorn",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sugarrefiningcane",
    name: "Sugarrefiningcane",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "breadproduction",
    name: "Breadproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cakeproduction",
    name: "Cakeproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "dieseldistillationbasic",
    name: "Dieseldistillationbasic",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "waterdesalinationbasic",
    name: "Waterdesalinationbasic",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "oilgroundpumping",
    name: "Oilgroundpumping",
    buildingId: "oil_pump",
    inputs: [
    ],
    outputs: [
      { resourceId: "crude_oil", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "15" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "landwaterpumping",
    name: "Landwaterpumping",
    buildingId: "groundwater_pump",
    inputs: [
    ],
    outputs: [
      { resourceId: "water", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "carbondioxideinjection",
    name: "Carbondioxideinjection",
    buildingId: "gas_injection_pump",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 12 },
      { resourceId: "seawater", amount: 4 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "oceanwaterpumping",
    name: "Oceanwaterpumping",
    buildingId: "seawater_pump",
    inputs: [
    ],
    outputs: [
      { resourceId: "seawater", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "oceanwaterpumpingt2",
    name: "Oceanwaterpumpingt2",
    buildingId: "seawater_pump_tall",
    inputs: [
    ],
    outputs: [
      { resourceId: "seawater", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationcoal",
    name: "Steamgenerationcoal",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationwood",
    name: "Steamgenerationwood",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationbiomass",
    name: "Steamgenerationbiomass",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationanimalfeed",
    name: "Steamgenerationanimalfeed",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationheavyoil",
    name: "Steamgenerationheavyoil",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationmediumoil",
    name: "Steamgenerationmediumoil",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationlightoil",
    name: "Steamgenerationlightoil",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationnaphtha",
    name: "Steamgenerationnaphtha",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationethanol",
    name: "Steamgenerationethanol",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationfuelgas",
    name: "Steamgenerationfuelgas",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationhydrogen",
    name: "Steamgenerationhydrogen",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationelectric",
    name: "Steamgenerationelectric",
    buildingId: "boiler_electric",
    inputs: [
      { resourceId: "water", amount: 4 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationelectrichalf",
    name: "Steamgenerationelectrichalf",
    buildingId: "boiler_electric",
    inputs: [
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "steam_high", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamgenerationspelectric",
    name: "Steamgenerationspelectric",
    buildingId: "boiler_electric",
    inputs: [
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
      { resourceId: "steam_super", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "brinemakingheated",
    name: "Brinemakingheated",
    buildingId: "evaporation_pond_heated",
    inputs: [
      { resourceId: "seawater", amount: 32 },
    ],
    outputs: [
      { resourceId: "brine", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "saltmakingheated",
    name: "Saltmakingheated",
    buildingId: "evaporation_pond_heated",
    inputs: [
      { resourceId: "seawater", amount: 48 },
    ],
    outputs: [
      { resourceId: "salt", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "saltmakingfrombrineheated",
    name: "Saltmakingfrombrineheated",
    buildingId: "evaporation_pond_heated",
    inputs: [
      { resourceId: "brine", amount: 32 },
    ],
    outputs: [
      { resourceId: "salt", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "brinemaking",
    name: "Brinemaking",
    buildingId: "evaporation_pond",
    inputs: [
      { resourceId: "seawater", amount: 32 },
    ],
    outputs: [
      { resourceId: "brine", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "saltmaking",
    name: "Saltmaking",
    buildingId: "evaporation_pond",
    inputs: [
      { resourceId: "seawater", amount: 48 },
    ],
    outputs: [
      { resourceId: "salt", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "saltmakingfrombrine",
    name: "Saltmakingfrombrine",
    buildingId: "evaporation_pond",
    inputs: [
      { resourceId: "brine", amount: 32 },
    ],
    outputs: [
      { resourceId: "salt", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "desalinationfromsp",
    name: "Desalinationfromsp",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "desalinationfromlp",
    name: "Desalinationfromlp",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "desalinationfromdepleted",
    name: "Desalinationfromdepleted",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "waterchilling",
    name: "Waterchilling",
    buildingId: "water_chiller",
    inputs: [
      { resourceId: "water", amount: 10 },
    ],
    outputs: [
      { resourceId: "chilled_water", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "simpleconcretemaking",
    name: "Simpleconcretemaking",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblyt5",
    name: "Cpassemblyt5",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblysteelt5",
    name: "Cpassemblysteelt5",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp2assemblyt5",
    name: "Cp2Assemblyt5",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp3assemblyt4",
    name: "Cp3Assemblyt4",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp4assemblyrobotict2",
    name: "Cp4Assemblyrobotict2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "mechpartsassemblyt5iron",
    name: "Mechpartsassemblyt5Iron",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "iron", amount: 20 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "mechpartsassemblyt5",
    name: "Mechpartsassemblyt5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "steel", amount: 8 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts1assemblyt5",
    name: "Vehicleparts1Assemblyt5",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "mechanical_parts", amount: 12 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts2assemblyt3",
    name: "Vehicleparts2Assemblyt3",
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
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts3assemblyt3",
    name: "Vehicleparts3Assemblyt3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "vehicle_parts_ii", amount: 4 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts_iii", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment1assemblyt4",
    name: "Labequipment1Assemblyt4",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "mechanical_parts", amount: 8 },
      { resourceId: "electronics", amount: 4 },
    ],
    outputs: [
      { resourceId: "lab_equipment", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment2assemblyt4",
    name: "Labequipment2Assemblyt4",
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
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment3assemblyt3",
    name: "Labequipment3Assemblyt3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 6 },
      { resourceId: "electronics_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "lab_equipment_iii", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment4assemblyt3",
    name: "Labequipment4Assemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "railpartsassemblyt3",
    name: "Railpartsassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "householdgoodsassemblyt4",
    name: "Householdgoodsassemblyt4",
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
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "householdappliancesassemblyt3",
    name: "Householdappliancesassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "luxurygoodsassemblyt3",
    name: "Luxurygoodsassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pcbassemblyt3",
    name: "Pcbassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronics2assemblyt3",
    name: "Electronics2Assemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "solarcellassemblyt3",
    name: "Solarcellassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "solarcellmonoassemblyt1",
    name: "Solarcellmonoassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronics3assemblyrobotict2",
    name: "Electronics3Assemblyrobotict2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronics4assembly",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "serverassemblyt2",
    name: "Serverassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "consumerelectronicsassemblyt1",
    name: "Consumerelectronicsassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalequipmentassemblyt3",
    name: "Medicalequipmentassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsuppliesassemblyt3",
    name: "Medicalsuppliesassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsupplies2assemblyt3",
    name: "Medicalsupplies2Assemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsupplies3assemblyt3",
    name: "Medicalsupplies3Assemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblyeggst3",
    name: "Foodpackassemblyeggst3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "eggs", amount: 3 },
      { resourceId: "bread", amount: 6 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblytofut3",
    name: "Foodpackassemblytofut3",
    buildingId: "assembly_v",
    inputs: [
      { resourceId: "tofu", amount: 6 },
      { resourceId: "vegetables", amount: 8 },
    ],
    outputs: [
      { resourceId: "food_pack", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "officesuppliesassemblyt3",
    name: "Officesuppliesassemblyt3",
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
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compositepanelassemblyt3",
    name: "Compositepanelassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compositecorebasicassemblyt3",
    name: "Compositecorebasicassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compositecoreassembly",
    name: "Compositecoreassembly",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "stationpartsbasicassemblyt3",
    name: "Stationpartsbasicassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "stationpartsassembly",
    name: "Stationpartsassembly",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crewsuppliesassemblyt3",
    name: "Crewsuppliesassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "probepartsassembly",
    name: "Probepartsassembly",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compactreactorassembly",
    name: "Compactreactorassembly",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "asteroidboosterpartsassembly",
    name: "Asteroidboosterpartsassembly",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblyt4",
    name: "Cpassemblyt4",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblysteelt4",
    name: "Cpassemblysteelt4",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp2assemblyt4",
    name: "Cp2Assemblyt4",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp3assemblyt3",
    name: "Cp3Assemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp4assemblyrobotict1",
    name: "Cp4Assemblyrobotict1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "mechpartsassemblyt4iron",
    name: "Mechpartsassemblyt4Iron",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "iron", amount: 10 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "mechpartsassemblyt4",
    name: "Mechpartsassemblyt4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts1assemblyt4",
    name: "Vehicleparts1Assemblyt4",
    buildingId: "assembly_iv",
    inputs: [
      { resourceId: "mechanical_parts", amount: 6 },
      { resourceId: "electronics", amount: 2 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts2assemblyt2",
    name: "Vehicleparts2Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts3assemblyt2",
    name: "Vehicleparts3Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment2assemblyt3",
    name: "Labequipment2Assemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment3assemblyt2",
    name: "Labequipment3Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment4assemblyt2",
    name: "Labequipment4Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "railpartsassemblyt2",
    name: "Railpartsassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "householdgoodsassemblyt3",
    name: "Householdgoodsassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "householdappliancesassemblyt2",
    name: "Householdappliancesassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "luxurygoodsassemblyt2",
    name: "Luxurygoodsassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pcbassemblyt2",
    name: "Pcbassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronicsassemblyt4",
    name: "Electronicsassemblyt4",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronics2assemblyt2",
    name: "Electronics2Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumrodsassemblyt2",
    name: "Uraniumrodsassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumenrichedassemblyt1",
    name: "Uraniumenrichedassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "solarcellassemblyt2",
    name: "Solarcellassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronics3assemblyrobotict1",
    name: "Electronics3Assemblyrobotict1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "serverassemblyt1",
    name: "Serverassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalequipmentassemblyt2",
    name: "Medicalequipmentassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsuppliesassemblyt2",
    name: "Medicalsuppliesassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsupplies2assemblyt2",
    name: "Medicalsupplies2Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsupplies3assemblyt2",
    name: "Medicalsupplies3Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblymeatt2",
    name: "Foodpackassemblymeatt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblyeggst2",
    name: "Foodpackassemblyeggst2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblytofut2",
    name: "Foodpackassemblytofut2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "officesuppliesassemblyt2",
    name: "Officesuppliesassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compositepanelassemblyt2",
    name: "Compositepanelassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compositecorebasicassemblyt2",
    name: "Compositecorebasicassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "stationpartsbasicassemblyt2",
    name: "Stationpartsbasicassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crewsuppliesassemblyt2",
    name: "Crewsuppliesassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblyt3",
    name: "Cpassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblysteelt3",
    name: "Cpassemblysteelt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp2assemblyt3",
    name: "Cp2Assemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp3assemblyt2",
    name: "Cp3Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp4assemblyelectrifiedt2",
    name: "Cp4Assemblyelectrifiedt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "mechpartsassemblyt3iron",
    name: "Mechpartsassemblyt3Iron",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "iron", amount: 5 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "mechpartsassemblyt3",
    name: "Mechpartsassemblyt3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "steel", amount: 4 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts1assemblyt3",
    name: "Vehicleparts1Assemblyt3",
    buildingId: "assembly_iii",
    inputs: [
      { resourceId: "mechanical_parts", amount: 3 },
      { resourceId: "electronics", amount: 1 },
    ],
    outputs: [
      { resourceId: "vehicle_parts", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts3assemblyt1",
    name: "Vehicleparts3Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment1assemblyt2",
    name: "Labequipment1Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment2assemblyt2",
    name: "Labequipment2Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment3assemblyt1",
    name: "Labequipment3Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "railpartsassemblyt1",
    name: "Railpartsassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "householdgoodsassemblyt2",
    name: "Householdgoodsassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "householdappliancesassemblyt1",
    name: "Householdappliancesassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "luxurygoodsassemblyt1",
    name: "Luxurygoodsassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pcbassemblyt1",
    name: "Pcbassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronicsassemblyt3",
    name: "Electronicsassemblyt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronics2assemblyt1",
    name: "Electronics2Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumrodsassemblyt1",
    name: "Uraniumrodsassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "solarcellassemblyt1",
    name: "Solarcellassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalequipmentassemblyt1",
    name: "Medicalequipmentassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsuppliesassemblyt1",
    name: "Medicalsuppliesassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsupplies2assemblyt1",
    name: "Medicalsupplies2Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "medicalsupplies3assemblyt1",
    name: "Medicalsupplies3Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblymeat",
    name: "Foodpackassemblymeat",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblyeggs",
    name: "Foodpackassemblyeggs",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "foodpackassemblytofu",
    name: "Foodpackassemblytofu",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "officesuppliesassemblyt1",
    name: "Officesuppliesassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compositepanelassemblyt1",
    name: "Compositepanelassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "compositecorebasicassemblyt1",
    name: "Compositecorebasicassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "stationpartsbasicassemblyt1",
    name: "Stationpartsbasicassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crewsuppliesassemblyt1",
    name: "Crewsuppliesassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblyt2",
    name: "Cpassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp2assemblyt2",
    name: "Cp2Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp3assemblyt1",
    name: "Cp3Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "mechpartsassemblyt2",
    name: "Mechpartsassemblyt2",
    buildingId: "assembly_ii",
    inputs: [
      { resourceId: "iron", amount: 5 },
    ],
    outputs: [
      { resourceId: "mechanical_parts", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts1assemblyt2",
    name: "Vehicleparts1Assemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "labequipment1assemblyt1",
    name: "Labequipment1Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "householdgoodsassemblyt1",
    name: "Householdgoodsassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronicsassemblyt2",
    name: "Electronicsassemblyt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cpassemblyt1",
    name: "Cpassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cp2assemblyt1",
    name: "Cp2Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vehicleparts1assemblyt1",
    name: "Vehicleparts1Assemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "electronicsassemblyt1",
    name: "Electronicsassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixingslagt3",
    name: "Concretemixingslagt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixinggravelt3",
    name: "Concretemixinggravelt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixingslagmt3",
    name: "Concretemixingslagmt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixinggravelmt3",
    name: "Concretemixinggravelmt3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixingslagt2",
    name: "Concretemixingslagt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixinggravelt2",
    name: "Concretemixinggravelt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixingslagmt2",
    name: "Concretemixingslagmt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixinggravelmt2",
    name: "Concretemixinggravelmt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixinggravel",
    name: "Concretemixinggravel",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixinggravelm",
    name: "Concretemixinggravelm",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "concretemixingslagm",
    name: "Concretemixingslagm",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cementproductiongas",
    name: "Cementproductiongas",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cementproductionhydrogen",
    name: "Cementproductionhydrogen",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminacalcificationgas",
    name: "Aluminacalcificationgas",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminacalcificationhydrogen",
    name: "Aluminacalcificationhydrogen",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "cementproduction",
    name: "Cementproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "diamondsynthesis",
    name: "Diamondsynthesis",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "lensmaking",
    name: "Lensmaking",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage2a",
    name: "Microchipmachinet2 Microchipprodstage2A",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage3a",
    name: "Microchipmachinet2 Microchipprodstage3A",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage1b",
    name: "Microchipmachinet2 Microchipprodstage1B",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage2b",
    name: "Microchipmachinet2 Microchipprodstage2B",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage3b",
    name: "Microchipmachinet2 Microchipprodstage3B",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage1c",
    name: "Microchipmachinet2 Microchipprodstage1C",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage2c",
    name: "Microchipmachinet2 Microchipprodstage2C",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage3c",
    name: "Microchipmachinet2 Microchipprodstage3C",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage1d",
    name: "Microchipmachinet2 Microchipprodstage1D",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodstage2d",
    name: "Microchipmachinet2 Microchipprodstage2D",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachinet2_microchipprodfinalstage",
    name: "Microchipmachinet2 Microchipprodfinalstage",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage2a",
    name: "Microchipmachine Microchipprodstage2A",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage3a",
    name: "Microchipmachine Microchipprodstage3A",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage1b",
    name: "Microchipmachine Microchipprodstage1B",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage2b",
    name: "Microchipmachine Microchipprodstage2B",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage3b",
    name: "Microchipmachine Microchipprodstage3B",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage1c",
    name: "Microchipmachine Microchipprodstage1C",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage2c",
    name: "Microchipmachine Microchipprodstage2C",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage3c",
    name: "Microchipmachine Microchipprodstage3C",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage1d",
    name: "Microchipmachine Microchipprodstage1D",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodstage2d",
    name: "Microchipmachine Microchipprodstage2D",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "microchipmachine_microchipprodfinalstage",
    name: "Microchipmachine Microchipprodfinalstage",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "brineelectrolysist2",
    name: "Brineelectrolysist2",
    buildingId: "electrolyzer_ii",
    inputs: [
      { resourceId: "brine", amount: 12 },
    ],
    outputs: [
      { resourceId: "chlorine", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "waterelectrolysist2",
    name: "Waterelectrolysist2",
    buildingId: "electrolyzer_ii",
    inputs: [
      { resourceId: "water", amount: 1 },
    ],
    outputs: [
      { resourceId: "oxygen", amount: 4 },
      { resourceId: "hydrogen", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "7.5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ammoniaelectrolysist2",
    name: "Ammoniaelectrolysist2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "brineelectrolysis",
    name: "Brineelectrolysis",
    buildingId: "electrolyzer",
    inputs: [
      { resourceId: "brine", amount: 3 },
    ],
    outputs: [
      { resourceId: "chlorine", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "waterelectrolysis",
    name: "Waterelectrolysis",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ammoniaelectrolysis",
    name: "Ammoniaelectrolysis",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sugartoethanolfermentation",
    name: "Sugartoethanolfermentation",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "corntoethanolfermentation",
    name: "Corntoethanolfermentation",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "antibioticsfermentation",
    name: "Antibioticsfermentation",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "goldsettling",
    name: "Goldsettling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumleaching",
    name: "Uraniumleaching",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fluorideleaching",
    name: "Fluorideleaching",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "redmudsettlingacid",
    name: "Redmudsettlingacid",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamhpcondensation",
    name: "Steamhpcondensation",
    buildingId: "cooling_tower",
    inputs: [
      { resourceId: "steam_high", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamlpcondensation",
    name: "Steamlpcondensation",
    buildingId: "cooling_tower",
    inputs: [
      { resourceId: "steam_low", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamdepletedcondensation",
    name: "Steamdepletedcondensation",
    buildingId: "cooling_tower",
    inputs: [
      { resourceId: "steam_depleted", amount: 4 },
    ],
    outputs: [
      { resourceId: "water", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamspcondensationt2",
    name: "Steamspcondensationt2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_super", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamhpcondensationt2",
    name: "Steamhpcondensationt2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_high", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamlpcondensationt2",
    name: "Steamlpcondensationt2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_low", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steamdepletedcondensationt2",
    name: "Steamdepletedcondensationt2",
    buildingId: "cooling_tower_large",
    inputs: [
      { resourceId: "steam_depleted", amount: 16 },
    ],
    outputs: [
      { resourceId: "water", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumenrichment",
    name: "Uraniumenrichment",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "reprocesseduraniumenrichment",
    name: "Reprocesseduraniumenrichment",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumenrichment20",
    name: "Uraniumenrichment20",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "blanketfuelreprocessingtopu",
    name: "Blanketfuelreprocessingtopu",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "blanketfuelreprocessingtou30",
    name: "Blanketfuelreprocessingtou30",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "spentfuelreprocessing",
    name: "Spentfuelreprocessing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "spentfueltoblanket",
    name: "Spentfueltoblanket",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "spentmoxtoblanket",
    name: "Spentmoxtoblanket",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "corefuelreprocessing",
    name: "Corefuelreprocessing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "charcoalburning",
    name: "Charcoalburning",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironorecrushing",
    name: "Ironorecrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "iron_ore", amount: 16 },
    ],
    outputs: [
      { resourceId: "iron_ore_crushed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "copperorecrushing",
    name: "Copperorecrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "copper_ore", amount: 16 },
    ],
    outputs: [
      { resourceId: "copper_ore_crushed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "slagcrushing",
    name: "Slagcrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "slag", amount: 8 },
    ],
    outputs: [
      { resourceId: "slag_crushed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rockcrushing",
    name: "Rockcrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "rock", amount: 8 },
    ],
    outputs: [
      { resourceId: "gravel", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "gravelcrushing",
    name: "Gravelcrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "gravel", amount: 8 },
    ],
    outputs: [
      { resourceId: "manufactured_sand", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "quartzcrushing",
    name: "Quartzcrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "quartz", amount: 16 },
    ],
    outputs: [
      { resourceId: "quartz_crushed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "quartzmilling",
    name: "Quartzmilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "quartz_crushed", amount: 16 },
    ],
    outputs: [
      { resourceId: "sand", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumcrushing",
    name: "Uraniumcrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "uranium_ore", amount: 12 },
    ],
    outputs: [
      { resourceId: "uranium_ore_powder", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "goldorecrushing",
    name: "Goldorecrushing",
    buildingId: "crusher",
    inputs: [
      { resourceId: "gold_ore", amount: 8 },
    ],
    outputs: [
      { resourceId: "gold_ore_crushed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "goldmilling",
    name: "Goldmilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "gold_ore_crushed", amount: 8 },
    ],
    outputs: [
      { resourceId: "gold_ore_powder", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "bauxitemilling",
    name: "Bauxitemilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "bauxite", amount: 8 },
    ],
    outputs: [
      { resourceId: "bauxite_powder", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ilmenitemilling",
    name: "Ilmenitemilling",
    buildingId: "crusher",
    inputs: [
      { resourceId: "titanium_ore", amount: 8 },
    ],
    outputs: [
      { resourceId: "titanium_ore_crushed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironorecrushingt2",
    name: "Ironorecrushingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "iron_ore", amount: 96 },
    ],
    outputs: [
      { resourceId: "iron_ore_crushed", amount: 96 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "copperorecrushingt2",
    name: "Copperorecrushingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "copper_ore", amount: 96 },
    ],
    outputs: [
      { resourceId: "copper_ore_crushed", amount: 96 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "slagcrushingt2",
    name: "Slagcrushingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "slag", amount: 48 },
    ],
    outputs: [
      { resourceId: "slag_crushed", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rockcrushingt2",
    name: "Rockcrushingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "rock", amount: 48 },
    ],
    outputs: [
      { resourceId: "gravel", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "gravelcrushingt2",
    name: "Gravelcrushingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "gravel", amount: 48 },
    ],
    outputs: [
      { resourceId: "manufactured_sand", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "quartzmillingt2",
    name: "Quartzmillingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "quartz_crushed", amount: 96 },
    ],
    outputs: [
      { resourceId: "sand", amount: 96 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "uraniumcrushingt2",
    name: "Uraniumcrushingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "uranium_ore", amount: 72 },
    ],
    outputs: [
      { resourceId: "uranium_ore_powder", amount: 72 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "goldorecrushingt2",
    name: "Goldorecrushingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "gold_ore", amount: 48 },
    ],
    outputs: [
      { resourceId: "gold_ore_crushed", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "goldoremillingt2",
    name: "Goldoremillingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "gold_ore_crushed", amount: 48 },
    ],
    outputs: [
      { resourceId: "gold_ore_powder", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "bauxitemillingt2",
    name: "Bauxitemillingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "bauxite", amount: 48 },
    ],
    outputs: [
      { resourceId: "bauxite_powder", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ilmenitemillingt2",
    name: "Ilmenitemillingt2",
    buildingId: "crusher_large",
    inputs: [
      { resourceId: "titanium_ore", amount: 48 },
    ],
    outputs: [
      { resourceId: "titanium_ore_crushed", amount: 48 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingarcscrap",
    name: "Ironsmeltingarcscrap",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingarc",
    name: "Ironsmeltingarc",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingarcscrap",
    name: "Coppersmeltingarcscrap",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingarc",
    name: "Coppersmeltingarc",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasssmeltingarc",
    name: "Glasssmeltingarc",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasssmeltingarcwithbroken",
    name: "Glasssmeltingarcwithbroken",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "siliconsmeltingarc2",
    name: "Siliconsmeltingarc2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminumsmeltingscraparct2",
    name: "Aluminumsmeltingscraparct2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ilmenitesmeltingarc2",
    name: "Ilmenitesmeltingarc2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "titaniumsmeltingarc2",
    name: "Titaniumsmeltingarc2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingarcscrapt1",
    name: "Ironsmeltingarcscrapt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingarct1",
    name: "Ironsmeltingarct1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingarcscrapt1",
    name: "Coppersmeltingarcscrapt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingarct1",
    name: "Coppersmeltingarct1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasssmeltingarct1withbroken",
    name: "Glasssmeltingarct1Withbroken",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "siliconsmeltingarc",
    name: "Siliconsmeltingarc",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminumsmeltingscraparct1",
    name: "Aluminumsmeltingscraparct1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingt2scrap",
    name: "Ironsmeltingt2Scrap",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingt2",
    name: "Ironsmeltingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingt2scrap",
    name: "Coppersmeltingt2Scrap",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingt2",
    name: "Coppersmeltingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasssmeltingt2",
    name: "Glasssmeltingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasssmeltingt2withbroken",
    name: "Glasssmeltingt2Withbroken",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingt1scrap",
    name: "Ironsmeltingt1Scrap",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironsmeltingt1coal",
    name: "Ironsmeltingt1Coal",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingt1scrap",
    name: "Coppersmeltingt1Scrap",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppersmeltingt1",
    name: "Coppersmeltingt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasssmelting",
    name: "Glasssmelting",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasssmeltingwithbroken",
    name: "Glasssmeltingwithbroken",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminumelectrolysis",
    name: "Aluminumelectrolysis",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steelcastingcooledt2",
    name: "Steelcastingcooledt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "titaniumalloycastingt2",
    name: "Titaniumalloycastingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steelcastingcooled",
    name: "Steelcastingcooled",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironcastingcooled",
    name: "Ironcastingcooled",
    buildingId: "metal_caster_ii",
    inputs: [
      { resourceId: "molten_iron", amount: 8 },
    ],
    outputs: [
      { resourceId: "iron", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppercastingcooled",
    name: "Coppercastingcooled",
    buildingId: "metal_caster_ii",
    inputs: [
      { resourceId: "molten_copper", amount: 8 },
    ],
    outputs: [
      { resourceId: "impure_copper", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminumcastingt2",
    name: "Aluminumcastingt2",
    buildingId: "metal_caster_ii",
    inputs: [
      { resourceId: "molten_aluminum", amount: 8 },
    ],
    outputs: [
      { resourceId: "aluminum", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ironcasting",
    name: "Ironcasting",
    buildingId: "metal_caster",
    inputs: [
      { resourceId: "molten_iron", amount: 8 },
    ],
    outputs: [
      { resourceId: "iron", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "coppercasting",
    name: "Coppercasting",
    buildingId: "metal_caster",
    inputs: [
      { resourceId: "molten_copper", amount: 8 },
    ],
    outputs: [
      { resourceId: "impure_copper", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminumcasting",
    name: "Aluminumcasting",
    buildingId: "metal_caster",
    inputs: [
      { resourceId: "molten_aluminum", amount: 8 },
    ],
    outputs: [
      { resourceId: "aluminum", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "40" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "titaniumalloymixing",
    name: "Titaniumalloymixing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "copperelectrolysisprocess",
    name: "Copperelectrolysisprocess",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "copperelectrolysiswithwater",
    name: "Copperelectrolysiswithwater",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steelsmeltingt2",
    name: "Steelsmeltingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "steelsmelting",
    name: "Steelsmelting",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasscastingt2",
    name: "Glasscastingt2",
    buildingId: "glass_maker_ii",
    inputs: [
      { resourceId: "molten_glass", amount: 8 },
    ],
    outputs: [
      { resourceId: "glass", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glasscastingt1",
    name: "Glasscastingt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "siliconcrystallization",
    name: "Siliconcrystallization",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "aluminacrystallization",
    name: "Aluminacrystallization",
    buildingId: "crystallizer",
    inputs: [
      { resourceId: "alumina", amount: 4 },
    ],
    outputs: [
      { resourceId: "sapphire_wafer", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "silicontreatment",
    name: "Silicontreatment",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "goldsmelting",
    name: "Goldsmelting",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "goldscrapsmelting",
    name: "Goldscrapsmelting",
    buildingId: "gold_furnace",
    inputs: [
      { resourceId: "gold_scrap", amount: 3 },
    ],
    outputs: [
      { resourceId: "gold", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glassmixmixingt2",
    name: "Glassmixmixingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glassmixmixingwithacidt2",
    name: "Glassmixmixingwithacidt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "acidmixmixingt2",
    name: "Acidmixmixingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sulfurneutralizationt2",
    name: "Sulfurneutralizationt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "brineproductiont2",
    name: "Brineproductiont2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "filtermediamixingt2",
    name: "Filtermediamixingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "filtermediamixingmt2",
    name: "Filtermediamixingmt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "organicfertilizerproductiont2",
    name: "Organicfertilizerproductiont2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "organicfertilizerproductiondirtt2",
    name: "Organicfertilizerproductiondirtt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizer2productiont2",
    name: "Fertilizer2Productiont2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "dirtmixingt2",
    name: "Dirtmixingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfrompotatot2",
    name: "Animalfeedfrompotatot2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "potato", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfromwheatt2",
    name: "Animalfeedfromwheatt2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "wheat", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 32 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfromcornt2",
    name: "Animalfeedfromcornt2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "corn", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 24 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfromsoybeant2",
    name: "Animalfeedfromsoybeant2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "soybean", amount: 20 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedcompostt2",
    name: "Animalfeedcompostt2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "animal_feed", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "biomasscompostt2",
    name: "Biomasscompostt2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "biomass", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "meattrimmingscompostt2",
    name: "Meattrimmingscompostt2",
    buildingId: "mixer_ii",
    inputs: [
      { resourceId: "meat_trimmings", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "30" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glassmixmixing",
    name: "Glassmixmixing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "glassmixmixingwithacid",
    name: "Glassmixmixingwithacid",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "acidmixmixing",
    name: "Acidmixmixing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sulfurneutralization",
    name: "Sulfurneutralization",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "brineproduction",
    name: "Brineproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "filtermediamixing",
    name: "Filtermediamixing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "filtermediamixingm",
    name: "Filtermediamixingm",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "organicfertilizerproduction",
    name: "Organicfertilizerproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "organicfertilizerproductiondirt",
    name: "Organicfertilizerproductiondirt",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizer2production",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "dirtmixing",
    name: "Dirtmixing",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfrompotato",
    name: "Animalfeedfrompotato",
    buildingId: "mixer",
    inputs: [
      { resourceId: "potato", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfromwheat",
    name: "Animalfeedfromwheat",
    buildingId: "mixer",
    inputs: [
      { resourceId: "wheat", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 16 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfromcorn",
    name: "Animalfeedfromcorn",
    buildingId: "mixer",
    inputs: [
      { resourceId: "corn", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedfromsoybean",
    name: "Animalfeedfromsoybean",
    buildingId: "mixer",
    inputs: [
      { resourceId: "soybean", amount: 10 },
    ],
    outputs: [
      { resourceId: "animal_feed", amount: 18 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "biomasscompost",
    name: "Biomasscompost",
    buildingId: "mixer",
    inputs: [
      { resourceId: "biomass", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "meattrimmingscompost",
    name: "Meattrimmingscompost",
    buildingId: "mixer",
    inputs: [
      { resourceId: "meat_trimmings", amount: 12 },
    ],
    outputs: [
      { resourceId: "compost", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizerproductiont2",
    name: "Fertilizerproductiont2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizerproductionfromorganict2",
    name: "Fertilizerproductionfromorganict2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ammoniasynthesist2",
    name: "Ammoniasynthesist2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "paperproductiont2",
    name: "Paperproductiont2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ethanolcookingoilreformingt2",
    name: "Ethanolcookingoilreformingt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fuelgassynthesis",
    name: "Fuelgassynthesis",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "graphiteproductiont2",
    name: "Graphiteproductiont2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "graphiteproductionco2",
    name: "Graphiteproductionco2",
    buildingId: "chemical_plant_ii",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 24 },
    ],
    outputs: [
      { resourceId: "graphite", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "carbontoethanolproduction",
    name: "Carbontoethanolproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "disinfectantproductiont2",
    name: "Disinfectantproductiont2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "anestheticsproduction",
    name: "Anestheticsproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "morphineproduction",
    name: "Morphineproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "bauxitedigestion",
    name: "Bauxitedigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "titaniumchlorination",
    name: "Titaniumchlorination",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "titaniumchloridereduction",
    name: "Titaniumchloridereduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "chemicalfuelproduction",
    name: "Chemicalfuelproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "moxrodsassemblyt1",
    name: "Moxrodsassemblyt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "blanketfuelfromdepleted",
    name: "Blanketfuelfromdepleted",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "blanketfuelfromyellowcake",
    name: "Blanketfuelfromyellowcake",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "corefuelfromenriched",
    name: "Corefuelfromenriched",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "corefuelfrompu",
    name: "Corefuelfrompu",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "diamondpastefromcookingoil",
    name: "Diamondpastefromcookingoil",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "diamondpastefromheavyoil",
    name: "Diamondpastefromheavyoil",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizerproduction",
    name: "Fertilizerproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizerproductionfromorganic",
    name: "Fertilizerproductionfromorganic",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ammoniasynthesis",
    name: "Ammoniasynthesis",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "paperproduction",
    name: "Paperproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "ethanolcookingoilreforming",
    name: "Ethanolcookingoilreforming",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "graphiteproductiont1",
    name: "Graphiteproductiont1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "disinfectantproduction",
    name: "Disinfectantproduction",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crudeoilrefiningt1",
    name: "Crudeoilrefiningt1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crudeoilrefiningt2",
    name: "Crudeoilrefiningt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "heavydistillaterefining",
    name: "Heavydistillaterefining",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "titaniumpurification",
    name: "Titaniumpurification",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rubberproductionnaphtha",
    name: "Rubberproductionnaphtha",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rubberproductionnaphthaalt",
    name: "Rubberproductionnaphthaalt",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rubberproductionethanol",
    name: "Rubberproductionethanol",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rubberproductiondiesel",
    name: "Rubberproductiondiesel",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rubberproductiondieselwithcoal",
    name: "Rubberproductiondieselwithcoal",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "heavyoilcracking",
    name: "Heavyoilcracking",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "heavyoilcrackingtonaphtha",
    name: "Heavyoilcrackingtonaphtha",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "naphthareforming",
    name: "Naphthareforming",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "dieselreforming",
    name: "Dieselreforming",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "naphthareformingtogas",
    name: "Naphthareformingtogas",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fuelgasreforming",
    name: "Fuelgasreforming",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "hydrogenreforming",
    name: "Hydrogenreforming",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "hydrogenproductionfromsteamsp",
    name: "Hydrogenproductionfromsteamsp",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sourwaterstripping",
    name: "Sourwaterstripping",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "plasticmaking",
    name: "Plasticmaking",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "plasticmakingethanol",
    name: "Plasticmakingethanol",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklargedepletedsteam",
    name: "Smokestacklargedepletedsteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_depleted", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklargelpsteam",
    name: "Smokestacklargelpsteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_low", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklargehpsteam",
    name: "Smokestacklargehpsteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_high", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklargespsteam",
    name: "Smokestacklargespsteam",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "steam_super", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklargeoxygen",
    name: "Smokestacklargeoxygen",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "oxygen", amount: 300 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklargeexhaust",
    name: "Smokestacklargeexhaust",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "exhaust", amount: 300 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 150 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklargecarbondioxide",
    name: "Smokestacklargecarbondioxide",
    buildingId: "smoke_stack_large",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 300 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestackdepletedsteam",
    name: "Smokestackdepletedsteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_depleted", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacklpsteam",
    name: "Smokestacklpsteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_low", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestackhpsteam",
    name: "Smokestackhpsteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_high", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestackspsteam",
    name: "Smokestackspsteam",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "steam_super", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestackoxygen",
    name: "Smokestackoxygen",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "oxygen", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestacknitrogen",
    name: "Smokestacknitrogen",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "nitrogen", amount: 20 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestackexhaust",
    name: "Smokestackexhaust",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "exhaust", amount: 20 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "smokestackcarbondioxide",
    name: "Smokestackcarbondioxide",
    buildingId: "smoke_stack",
    inputs: [
      { resourceId: "carbon_dioxide", amount: 20 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "oceanwaterdumping",
    name: "Oceanwaterdumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "water", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "brinedumping",
    name: "Brinedumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "brine", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "oceanwastewaterpumping",
    name: "Oceanwastewaterpumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "waste_water", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sourwaterdumping",
    name: "Sourwaterdumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "sour_water", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "wasteaciddumping",
    name: "Wasteaciddumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "acid", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "toxicslurrydumping",
    name: "Toxicslurrydumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "toxic_slurry", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 5 },
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "seawaterdumping",
    name: "Seawaterdumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "seawater", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizerorganicdumping",
    name: "Fertilizerorganicdumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "fertilizer_organic", amount: 4 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "4" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizerchem1dumping",
    name: "Fertilizerchem1Dumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "fertilizer_i", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "4" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fertilizerchem2dumping",
    name: "Fertilizerchem2Dumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "fertilizer_ii", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "4" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "redmuddumping",
    name: "Redmuddumping",
    buildingId: "liquid_dump",
    inputs: [
      { resourceId: "red_mud", amount: 2 },
    ],
    outputs: [
      { resourceId: "water_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "2" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "flarediesel",
    name: "Flarediesel",
    buildingId: "flare",
    inputs: [
      { resourceId: "diesel", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "flareheavyoil",
    name: "Flareheavyoil",
    buildingId: "flare",
    inputs: [
      { resourceId: "heavy_oil", amount: 8 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "flarelightoil",
    name: "Flarelightoil",
    buildingId: "flare",
    inputs: [
      { resourceId: "light_oil", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "flarenaphtha",
    name: "Flarenaphtha",
    buildingId: "flare",
    inputs: [
      { resourceId: "naphtha", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "flarefuelgas",
    name: "Flarefuelgas",
    buildingId: "flare",
    inputs: [
      { resourceId: "fuel_gas", amount: 16 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "flareammonia",
    name: "Flareammonia",
    buildingId: "flare",
    inputs: [
      { resourceId: "ammonia", amount: 12 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "flarehydrogen",
    name: "Flarehydrogen",
    buildingId: "flare",
    inputs: [
      { resourceId: "hydrogen", amount: 16 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "exhaustfiltering",
    name: "Exhaustfiltering",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "exhaustfilteringlime",
    name: "Exhaustfilteringlime",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "watertreatment",
    name: "Watertreatment",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "watertreatmentt2",
    name: "Watertreatmentt2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "toxicslurrytreatment",
    name: "Toxicslurrytreatment",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "landfillburning",
    name: "Landfillburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "waste", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "biomassburning",
    name: "Biomassburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "biomass", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "animalfeedburning",
    name: "Animalfeedburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "animal_feed", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "canolaburning",
    name: "Canolaburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "canola", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "meattrimmingsburning",
    name: "Meattrimmingsburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "meat_trimmings", amount: 4 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "chickencarcassburning",
    name: "Chickencarcassburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "chicken_carcass", amount: 4 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 3 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sulfurburning",
    name: "Sulfurburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "sulfur", amount: 2 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 8 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sludgeburning",
    name: "Sludgeburning",
    buildingId: "burner_solid",
    inputs: [
      { resourceId: "sludge", amount: 6 },
    ],
    outputs: [
      { resourceId: "air_pollution", amount: 6 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "incinerationofwaste",
    name: "Incinerationofwaste",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "incinerationofwastepressed",
    name: "Incinerationofwastepressed",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "incinerationofwastehydrogen",
    name: "Incinerationofwastehydrogen",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "incinerationofwastepressedhydrogen",
    name: "Incinerationofwastepressedhydrogen",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddingwood",
    name: "Shreddingwood",
    buildingId: "shredder",
    inputs: [
      { resourceId: "wood", amount: 4 },
    ],
    outputs: [
      { resourceId: "woodchips", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddingsaplings",
    name: "Shreddingsaplings",
    buildingId: "shredder",
    inputs: [
      { resourceId: "tree_sapling", amount: 4 },
    ],
    outputs: [
      { resourceId: "biomass", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddingironscrap",
    name: "Shreddingironscrap",
    buildingId: "shredder",
    inputs: [
      { resourceId: "iron_scrap_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "iron_scrap", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddingcopperscrap",
    name: "Shreddingcopperscrap",
    buildingId: "shredder",
    inputs: [
      { resourceId: "copper_scrap_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "copper_scrap", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddinggoldscrap",
    name: "Shreddinggoldscrap",
    buildingId: "shredder",
    inputs: [
      { resourceId: "gold_scrap_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "gold_scrap", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddingwaste",
    name: "Shreddingwaste",
    buildingId: "shredder",
    inputs: [
      { resourceId: "waste_pressed", amount: 4 },
    ],
    outputs: [
      { resourceId: "waste", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddingretiredwaste",
    name: "Shreddingretiredwaste",
    buildingId: "shredder",
    inputs: [
      { resourceId: "retired_waste", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "shreddingpolycells",
    name: "Shreddingpolycells",
    buildingId: "shredder",
    inputs: [
      { resourceId: "solar_cell", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pressingofrecyclables",
    name: "Pressingofrecyclables",
    buildingId: "compactor",
    inputs: [
      { resourceId: "recyclables", amount: 6 },
    ],
    outputs: [
      { resourceId: "recyclables_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pressingofcopperscrap",
    name: "Pressingofcopperscrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "copper_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "copper_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pressingofironscrap",
    name: "Pressingofironscrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "iron_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "iron_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pressingofaluminumscrap",
    name: "Pressingofaluminumscrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "aluminum_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "aluminum_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pressingofgoldscrap",
    name: "Pressingofgoldscrap",
    buildingId: "compactor",
    inputs: [
      { resourceId: "gold_scrap", amount: 6 },
    ],
    outputs: [
      { resourceId: "gold_scrap_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "pressingofwaste",
    name: "Pressingofwaste",
    buildingId: "compactor",
    inputs: [
      { resourceId: "waste", amount: 6 },
    ],
    outputs: [
      { resourceId: "waste_pressed", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sludgedigestion",
    name: "Sludgedigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "vegetablesdigestion",
    name: "Vegetablesdigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fruitdigestion",
    name: "Fruitdigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "poppydigestion",
    name: "Poppydigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "wheatdigestion",
    name: "Wheatdigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "corndigestion",
    name: "Corndigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "soybeandigestion",
    name: "Soybeandigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "sugarcanedigestion",
    name: "Sugarcanedigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "meattrimmingsdigestion",
    name: "Meattrimmingsdigestion",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "airseparation",
    name: "Airseparation",
    buildingId: "air_separator",
    inputs: [
    ],
    outputs: [
      { resourceId: "oxygen", amount: 12 },
      { resourceId: "nitrogen", amount: 12 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "maintenancet1recipe",
    name: "Maintenancet1Recipe",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "maintenancet1recycling",
    name: "Maintenancet1Recycling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "maintenancet2recipe",
    name: "Maintenancet2Recipe",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "maintenancet2recycling",
    name: "Maintenancet2Recycling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "maintenancet3recipe",
    name: "Maintenancet3Recipe",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "maintenancet3recycling",
    name: "Maintenancet3Recycling",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizer",
    name: "Crop Potato Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_i", amount: 19.6875 },
    ],
    outputs: [
      { resourceId: "potato", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizer2",
    name: "Crop Potato Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_ii", amount: 15.75 },
    ],
    outputs: [
      { resourceId: "potato", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizerorganic",
    name: "Crop Potato Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135 },
      { resourceId: "fertilizer_organic", amount: 39.37793 },
    ],
    outputs: [
      { resourceId: "potato", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizer",
    name: "Crop Corn Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 199.5703 },
      { resourceId: "fertilizer_i", amount: 29.99902 },
    ],
    outputs: [
      { resourceId: "corn", amount: 99 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizer2",
    name: "Crop Corn Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 199.5703 },
      { resourceId: "fertilizer_ii", amount: 23.99902 },
    ],
    outputs: [
      { resourceId: "corn", amount: 99 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizerorganic",
    name: "Crop Corn Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 199.5703 },
      { resourceId: "fertilizer_organic", amount: 60 },
    ],
    outputs: [
      { resourceId: "corn", amount: 99 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat_product_fertilizer",
    name: "Crop Wheat Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 238.3594 },
      { resourceId: "fertilizer_i", amount: 39.37598 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat_product_fertilizerorganic",
    name: "Crop Wheat Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 238.3594 },
      { resourceId: "fertilizer_organic", amount: 78.75488 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 87 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizer",
    name: "Crop Treesapling Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 405.3516 },
      { resourceId: "fertilizer_i", amount: 44.99805 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizer2",
    name: "Crop Treesapling Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 405.3516 },
      { resourceId: "fertilizer_ii", amount: 35.99805 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizerorganic",
    name: "Crop Treesapling Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 405.3516 },
      { resourceId: "fertilizer_organic", amount: 90 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizer",
    name: "Crop Soybeans Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_i", amount: 37.49512 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 33 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizer2",
    name: "Crop Soybeans Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_ii", amount: 29.99512 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 33 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizerorganic",
    name: "Crop Soybeans Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 180 },
      { resourceId: "fertilizer_organic", amount: 74.99316 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 33 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_sugarcane_product_fertilizer",
    name: "Crop Sugarcane Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 540 },
      { resourceId: "fertilizer_i", amount: 84.36328 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 297 },
    ],
    metadata: [
      { key: "time", value: "540" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_sugarcane_product_fertilizer2",
    name: "Crop Sugarcane Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 540 },
      { resourceId: "fertilizer_ii", amount: 67.48926 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 297 },
    ],
    metadata: [
      { key: "time", value: "540" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_sugarcane_product_fertilizerorganic",
    name: "Crop Sugarcane Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 540 },
      { resourceId: "fertilizer_organic", amount: 168.7344 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 297 },
    ],
    metadata: [
      { key: "time", value: "540" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_vegetables_product_fertilizer",
    name: "Crop Vegetables Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 160.5469 },
      { resourceId: "fertilizer_i", amount: 26.25098 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_vegetables_product_fertilizerorganic",
    name: "Crop Vegetables Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 160.5469 },
      { resourceId: "fertilizer_organic", amount: 52.50391 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 90 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_fruits_product_fertilizer",
    name: "Crop Fruits Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 399.1406 },
      { resourceId: "fertilizer_i", amount: 44.99023 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 120 },
    ],
    metadata: [
      { key: "time", value: "480" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_fruits_product_fertilizer2",
    name: "Crop Fruits Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 399.1406 },
      { resourceId: "fertilizer_ii", amount: 35.99219 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 120 },
    ],
    metadata: [
      { key: "time", value: "480" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_fruits_product_fertilizerorganic",
    name: "Crop Fruits Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 399.1406 },
      { resourceId: "fertilizer_organic", amount: 89.98535 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 120 },
    ],
    metadata: [
      { key: "time", value: "480" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizer",
    name: "Crop Canola Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 104.5898 },
      { resourceId: "fertilizer_i", amount: 16.87109 },
    ],
    outputs: [
      { resourceId: "canola", amount: 54 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizer2",
    name: "Crop Canola Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 104.5898 },
      { resourceId: "fertilizer_ii", amount: 13.49707 },
    ],
    outputs: [
      { resourceId: "canola", amount: 54 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizerorganic",
    name: "Crop Canola Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 104.5898 },
      { resourceId: "fertilizer_organic", amount: 33.74512 },
    ],
    outputs: [
      { resourceId: "canola", amount: 54 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_poppy_product_fertilizer",
    name: "Crop Poppy Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135.1172 },
      { resourceId: "fertilizer_i", amount: 22.49512 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 38 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_poppy_product_fertilizer2",
    name: "Crop Poppy Product Fertilizer2",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135.1172 },
      { resourceId: "fertilizer_ii", amount: 17.99609 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 38 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_poppy_product_fertilizerorganic",
    name: "Crop Poppy Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 135.1172 },
      { resourceId: "fertilizer_organic", amount: 44.99316 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 38 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_flowers_product_fertilizer",
    name: "Crop Flowers Product Fertilizer",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 225 },
      { resourceId: "fertilizer_i", amount: 37.49512 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_flowers_product_fertilizerorganic",
    name: "Crop Flowers Product Fertilizerorganic",
    buildingId: "greenhouse_ii",
    inputs: [
      { resourceId: "water", amount: 225 },
      { resourceId: "fertilizer_organic", amount: 74.99316 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizer",
    name: "Crop Potato Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 121.5527 },
      { resourceId: "fertilizer_i", amount: 17.71875 },
    ],
    outputs: [
      { resourceId: "potato", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizer2",
    name: "Crop Potato Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 121.5527 },
      { resourceId: "fertilizer_ii", amount: 14.1748 },
    ],
    outputs: [
      { resourceId: "potato", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizerorganic",
    name: "Crop Potato Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 121.5527 },
      { resourceId: "fertilizer_organic", amount: 35.43945 },
    ],
    outputs: [
      { resourceId: "potato", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizer",
    name: "Crop Corn Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 179.5313 },
      { resourceId: "fertilizer_i", amount: 26.99902 },
    ],
    outputs: [
      { resourceId: "corn", amount: 83 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizer2",
    name: "Crop Corn Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 179.5313 },
      { resourceId: "fertilizer_ii", amount: 21.59863 },
    ],
    outputs: [
      { resourceId: "corn", amount: 83 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizerorganic",
    name: "Crop Corn Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 179.5313 },
      { resourceId: "fertilizer_organic", amount: 54 },
    ],
    outputs: [
      { resourceId: "corn", amount: 83 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat_product_fertilizer",
    name: "Crop Wheat Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 214.6289 },
      { resourceId: "fertilizer_i", amount: 35.43848 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat_product_fertilizerorganic",
    name: "Crop Wheat Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 214.6289 },
      { resourceId: "fertilizer_organic", amount: 70.87988 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 73 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizer",
    name: "Crop Treesapling Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 364.5703 },
      { resourceId: "fertilizer_i", amount: 40.49805 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizerorganic",
    name: "Crop Treesapling Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 364.5703 },
      { resourceId: "fertilizer_organic", amount: 81 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizer",
    name: "Crop Soybeans Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 162.0703 },
      { resourceId: "fertilizer_i", amount: 33.74512 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 28 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizer2",
    name: "Crop Soybeans Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 162.0703 },
      { resourceId: "fertilizer_ii", amount: 26.99609 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 28 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizerorganic",
    name: "Crop Soybeans Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 162.0703 },
      { resourceId: "fertilizer_organic", amount: 67.49316 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 28 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_sugarcane_product_fertilizer",
    name: "Crop Sugarcane Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 485.9473 },
      { resourceId: "fertilizer_i", amount: 75.92676 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 248 },
    ],
    metadata: [
      { key: "time", value: "540" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_sugarcane_product_fertilizer2",
    name: "Crop Sugarcane Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 485.9473 },
      { resourceId: "fertilizer_ii", amount: 60.74121 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 248 },
    ],
    metadata: [
      { key: "time", value: "540" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_sugarcane_product_fertilizerorganic",
    name: "Crop Sugarcane Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 485.9473 },
      { resourceId: "fertilizer_organic", amount: 151.8604 },
    ],
    outputs: [
      { resourceId: "sugar_cane", amount: 248 },
    ],
    metadata: [
      { key: "time", value: "540" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_vegetables_product_fertilizer",
    name: "Crop Vegetables Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 144.4922 },
      { resourceId: "fertilizer_i", amount: 23.625 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_vegetables_product_fertilizer2",
    name: "Crop Vegetables Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 144.4922 },
      { resourceId: "fertilizer_ii", amount: 18.90039 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_vegetables_product_fertilizerorganic",
    name: "Crop Vegetables Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 144.4922 },
      { resourceId: "fertilizer_organic", amount: 47.25293 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 75 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_fruits_product_fertilizer",
    name: "Crop Fruits Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 359.0625 },
      { resourceId: "fertilizer_i", amount: 40.49121 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 100 },
    ],
    metadata: [
      { key: "time", value: "480" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_fruits_product_fertilizerorganic",
    name: "Crop Fruits Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 359.0625 },
      { resourceId: "fertilizer_organic", amount: 80.9873 },
    ],
    outputs: [
      { resourceId: "fruit", amount: 100 },
    ],
    metadata: [
      { key: "time", value: "480" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizer",
    name: "Crop Canola Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 94.13086 },
      { resourceId: "fertilizer_i", amount: 15.18457 },
    ],
    outputs: [
      { resourceId: "canola", amount: 45 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizer2",
    name: "Crop Canola Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 94.13086 },
      { resourceId: "fertilizer_ii", amount: 12.14746 },
    ],
    outputs: [
      { resourceId: "canola", amount: 45 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizerorganic",
    name: "Crop Canola Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 94.13086 },
      { resourceId: "fertilizer_organic", amount: 30.37012 },
    ],
    outputs: [
      { resourceId: "canola", amount: 45 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_poppy_product_fertilizer",
    name: "Crop Poppy Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 121.5234 },
      { resourceId: "fertilizer_i", amount: 20.24609 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 31 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_poppy_product_fertilizer2",
    name: "Crop Poppy Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 121.5234 },
      { resourceId: "fertilizer_ii", amount: 16.19629 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 31 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_poppy_product_fertilizerorganic",
    name: "Crop Poppy Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 121.5234 },
      { resourceId: "fertilizer_organic", amount: 40.49316 },
    ],
    outputs: [
      { resourceId: "poppy", amount: 31 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_flowers_product_fertilizer",
    name: "Crop Flowers Product Fertilizer",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 202.5 },
      { resourceId: "fertilizer_i", amount: 33.74512 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 30 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_flowers_product_fertilizer2",
    name: "Crop Flowers Product Fertilizer2",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 202.5 },
      { resourceId: "fertilizer_ii", amount: 26.99609 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 30 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_flowers_product_fertilizerorganic",
    name: "Crop Flowers Product Fertilizerorganic",
    buildingId: "greenhouse",
    inputs: [
      { resourceId: "water", amount: 202.5 },
      { resourceId: "fertilizer_organic", amount: 67.49316 },
    ],
    outputs: [
      { resourceId: "flowers", amount: 30 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizer",
    name: "Crop Potato Product Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 108.0176 },
      { resourceId: "fertilizer_i", amount: 15.75 },
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizer2",
    name: "Crop Potato Product Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 108.0176 },
      { resourceId: "fertilizer_ii", amount: 12.60059 },
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato_product_fertilizerorganic",
    name: "Crop Potato Product Fertilizerorganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 108.0176 },
      { resourceId: "fertilizer_organic", amount: 31.50195 },
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizer",
    name: "Crop Corn Product Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 159.6094 },
      { resourceId: "fertilizer_i", amount: 23.99902 },
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizer2",
    name: "Crop Corn Product Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 159.6094 },
      { resourceId: "fertilizer_ii", amount: 19.19922 },
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn_product_fertilizerorganic",
    name: "Crop Corn Product Fertilizerorganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 159.6094 },
      { resourceId: "fertilizer_organic", amount: 48 },
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat_product_fertilizer",
    name: "Crop Wheat Product Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 190.7227 },
      { resourceId: "fertilizer_i", amount: 31.50098 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat_product_fertilizer2",
    name: "Crop Wheat Product Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 190.7227 },
      { resourceId: "fertilizer_ii", amount: 25.2002 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat_product_fertilizerorganic",
    name: "Crop Wheat Product Fertilizerorganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 190.7227 },
      { resourceId: "fertilizer_organic", amount: 63.00391 },
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizer",
    name: "Crop Treesapling Product Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 324.1406 },
      { resourceId: "fertilizer_i", amount: 35.99805 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizer2",
    name: "Crop Treesapling Product Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 324.1406 },
      { resourceId: "fertilizer_ii", amount: 28.79883 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling_product_fertilizerorganic",
    name: "Crop Treesapling Product Fertilizerorganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 324.1406 },
      { resourceId: "fertilizer_organic", amount: 72 },
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizer",
    name: "Crop Soybeans Product Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 144.0234 },
      { resourceId: "fertilizer_i", amount: 29.99609 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 22 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans_product_fertilizerorganic",
    name: "Crop Soybeans Product Fertilizerorganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 144.0234 },
      { resourceId: "fertilizer_organic", amount: 59.99414 },
    ],
    outputs: [
      { resourceId: "soybean", amount: 22 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_vegetables_product_fertilizer",
    name: "Crop Vegetables Product Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 128.4375 },
      { resourceId: "fertilizer_i", amount: 21 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_vegetables_product_fertilizerorganic",
    name: "Crop Vegetables Product Fertilizerorganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 128.4375 },
      { resourceId: "fertilizer_organic", amount: 42.00293 },
    ],
    outputs: [
      { resourceId: "vegetables", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizer",
    name: "Crop Canola Product Fertilizer",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 83.67188 },
      { resourceId: "fertilizer_i", amount: 13.49707 },
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizer2",
    name: "Crop Canola Product Fertilizer2",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 83.67188 },
      { resourceId: "fertilizer_ii", amount: 10.79785 },
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola_product_fertilizerorganic",
    name: "Crop Canola Product Fertilizerorganic",
    buildingId: "irrigated_farm",
    inputs: [
      { resourceId: "water", amount: 83.67188 },
      { resourceId: "fertilizer_organic", amount: 26.99609 },
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_potato",
    name: "Crop Potato",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "potato", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_corn",
    name: "Crop Corn",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "corn", amount: 66 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_wheat",
    name: "Crop Wheat",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "wheat", amount: 58 },
    ],
    metadata: [
      { key: "time", value: "360" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_treesapling",
    name: "Crop Treesapling",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "tree_sapling", amount: 60 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_soybeans",
    name: "Crop Soybeans",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "soybean", amount: 22 },
    ],
    metadata: [
      { key: "time", value: "240" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "crop_canola",
    name: "Crop Canola",
    buildingId: "farm",
    inputs: [
    ],
    outputs: [
      { resourceId: "canola", amount: 36 },
    ],
    metadata: [
      { key: "time", value: "180" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "chickenfarm",
    name: "Chickenfarm",
    buildingId: "chicken_farm",
    inputs: [
      { resourceId: "animal_feed", amount: 15.13672 },
      { resourceId: "water", amount: 18.06641 },
    ],
    outputs: [
      { resourceId: "eggs", amount: 7.324219 },
      { resourceId: "chicken_carcass", amount: 10 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab2",
    name: "Researchlab2",
    buildingId: "research_lab_i",
    inputs: [
      { resourceId: "lab_equipment", amount: 1 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab21",
    name: "Researchlab21",
    buildingId: "research_lab_i",
    inputs: [
      { resourceId: "lab_equipment", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "10" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab3",
    name: "Researchlab3",
    buildingId: "research_lab_ii",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 1 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab31",
    name: "Researchlab31",
    buildingId: "research_lab_ii",
    inputs: [
      { resourceId: "lab_equipment_ii", amount: 1 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 1 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab4",
    name: "Researchlab4",
    buildingId: "research_lab_iii",
    inputs: [
      { resourceId: "lab_equipment_iii", amount: 2 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab41",
    name: "Researchlab41",
    buildingId: "research_lab_iii",
    inputs: [
      { resourceId: "lab_equipment_iii", amount: 2 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 2 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab5",
    name: "Researchlab5",
    buildingId: "research_lab_iv",
    inputs: [
      { resourceId: "lab_equipment_iv", amount: 4 },
    ],
    outputs: [
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "researchlab51",
    name: "Researchlab51",
    buildingId: "research_lab_iv",
    inputs: [
      { resourceId: "lab_equipment_iv", amount: 4 },
    ],
    outputs: [
      { resourceId: "recyclables", amount: 4 },
    ],
    metadata: [
      { key: "time", value: "5" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "nuclearreactort2",
    name: "Nuclearreactort2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "nuclearreactort21",
    name: "Nuclearreactort21",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "nuclearreactort23",
    name: "Nuclearreactort23",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "nuclearreactor",
    name: "Nuclearreactor",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "nuclearreactor1",
    name: "Nuclearreactor1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fastbreederreactor",
    name: "Fastbreederreactor",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fastbreederreactor1",
    name: "Fastbreederreactor1",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fastbreederreactor2",
    name: "Fastbreederreactor2",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "fastbreederreactor3",
    name: "Fastbreederreactor3",
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
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "wastesortingplant",
    name: "Wastesortingplant",
    buildingId: "waste_sorting_plant",
    inputs: [
      { resourceId: "recyclables", amount: 48 },
    ],
    outputs: [
      { resourceId: "iron_scrap", amount: 0 },
      { resourceId: "copper_scrap", amount: 0 },
      { resourceId: "aluminum_scrap", amount: 0 },
      { resourceId: "gold_scrap", amount: 0 },
      { resourceId: "broken_glass", amount: 0 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "wastesortingplant1",
    name: "Wastesortingplant1",
    buildingId: "waste_sorting_plant",
    inputs: [
      { resourceId: "recyclables_pressed", amount: 16 },
    ],
    outputs: [
      { resourceId: "iron_scrap", amount: 0 },
      { resourceId: "copper_scrap", amount: 0 },
      { resourceId: "aluminum_scrap", amount: 0 },
      { resourceId: "gold_scrap", amount: 0 },
      { resourceId: "broken_glass", amount: 0 },
    ],
    metadata: [
      { key: "time", value: "20" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "rainwaterharvester",
    name: "Rainwaterharvester",
    buildingId: "rainwater_harvester",
    inputs: [
    ],
    outputs: [
      { resourceId: "water", amount: 37 },
    ],
    metadata: [
      { key: "time", value: "720" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
  {
    id: "basicserverrack",
    name: "Basicserverrack",
    buildingId: "data_center",
    inputs: [
      { resourceId: "chilled_water", amount: 24 },
      { resourceId: "maintenance_iii", amount: 42.39063 },
      { resourceId: "electricity", amount: 4080 },
    ],
    outputs: [
      { resourceId: "water", amount: 24 },
      { resourceId: "computing", amount: 192 },
    ],
    metadata: [
      { key: "time", value: "60" },
      { key: "version", value: "0.7.0.0" },
    ]
  },
];
