import { Handle, Position } from 'reactflow';
import { useState } from 'react';

/**
 * RecipeNodeData defines the data structure for a recipe node.
 */
export interface RecipeNodeData {
  name: string;
  building: {
    id: string;
    name: string;
    image: string;
  };
  inputs: { id: string; name: string; amount: number; icon: string }[];
  outputs: { id: string; name: string; amount: number; icon: string }[];
  time: number;
  onResourceClick?: (resourceId: string, resourceName: string, type: 'input' | 'output') => void;
  onRemove?: (nodeId: string) => void;
  multiplier?: number;
  onMultiplierChange?: (nodeId: string, multiplier: number) => void;
  connectedEdges?: { 
    source: string; 
    target: string; 
    sourceHandle?: string; 
    targetHandle?: string;
    sourceNodeData?: any;
    targetNodeData?: any;
  }[];
}

/**
 * RecipeNodeProps defines the properties for the RecipeNode component.
 */
export interface RecipeNodeProps {
  data: RecipeNodeData;
  id: string;
}

/**
 * RecipeNode renders a custom node for recipes in the flow diagram.
 */
export const RecipeNode: React.FC<RecipeNodeProps> = ({ data, id }) => {
  const [multiplier, setMultiplier] = useState(data.multiplier || 1);

  const handleResourceClick = (resourceId: string, resourceName: string, type: 'input' | 'output') => {
    if (data.onResourceClick) {
      data.onResourceClick(resourceId, resourceName, type);
    }
  };

  const handleRemove = () => {
    if (data.onRemove) {
      data.onRemove(id);
    }
  };

  const handleMultiplierChange = (newMultiplier: number) => {
    // Ensure multiplier is between 1 and 50
    const clampedMultiplier = Math.max(1, Math.min(50, newMultiplier));
    setMultiplier(clampedMultiplier);
    
    if (data.onMultiplierChange) {
      data.onMultiplierChange(id, clampedMultiplier);
    }
  };

  const handleMultiplierInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    handleMultiplierChange(value);
  };

  const incrementMultiplier = () => {
    handleMultiplierChange(multiplier + 1);
  };

  const decrementMultiplier = () => {
    handleMultiplierChange(multiplier - 1);
  };

  // Calculate connection status for each resource considering multiplier and balance
  const getResourceConnectionStatus = (resourceId: string, type: 'input' | 'output') => {
    if (!data.connectedEdges) return 'unconnected';
    
    const handleId = `${type}-${resourceId}`;
    const connectedEdges = data.connectedEdges.filter(edge => {
      if (type === 'input') {
        return edge.target === id && edge.targetHandle === handleId;
      } else {
        return edge.source === id && edge.sourceHandle === handleId;
      }
    });

    if (connectedEdges.length === 0) return 'unconnected';

    // Find the resource in current node
    const currentResource = type === 'input' 
      ? data.inputs.find(input => input.id === resourceId)
      : data.outputs.find(output => output.id === resourceId);
    
    if (!currentResource) return 'unconnected';

    const currentAmount = currentResource.amount * multiplier;

    if (type === 'input') {
      // For INPUTS: Calculate total supply from all connected producers
      let totalSuppliedAmount = 0;
      
      connectedEdges.forEach(edge => {
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

      // Debug log
      console.log(`INPUT ${currentResource.name}: needs ${currentAmount}, gets ${totalSuppliedAmount}`);

      // Simple comparison: production vs consumption
      if (totalSuppliedAmount < currentAmount) {
        return 'critical-shortage'; // Red - not enough supply
      } else if (totalSuppliedAmount > currentAmount) {
        return 'excess-supply'; // Blue - more than enough
      } else {
        return 'connected'; // Blue - balanced
      }

    } else {
      // For OUTPUTS: Calculate total demand from all connected consumers
      let totalDemandAmount = 0;
      
      connectedEdges.forEach(edge => {
        const targetNodeData = edge.targetNodeData;
        if (targetNodeData && edge.targetHandle) {
          const targetResourceId = edge.targetHandle.replace('input-', '');
          const targetResource = targetNodeData.inputs?.find((input: any) => input.id === targetResourceId);
          if (targetResource) {
            const targetMultiplier = targetNodeData.multiplier || 1;
            totalDemandAmount += targetResource.amount * targetMultiplier;
          }
        }
      });

      // Debug log
      console.log(`OUTPUT ${currentResource.name}: produces ${currentAmount}, demand is ${totalDemandAmount}`);

      // Simple comparison: production vs demand
      if (currentAmount < totalDemandAmount) {
        return 'insufficient-production'; // Yellow - can't meet demand
      } else if (currentAmount > totalDemandAmount) {
        return 'excess-production'; // Yellow - overproducing
      } else {
        return 'connected'; // Blue - balanced
      }
    }
  };

  // Get styling based on connection status
  const getResourceStyling = (resourceId: string, type: 'input' | 'output') => {
    const status = getResourceConnectionStatus(resourceId, type);
    
    if (status === 'connected') {
      // Balanced connections - blue accent
      if (type === 'input') {
        return 'border border-blue-300 border-l-4 border-l-blue-400';
      } else {
        return 'border border-blue-300 border-r-4 border-r-blue-400';
      }
    } else if (status === 'critical-shortage' || status === 'insufficient-production' || status === 'excess-production') {
      // Critical shortage OR Production issues = Yellow/Red
      if (status === 'critical-shortage') {
        // Consumer with critical shortage = Red
        return 'border border-red-300 border-l-4 border-l-red-400';
      } else {
        // Producer with insufficient or excess production = Yellow
        if (type === 'input') {
          return 'border border-yellow-300 border-l-4 border-l-yellow-400';
        } else {
          return 'border border-yellow-300 border-r-4 border-r-yellow-400';
        }
      }
    } else if (status === 'excess-supply') {
      // Consumer with excess supply = OK (blue)
      return 'border border-blue-300 border-l-4 border-l-blue-400';
    } else {
      // Unconnected = No special color, just gray
      if (type === 'input') {
        return 'border border-gray-300';
      } else {
        return 'border border-gray-300';
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border min-w-[400px] relative">
      {/* Building Header */}
      <div className="flex items-center justify-between p-3 border-b bg-gray-50 rounded-t-lg">
        {/* Left Side - Image and Text */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img 
              src={data.building.image} 
              alt={data.building.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm leading-tight">{data.name}</h3>
            <p className="text-xs text-gray-500">{data.building.name} • {data.time}s</p>
          </div>
        </div>

        {/* Right Side - Controls */}
        <div className="flex items-center space-x-2">
          {/* Multiplier Controls */}
          <div className="flex items-center space-x-1">
            <button
              onClick={decrementMultiplier}
              disabled={multiplier <= 1}
              className="w-5 h-5 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded text-xs flex items-center justify-center transition-colors"
              title="Decrease multiplier"
            >
              −
            </button>
            <input
              type="number"
              value={multiplier}
              onChange={handleMultiplierInput}
              min="1"
              max="50"
              className="w-8 h-5 text-xs text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={incrementMultiplier}
              disabled={multiplier >= 50}
              className="w-5 h-5 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded text-xs flex items-center justify-center transition-colors"
              title="Increase multiplier"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-xs font-bold transition-colors"
            title="Remove recipe"
          >
            X
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Left Side - Inputs */}
        <div className="flex-1 p-4 relative">
          <div className="space-y-2">
            {data.inputs.map((input, index) => {
              const adjustedAmount = input.amount * multiplier;
              const styling = getResourceStyling(input.id, 'input');
              const status = getResourceConnectionStatus(input.id, 'input');
              
              return (
                <div key={input.id} className="relative">
                  {/* Input Handle positioned for each resource */}
                  <Handle
                    type="target"
                    position={Position.Left}
                    id={`input-${input.id}`}
                    style={{
                      width: '20px',
                      height: '20px',
                      background: 'transparent',
                      border: 'transparent',
                      position: 'absolute',
                    }}
                  ></Handle>
                  <button
                    onClick={() => handleResourceClick(input.id, input.name, 'input')}
                    className={`w-full flex items-center justify-between text-xs p-2 rounded hover:opacity-80 transition-all ${styling}`}
                    title={status === 'connected' ? 'Balanced connection' : status === 'critical-shortage' ? 'Critical shortage' : status === 'excess-supply' ? 'Excess supply' : 'Needs supply connection'}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img 
                          src={input.icon} 
                          alt={input.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-left truncate flex-1">{input.name}</span>
                    </div>
                    <span className={`font-medium ml-2 ${status === 'connected' ? 'text-blue-600' : status === 'critical-shortage' ? 'text-red-600' : status === 'excess-supply' ? 'text-blue-600' : 'text-gray-600'}`}>
                      {adjustedAmount}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Arrow */}
        <div className="flex items-center justify-center px-4">
          <div className="text-center">
            <span className="text-2xl text-gray-400">→</span>
          </div>
        </div>

        {/* Right Side - Outputs */}
        <div className="flex-1 p-4 relative">
          <div className="space-y-2">
            {data.outputs.map((output, index) => {
              const adjustedAmount = output.amount * multiplier;
              const styling = getResourceStyling(output.id, 'output');
              const status = getResourceConnectionStatus(output.id, 'output');
              
              return (
                <div key={output.id} className="relative">
                  {/* Output Handle positioned for each resource */}
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={`output-${output.id}`}
                    style={{
                      right: '-10px',
                      width: '20px',
                      height: '20px',
                      background: 'transparent',
                      border: 'transparent',
                      position: 'absolute',
                    }}
                  />
                  <button
                    onClick={() => handleResourceClick(output.id, output.name, 'output')}
                    className={`w-full flex items-center justify-between text-xs p-2 rounded hover:opacity-80 transition-all ${styling}`}
                    title={status === 'connected' ? 'Balanced connection' : status === 'insufficient-production' ? 'Insufficient production' : status === 'excess-production' ? 'Excess production' : 'Excess supply'}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img 
                          src={output.icon} 
                          alt={output.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-left truncate flex-1">{output.name}</span>
                    </div>
                    <span className={`font-medium ml-2 ${status === 'connected' ? 'text-blue-600' : status === 'insufficient-production' ? 'text-yellow-600' : status === 'excess-production' ? 'text-yellow-600' : 'text-gray-600'}`}>
                      {adjustedAmount}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}; 