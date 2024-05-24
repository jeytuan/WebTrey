export interface Bounty {
    id: string;
    programName: string;
    platform: string;
    duration: string;
    vulnerabilitiesFound: string;
    averagePayout: string;
    maximumPayout: string;
    severityLevels: string;
    scope: string;
    submissionRequirements: string;
    responseTime: string;
    reputationAndReviews: string;
    lastRetrieved: string;
    retrieveType: string;
    programOverview: string;
    bountyFocus: string;
    rewardsByThreatLevel: string;
    kyc: string;
    rewardLevels: string;
    assetsInScope: string;
    impactsInScope: string;
    outOfScopeRules: string;
  }
  
  export interface ThreatIntel {
    id: string;
    name: string;
    description: string;
  }
  