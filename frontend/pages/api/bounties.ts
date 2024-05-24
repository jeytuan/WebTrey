import { NextApiRequest, NextApiResponse } from 'next';
import { Bounty } from '../../lib/types';

const bounties: Bounty[] = [
  {
    id: '1',
    programName: 'zkSync',
    platform: 'Immunefi',
    duration: 'Continuous',
    vulnerabilitiesFound: 'N/A',
    averagePayout: 'N/A',
    maximumPayout: '$2,300,000',
    severityLevels: 'Critical, High, Medium, Low',
    scope: 'Smart Contracts, Blockchain/DLT, Websites and Applications',
    submissionRequirements: 'PoC required for critical and high severity reports',
    responseTime: 'N/A',
    reputationAndReviews: 'N/A',
    lastRetrieved: '2024-05-22',
    retrieveType: 'Manual',
    programOverview: 'zkSync Lite is a scaling engine for Ethereum...',
    bountyFocus: 'Loss of user funds by permanent freezing or direct theft, Temporary freezing of funds, Smart contract destruction, Double spending, Ability to execute a transaction with changed signed parameters',
    rewardsByThreatLevel: 'Rewards are distributed according to the impact of the vulnerability...',
    kyc: 'zkSync has a Know Your Customer (KYC) requirement for bug bounty payouts...',
    rewardLevels: 'Critical: USD $500,000 (PoC Required), High: USD $10,000 (PoC Required), Medium: USD $5,000, Low: USD $1,000',
    assetsInScope: 'https://github.com/matter-labs/zksync/tree/master/core/lib/circuit, https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/circuit.rs...',
    impactsInScope: 'Double spending (Critical Impact), Inability to generate a block for a priority operation that is added through a smart contract (Critical Impact)...',
    outOfScopeRules: 'Attacks that the reporter has already exploited themselves, leading to damage, Attacks requiring access to leaked keys/credentials...',
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
    submissionRequirements: 'PoC required for all severity levels',
    responseTime: 'N/A',
    reputationAndReviews: 'N/A',
    lastRetrieved: '2024-05-22',
    retrieveType: 'Manual',
    programOverview: 'The ssv.network is a fully decentralized, open-source, and trustless DVT Network that provides a reusable infrastructure solution for decentralizing Ethereum validators...',
    bountyFocus: 'Direct theft of user funds, Permanent freezing of funds, Protocol insolvency, Theft of unclaimed yield...',
    rewardsByThreatLevel: 'Critical: USD $50,000 to USD $1,000,000 (PoC Required), High: USD $30,000 (PoC Required), Medium: USD $10,000 (PoC Required), Low: USD $1,500 (PoC Required)',
    kyc: 'SSV Network has a Know Your Customer (KYC) requirement for bug bounty payouts...',
    rewardLevels: 'Critical: USD $50,000 to USD $1,000,000 (PoC Required), High: USD $30,000 (PoC Required), Medium: USD $10,000 (PoC Required), Low: USD $1,500 (PoC Required)',
    assetsInScope: 'https://etherscan.io/address/0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1, https://etherscan.io/address/0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4...',
    impactsInScope: 'Direct theft of user funds, Permanent freezing of funds, Protocol insolvency, Theft of unclaimed yield...',
    outOfScopeRules: 'Attacks requiring access to leaked keys/credentials, Attacks requiring access to privileged addresses, Best practice recommendations...',
  },
  // Add more bounties as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(bounties);
}
