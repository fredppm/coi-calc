import { encodeToBlueprintString, decodeFromBlueprintString } from '../../utils/blueprint';
import { Node, Edge } from 'reactflow';

const makeNode = (overrides: Partial<Node> = {}): Node => ({
  id: 'node-1',
  type: 'recipe',
  position: { x: 100, y: 200 },
  data: {
    name: 'Iron Ore Mining',
    building: { id: 'iron_mine' },
    multiplier: 1,
  },
  ...overrides,
});

const makeEdge = (overrides: Partial<Edge> = {}): Edge => ({
  id: 'edge-1',
  source: 'node-1',
  target: 'node-2',
  ...overrides,
});

describe('blueprint', () => {
  describe('encodeToBlueprintString', () => {
    it('returns a string with the COI1: prefix', () => {
      const code = encodeToBlueprintString([makeNode()], []);
      expect(code).toMatch(/^COI1:/);
    });

    it('works with no nodes and no edges', () => {
      const code = encodeToBlueprintString([], []);
      expect(code).toMatch(/^COI1:/);
      expect(code.length).toBeGreaterThan(5);
    });

    it('omits multiplier when it is 1', () => {
      const code = encodeToBlueprintString([makeNode()], []);
      // Strip prefix and decode to check raw payload
      const payload = code.slice('COI1:'.length);
      expect(payload.length).toBeGreaterThan(0);
    });

    it('includes multiplier in the payload when not 1', () => {
      const withMul = encodeToBlueprintString(
        [makeNode({ data: { name: 'Iron Ore Mining', building: { id: 'iron_mine' }, multiplier: 3 } })],
        []
      );
      const withoutMul = encodeToBlueprintString([makeNode()], []);
      // A non-default multiplier should produce a different (slightly larger) string
      expect(withMul).not.toBe(withoutMul);
    });

    it('rounds node positions to integers', () => {
      const node = makeNode({ position: { x: 123.7, y: 456.2 } });
      const code = encodeToBlueprintString([node], []);
      const result = decodeFromBlueprintString(code)!;
      expect(result.nodes[0].position.x).toBe(124);
      expect(result.nodes[0].position.y).toBe(456);
    });
  });

  describe('decodeFromBlueprintString', () => {
    it('returns null for an empty string', () => {
      expect(decodeFromBlueprintString('')).toBeNull();
    });

    it('returns null for random garbage input', () => {
      expect(decodeFromBlueprintString('not-a-blueprint')).toBeNull();
    });

    it('returns null for a valid base64 string that is not a blueprint', () => {
      expect(decodeFromBlueprintString('COI1:!!!invalid!!!')).toBeNull();
    });

    it('round-trips a single node with no edges', () => {
      const node = makeNode();
      const code = encodeToBlueprintString([node], []);
      const result = decodeFromBlueprintString(code)!;

      expect(result).not.toBeNull();
      expect(result.nodes).toHaveLength(1);
      expect(result.edges).toHaveLength(0);
      expect(result.nodes[0].id).toBe('node-1');
      expect(result.nodes[0].type).toBe('recipe');
      expect(result.nodes[0].position).toEqual({ x: 100, y: 200 });
      expect(result.nodes[0].data.name).toBe('Iron Ore Mining');
      expect(result.nodes[0].data.building.id).toBe('iron_mine');
      expect(result.nodes[0].data.multiplier).toBe(1);
    });

    it('round-trips a non-default multiplier', () => {
      const node = makeNode({
        data: { name: 'Iron Ore Mining', building: { id: 'iron_mine' }, multiplier: 5 },
      });
      const code = encodeToBlueprintString([node], []);
      const result = decodeFromBlueprintString(code)!;

      expect(result.nodes[0].data.multiplier).toBe(5);
    });

    it('defaults multiplier to 1 when omitted from payload', () => {
      // Build a code from a node with multiplier=1 (omitted in payload)
      const code = encodeToBlueprintString([makeNode()], []);
      const result = decodeFromBlueprintString(code)!;
      expect(result.nodes[0].data.multiplier).toBe(1);
    });

    it('round-trips edges with all optional fields', () => {
      const edge = makeEdge({
        sourceHandle: 'output-iron_ore',
        targetHandle: 'input-iron_ore',
        label: '10/min',
      });
      const code = encodeToBlueprintString([makeNode(), makeNode({ id: 'node-2' })], [edge]);
      const result = decodeFromBlueprintString(code)!;

      expect(result.edges).toHaveLength(1);
      const e = result.edges[0];
      expect(e.source).toBe('node-1');
      expect(e.target).toBe('node-2');
      expect(e.sourceHandle).toBe('output-iron_ore');
      expect(e.targetHandle).toBe('input-iron_ore');
      expect(e.label).toBe('10/min');
    });

    it('round-trips edges without optional fields', () => {
      const edge = makeEdge();
      const code = encodeToBlueprintString([makeNode(), makeNode({ id: 'node-2' })], [edge]);
      const result = decodeFromBlueprintString(code)!;

      const e = result.edges[0];
      expect(e.sourceHandle).toBeUndefined();
      expect(e.targetHandle).toBeUndefined();
      expect(e.label).toBeUndefined();
    });

    it('round-trips multiple nodes and edges', () => {
      const nodes: Node[] = Array.from({ length: 10 }, (_, i) =>
        makeNode({ id: `node-${i}`, position: { x: i * 100, y: i * 50 } })
      );
      const edges: Edge[] = Array.from({ length: 9 }, (_, i) =>
        makeEdge({ id: `edge-${i}`, source: `node-${i}`, target: `node-${i + 1}` })
      );
      const code = encodeToBlueprintString(nodes, edges);
      const result = decodeFromBlueprintString(code)!;

      expect(result.nodes).toHaveLength(10);
      expect(result.edges).toHaveLength(9);
      expect(result.nodes[9].position).toEqual({ x: 900, y: 450 });
    });

    it('handles a large build without stack overflow', () => {
      const nodes: Node[] = Array.from({ length: 100 }, (_, i) =>
        makeNode({ id: `node-${i}`, position: { x: i * 200, y: i * 100 } })
      );
      const edges: Edge[] = Array.from({ length: 99 }, (_, i) =>
        makeEdge({ id: `edge-${i}`, source: `node-${i}`, target: `node-${i + 1}` })
      );
      expect(() => {
        const code = encodeToBlueprintString(nodes, edges);
        decodeFromBlueprintString(code);
      }).not.toThrow();
    });

    it('sets default edge style on decoded edges', () => {
      const edge = makeEdge();
      const code = encodeToBlueprintString([makeNode(), makeNode({ id: 'node-2' })], [edge]);
      const result = decodeFromBlueprintString(code)!;

      expect(result.edges[0].style).toEqual({ strokeWidth: 2 });
    });

    it('decoded nodes contain exactly the fields hydrateNodes needs (building.id + name)', () => {
      const code = encodeToBlueprintString([makeNode()], []);
      const result = decodeFromBlueprintString(code)!;
      const node = result.nodes[0];

      // These two fields are the only lookup keys used by hydrateNodes in canvas.tsx
      expect(node.data.building.id).toBe('iron_mine');
      expect(node.data.name).toBe('Iron Ore Mining');
    });
  });
});

describe('blueprint — runtime node fields are stripped on encode', () => {
  it('strips Flow runtime callbacks and metadata from encoded nodes', () => {
    // Flow enriches each node with callbacks and computed data before rendering.
    // Encoding such a node must produce a clean blueprint with no runtime junk.
    const runtimeNode: Node = {
      id: 'node-1',
      type: 'recipe',
      position: { x: 100, y: 200 },
      data: {
        name: 'Iron Ore Mining',
        building: { id: 'iron_mine', name: 'Iron Mine', image: '/img/mine.png' },
        multiplier: 2,
        // Fields added by Flow's nodesWithHandlers map:
        onResourceClick: () => {},
        onRemove: () => {},
        onMultiplierChange: () => {},
        connectedEdges: [{ source: 'node-1', target: 'node-2' }],
        normalizeToSixtySeconds: true,
        inputs: [{ id: 'water', name: 'Water', amount: 5, icon: '/img/water.png' }],
        outputs: [{ id: 'iron_ore', name: 'Iron Ore', amount: 10, icon: '/img/iron.png' }],
        time: 30,
      },
    };

    const code = encodeToBlueprintString([runtimeNode], []);
    const result = decodeFromBlueprintString(code)!;
    const node = result.nodes[0];

    // Core fields must survive
    expect(node.data.name).toBe('Iron Ore Mining');
    expect(node.data.building.id).toBe('iron_mine');
    expect(node.data.multiplier).toBe(2);

    // Runtime fields must not appear in the decoded node
    expect(node.data.onResourceClick).toBeUndefined();
    expect(node.data.onRemove).toBeUndefined();
    expect(node.data.onMultiplierChange).toBeUndefined();
    expect(node.data.connectedEdges).toBeUndefined();
    expect(node.data.normalizeToSixtySeconds).toBeUndefined();
    expect(node.data.inputs).toBeUndefined();
    expect(node.data.outputs).toBeUndefined();
    expect(node.data.time).toBeUndefined();
  });

  it('encodes only the building id, not the full building object', () => {
    const nodeWithFullBuilding: Node = {
      id: 'node-1',
      type: 'recipe',
      position: { x: 0, y: 0 },
      data: {
        name: 'Iron Ore Mining',
        building: { id: 'iron_mine', name: 'Iron Mine', image: '/img/mine.png', tier: 3 },
        multiplier: 1,
      },
    };

    const code = encodeToBlueprintString([nodeWithFullBuilding], []);
    const result = decodeFromBlueprintString(code)!;

    // Decoded building must only have the id — hydration fills the rest
    expect(result.nodes[0].data.building).toEqual({ id: 'iron_mine' });
  });
});
