import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flow } from '../components/Flow/Flow';
import { getAllRecipes } from '../utils/recipes';
import { Node, Edge } from 'reactflow';
import { ProductionSummaryDrawer } from '../components/ProductionSummaryDrawer/ProductionSummaryDrawer';
import { DebugPanel } from '../components/DebugPanel/DebugPanel';
import { ShareButton } from '../components/ShareButton/ShareButton';
import { decodeFromBlueprintString } from '../utils/blueprint';
import { getImagePath } from '../utils/urlHelper';
import { coiResources } from '../data/coi';
import 'reactflow/dist/style.css';

// Legacy decompression for backward-compatible loading of old ?state= URLs
const decompress = (compressed: string): string => {
  try {
    const data = Array.from(atob(compressed)).map(c => c.charCodeAt(0));
    const dictionary: { [key: number]: string } = {};
    let dictSize = 256;
    let result = "";
    let w = String.fromCharCode(data[0]);
    result = w;
    
    for (let i = 1; i < data.length; i++) {
      const k = data[i];
      let entry = "";
      if (dictionary[k] !== undefined) {
        entry = dictionary[k];
      } else if (k === dictSize) {
        entry = w + w.charAt(0);
      } else {
        return atob(compressed); // Fallback to simple base64
      }
      
      result += entry;
      dictionary[dictSize++] = w + entry.charAt(0);
      w = entry;
    }
    
    return result;
  } catch {
    // Fallback to base64 if decompression fails
    return atob(compressed);
  }
};

// Minimized state interface for smaller JSON
interface MinimalNode {
  i: string; // id
  t: string; // type
  p: [number, number]; // position [x, y]
  d: {
    n: string; // name
    b: string; // building.id (reference only)
    m?: number; // multiplier (optional, defaults to 1)
  };
}

interface MinimalEdge {
  i: string; // id
  s: string; // source
  t: string; // target
  sh?: string; // sourceHandle
  th?: string; // targetHandle
  l?: string; // label
}

interface MinimalState {
  n: MinimalNode[]; // nodes
  e: MinimalEdge[]; // edges
}

const decodeCanvasState = (stateParam: string): { nodes: Node[], edges: Edge[] } | null => {
  try {
    const decoded = decodeURIComponent(stateParam);
    const decompressed = decompress(decoded);
    const minimalState: MinimalState = JSON.parse(decompressed);

    // Reconstruct full nodes from minimal data
    const nodes: Node[] = minimalState.n.map(minNode => ({
      id: minNode.i,
      type: minNode.t,
      position: { x: minNode.p[0], y: minNode.p[1] },
      data: {
        name: minNode.d.n,
        building: { id: minNode.d.b }, // Will be filled with full data later
        multiplier: minNode.d.m || 1,
        // Handler functions will be added later in the component
      }
    }));

    // Reconstruct full edges from minimal data
    const edges: Edge[] = minimalState.e.map(minEdge => ({
      id: minEdge.i,
      source: minEdge.s,
      target: minEdge.t,
      ...(minEdge.sh && { sourceHandle: minEdge.sh }),
      ...(minEdge.th && { targetHandle: minEdge.th }),
      ...(minEdge.l && { label: minEdge.l }),
      style: { strokeWidth: 2 }, // Default style, will be updated later
      labelStyle: { fontSize: 10, fontWeight: 500 }
    }));

    return { nodes, edges };
  } catch (error) {
    console.error('Error decoding canvas state:', error);
    return null;
  }
};

// Helper function to detect the main objective from nodes
const detectMainObjective = (nodes: Node[]): { name: string; image: string } | null => {
  if (nodes.length === 0) return null;
  
  // Get all outputs from all nodes
  const allOutputs = new Set<string>();
  const allInputs = new Set<string>();
  
  nodes.forEach(node => {
    if (node.data.outputs) {
      node.data.outputs.forEach((output: any) => allOutputs.add(output.id));
    }
    if (node.data.inputs) {
      node.data.inputs.forEach((input: any) => allInputs.add(input.id));
    }
  });
  
  // Find resources that are produced but not consumed (final products)
  const finalProducts = Array.from(allOutputs).filter(output => !allInputs.has(output));
  
  if (finalProducts.length > 0) {
    // Return the first final product found
    const resourceId = finalProducts[0];
    const resource = coiResources.find(r => r.id === resourceId);
    return resource ? { name: resource.name, image: resource.image } : null;
  }
  
  // Fallback: if no clear final product, return the most common output
  const outputCounts: { [key: string]: number } = {};
  nodes.forEach(node => {
    if (node.data.outputs) {
      node.data.outputs.forEach((output: any) => {
        outputCounts[output.id] = (outputCounts[output.id] || 0) + 1;
      });
    }
  });
  
  const mostCommonOutput = Object.keys(outputCounts).reduce((a, b) => 
    outputCounts[a] > outputCounts[b] ? a : b, Object.keys(outputCounts)[0]
  );
  
  if (mostCommonOutput) {
    const resource = coiResources.find(r => r.id === mostCommonOutput);
    return resource ? { name: resource.name, image: resource.image } : null;
  }
  
  return null;
};

export default function CanvasPage() {
  const router = useRouter();
  const { state } = router.query;
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [normalizeToSixtySeconds, setNormalizeToSixtySeconds] = useState(false);
  const [currentObjective, setCurrentObjective] = useState<{ name: string; image: string } | null>(null);

  // Load normalization setting from localStorage on mount
  useEffect(() => {
    const savedSetting = localStorage.getItem('normalizeToSixtySeconds');
    if (savedSetting !== null) {
      setNormalizeToSixtySeconds(JSON.parse(savedSetting));
    }
  }, []);

  // Handle normalization toggle with persistence
  const handleNormalizeToggle = useCallback((enabled: boolean) => {
    setNormalizeToSixtySeconds(enabled);
    localStorage.setItem('normalizeToSixtySeconds', JSON.stringify(enabled));
  }, []);

  // Handle state changes from Flow component
  const handleStateChange = useCallback((newNodes: Node[], newEdges: Edge[]) => {
    setNodes(newNodes);
    setEdges(newEdges);
    setCurrentObjective(detectMainObjective(newNodes));
  }, []);

  // Hydrate minimal nodes with full recipe data
  const hydrateNodes = useCallback((rawNodes: Node[]): Node[] => {
    const allRecipes = getAllRecipes();
    return rawNodes.map(node => {
      const recipe = allRecipes.find(r =>
        r.building.id === node.data.building.id && r.name === node.data.name
      );
      if (!recipe) {
        console.warn('Recipe not found for node:', node.data);
        return null;
      }
      return {
        ...node,
        data: {
          ...node.data,
          building: recipe.building,
          inputs: recipe.inputs || [],
          outputs: recipe.outputs || [],
          time: recipe.time,
        },
      };
    }).filter(Boolean) as Node[];
  }, []);

  // Handle import from blueprint string
  const handleBlueprintImport = useCallback((rawNodes: Node[], rawEdges: Edge[]) => {
    const hydrated = hydrateNodes(rawNodes);
    if (hydrated.length === 0) return;
    setNodes(hydrated);
    setEdges(rawEdges);
    setCurrentObjective(detectMainObjective(hydrated));
  }, [hydrateNodes]);

  useEffect(() => {
    const loadCanvas = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check if we have saved state in URL (legacy ?state= links)
        if (state && typeof state === 'string') {
          // Try new blueprint format first, then fall back to old URL format
          const blueprintResult = decodeFromBlueprintString(state);
          const savedState = blueprintResult ?? decodeCanvasState(state);

          if (savedState) {
            const hydratedNodes = hydrateNodes(savedState.nodes);

            if (hydratedNodes.length > 0) {
              setNodes(hydratedNodes);
              setEdges(savedState.edges);
              setCurrentObjective(detectMainObjective(hydratedNodes));

              // Clean the ?state= param from the URL — blueprint strings are shared separately
              window.history.replaceState(null, '', window.location.pathname);
              return;
            }
          }
        }

        // If no saved state or failed to load, show error
        setError('No valid canvas state found');
        
      } catch (err) {
        console.error('Error loading canvas:', err);
        setError('Failed to load canvas');
      } finally {
        setLoading(false);
      }
    };

    loadCanvas();
  }, [state, hydrateNodes]);

  const handleBackToSelection = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading canvas...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleBackToSelection}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Selection
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen w-screen">
      {/* Header with objective button */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
        <button
          onClick={handleBackToSelection}
          className="px-3 py-2 bg-white border-2 border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm flex items-center gap-2"
          title={currentObjective ? `Change objective from ${currentObjective.name}` : 'Select an objective to start planning'}
        >
          {currentObjective ? (
            <div className="w-5 h-5 relative flex-shrink-0">
              <Image
                src={getImagePath(currentObjective.image)}
                alt={currentObjective.name}
                width={20}
                height={20}
                className="rounded"
              />
            </div>
          ) : (
            <span className="text-blue-600">🎯</span>
          )}
          <span className="font-medium">
            {currentObjective ? `Objective: ${currentObjective.name}` : 'Select an Objective'}
          </span>
          <span className="text-gray-400 text-xs">↻</span>
        </button>
      </div>
      
      {/* Blueprint share / import */}
      <ShareButton nodes={nodes} edges={edges} onImport={handleBlueprintImport} />

      {/* Debug Panel */}
      <DebugPanel nodes={nodes} edges={edges} />

      {/* Flow Canvas */}
      <Flow 
        initialNodes={nodes} 
        initialEdges={edges}
        onStateChange={handleStateChange}
        normalizeToSixtySeconds={normalizeToSixtySeconds}
        onNormalizeToggle={handleNormalizeToggle}
      />

      {/* Production Summary Drawer - Bottom */}
      <ProductionSummaryDrawer 
        nodes={nodes} 
        edges={edges}
        normalizeToSixtySeconds={normalizeToSixtySeconds}
      />
    </main>
  );
} 