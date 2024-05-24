import React from 'react';
import { ThreatIntel } from '../lib/types';

interface ThreatIntelCardProps {
  intel: ThreatIntel;
}

const ThreatIntelCard: React.FC<ThreatIntelCardProps> = ({ intel }) => {
  return (
    <div className="bg-gray-800 p-4 rounded mb-4">
      <h3 className="text-lg font-bold">{intel.name}</h3>
      <p>{intel.description}</p>
    </div>
  );
};

export default ThreatIntelCard;
