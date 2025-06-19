import React from 'react';
import { humanizeRecipeName, gamePresets, coiFormatter } from '../../utils/nameFormatter';

/**
 * Test component to showcase name formatting capabilities
 * This demonstrates how technical game names are converted to human-readable ones
 */
export const NameFormatterTest: React.FC = () => {
  // Sample recipe names from Captain of Industry
  const sampleRecipes = [
    { name: "AirSeparation", building: "Air Separator" },
    { name: "TitaniumAlloyMixing", building: "Alloy Mixer" },
    { name: "AluminumElectrolysis", building: "Aluminum Cell" },
    { name: "SludgeDigestion", building: "Anaerobic Digester" },
    { name: "PotatoDigestion", building: "Anaerobic Digester" },
    { name: "IronSmeltingArcScrapT1", building: "Arc Furnace" },
    { name: "SteelMakingArc", building: "Arc Furnace II" },
    { name: "CopperScrapSmelting", building: "Arc Furnace" },
    { name: "ElectronicsAssemblyIii", building: "Assembly III" },
    { name: "MicrochipsManufacturing", building: "Microchip Machine" },
    { name: "BreadBaking", building: "Baking Unit" },
    { name: "CrudeOilDistillation", building: "Basic Distiller" },
    { name: "IronOreCrushing", building: "Crusher" },
    { name: "ConcreteProduction", building: "Concrete Mixer" },
    { name: "PlasticPolymerization", building: "Polymerization Plant" }
  ];

  // Test different language settings
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        🎮 Game Name Formatter Test
      </h2>
      
      <p className="text-gray-600 mb-6">
        This utility converts technical game recipe names into human-readable ones. 
        Perfect for games where internal names are not user-friendly!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* English Examples */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">
            📝 Captain of Industry - English
          </h3>
          <div className="space-y-2">
            {sampleRecipes.map((recipe, index) => {
              const humanized = coiFormatter.humanize(recipe.name, recipe.building);
              return (
                <div key={index} className="border-l-4 border-blue-200 pl-3 py-1">
                  <div className="text-sm text-gray-500 font-mono">
                    {recipe.name}
                  </div>
                  <div className="font-medium text-gray-800">
                    {humanized}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Multilingual Examples */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-green-600">
            🌍 Multilingual Support
          </h3>
          <div className="space-y-4">
            {languages.map(lang => (
              <div key={lang.code}>
                <h4 className="font-medium text-gray-700 mb-2">
                  {lang.name}
                </h4>
                <div className="space-y-1">
                  {sampleRecipes.slice(0, 3).map((recipe, index) => {
                    const humanized = humanizeRecipeName(
                      recipe.name, 
                      recipe.building,
                      { 
                        ...gamePresets.captainOfIndustry,
                        language: lang.code as any
                      }
                    );
                    return (
                      <div key={index} className="text-sm border-l-2 border-green-200 pl-2">
                        <span className="text-gray-600 font-mono text-xs">
                          {recipe.name}
                        </span>
                        <div className="font-medium text-gray-800">
                          {humanized}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-3 text-purple-600">
          ⚙️ How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">1. Pattern Detection</h4>
            <p className="text-gray-600">
              Recognizes common patterns like "ResourceAction" 
              (e.g., "IronSmelting" → "Iron Smelting")
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">2. Smart Replacements</h4>
            <p className="text-gray-600">
              Replaces technical terms with user-friendly ones 
              (e.g., "Scrap" → "from Scrap", "Arc" → "Electric Arc")
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">3. Context Addition</h4>
            <p className="text-gray-600">
              Optionally adds building context 
              (e.g., "Iron Smelting (Electric Arc Furnace)")
            </p>
          </div>
        </div>
      </div>

      {/* Usage Info */}
      <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">
          🚀 Ready for Other Games
        </h4>
        <p className="text-blue-700 text-sm">
          This system is game-agnostic and can be easily configured for other games like 
          Factorio, Satisfactory, or any game with technical recipe names. 
          Just create a custom configuration with game-specific patterns and replacements!
        </p>
      </div>
    </div>
  );
};

export default NameFormatterTest; 