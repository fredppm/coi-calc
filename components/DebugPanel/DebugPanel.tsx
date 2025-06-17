import { Node, Edge } from 'reactflow';
import { useState } from 'react';

/**
 * DebugPanelProps defines the properties for the DebugPanel component.
 */
export interface DebugPanelProps {
  nodes: Node[];
  edges: Edge[];
}

/**
 * DebugPanel shows debug information about the current canvas state.
 */
export const DebugPanel: React.FC<DebugPanelProps> = ({ nodes, edges }) => {
  const [isOpen, setIsOpen] = useState(false);
  const recipeNodes = nodes.filter(node => node.type === 'recipe');

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-4">
      {/* Bug Button */}
      {!isOpen && (
        <button
          onClick={togglePanel}
          className="bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 transition-colors border-2 border-gray-200 hover:border-gray-300"
          title="Toggle Debug Panel"
        >
          <span className="text-xl">🐛</span>
        </button>
      )}

      {/* Collapsible Panel */}
      {isOpen && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg border-2 border-gray-200 w-80 max-h-[calc(100vh-5rem)] flex flex-col">
          {/* Panel Header - Fixed */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🐛</span>
              <h3 className="font-semibold text-gray-900">Debug Panel</h3>
            </div>
            <button
              onClick={togglePanel}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              title="Close Debug Panel"
            >
              ×
            </button>
          </div>

          {/* Panel Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Recipes Section */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Recipes ({recipeNodes.length})
              </h4>
              <div className="space-y-2">
                {recipeNodes.length === 0 ? (
                  <p className="text-xs text-gray-500 italic">No recipes in canvas</p>
                ) : (
                  recipeNodes.map((node, index) => (
                    <div key={node.id} className="text-xs bg-gray-50 p-2 rounded border">
                      <div className="font-medium text-gray-800">
                        #{index + 1}: {node.data.name}
                      </div>
                      <div className="text-gray-600">
                        Building: {node.data.building.name}
                      </div>
                      <div className="text-gray-500">
                        Position: ({Math.round(node.position.x)}, {Math.round(node.position.y)})
                      </div>
                      <div className="text-gray-500">
                        ID: {node.id}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Connections Section */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Connections ({edges.length})
              </h4>
              <div className="space-y-2">
                {edges.length === 0 ? (
                  <p className="text-xs text-gray-500 italic">No connections</p>
                ) : (
                  edges.map((edge, index) => {
                    const sourceNode = recipeNodes.find(n => n.id === edge.source);
                    const targetNode = recipeNodes.find(n => n.id === edge.target);
                    
                    return (
                      <div key={edge.id} className="text-xs bg-blue-50 p-2 rounded border">
                        <div className="font-medium text-blue-800">
                          Connection #{index + 1}
                        </div>
                        <div className="text-blue-700">
                          {sourceNode?.data.name || 'Unknown'} → {targetNode?.data.name || 'Unknown'}
                        </div>
                        <div className="text-blue-600">
                          Resource: {edge.label || 'Unknown'}
                        </div>
                        <div className="text-blue-500 text-[10px]">
                          {edge.sourceHandle} → {edge.targetHandle}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Balance Analysis Section */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Balance Analysis
              </h4>
              
              <div className="space-y-2">
                {recipeNodes.length === 0 ? (
                  <p className="text-xs text-gray-500 italic">No recipes to analyze</p>
                ) : (
                  recipeNodes.map((node, index) => {
                    const connectedEdges = edges.map(edge => {
                      const sourceNode = nodes.find(n => n.id === edge.source);
                      const targetNode = nodes.find(n => n.id === edge.target);
                      return {
                        source: edge.source,
                        target: edge.target,
                        sourceHandle: edge.sourceHandle,
                        targetHandle: edge.targetHandle,
                        sourceNodeData: sourceNode?.data,
                        targetNodeData: targetNode?.data,
                      };
                    });

                    const getResourceStatus = (resourceId: string, type: 'input' | 'output') => {
                      const handleId = `${type}-${resourceId}`;
                      const nodeConnectedEdges = connectedEdges.filter(edge => {
                        if (type === 'input') {
                          return edge.target === node.id && edge.targetHandle === handleId;
                        } else {
                          return edge.source === node.id && edge.sourceHandle === handleId;
                        }
                      });

                      if (nodeConnectedEdges.length === 0) return { status: 'unconnected', current: 0, connected: 0 };

                      const currentResource = type === 'input' 
                        ? node.data.inputs?.find((input: any) => input.id === resourceId)
                        : node.data.outputs?.find((output: any) => output.id === resourceId);
                      
                      if (!currentResource) return { status: 'unconnected', current: 0, connected: 0 };

                      const multiplier = node.data.multiplier || 1;
                      const currentAmount = currentResource.amount * multiplier;

                      if (type === 'input') {
                        // For INPUTS: Sum ALL producers (multiple producers can supply one consumer)
                        let totalSuppliedAmount = 0;

                        nodeConnectedEdges.forEach(edge => {
                          const sourceNodeData = edge.sourceNodeData;
                          if (sourceNodeData && edge.sourceHandle) {
                            const sourceResourceId = edge.sourceHandle.replace('output-', '');
                            const sourceResource = sourceNodeData.outputs?.find((output: any) => output.id === sourceResourceId);
                            if (sourceResource) {
                              const sourceMultiplier = sourceNodeData.multiplier || 1;
                              totalSuppliedAmount += sourceResource.amount * sourceMultiplier;
                            }
                          }
                        });

                        const isBalanced = Math.abs(currentAmount - totalSuppliedAmount) <= (currentAmount * 0.05);
                        
                        if (isBalanced) {
                          return { status: 'connected', current: currentAmount, connected: totalSuppliedAmount };
                        } else {
                          const isUnderSupplied = currentAmount > totalSuppliedAmount;
                          return { 
                            status: isUnderSupplied ? 'unbalanced-critical' : 'unbalanced-mild', 
                            current: currentAmount, 
                            connected: totalSuppliedAmount 
                          };
                        }

                      } else {
                        // For OUTPUTS: Check individual consumers, don't sum them
                        let hasMatchingConsumer = false;
                        let hasUnderConsumption = false;
                        let hasOverConsumption = false;
                        let maxConsumerDemand = 0;

                        nodeConnectedEdges.forEach(edge => {
                          const targetNodeData = edge.targetNodeData;
                          if (targetNodeData && edge.targetHandle) {
                            const targetResourceId = edge.targetHandle.replace('input-', '');
                            const targetResource = targetNodeData.inputs?.find((input: any) => input.id === targetResourceId);
                            if (targetResource) {
                              const targetMultiplier = targetNodeData.multiplier || 1;
                              const targetDemand = targetResource.amount * targetMultiplier;
                              
                              // Track highest demand for display
                              maxConsumerDemand = Math.max(maxConsumerDemand, targetDemand);
                              
                              const isConsumerBalanced = Math.abs(currentAmount - targetDemand) <= (currentAmount * 0.05);
                              
                              if (isConsumerBalanced) {
                                hasMatchingConsumer = true;
                              } else if (currentAmount > targetDemand) {
                                hasOverConsumption = true;
                              } else {
                                hasUnderConsumption = true;
                              }
                            }
                          }
                        });

                        // Priority: if any consumer is perfectly matched, consider it balanced
                        if (hasMatchingConsumer) {
                          return { status: 'connected', current: currentAmount, connected: maxConsumerDemand };
                        }
                        
                        // If no perfect match, determine severity
                        if (hasUnderConsumption) {
                          return { 
                            status: 'unbalanced-critical', 
                            current: currentAmount, 
                            connected: maxConsumerDemand 
                          };
                        } else if (hasOverConsumption) {
                          return { 
                            status: 'unbalanced-mild', 
                            current: currentAmount, 
                            connected: maxConsumerDemand 
                          };
                        }
                        
                        return { status: 'unconnected', current: currentAmount, connected: 0 };
                      }
                    };

                    const getStatusColor = (status: string) => {
                      switch (status) {
                        case 'connected': return 'text-blue-600 bg-blue-50';
                        case 'unbalanced-critical': return 'text-red-600 bg-red-50';
                        case 'unbalanced-mild': return 'text-orange-600 bg-orange-50';
                        case 'unconnected': return 'text-amber-600 bg-amber-50';
                        default: return 'text-gray-600 bg-gray-50';
                      }
                    };

                    return (
                      <div key={node.id} className="text-xs bg-gray-50 p-3 rounded border">
                        <div className="font-medium text-gray-800 mb-2">
                          {node.data.name} (x{node.data.multiplier || 1})
                        </div>
                        
                        {/* Inputs */}
                        {node.data.inputs && node.data.inputs.length > 0 && (
                          <div className="mb-2">
                            <div className="text-gray-600 font-medium mb-1">Inputs:</div>
                            {node.data.inputs.map((input: any) => {
                              const analysis = getResourceStatus(input.id, 'input');
                              return (
                                <div key={input.id} className={`flex items-center justify-between p-1 rounded mb-1 ${getStatusColor(analysis.status)}`}>
                                  <div className="flex items-center space-x-1">
                                    <span>{input.name}</span>
                                  </div>
                                  <div className="text-right">
                                    <div>{analysis.current} / {analysis.status !== 'unconnected' ? analysis.connected : '-'}  </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Outputs */}
                        {node.data.outputs && node.data.outputs.length > 0 && (
                          <div>
                            <div className="text-gray-600 font-medium mb-1">Outputs:</div>
                            {node.data.outputs.map((output: any) => {
                              const analysis = getResourceStatus(output.id, 'output');
                              return (
                                <div key={output.id} className={`flex items-center justify-between p-1 rounded mb-1 ${getStatusColor(analysis.status)}`}>
                                  <div className="flex items-center space-x-1">
                                    <span>{output.name}</span>
                                  </div>
                                  <div className="text-right">
                                    <div>{analysis.current} / {analysis.status !== 'unconnected' ? analysis.connected : '-'}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Statistics */}
            <div className="border-t pt-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Statistics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-green-50 p-2 rounded">
                  <div className="font-medium text-green-800">Total Nodes</div>
                  <div className="text-green-700">{nodes.length}</div>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="font-medium text-blue-800">Total Edges</div>
                  <div className="text-blue-700">{edges.length}</div>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <div className="font-medium text-purple-800">Recipes</div>
                  <div className="text-purple-700">{recipeNodes.length}</div>
                </div>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="font-medium text-orange-800">Connected</div>
                  <div className="text-orange-700">
                    {recipeNodes.filter(node => 
                      edges.some(edge => edge.source === node.id || edge.target === node.id)
                    ).length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 