// Generated COI Data
export const coiResources = [
  {
    "id": "alumina",
    "name": "Alumina",
    "color": "#95A5A6",
    "image": "/images/resources/alumina.png"
  },
  {
    "id": "carbon_dioxide",
    "name": "Carbon Dioxide",
    "color": "#95A5A6",
    "image": "/images/resources/carbon_dioxide.png"
  },
  {
    "id": "compost",
    "name": "Compost",
    "color": "#95A5A6",
    "image": "/images/resources/compost.png"
  },
  {
    "id": "corn",
    "name": "Corn",
    "color": "#95A5A6",
    "image": "/images/resources/corn.png"
  },
  {
    "id": "fruit",
    "name": "Fruit",
    "color": "#95A5A6",
    "image": "/images/resources/fruit.png"
  },
  {
    "id": "fuel_gas",
    "name": "Fuel Gas",
    "color": "#95A5A6",
    "image": "/images/resources/fuel_gas.png"
  },
  {
    "id": "graphite",
    "name": "Graphite",
    "color": "#95A5A6",
    "image": "/images/resources/graphite.png"
  },
  {
    "id": "molten_aluminum",
    "name": "Molten Aluminum",
    "color": "#95A5A6",
    "image": "/images/resources/molten_aluminum.png"
  },
  {
    "id": "molten_titanium",
    "name": "Molten Titanium",
    "color": "#95A5A6",
    "image": "/images/resources/molten_titanium.png"
  },
  {
    "id": "molten_titanium_alloy",
    "name": "Molten Titanium Alloy",
    "color": "#95A5A6",
    "image": "/images/resources/molten_titanium_alloy.png"
  },
  {
    "id": "nitrogen",
    "name": "Nitrogen",
    "color": "#95A5A6",
    "image": "/images/resources/nitrogen.png"
  },
  {
    "id": "oxygen",
    "name": "Oxygen",
    "color": "#95A5A6",
    "image": "/images/resources/oxygen.png"
  },
  {
    "id": "poppy",
    "name": "Poppy",
    "color": "#95A5A6",
    "image": "/images/resources/poppy.png"
  },
  {
    "id": "potato",
    "name": "Potato",
    "color": "#95A5A6",
    "image": "/images/resources/potato.png"
  },
  {
    "id": "sludge",
    "name": "Sludge",
    "color": "#95A5A6",
    "image": "/images/resources/sludge.png"
  },
  {
    "id": "vegetables",
    "name": "Vegetables",
    "color": "#95A5A6",
    "image": "/images/resources/vegetables.png"
  },
  {
    "id": "wheat",
    "name": "Wheat",
    "color": "#95A5A6",
    "image": "/images/resources/wheat.png"
  }
];

export const coiRecipes = [
  {
    "building": "Air Separator",
    "recipeId": "AirSeparation",
    "inputs": [],
    "outputs": [
      {
        "name": "Oxygen",
        "quantity": "12"
      },
      {
        "name": "Nitrogen",
        "quantity": "12"
      }
    ]
  },
  {
    "building": "Alloy Mixer",
    "recipeId": "TitaniumAlloyMixing",
    "inputs": [
      {
        "name": "Molten Titanium",
        "quantity": "32"
      },
      {
        "name": "Molten Aluminum",
        "quantity": "4"
      }
    ],
    "outputs": [
      {
        "name": "Molten Titanium Alloy",
        "quantity": "36"
      }
    ]
  },
  {
    "building": "Aluminum Cell",
    "recipeId": "AluminumElectrolysis",
    "inputs": [
      {
        "name": "Alumina",
        "quantity": "16"
      },
      {
        "name": "Graphite",
        "quantity": "4"
      }
    ],
    "outputs": [
      {
        "name": "Molten Aluminum",
        "quantity": "16"
      },
      {
        "name": "Carbon Dioxide",
        "quantity": "12"
      }
    ]
  },
  {
    "building": "Anaerobic Digester",
    "recipeId": "SludgeDigestion",
    "inputs": [
      {
        "name": "Sludge",
        "quantity": "18"
      }
    ],
    "outputs": [
      {
        "name": "Fuel Gas",
        "quantity": "8"
      },
      {
        "name": "Compost",
        "quantity": "3"
      }
    ]
  },
  {
    "building": "Anaerobic Digester",
    "recipeId": "PotatoDigestion",
    "inputs": [
      {
        "name": "Potato",
        "quantity": "14"
      }
    ],
    "outputs": [
      {
        "name": "Fuel Gas",
        "quantity": "8"
      },
      {
        "name": "Compost",
        "quantity": "1"
      }
    ]
  },
  {
    "building": "Anaerobic Digester",
    "recipeId": "VegetablesDigestion",
    "inputs": [
      {
        "name": "Vegetables",
        "quantity": "14"
      }
    ],
    "outputs": [
      {
        "name": "Fuel Gas",
        "quantity": "8"
      },
      {
        "name": "Compost",
        "quantity": "1"
      }
    ]
  },
  {
    "building": "Anaerobic Digester",
    "recipeId": "FruitDigestion",
    "inputs": [
      {
        "name": "Fruit",
        "quantity": "12"
      }
    ],
    "outputs": [
      {
        "name": "Fuel Gas",
        "quantity": "12"
      },
      {
        "name": "Compost",
        "quantity": "1"
      }
    ]
  },
  {
    "building": "Anaerobic Digester",
    "recipeId": "PoppyDigestion",
    "inputs": [
      {
        "name": "Poppy",
        "quantity": "14"
      }
    ],
    "outputs": [
      {
        "name": "Fuel Gas",
        "quantity": "8"
      },
      {
        "name": "Compost",
        "quantity": "1"
      }
    ]
  },
  {
    "building": "Anaerobic Digester",
    "recipeId": "WheatDigestion",
    "inputs": [
      {
        "name": "Wheat",
        "quantity": "12"
      }
    ],
    "outputs": [
      {
        "name": "Fuel Gas",
        "quantity": "12"
      },
      {
        "name": "Compost",
        "quantity": "1"
      }
    ]
  },
  {
    "building": "Anaerobic Digester",
    "recipeId": "CornDigestion",
    "inputs": [
      {
        "name": "Corn",
        "quantity": "14"
      }
    ],
    "outputs": [
      {
        "name": "Fuel Gas",
        "quantity": "14"
      },
      {
        "name": "Compost",
        "quantity": "1"
      }
    ]
  }
];
