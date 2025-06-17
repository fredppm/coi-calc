import { useState, useEffect } from 'react';
import { Recipe } from '../../pages/api/recipes';

/**
 * RecipeConnectionModalProps defines the properties for the RecipeConnectionModal component.
 */
export interface RecipeConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId: string;
  resourceName: string;
  connectionType: 'input' | 'output'; // 'input' means we want recipes that produce this resource, 'output' means recipes that consume it
  onRecipeSelect: (recipe: Recipe) => void;
  existingRecipes?: Recipe[]; // Recipes already on the canvas
}

/**
 * RecipeConnectionModal allows users to select recipes that can be connected through a specific resource.
 */
export const RecipeConnectionModal: React.FC<RecipeConnectionModalProps> = ({
  isOpen,
  onClose,
  resourceId,
  resourceName,
  connectionType,
  onRecipeSelect,
  existingRecipes = [],
}) => {
  const [newRecipes, setNewRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || !resourceId) return;

    const fetchRecipes = async () => {
      try {
        setLoading(true);
        
        // If connectionType is 'input', we want recipes that produce this resource
        // If connectionType is 'output', we want recipes that consume this resource
        const response = await fetch('/api/recipes');
        const allRecipes = await response.json();
        
        const filteredRecipes = allRecipes.filter((recipe: Recipe) => {
          if (connectionType === 'input') {
            // Find recipes that produce this resource
            return recipe.outputs.some(output => output.id === resourceId);
          } else {
            // Find recipes that consume this resource
            return recipe.inputs.some(input => input.id === resourceId);
          }
        });
        
        setNewRecipes(filteredRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [isOpen, resourceId, connectionType]);

  // Filter existing recipes that can connect to this resource
  const connectableExistingRecipes = existingRecipes.filter((recipe) => {
    if (connectionType === 'input') {
      // Find existing recipes that produce this resource
      return recipe.outputs.some(output => output.id === resourceId);
    } else {
      // Find existing recipes that consume this resource
      return recipe.inputs.some(input => input.id === resourceId);
    }
  });

  const handleRecipeSelect = (recipe: Recipe) => {
    onRecipeSelect(recipe);
    onClose();
  };

  if (!isOpen) return null;

  const hasExistingRecipes = connectableExistingRecipes.length > 0;
  const hasNewRecipes = newRecipes.length > 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Connect {resourceName} {connectionType === 'input' ? 'Producers' : 'Consumers'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          {connectionType === 'input' 
            ? `Select a recipe that produces ${resourceName} to connect as input:`
            : `Select a recipe that consumes ${resourceName} to connect as output:`
          }
        </p>

        {loading ? (
          <div className="text-center py-8">Loading recipes...</div>
        ) : (!hasExistingRecipes && !hasNewRecipes) ? (
          <div className="text-center py-8 text-gray-500">
            No recipes found that {connectionType === 'input' ? 'produce' : 'consume'} {resourceName}
          </div>
        ) : (
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">

            {/* Combined list: Existing recipes first (red), then new recipes - 2 column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(() => {
                // Combine existing and new recipes, with existing ones first
                const allRecipes = [
                  ...connectableExistingRecipes.map(recipe => ({ ...recipe, isExisting: true })),
                  ...newRecipes.map(recipe => ({ ...recipe, isExisting: false }))
                ];

                return allRecipes.map((recipe) => {
                  // Use red styling for existing recipes
                  const isExisting = recipe.isExisting;
                  return (
                    <button
                      key={`${isExisting ? 'existing' : 'new'}-${recipe.id}`}
                      onClick={() => handleRecipeSelect(recipe)}
                      className={`w-full border rounded-lg hover:bg-gray-50 transition-colors text-left shadow-sm hover:shadow-md ${
                        isExisting ? 'border-blue-300 bg-blue-50 ring-1 ring-blue-200' : 'border-gray-200'
                      }`}
                    >
                      {/* Recipe Card similar to canvas layout */}
                      <div className={`bg-white rounded-lg h-full border flex flex-col ${isExisting ? 'border-blue-200' : ''}`}>
                        {/* Building Header */}
                        <div className={`flex items-center justify-between p-3 border-b rounded-t-lg ${
                          isExisting ? 'bg-blue-50' : 'bg-gray-50'
                        }`}>
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
                              <h4 className="font-semibold text-sm leading-tight">
                                {recipe.name}
                                {isExisting && <span className="text-blue-600 ml-1 text-xs">(reuse)</span>}
                              </h4>
                              <p className="text-xs text-gray-500">{recipe.building.name} • {recipe.time}s</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 flex ">
                          {/* Left Side - Inputs */}
                          <div className="flex-1 p-3">
                            <div className="space-y-1">
                              {recipe.inputs.length === 0 ? (
                                <p className="text-xs text-gray-400 text-center italic">No inputs</p>
                              ) : (
                                recipe.inputs.map((input) => (
                                  <div 
                                    key={input.id} 
                                    className={`flex items-center justify-between text-xs p-1 rounded ${
                                      input.id === resourceId ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50'
                                    }`}
                                  >
                                    <div className="flex items-center space-x-1">
                                      <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img 
                                          src={input.icon} 
                                          alt={input.name}
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                                      <span className="truncate">{input.name}</span>
                                    </div>
                                    <span className="text-gray-500 font-medium ml-1">{input.amount}</span>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>

                          {/* Center Arrow */}
                          <div className="flex items-center justify-center px-2 ">
                            <span className="text-lg text-gray-400">→</span>
                          </div>

                          {/* Right Side - Outputs */}
                          <div className="flex-1 p-3">
                            <div className="space-y-1">
                              {recipe.outputs.length === 0 ? (
                                <p className="text-xs text-gray-400 text-center italic">No outputs</p>
                              ) : (
                                recipe.outputs.map((output) => (
                                  <div 
                                    key={output.id} 
                                    className={`flex items-center justify-between text-xs p-1 rounded ${
                                      output.id === resourceId ? 'bg-green-100 border border-green-300' : 'bg-gray-50'
                                    }`}
                                  >
                                    <span className="text-gray-500 font-medium mr-1">{output.amount}</span>
                                    <div className="flex items-center space-x-1">
                                      <span className="truncate">{output.name}</span>
                                      <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img 
                                          src={output.icon} 
                                          alt={output.name}
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                });
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 