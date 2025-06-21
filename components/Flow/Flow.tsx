import { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import { RecipeNode } from '../RecipeNode/RecipeNode';
import { AnimatedEdge } from './AnimatedEdge';
import { RecipeConnectionModal } from '../RecipeConnectionModal/RecipeConnectionModal';
import { RemoveRecipeModal, ConnectionImpact } from '../RemoveRecipeModal/RemoveRecipeModal';
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { ShareButton } from '../ShareButton/ShareButton';
import { Recipe } from '../../utils/dataFetcher';
import { coiResources } from '../../data/coi';
import 'reactflow/dist/style.css';
import { DebugPanel } from '../DebugPanel/DebugPanel';

// Register custom node and edge types
const nodeTypes = {
  recipe: RecipeNode,
};

const edgeTypes = {
  default: AnimatedEdge,
};

// Helper function to get resource color
const getResourceColor = (resourceId: string): string => {
  const resource = coiResources.find(r => r.id === resourceId);
  return resource?.color || '#374151'; // Default gray color
};

/**
 * FlowProps defines the properties for the Flow component.
 */
export interface FlowProps {
  initialNodes?: Node[];
  initialEdges?: Edge[];
  onStateChange?: (nodes: Node[], edges: Edge[]) => void;
  normalizeToSixtySeconds?: boolean;
  onNormalizeToggle?: (enabled: boolean) => void;
}

/**
 * Flow component renders a ReactFlow diagram with basic controls and background.
 */
export const Flow: React.FC<FlowProps> = ({
  initialNodes = [],
  initialEdges = [],
  onStateChange,
  normalizeToSixtySeconds = false,
  onNormalizeToggle,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // Modal state for connections
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    resourceId: string;
    resourceName: string;
    connectionType: 'input' | 'output';
    sourceNodeId?: string;
  }>({
    isOpen: false,
    resourceId: '',
    resourceName: '',
    connectionType: 'input',
  });

  // Modal state for removal
  const [removeModalState, setRemoveModalState] = useState<{
    isOpen: boolean;
    nodeToRemove: Node | null;
    impactedConnections: ConnectionImpact[];
  }>({
    isOpen: false,
    nodeToRemove: null,
    impactedConnections: [],
  });

  // Settings panel state
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(false);

  // Notify parent of state changes
  useEffect(() => {
    if (onStateChange) {
      onStateChange(nodes, edges);
    }
  }, [nodes, edges, onStateChange]);

  // Update all nodes when normalization setting changes
  useEffect(() => {
    setNodes((nds) => nds.map(node => ({
      ...node,
      data: {
        ...node.data,
        normalizeToSixtySeconds,
      },
    })));
  }, [normalizeToSixtySeconds, setNodes]);

  const onConnect = useCallback((params: any) => {
    // Get resource color from the source handle
    let resourceColor = '#374151'; // Default color
    if (params.sourceHandle) {
      const resourceId = params.sourceHandle.replace('output-', '');
      resourceColor = getResourceColor(resourceId);
    }

    const newEdge = {
      ...params,
      style: { stroke: resourceColor, strokeWidth: 2 },
      labelStyle: { 
        fontSize: 10, 
        fontWeight: 500,
        fill: '#1F2937', // Dark gray text
        textShadow: '0 0 3px white, 0 0 3px white, 0 0 3px white', // White outline
        background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: '2px 4px',
        borderRadius: '3px',
        border: '1px solid rgba(0, 0, 0, 0.1)' // Subtle border
      },
    };

    setEdges((eds) => addEdge(newEdge, eds));
  }, [setEdges]);

  // Handle resource click in recipe nodes
  const handleResourceClick = useCallback((resourceId: string, resourceName: string, type: 'input' | 'output', nodeId: string) => {
    setModalState({
      isOpen: true,
      resourceId,
      resourceName,
      connectionType: type,
      sourceNodeId: nodeId,
    });
  }, []);

  // Handle remove button click - analyze connections and show modal
  const handleRemoveClick = useCallback((nodeId: string) => {
    const nodeToRemove = nodes.find(n => n.id === nodeId);
    if (!nodeToRemove) return;

    // Find all edges connected to this node
    const connectedEdges = edges.filter(edge => 
      edge.source === nodeId || edge.target === nodeId
    );

    // Create impact information for each connection
    const impactedConnections: ConnectionImpact[] = connectedEdges.map(edge => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);
      
      // Extract resource information from the handle IDs
      let resourceName = typeof edge.label === 'string' ? edge.label : 'Unknown Resource';
      let resourceIcon = '/images/resources/default.png'; // Default icon
      
      // Try to find the resource in the source node's outputs
      if (sourceNode && edge.sourceHandle) {
        const resourceId = edge.sourceHandle.replace('output-', '');
        const output = sourceNode.data.outputs?.find((out: any) => out.id === resourceId);
        if (output) {
          resourceName = output.name;
          resourceIcon = output.icon;
        }
      }
      
      return {
        edge,
        sourceNode: sourceNode!,
        targetNode: targetNode!,
        resourceName,
        resourceIcon,
      };
    }).filter(impact => impact.sourceNode && impact.targetNode);

    setRemoveModalState({
      isOpen: true,
      nodeToRemove,
      impactedConnections,
    });
  }, [nodes, edges]);

  // Handle multiplier changes
  const handleMultiplierChange = useCallback((nodeId: string, multiplier: number) => {
    setNodes((nds) => nds.map(node => {
      if (node.id === nodeId) {
        return {
          ...node,
          data: {
            ...node.data,
            multiplier,
          },
        };
      }
      return node;
    }));
  }, [setNodes]);

  // Confirm removal - remove node and all connected edges
  const handleConfirmRemove = useCallback((nodeId: string) => {
    // Remove the node
    setNodes((nds) => nds.filter(node => node.id !== nodeId));
    
    // Remove all edges connected to this node
    setEdges((eds) => eds.filter(edge => 
      edge.source !== nodeId && edge.target !== nodeId
    ));

    setRemoveModalState({
      isOpen: false,
      nodeToRemove: null,
      impactedConnections: [],
    });
  }, [setNodes, setEdges]);

  // Handle recipe selection from modal
  const handleRecipeSelect = useCallback((recipe: Recipe) => {
    if (!modalState.sourceNodeId) return;

    // Find the source node
    const sourceNode = nodes.find(n => n.id === modalState.sourceNodeId);
    if (!sourceNode) return;

    // Check if this is an existing recipe on the canvas
    const existingNode = nodes.find(n => 
      n.type === 'recipe' && 
      n.data.name === recipe.name && 
      n.data.building.id === recipe.building.id
    );

    let targetNodeId: string;
    let targetNode: Node;

    if (existingNode) {
      // Use existing node
      targetNodeId = existingNode.id;
      targetNode = existingNode;
    } else {
      // Create new node
      targetNodeId = `recipe-${recipe.id}-${Date.now()}`;
      const offsetY = Math.random() * 100 - 50; // Small random vertical offset
      const offsetX = modalState.connectionType === 'input' ? -300 : 300; // Left for input suppliers, right for output consumers

      targetNode = {
        id: targetNodeId,
        type: 'recipe',
        position: { 
          x: sourceNode.position.x + offsetX, 
          y: sourceNode.position.y + offsetY 
        },
        data: {
          name: recipe.name,
          building: recipe.building,
          inputs: recipe.inputs,
          outputs: recipe.outputs,
          time: recipe.time,
          multiplier: 1,
          onResourceClick: (resId: string, resName: string, resType: 'input' | 'output') => 
            handleResourceClick(resId, resName, resType, targetNodeId),
          onRemove: handleRemoveClick,
          onMultiplierChange: handleMultiplierChange,
          normalizeToSixtySeconds,
        },
      };

      // Add the new node to the canvas
      setNodes((nds) => [...nds, targetNode]);
    }

    // Create connection edge with specific handles
    const newEdge: Edge = {
      id: `edge-${modalState.sourceNodeId}-${targetNodeId}-${Date.now()}`,
      source: modalState.connectionType === 'output' ? modalState.sourceNodeId : targetNodeId,
      target: modalState.connectionType === 'output' ? targetNodeId : modalState.sourceNodeId,
      sourceHandle: modalState.connectionType === 'output' 
        ? `output-${modalState.resourceId}` 
        : recipe.outputs.find(output => output.id === modalState.resourceId) 
          ? `output-${modalState.resourceId}` 
          : `output-${recipe.outputs[0]?.id}`,
      targetHandle: modalState.connectionType === 'output' 
        ? recipe.inputs.find(input => input.id === modalState.resourceId) 
          ? `input-${modalState.resourceId}` 
          : `input-${recipe.inputs[0]?.id}`
        : `input-${modalState.resourceId}`,
      label: modalState.resourceName,
      style: { stroke: getResourceColor(modalState.resourceId), strokeWidth: 2 },
      labelStyle: { 
        fontSize: 10, 
        fontWeight: 500,
        fill: '#1F2937', // Dark gray text
        textShadow: '0 0 3px white, 0 0 3px white, 0 0 3px white', // White outline
        background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: '2px 4px',
        borderRadius: '3px',
        border: '1px solid rgba(0, 0, 0, 0.1)' // Subtle border
      },
    };

    // Add the edge
    setEdges((eds) => [...eds, newEdge]);

    // Close modal
    setModalState(prev => ({ ...prev, isOpen: false }));
  }, [nodes, setNodes, setEdges, modalState, handleResourceClick, handleRemoveClick]);

  // Close connection modal
  const closeModal = useCallback(() => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  }, []);

  // Close remove modal
  const closeRemoveModal = useCallback(() => {
    setRemoveModalState({
      isOpen: false,
      nodeToRemove: null,
      impactedConnections: [],
    });
  }, []);

  // Update existing nodes to include the resource click handler and remove handler
  const nodesWithHandlers = nodes.map(node => {
    if (node.type === 'recipe') {
      // Get edges connected to this specific node with additional node data
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

      return {
        ...node,
        data: {
          ...node.data,
          multiplier: node.data.multiplier || 1, // Ensure multiplier exists
          onResourceClick: (resourceId: string, resourceName: string, type: 'input' | 'output') =>
            handleResourceClick(resourceId, resourceName, type, node.id),
          onRemove: handleRemoveClick,
          onMultiplierChange: handleMultiplierChange,
          connectedEdges: connectedEdges, // Add edge information for net balance calculation
        },
      };
    }
    return node;
  });

  // Update existing edges to have proper colors
  const edgesWithColors = edges.map(edge => {
    if (edge.sourceHandle) {
      const resourceId = edge.sourceHandle.replace('output-', '');
      const resourceColor = getResourceColor(resourceId);
      return {
        ...edge,
        style: { 
          stroke: resourceColor, 
          strokeWidth: 2 
        },
        labelStyle: { 
          fontSize: 10, 
          fontWeight: 500,
          fill: '#1F2937', // Dark gray text
          textShadow: '0 0 3px white, 0 0 3px white, 0 0 3px white', // White outline
          background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
          padding: '2px 4px',
          borderRadius: '3px',
          border: '1px solid rgba(0, 0, 0, 0.1)' // Subtle border
        },
      };
    }
    return edge;
  });

  // Get existing recipes for the connection modal
  const existingRecipes = nodes.filter(node => node.type === 'recipe').map(node => ({
    id: node.id,
    name: node.data.name,
    building: node.data.building,
    inputs: node.data.inputs || [],
    outputs: node.data.outputs || [],
    time: node.data.time,
  })).filter(recipe => {
    // Additional safety check: ensure all required properties are present
    return recipe.id && recipe.name && recipe.building && 
           Array.isArray(recipe.inputs) && Array.isArray(recipe.outputs) && 
           recipe.time;
  });

  return (
    <>
      <div className="w-full h-full relative">
        <ReactFlow
          nodes={nodesWithHandlers}
          edges={edgesWithColors}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>


        <DebugPanel nodes={nodes} edges={edges} />
        <ShareButton />
        <SettingsPanel
          normalizeToSixtySeconds={normalizeToSixtySeconds}
          onNormalizeToggle={onNormalizeToggle || (() => {})}
          isOpen={settingsPanelOpen}
          onToggle={() => setSettingsPanelOpen(!settingsPanelOpen)}
        />

      </div>

      <RecipeConnectionModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        resourceId={modalState.resourceId}
        resourceName={modalState.resourceName}
        connectionType={modalState.connectionType}
        onRecipeSelect={handleRecipeSelect}
        existingRecipes={existingRecipes}
        normalizeToSixtySeconds={normalizeToSixtySeconds}
      />

      <RemoveRecipeModal
        isOpen={removeModalState.isOpen}
        onClose={closeRemoveModal}
        recipeNode={removeModalState.nodeToRemove}
        impactedConnections={removeModalState.impactedConnections}
        onConfirmRemove={handleConfirmRemove}
      />
    </>
  );
}; 