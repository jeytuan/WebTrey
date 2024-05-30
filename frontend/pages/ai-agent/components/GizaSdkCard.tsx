// frontend/pages/ai-agent/components/GizaSdkCard.tsx
import React from 'react';
import { useRouter } from 'next/router';

const GizaSdkCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/ai-agent/giza');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>Giza SDK</h3>
      {/* Add additional card content here */}
    </div>
  );
};

export default GizaSdkCard;
