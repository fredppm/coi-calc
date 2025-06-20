import { Node, Edge } from 'reactflow';
import { useState } from 'react';
import Image from 'next/image';
import { roundForDisplay, getNormalizedAmount } from '../../utils/recipeCalculations';
import { RecipeNodeData } from '../RecipeNode/RecipeNode';

/**
 * ProductionSummaryDrawerProps defines the properties for the ProductionSummaryDrawer component.
 */
export interface ProductionSummaryDrawerProps {
  nodes: Node[];
  edges: Edge[];
  normalizeToSixtySeconds?: boolean;
}

/**
 * ChartIcon - Simple SVG icon for analytics/charts
 */
const ChartIcon = ({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="3" y="8" width="4" height="9" />
    <rect x="9" y="5" width="4" height="12" />
    <rect x="15" y="10" width="4" height="7" />
  </svg>
);

/**
 * FactoryIcon - Simple SVG icon for buildings
 */
const FactoryIcon = ({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M2 20h20" />
    <path d="M7 16v4" />
    <path d="M12 16v4" />
    <path d="M17 16v4" />
    <path d="M5 12V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
    <path d="M11 8h8a1 1 0 0 1 1 1v3" />
  </svg>
);

/**
 * BalanceIcon - Simple SVG icon for balance/scale
 */
const BalanceIcon = ({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 3v18" />
    <path d="M8 12h8" />
    <path d="M5 8h3l1-4h6l1 4h3" />
    <circle cx="6" cy="16" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

/**
 * ArrowDownIcon - Simple SVG icon for inputs
 */
const ArrowDownIcon = ({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

/**
 * ArrowUpIcon - Simple SVG icon for outputs
 */
const ArrowUpIcon = ({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </svg>
);

/**
 * ProductionSummaryDrawer shows production summary in a bottom drawer that slides up.
 */
export const ProductionSummaryDrawer: React.FC<ProductionSummaryDrawerProps> = ({ nodes, edges, normalizeToSixtySeconds }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Calculate production summary
  const calculateProductionSummary = () => {
    const recipeNodes = nodes.filter(node => node.type === 'recipe');
    
    if (recipeNodes.length === 0) {
      return {
        totalInputs: {},
        totalOutputs: {},
        buildingsRequired: {},
        netResources: {},
      };
    }

    const totalInputs: Record<string, { name: string; amount: number; icon: string }> = {};
    const totalOutputs: Record<string, { name: string; amount: number; icon: string }> = {};
    const buildingsRequired: Record<string, { name: string; count: number; image: string }> = {};

    // Process each recipe node
    recipeNodes.forEach(node => {
      const multiplier = node.data.multiplier || 1;
      const recipeTime = node.data.time || 60;
      
      // Count buildings
      const buildingId = node.data.building.id;
      if (!buildingsRequired[buildingId]) {
        buildingsRequired[buildingId] = {
          name: node.data.building.name,
          count: 0,
          image: node.data.building.image,
        };
      }
      buildingsRequired[buildingId].count += multiplier;

      // Count inputs with normalization
      node.data.inputs?.forEach((input: any) => {
        if (!totalInputs[input.id]) {
          totalInputs[input.id] = {
            name: input.name,
            amount: 0,
            icon: input.icon,
          };
        }
        
        const normalizedAmount = getNormalizedAmount(
          input.amount,
          recipeTime,
          normalizeToSixtySeconds || false,
          multiplier
        );
        
        totalInputs[input.id].amount += normalizedAmount;
      });

      // Count outputs with normalization
      node.data.outputs?.forEach((output: any) => {
        if (!totalOutputs[output.id]) {
          totalOutputs[output.id] = {
            name: output.name,
            amount: 0,
            icon: output.icon,
          };
        }
        
        const normalizedAmount = getNormalizedAmount(
          output.amount,
          recipeTime,
          normalizeToSixtySeconds || false,
          multiplier
        );
        
        totalOutputs[output.id].amount += normalizedAmount;
      });
    });

    // Calculate net resources (outputs - inputs)
    const netResources: Record<string, { name: string; amount: number; icon: string; type: 'surplus' | 'deficit' }> = {};
    
    // Add all outputs as positive
    Object.entries(totalOutputs).forEach(([id, output]) => {
      netResources[id] = {
        name: output.name,
        amount: output.amount,
        icon: output.icon,
        type: 'surplus',
      };
    });

    // Subtract inputs
    Object.entries(totalInputs).forEach(([id, input]) => {
      if (netResources[id]) {
        netResources[id].amount -= input.amount;
        if (netResources[id].amount < 0) {
          netResources[id].type = 'deficit';
        }
      } else {
        netResources[id] = {
          name: input.name,
          amount: -input.amount,
          icon: input.icon,
          type: 'deficit',
        };
      }
    });

    // Remove resources with zero net amount
    Object.keys(netResources).forEach(id => {
      if (Math.abs(netResources[id].amount) < 0.001) {
        delete netResources[id];
      }
    });

    return {
      totalInputs,
      totalOutputs,
      buildingsRequired,
      netResources,
    };
  };

  const summary = calculateProductionSummary();
  const recipeNodes = nodes.filter(node => node.type === 'recipe');

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer Container */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-40 
        transition-transform duration-300 ease-out
        ${isOpen ? 'transform translate-y-0' : 'transform translate-y-full'}
      `}>
        {/* Tab/Handle - Part of the drawer */}
        <div className="relative">
          <div className="flex justify-center">
            <button
              onClick={toggleDrawer}
              className={`
                relative bg-white border-l border-r border-t border-gray-200 shadow-lg
                hover:bg-gray-50 transition-all duration-200
                rounded-t-lg px-4 py-2 -mb-px z-10
                ${isOpen ? 'shadow-none' : 'shadow-lg'}
              `}
              title="Toggle Production Summary"
            >
              {/* Tab curved corners */}
              <div className="absolute -left-1 bottom-0 w-1 h-2 overflow-hidden">
                <div className="w-2 h-2 border-r border-gray-200 rounded-br-full bg-transparent"></div>
              </div>
              <div className="absolute -right-1 bottom-0 w-1 h-2 overflow-hidden">
                <div className="w-2 h-2 border-l border-gray-200 rounded-bl-full bg-transparent -translate-x-1"></div>
              </div>
              
              <div className="flex items-center space-x-2 relative z-10">
                <ChartIcon className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">Summary</span>
                <span className={`
                  text-xs transition-transform duration-200 text-gray-500
                  ${isOpen ? 'rotate-180' : ''}
                `}>
                  ▲
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Main Drawer Content */}
        <div className="bg-white shadow-xl border-t border-l border-r border-gray-200 rounded-t-lg pt-2">

          {/* Compact Content */}
          <div className="max-h-[50vh] overflow-y-auto">
            {recipeNodes.length === 0 ? (
              <div className="p-6 text-center text-gray-500 text-sm">
                No recipes in canvas
              </div>
            ) : (
              <div className="p-4 space-y-4">
                
                {/* Buildings - Horizontal scroll */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FactoryIcon className="w-4 h-4 mr-1" />
                    Buildings
                  </h4>
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {Object.entries(summary.buildingsRequired).map(([id, building]) => (
                      <div key={id} className="flex-shrink-0 flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded text-sm">
                        <Image 
                          src={building.image} 
                          alt={building.name}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <span className="text-gray-800 font-medium">{building.name}</span>
                        <span className="text-gray-600 font-bold">×{building.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Net Resources - Only show significant ones */}
                {Object.entries(summary.netResources).length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <BalanceIcon className="w-4 h-4 mr-1" />
                      Net Balance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {Object.entries(summary.netResources)
                        .sort(([, a], [, b]) => b.amount - a.amount)
                        .map(([id, resource]) => (
                        <div key={id} className={`flex items-center justify-between px-2 py-1 rounded text-xs border ${
                          resource.type === 'surplus' 
                            ? 'bg-blue-50 border-blue-200 text-blue-800' 
                            : 'bg-orange-50 border-orange-200 text-orange-800'
                        }`}>
                          <div className="flex items-center space-x-1">
                            <Image 
                              src={resource.icon} 
                              alt={resource.name}
                              width={16}
                              height={16}
                              className="object-contain"
                            />
                            <span className="truncate" title={resource.name}>
                              {resource.name}
                            </span>
                          </div>
                          <span className="font-bold">
                            {resource.type === 'surplus' ? '+' : ''}{roundForDisplay(resource.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating tab when drawer is closed */}
      {!isOpen && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={toggleDrawer}
            className="bg-white border-l border-r border-t border-gray-200 shadow-lg hover:bg-gray-50 transition-all duration-200 rounded-t-lg px-4 py-2"
            title="Open Production Summary"
          >
            <div className="flex items-center space-x-2">
              <ChartIcon className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-900">Summary</span>
              <span className="text-xs text-gray-500">▲</span>
            </div>
          </button>
        </div>
      )}
    </>
  );
}; 