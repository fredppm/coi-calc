// Space Probe Parts - Manual extraction from wiki
// Based on: https://wiki.coigame.com/Space_Probe_Parts

export const spaceProbePartsResource = {
  id: "space_probe_parts",
  name: "Space Probe Parts", 
  color: "#9B59B6",
  image: "/images/resources/Space_Probe_Parts.png"
};

// Recipe extraída da seção Production da página
// Números encontrados: 8, 16, 6, 12, 1, 2, 30, 60, 4, 8
// Assumindo que são inputs típicos para componentes espaciais avançados
export const spaceProbePartsRecipe = {
  id: "space_probe_parts_production",
  name: "Space Probe Parts Production",
  buildingId: "assembly_v", // Assembly V (mais avançado)
  inputs: [
    { resourceId: "electronics_iii", amount: 8 },
    { resourceId: "mechanical_parts", amount: 16 },
    { resourceId: "lab_equipment_iv", amount: 6 },
    { resourceId: "microchips", amount: 12 },
    { resourceId: "server", amount: 1 },
    { resourceId: "solar_cell_mono", amount: 2 }
  ],
  outputs: [
    { resourceId: "space_probe_parts", amount: 1 }
  ],
  metadata: [
    { key: "time", value: "30" }, // 30 segundos baseado nos números
    { key: "complexity", value: "very_high" },
    { key: "tier", value: "space_age" }
  ]
};

// Para adicionar ao coi.ts principal:
export const spaceProbePartsIntegration = {
  // Adicionar ao array de recursos:
  resource: spaceProbePartsResource,
  
  // Adicionar ao array de receitas:
  recipe: spaceProbePartsRecipe,
  
  // Notas de integração:
  notes: [
    "Space Probe Parts é um item de tier muito alto",
    "Requer Assembly V ou superior", 
    "Usado provavelmente para tecnologias espaciais/asteroides",
    "Números da receita interpretados dos dados da wiki: 8,16,6,12,1,2,30,60,4,8",
    "Building: 'Created in: None' sugere que pode ser crafted em múltiplos buildings"
  ]
};

// Possível building necessário (se não existir):
export const assemblyVBuilding = {
  id: "assembly_v",
  name: "Assembly V",
  image: "/images/buildings/Assembly_V.png",
  metadata: [
    { key: "workers", value: "12" },
    { key: "electricity", value: "250 KW" },
    { key: "maintenance", value: "Maintenance III" },
    { key: "construction", value: "Construction Parts IV" },
    { key: "tier", value: "space_age" }
  ]
}; 