import { Handle, Position } from 'reactflow';
import { useState } from 'react';
import Image from 'next/image';
import { getNormalizedAmount, getDisplayTime, clampMultiplier, getNormalizedAmountForBalance } from '../../utils/recipeCalculations';
import { getImagePath } from '../../utils/urlHelper';

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
  normalizeToSixtySeconds?: boolean;
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
    const clampedMultiplier = clampMultiplier(newMultiplier);
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
  const hasTimeDifference = (resourceId: string, type: 'input' | 'output') => {
    if (!data.connectedEdges) return false;
    
    // If normalization is enabled, all recipes show 60s, so no time difference is visible
    if (data.normalizeToSixtySeconds) return false;
    
    const handleId = `${type}-${resourceId}`;
    const connectedEdges = data.connectedEdges.filter(edge => {
      if (type === 'input') {
        return edge.target === id && edge.targetHandle === handleId;
      } else {
        return edge.source === id && edge.sourceHandle === handleId;
      }
    });

    if (connectedEdges.length === 0) return false;

    // Check if any connected recipe has different time
    return connectedEdges.some(edge => {
      const connectedNodeData = type === 'input' ? edge.sourceNodeData : edge.targetNodeData;
      return connectedNodeData && connectedNodeData.time !== data.time;
    });
  };

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

    // Always normalize current amount for balance calculation
    const currentAmountForBalance = getNormalizedAmountForBalance(currentResource.amount, data.time, multiplier);

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
            // Always normalize for balance calculation
            totalSuppliedAmount += getNormalizedAmountForBalance(sourceResource.amount, sourceNodeData.time, sourceMultiplier);
          }
        }
      });

      // Debug log
      console.log(`INPUT ${currentResource.name}: needs ${currentAmountForBalance}, gets ${totalSuppliedAmount}`);

      // Simple comparison: production vs consumption
      if (totalSuppliedAmount < currentAmountForBalance) {
        return 'critical-shortage'; // Red - not enough supply
      } else if (totalSuppliedAmount > currentAmountForBalance) {
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
            // Always normalize for balance calculation
            totalDemandAmount += getNormalizedAmountForBalance(targetResource.amount, targetNodeData.time, targetMultiplier);
          }
        }
      });

      // Debug log
      console.log(`OUTPUT ${currentResource.name}: produces ${currentAmountForBalance}, demand is ${totalDemandAmount}`);

      // Simple comparison: production vs demand
      if (currentAmountForBalance < totalDemandAmount) {
        return 'insufficient-production'; // Yellow - can't meet demand
      } else if (currentAmountForBalance > totalDemandAmount) {
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

  // Get background color for time difference indicator based on connection status
  const getTimeDifferenceColor = (resourceId: string, type: 'input' | 'output') => {
    const status = getResourceConnectionStatus(resourceId, type);
    
    if (status === 'connected' || status === 'excess-supply') {
      return 'bg-blue-500'; // Blue for balanced connections
    } else if (status === 'critical-shortage') {
      return 'bg-red-500'; // Red for critical shortage
    } else if (status === 'insufficient-production' || status === 'excess-production') {
      return 'bg-yellow-500'; // Yellow for production issues
    } else {
      return 'bg-gray-500'; // Gray for unconnected
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border min-w-[400px] relative">
      {/* Building Header */}
      <div className="flex items-center justify-between p-3 border-b bg-gray-50 rounded-t-lg">
        {/* Left Side - Image and Text */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
              src={getImagePath(data.building.image)} 
              alt={data.building.name}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm leading-tight">{data.building.name}</h3>
            <p className="text-xs text-gray-500">
              {getDisplayTime(data.time, data.normalizeToSixtySeconds)}
            </p>
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
              const adjustedAmount = getNormalizedAmount(input.amount, data.time, data.normalizeToSixtySeconds, multiplier);
              const styling = getResourceStyling(input.id, 'input');
              const status = getResourceConnectionStatus(input.id, 'input');
              const hasDifferentTime = hasTimeDifference(input.id, 'input');
              
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
                    title={`${status === 'connected' ? 'Balanced connection' : status === 'critical-shortage' ? 'Critical shortage' : status === 'excess-supply' ? 'Excess supply' : 'Needs supply connection'}${hasDifferentTime ? ' ⏰ Time difference detected' : ''}`}
                  >
                    <div className="flex items-center space-x-2">
                                             {hasDifferentTime && (
                         <div className={`absolute -top-1 -left-1 w-[16px] h-[16px] ${getTimeDifferenceColor(input.id, 'input')} rounded-full flex items-center justify-center`}>
                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1"/>
                            <line x1="7" y1="7" x2="7" y2="3" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                            <line x1="7" y1="7" x2="5" y2="5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                          </svg>
                         </div>
                       )}
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                        <Image 
                          src={input.icon} 
                          alt={input.name}
                          width={24}
                          height={24}
                          className="object-contain"
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
              const adjustedAmount = getNormalizedAmount(output.amount, data.time, data.normalizeToSixtySeconds, multiplier);
              const styling = getResourceStyling(output.id, 'output');
              const status = getResourceConnectionStatus(output.id, 'output');
              const hasDifferentTime = hasTimeDifference(output.id, 'output');
              
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
                    title={`${status === 'connected' ? 'Balanced connection' : status === 'insufficient-production' ? 'Insufficient production' : status === 'excess-production' ? 'Excess production' : 'Excess supply'}${hasDifferentTime ? ' 🕐 Time difference detected' : ''}`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                        <Image 
                          src={output.icon} 
                          alt={output.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-left truncate flex-1">{output.name}</span>
                                              {hasDifferentTime && (
                          <div className={`absolute -top-1 -right-1 w-[16px] h-[16px] ${getTimeDifferenceColor(output.id, 'output')} rounded-full flex items-center justify-center`}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1"/>
                              <line x1="7" y1="7" x2="7" y2="3" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                              <line x1="7" y1="7" x2="5" y2="5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                            </svg>
                          </div>
                        )}
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