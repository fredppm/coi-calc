import { useState, useEffect } from 'react';
import { Recipe, getRecipesByResource } from '../../utils/recipes';

/**
 * RecipeSelectorProps defines the properties for the RecipeSelector component.
 */
export interface RecipeSelectorProps {
  selectedResource: string;
  selectedResourceName?: string;
  onRecipeSelect: (recipe: Recipe) => void;
}

/**
 * RecipeSelector allows users to select a recipe that produces their chosen resource.
 */
export const RecipeSelector: React.FC<RecipeSelectorProps> = ({
  selectedResource,
  selectedResourceName,
  onRecipeSelect,
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  const displayName = selectedResourceName || selectedResource;

  useEffect(() => {
    if (!selectedResource) {
      setRecipes([]);
      return;
    }

    setLoading(true);
    try {
      const data = getRecipesByResource(selectedResource);
      setRecipes(data);
    } catch (error) {
      console.error('Error loading recipes:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedResource]);

  if (!selectedResource) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center">
        {/* Simple Grid Background */}
        <div className="absolute inset-0 opacity-25">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="text-center text-gray-500 relative z-10">
          <span className="text-8xl mb-4 block">🎯</span>
          <p className="text-xl">Select a resource to see available recipes</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center">
        {/* Simple Grid Background */}
        <div className="absolute inset-0 opacity-25">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="text-center text-gray-500 relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl">Loading recipes...</p>
        </div>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center">
        {/* Simple Grid Background */}
        <div className="absolute inset-0 opacity-25">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="text-center text-gray-500 relative z-10">
          <span className="text-8xl mb-4 block">🏭</span>
          <p className="text-xl">No recipes found for {displayName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col">
      {/* Simple Grid Background */}
      <div className="absolute inset-0 opacity-25">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Simple Header - No Search */}
      <div className="flex-shrink-0 py-4 px-6 bg-white border-b border-gray-200 relative z-10">
        <h1 className="text-2xl font-bold text-gray-800">
          Recipes for {displayName}
        </h1>
      </div>

      {/* Recipe Cards Grid */}
      <div className="flex-1 overflow-y-auto p-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center">
          {recipes.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => onRecipeSelect(recipe)}
              className="flex flex-col group bg-white rounded-lg shadow-lg border w-full hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left overflow-hidden"
            >
              {/* Building Header - EXACTLY like RecipeNode */}
              <div className="flex items-center justify-between p-3 border-b bg-gray-50 rounded-t-lg">
                {/* Left Side - Image and Text */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img 
                      src={recipe.building.image} 
                      alt={recipe.building.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-tight">{recipe.building.name}</h3>
                    <p className="text-xs text-gray-500">{recipe.time}s</p>
                  </div>
                </div>

                {/* Right Side - Click Indicator */}
                <div className="flex items-center space-x-2">
                  <div className="border-2 border-blue-500 text-blue-500 group-hover:bg-blue-500 group-hover:text-white px-3 py-1 rounded-full text-xs font-semibold transition-all">
                    + Add to Canvas
                  </div>
                </div>
              </div>

              {/* Content Layout - EXACTLY like RecipeNode */}
              <div className="flex">
                {/* Left Side - Inputs */}
                <div className="flex-1 p-4 relative">
                  <div className="space-y-2">
                    {recipe.inputs.map((input, index) => {
                      // Normalize values to per minute (60s) for easier comparison
                      const normalizedAmount = Math.round((input.amount * 60 / recipe.time) * 100) / 100;
                      const displayAmount = `${normalizedAmount}/min`;
                      
                      return (
                        <div key={input.id} className="relative">
                          <div className="w-full flex items-center justify-between text-xs p-2 rounded border border-gray-300">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img 
                                  src={input.icon} 
                                  alt={input.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-left truncate flex-1">{input.name}</span>
                            </div>
                            <span className="font-medium ml-2 text-gray-600" title={`${input.amount} per ${recipe.time}s cycle`}>
                              {displayAmount}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Center Arrow - EXACTLY like RecipeNode */}
                <div className="flex items-center justify-center px-4">
                  <div className="text-center">
                    <span className="text-2xl text-gray-400">→</span>
                  </div>
                </div>

                {/* Right Side - Outputs */}
                <div className="flex-1 p-4 relative">
                  <div className="space-y-2">
                    {recipe.outputs.map((output, index) => {
                      // Normalize values to per minute (60s) for easier comparison
                      const normalizedAmount = Math.round((output.amount * 60 / recipe.time) * 100) / 100;
                      const displayAmount = `${normalizedAmount}/min`;
                      
                      return (
                        <div key={output.id} className="relative">
                          <div className="w-full flex items-center justify-between text-xs p-2 rounded border border-gray-300">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img 
                                  src={output.icon} 
                                  alt={output.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-left truncate flex-1">{output.name}</span>
                            </div>
                            <span className="font-medium ml-2 text-gray-600" title={`${output.amount} per ${recipe.time}s cycle`}>
                              {displayAmount}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 