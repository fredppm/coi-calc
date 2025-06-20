import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flow } from '../components/Flow/Flow';
import { getAllRecipes } from '../utils/recipes';
import { Node, Edge } from 'reactflow';
import { ProductionSummaryDrawer } from '../components/ProductionSummaryDrawer/ProductionSummaryDrawer';
import { DebugPanel } from '../components/DebugPanel/DebugPanel';
import { updateBrowserUrl, getImagePath } from '../utils/urlHelper';
import { coiResources } from '../data/coi';
import 'reactflow/dist/style.css';

// LZ-string compression functions (inline implementation for small bundle size)
const compress = (str: string): string => {
  try {
    // Simple LZ77-like compression
    const dictionary: { [key: string]: number } = {};
    const data = [];
    let dictSize = 256;
    let w = "";
    
    for (let i = 0; i < str.length; i++) {
      const c = str.charAt(i);
      const wc = w + c;
      if (dictionary[wc] !== undefined) {
        w = wc;
      } else {
        data.push(w.length === 1 ? w.charCodeAt(0) : dictionary[w]);
        dictionary[wc] = dictSize++;
        w = c;
      }
    }
    
    if (w !== "") {
      data.push(w.length === 1 ? w.charCodeAt(0) : dictionary[w]);
    }
    
    return btoa(String.fromCharCode(...data));
  } catch {
    // Fallback to base64 if compression fails
    return btoa(str);
  }
};

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

// Helper functions for URL state management with advanced compression
const encodeCanvasState = (nodes: Node[], edges: Edge[]): string => {
  // Minimize the state by removing redundant data
  const minimalNodes: MinimalNode[] = nodes.map(node => ({
    i: node.id,
    t: node.type || 'recipe',
    p: [Math.round(node.position.x), Math.round(node.position.y)],
    d: {
      n: node.data.name,
      b: node.data.building?.id || '', // Only store building ID, not full object
      ...(node.data.multiplier && node.data.multiplier !== 1 && { m: node.data.multiplier })
    }
  }));

  const minimalEdges: MinimalEdge[] = edges.map(edge => ({
    i: edge.id,
    s: edge.source,
    t: edge.target,
    ...(edge.sourceHandle && { sh: edge.sourceHandle }),
    ...(edge.targetHandle && { th: edge.targetHandle }),
    ...(edge.label && { l: String(edge.label) })
  }));

  const minimalState: MinimalState = {
    n: minimalNodes,
    e: minimalEdges
  };

  // Convert to compact JSON and compress
  const jsonString = JSON.stringify(minimalState);
  const compressed = compress(jsonString);
  
  // Additional URL encoding for special characters
  return encodeURIComponent(compressed);
};

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
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
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

  // Debounced URL update function
  const updateURLState = useCallback((newNodes: Node[], newEdges: Edge[]) => {
    // Don't update URL during initial load
    if (!initialLoadComplete) return;
    
    const stateParam = encodeCanvasState(newNodes, newEdges);
    
    // Use helper function that handles basePath correctly
    updateBrowserUrl(stateParam);
  }, [initialLoadComplete]);

  // Handle state changes from Flow component
  const handleStateChange = useCallback((newNodes: Node[], newEdges: Edge[]) => {
    setNodes(newNodes);
    setEdges(newEdges);
    
    // Update current objective based on nodes
    const objective = detectMainObjective(newNodes);
    setCurrentObjective(objective);
    
    // Auto-update URL with debouncing
    const timeoutId = setTimeout(() => {
      updateURLState(newNodes, newEdges);
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [updateURLState]);

  useEffect(() => {
    const loadCanvas = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check if we have saved state in URL
        if (state && typeof state === 'string') {
          const savedState = decodeCanvasState(state);
          if (savedState) {
            // Import all recipes to hydrate nodes properly
            const allRecipes = getAllRecipes();
            
            // Hydrate all nodes with complete recipe data
            const hydratedNodes = savedState.nodes.map(node => {
              // Find the recipe by building ID and name
              const nodeRecipe = allRecipes.find(r => 
                r.building.id === node.data.building.id && r.name === node.data.name
              );
              
              if (nodeRecipe) {
                return {
                  ...node,
                  data: {
                    ...node.data,
                    building: nodeRecipe.building,
                    inputs: nodeRecipe.inputs || [],
                    outputs: nodeRecipe.outputs || [],
                    time: nodeRecipe.time,
                  }
                };
              } else {
                // Log warning for missing recipe data
                console.warn('Could not hydrate node - recipe not found:', {
                  buildingId: node.data.building.id,
                  name: node.data.name
                });
                return null; // Mark for removal
              }
            }).filter(Boolean) as Node[]; // Remove null entries

            // Only proceed if we successfully hydrated at least some nodes
            if (hydratedNodes.length > 0) {
              setNodes(hydratedNodes);
              setEdges(savedState.edges);
              
              // Set initial objective
              const objective = detectMainObjective(hydratedNodes);
              setCurrentObjective(objective);
              
              setInitialLoadComplete(true);
              return;
            } else {
              console.warn('Failed to hydrate any nodes from saved state');
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
  }, [state]);

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