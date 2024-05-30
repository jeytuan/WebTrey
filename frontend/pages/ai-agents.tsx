import React from 'react';
import AgentOverview from '@/pages/ai-agent/components/AgentOverview';
import AgentConfiguration from '@/pages/ai-agent/components/AgentConfiguration';
import GizaSdkCard from '@/pages/ai-agent/components/GizaSdkCard';
import StarknetCard from '@/pages/ai-agent/components/StarknetCard';
import KoFinanceCard from '@/pages/ai-agent/components/KoiFinanceCard';
import LineaSepoliaCard from '@/pages/ai-agent/components/LineaSepoliaCard';
import EnzymeCard from '@/pages/ai-agent/components/EnzymeCard';
import LambdaCard from '@/pages/ai-agent/components/LambdaCard';

const AiAgents = () => {
  return (
    <div>
      <h1>AI Agents</h1>
      <AgentOverview />
      <AgentConfiguration />
      <div className="sdk-overview">
        <h2>Giza SDK Overview</h2>
        <div className="sdk-cards">
          <GizaSdkCard />
          <StarknetCard />
          <KoFinanceCard />
          <LineaSepoliaCard />
          <EnzymeCard />
          <LambdaCard />
        </div>
      </div>
    </div>
  );
};

export default AiAgents;
