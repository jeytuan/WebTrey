import React from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
  NodeChange,
  EdgeChange,
  Edge,
  Connection,
  Node,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node<{ label: string }>[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start Node' },
    position: { x: 250, y: 0 },
  },
  // more initial nodes
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  // more initial edges
];

const Mindmap: React.FC = () => {
  const [nodes, setNodes] = React.useState<Node<{ label: string }>[]>(initialNodes);
  const [edges, setEdges] = React.useState<Edge[]>(initialEdges);

  const onNodesChange = (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds));
  const onConnect = (params: Connection) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Mindmap;
