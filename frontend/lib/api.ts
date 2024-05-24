import { Bounty, ThreatIntel } from './types';

export async function fetchBounties(): Promise<Bounty[]> {
  return [
    {
      id: '1',
      programName: 'zkSync',
      platform: 'Immunefi',
      duration: 'Ongoing',
      vulnerabilitiesFound: '100',
      averagePayout: '$10,000',
      maximumPayout: '$2,300,000',
      severityLevels: 'Low, Medium, High, Critical',
      scope: 'Smart Contracts, DApps',
      submissionRequirements: 'PoC Required',
      responseTime: '24 Hours',
      reputationAndReviews: 'Positive',
      lastRetrieved: '2023-05-22',
      retrieveType: 'Manual',
      programOverview: 'zkSync Lite is a scaling engine for Ethereum...',
      bountyFocus: 'Preventing loss of user funds...',
      rewardsByThreatLevel: 'Rewards are distributed according to the impact...',
      kyc: 'KYC is required for payouts...',
      rewardLevels: 'Critical: $500,000...',
      assetsInScope: 'https://github.com/matter-labs/zksync...',
      impactsInScope: 'Double spending, Inability to generate a block...',
      outOfScopeRules: 'The following vulnerabilities are excluded...'
    },
    {
      id: '2',
      programName: 'SSV Network',
      platform: 'Immunefi',
      duration: 'Ongoing',
      vulnerabilitiesFound: 'N/A',
      averagePayout: 'N/A',
      maximumPayout: '$1,000,000',
      severityLevels: 'Critical, High, Medium, Low',
      scope: 'Smart Contracts, DApps',
      submissionRequirements: 'PoC Required',
      responseTime: '24 Hours',
      reputationAndReviews: 'Positive',
      lastRetrieved: '2024-05-22',
      retrieveType: 'Manual',
      programOverview: 'The ssv.network is a fully decentralized, open-source, and trustless DVT Network...',
      bountyFocus: 'Direct theft of user funds, Permanent freezing of funds...',
      rewardsByThreatLevel: 'Rewards are distributed according to the impact...',
      kyc: 'KYC is required for payouts...',
      rewardLevels: 'Critical: USD $50,000 to USD $1,000,000...',
      assetsInScope: 'https://etherscan.io/address/0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1...',
      impactsInScope: 'Direct theft of user funds, Permanent freezing of funds...',
      outOfScopeRules: 'Attacks requiring access to leaked keys/credentials, Attacks requiring access to privileged addresses...'
    }
  ];
}

export async function fetchThreatIntel(): Promise<ThreatIntel[]> {
  return [
    {
      id: '1',
      name: 'Sample Threat 1',
      description: 'Description for sample threat 1'
    },
    {
      id: '2',
      name: 'Sample Threat 2',
      description: 'Description for sample threat 2'
    }
  ];
}
