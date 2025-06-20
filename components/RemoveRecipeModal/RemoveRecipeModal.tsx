import { Edge, Node } from 'reactflow';
import Image from 'next/image';
import { RecipeNodeData } from '../RecipeNode/RecipeNode';

/**
 * Connection impact information for the removal modal
 */
export interface ConnectionImpact {
  edge: Edge;
  sourceNode: Node<RecipeNodeData>;
  targetNode: Node<RecipeNodeData>;
  resourceName: string;
  resourceIcon: string;
}

/**
 * RemoveRecipeModalProps defines the properties for the RemoveRecipeModal component.
 */
export interface RemoveRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipeNode: Node<RecipeNodeData> | null;
  impactedConnections: ConnectionImpact[];
  onConfirmRemove: (nodeId: string) => void;
}

/**
 * RemoveRecipeModal shows a confirmation dialog when removing a recipe, displaying affected connections.
 */
export const RemoveRecipeModal: React.FC<RemoveRecipeModalProps> = ({
  isOpen,
  onClose,
  recipeNode,
  impactedConnections,
  onConfirmRemove,
}) => {
  if (!isOpen || !recipeNode) return null;

  const handleConfirmRemove = () => {
    onConfirmRemove(recipeNode.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-red-700">
            Remove Recipe
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        {/* Recipe to be removed */}
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
              <Image 
                src={recipeNode.data.building.image} 
                alt={recipeNode.data.building.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold text-red-800">{recipeNode.data.building.name}</h4>
              <p className="text-sm text-red-600">{recipeNode.data.time}s</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          Are you sure you want to remove this recipe? This action cannot be undone.
        </p>

        {/* Show impacted connections */}
        {impactedConnections.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-orange-700 mb-3 flex items-center">
              ⚠️ Connections that will be removed ({impactedConnections.length}):
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {impactedConnections.map((impact, index) => (
                <div key={index} className="p-3 bg-orange-50 border border-orange-200 rounded text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-gray-600">
                        {impact.sourceNode.data.name}
                      </div>
                      <span className="text-orange-600">→</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                          <Image 
                            src={impact.resourceIcon} 
                            alt={impact.resourceName}
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        </div>
                        <span className="font-medium text-orange-700">{impact.resourceName}</span>
                      </div>
                      <span className="text-orange-600">→</span>
                      <div className="text-xs text-gray-600">
                        {impact.targetNode.data.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No connections message */}
        {impactedConnections.length === 0 && (
          <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded">
            <p className="text-green-700 text-sm">
              ✅ No connections will be affected by removing this recipe.
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmRemove}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Remove Recipe
          </button>
        </div>
      </div>
    </div>
  );
}; 