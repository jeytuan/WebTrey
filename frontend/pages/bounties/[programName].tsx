import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Bounty } from '../../lib/types';
import { fetchBounties } from '../../lib/api';

const BountyDetail: React.FC = () => {
  const router = useRouter();
  const { programName } = router.query;
  const [bounty, setBounty] = useState<Bounty | null>(null);

  useEffect(() => {
    async function fetchData() {
      const bounties = await fetchBounties();
      const selectedBounty = bounties.find(b => b.programName === programName);
      setBounty(selectedBounty || null);
    }

    if (programName) {
      fetchData();
    }
  }, [programName]);

  if (!bounty) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{bounty.programName}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Program Details</h2>
        <p><strong>Platform:</strong> {bounty.platform}</p>
        <p><strong>Duration:</strong> {bounty.duration}</p>
        <p><strong>Vulnerabilities Found:</strong> {bounty.vulnerabilitiesFound}</p>
        <p><strong>Average Payout:</strong> {bounty.averagePayout}</p>
        <p><strong>Maximum Payout:</strong> {bounty.maximumPayout}</p>
        <p><strong>Severity Levels:</strong> {bounty.severityLevels}</p>
        <p><strong>Scope:</strong> {bounty.scope}</p>
        <p><strong>Submission Requirements:</strong> {bounty.submissionRequirements}</p>
        <p><strong>Response Time:</strong> {bounty.responseTime}</p>
        <p><strong>Reputation and Reviews:</strong> {bounty.reputationAndReviews}</p>
        <p><strong>Last Retrieved:</strong> {bounty.lastRetrieved}</p>
        <p><strong>Retrieve Type:</strong> {bounty.retrieveType}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Program Overview</h2>
        <p>{bounty.programOverview}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Bounty Focus</h2>
        <p>{bounty.bountyFocus}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Rewards by Threat Level</h2>
        <p>{bounty.rewardsByThreatLevel}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">KYC</h2>
        <p>{bounty.kyc}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Reward Levels</h2>
        <p>{bounty.rewardLevels}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Assets in Scope</h2>
        <p>{bounty.assetsInScope}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Impacts in Scope</h2>
        <p>{bounty.impactsInScope}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Out of Scope & Rules</h2>
        <p>{bounty.outOfScopeRules}</p>
      </div>
    </div>
  );
};

export default BountyDetail;
