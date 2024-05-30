import React from 'react';
import AgentOverview from './components/AgentOverview';
import AgentConfiguration from './components/AgentConfiguration';
import GizaSdkCard from './components/GizaSdkCard';
import StarknetCard from './components/StarknetCard';
import KoFinanceCard from './components/KoiFinanceCard';
import LineaSepoliaCard from './components/LineaSepoliaCard';
import EnzymeCard from './components/EnzymeCard';
import LambdaCard from './components/LambdaCard';

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
