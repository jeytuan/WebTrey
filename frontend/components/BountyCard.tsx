import React from 'react';
import { useRouter } from 'next/router';
import { Bounty } from '../lib/types';

interface BountyCardProps {
  bounty: Bounty;
}

const BountyCard: React.FC<BountyCardProps> = ({ bounty }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/bounties/${bounty.programName}`);
  };

  return (
    <div 
      className="bg-gray-800 p-4 rounded mb-4 cursor-pointer hover:bg-gray-700"
      onClick={handleCardClick}
    >
      <h3 className="text-lg font-bold">{bounty.programName}</h3>
      <p>Platform: {bounty.platform}</p>
      <p>Duration: {bounty.duration}</p>
      <p>Vulnerabilities Found: {bounty.vulnerabilitiesFound}</p>
      <p>Average Payout: {bounty.averagePayout}</p>
      <p>Maximum Payout: {bounty.maximumPayout}</p>
      <p>Severity Levels: {bounty.severityLevels}</p>
      <p>Scope: {bounty.scope}</p>
      <p>Submission Requirements: {bounty.submissionRequirements}</p>
      <p>Response Time: {bounty.responseTime}</p>
      <p>Reputation and Reviews: {bounty.reputationAndReviews}</p>
    </div>
  );
};

export default BountyCard;
