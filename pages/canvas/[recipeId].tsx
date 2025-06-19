import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Flow } from '../../components/Flow/Flow';
import { Recipe, getRecipeById } from '../../utils/recipes';
import { Node, Edge } from 'reactflow';
import { DebugPanel } from '../../components/DebugPanel/DebugPanel';
import { ProductionSummaryDrawer } from '../../components/ProductionSummaryDrawer/ProductionSummaryDrawer';
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

export default function CanvasPage() {
  const router = useRouter();
  const { recipeId, state } = router.query;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [normalizeToSixtySeconds, setNormalizeToSixtySeconds] = useState(false);

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
    const url = `/canvas/${recipeId}?state=${stateParam}`;
    
    // Update URL without triggering navigation
    window.history.replaceState(null, '', url);
  }, [recipeId, initialLoadComplete]);

  // Handle state changes from Flow component
  const handleStateChange = useCallback((newNodes: Node[], newEdges: Edge[]) => {
    setNodes(newNodes);
    setEdges(newEdges);
    
    // Auto-update URL with debouncing
    const timeoutId = setTimeout(() => {
      updateURLState(newNodes, newEdges);
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [updateURLState]);

  useEffect(() => {
    if (!recipeId || typeof recipeId !== 'string') return;

    const fetchRecipe = () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get recipe by ID directly from data
        const foundRecipe = getRecipeById(recipeId);
        
        if (!foundRecipe) {
          setError('Recipe not found');
          return;
        }
        
        setRecipe(foundRecipe);

        // Check if we have saved state in URL
        if (state && typeof state === 'string') {
          const savedState = decodeCanvasState(state);
          if (savedState) {
            // Use the found recipe to hydrate nodes
            const hydratedNodes = savedState.nodes.map(node => {
              // Use the found recipe if it matches, otherwise keep existing data
              if (foundRecipe && foundRecipe.building.id === node.data.building.id && foundRecipe.name === node.data.name) {
                return {
                  ...node,
                  data: {
                    ...node.data,
                    building: foundRecipe.building,
                    inputs: foundRecipe.inputs,
                    outputs: foundRecipe.outputs,
                    time: foundRecipe.time,
                  }
                };
              }
              return node;
            });

            setNodes(hydratedNodes);
            setEdges(savedState.edges);
            setInitialLoadComplete(true);
            return;
          }
        }

        // If no saved state, create initial node
        const initialNode: Node = {
          id: `recipe-${foundRecipe.id}`,
          type: 'recipe',
          position: { x: 400, y: 200 },
          data: {
            name: foundRecipe.name,
            building: foundRecipe.building,
            inputs: foundRecipe.inputs,
            outputs: foundRecipe.outputs,
            time: foundRecipe.time,
            multiplier: 1,
          },
        };

        setNodes([initialNode]);
        setEdges([]);
        setInitialLoadComplete(true);
        
      } catch (err) {
        console.error('Error fetching recipe:', err);
        setError('Failed to load recipe');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId, state]);

  const handleBackToSelection = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading recipe...</p>
        </div>
      </main>
    );
  }

  if (error || !recipe) {
    return (
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-6">{error || 'Recipe not found'}</p>
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
      {/* Header with back button */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
        <button
          onClick={handleBackToSelection}
          className="px-2 py-1 bg-gray-400 text-white text-xs rounded hover:bg-gray-500 transition-colors"
        >
          ↻ New Objective
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
      <ProductionSummaryDrawer nodes={nodes} edges={edges} />
    </main>
  );
} 