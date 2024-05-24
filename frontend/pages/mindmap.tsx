import React from 'react';
import dynamic from 'next/dynamic';

const Mindmap = dynamic(() => import('../components/Mindmap'), { ssr: false });

const MindmapPage: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Mindmap</h1>
      <Mindmap />
    </div>
  );
};

export default MindmapPage;
