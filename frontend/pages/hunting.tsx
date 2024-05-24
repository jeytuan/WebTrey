import React, { useState, useEffect } from 'react';
import BountyCard from '../components/BountyCard';
import ThreatIntelCard from '../components/ThreatIntelCard';
import { fetchBounties, fetchThreatIntel } from '../lib/api';
import { Bounty, ThreatIntel } from '../lib/types';

const Hunting: React.FC = () => {
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const [threatIntel, setThreatIntel] = useState<ThreatIntel[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const bountiesData: Bounty[] = await fetchBounties();
        const threatIntelData: ThreatIntel[] = await fetchThreatIntel();
        setBounties(bountiesData);
        setThreatIntel(threatIntelData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }
    fetchData();
  }, []);

  const filteredBounties = bounties.filter(bounty => bounty.programName.includes(filter));
  const filteredThreatIntel = threatIntel.filter(intel => intel.name.includes(filter));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hunting</h1>
      <input
        type="text"
        placeholder="Filter..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <div className="bounties mb-4 grid grid-cols-2 gap-4">
        <h2 className="text-xl font-bold mb-2 col-span-2">Bounties</h2>
        {filteredBounties.map(bounty => <BountyCard key={bounty.programName} bounty={bounty} />)}
      </div>
      <div className="threat-intel">
        <h2 className="text-xl font-bold mb-2">Threat Intelligence</h2>
        {filteredThreatIntel.map(intel => <ThreatIntelCard key={intel.name} intel={intel} />)}
      </div>
    </div>
  );
};

export default Hunting;
