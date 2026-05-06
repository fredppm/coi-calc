import LZString from 'lz-string';
import { Node, Edge } from 'reactflow';

const BLUEPRINT_PREFIX = 'COI1:';

interface MinimalNode {
  i: string;
  t: string;
  p: [number, number];
  d: {
    n: string;
    b: string;
    m?: number;
  };
}

interface MinimalEdge {
  i: string;
  s: string;
  t: string;
  sh?: string;
  th?: string;
  l?: string;
}

interface MinimalState {
  n: MinimalNode[];
  e: MinimalEdge[];
}

export const encodeToBlueprintString = (nodes: Node[], edges: Edge[]): string => {
  const minimal: MinimalState = {
    n: nodes.map(node => ({
      i: node.id,
      t: node.type || 'recipe',
      p: [Math.round(node.position.x), Math.round(node.position.y)],
      d: {
        n: node.data.name,
        b: node.data.building?.id || '',
        ...(node.data.multiplier && node.data.multiplier !== 1 && { m: node.data.multiplier }),
      },
    })),
    e: edges.map(edge => ({
      i: edge.id,
      s: edge.source,
      t: edge.target,
      ...(edge.sourceHandle && { sh: edge.sourceHandle }),
      ...(edge.targetHandle && { th: edge.targetHandle }),
      ...(edge.label && { l: String(edge.label) }),
    })),
  };

  const compressed = LZString.compressToBase64(JSON.stringify(minimal));
  return `${BLUEPRINT_PREFIX}${compressed}`;
};

export const decodeFromBlueprintString = (code: string): { nodes: Node[]; edges: Edge[] } | null => {
  try {
    const payload = code.startsWith(BLUEPRINT_PREFIX) ? code.slice(BLUEPRINT_PREFIX.length) : code;
    const json = LZString.decompressFromBase64(payload);
    if (!json) return null;

    const state = JSON.parse(json) as MinimalState;

    const nodes: Node[] = state.n.map(mn => ({
      id: mn.i,
      type: mn.t,
      position: { x: mn.p[0], y: mn.p[1] },
      data: {
        name: mn.d.n,
        building: { id: mn.d.b },
        multiplier: mn.d.m ?? 1,
      },
    }));

    const edges: Edge[] = state.e.map(me => ({
      id: me.i,
      source: me.s,
      target: me.t,
      ...(me.sh && { sourceHandle: me.sh }),
      ...(me.th && { targetHandle: me.th }),
      ...(me.l && { label: me.l }),
      style: { strokeWidth: 2 },
      labelStyle: { fontSize: 10, fontWeight: 500 },
    }));

    return { nodes, edges };
  } catch {
    return null;
  }
};
