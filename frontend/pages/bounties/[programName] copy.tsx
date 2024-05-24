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
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Program Overview</h2>
        <p>zkSync Lite is a scaling engine for Ethereum. Its current functionality scope includes low gas transfers of ETH and ERC20 tokens, atomic swaps & limit orders as well as native L2 NFT support.</p>
        <p>zkSync Lite is built on ZK Rollup architecture. ZK Rollup is an L2 scaling solution in which all funds are held by a smart contract on the mainchain, while computation and storage are performed off-chain. For every Rollup block, a state transition zero-knowledge proof (SNARK) is generated and verified by the mainchain contract. This SNARK includes the proof of the validity of every single transaction in the Rollup block. Additionally, the public data update for every block is published over the mainchain network as cheap calldata.</p>
        <p>For more information about zkSync Lite, please visit <a href="https://zksync.io/" className="text-blue-500">https://zksync.io/</a>.</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Bounty Focus</h2>
        <p>This bug bounty program is focused on their smart contracts, ZK-SNARK circuits, web and app and is focused on preventing:</p>
        <ul className="list-disc list-inside">
          <li>Loss of user funds by permanent freezing or direct theft</li>
          <li>Temporary freezing of funds</li>
          <li>Smart contract destruction</li>
          <li>Double spending</li>
          <li>Ability to execute a transaction with changed signed parameters</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Rewards by Threat Level</h2>
        <p>Rewards are distributed according to the impact of the vulnerability based on the Immunefi Vulnerability Severity Classification System V2.2. This is a simplified 5-level scale, with separate scales for websites/apps and smart contracts/blockchains, encompassing everything from consequence of exploitation to privilege required to likelihood of a successful exploit. For the ZK-SNARK Circuits, the classification will be based on the impacts listed on the Impacts in Scope section below</p>
        <ul className="list-disc list-inside">
          <li>All critical and high severity bug reports must come with a PoC with an end-effect impacting an asset-in-scope in order to be considered for a reward. Explanations and statements are not accepted as PoC and code is required.</li>
          <li>Rewards for critical smart contract vulnerabilities are further capped at 10% of economic damage, with the main consideration being the funds affected in addition to PR and brand considerations, at the discretion of the team. However, there is a minimum reward of USD 50 000 for Critical bug reports.</li>
          <li>The rewards for the Blockchain/DLT section is only for the ZK-SNARK Circuits assets and not any other blockchain/DLT section.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">KYC</h2>
        <p>zkSync has a Know Your Customer (KYC) requirement for bug bounty payouts. Government identification is required for the KYC process.</p>
        <p>Payouts are handled by the zkSync Lite team directly and are denominated in USD. However, payouts are done in USDC via zkSync Lite.</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Reward Levels</h2>
        <ul className="list-disc list-inside">
          <li><strong>Blockchain/DLT</strong></li>
          <li>Critical: USD $500,000 (PoC Required)</li>
          <li>High: USD $10,000 (PoC Required)</li>
          <li><strong>Smart Contract</strong></li>
          <li>Critical: Up to USD $2,300,000 (PoC Required)</li>
          <li>High: USD $50,000 (PoC Required)</li>
          <li>Medium: USD $5,000</li>
          <li>Low: USD $1,000</li>
          <li><strong>Websites and Applications</strong></li>
          <li>Critical: USD $25,000 (PoC Required)</li>
          <li>High: USD $5,000 (PoC Required)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Assets in Scope</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/circuit.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/circuit.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/exit_circuit.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/exit_circuit.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/mod.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/mod.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/mint_nft.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/mint_nft.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/noop.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/noop.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/withdraw.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/withdraw.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/swap.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/swap.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/withdraw_nft.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/withdraw_nft.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/deposit.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/deposit.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/transfer.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/transfer.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/transfer_to_new.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/transfer_to_new.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/forced_exit.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/forced_exit.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/change_pubkey_offchain.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/change_pubkey_offchain.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/full_exit.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/full_exit.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/utils.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/utils.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/allocated_structures.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/allocated_structures.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/utils.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/utils.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/account.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/account.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/element.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/element.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/signature.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/signature.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/serialization.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/serialization.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/operation.rs" className="text-blue-500">https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/operation.rs</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/UpgradeGatekeeper.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/UpgradeGatekeeper.sol</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Proxy.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Proxy.sol</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/ZkSync.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/ZkSync.sol</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/AdditionalZkSync.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/AdditionalZkSync.sol</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Verifier.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Verifier.sol</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Governance.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Governance.sol</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/TokenGovernance.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/TokenGovernance.sol</a></li>
          <li><a href="https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/ZkSyncNFTFactory.sol" className="text-blue-500">https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/ZkSyncNFTFactory.sol</a></li>
          <li><a href="https://wallet.zksync.io" className="text-blue-500">https://wallet.zksync.io</a></li>
          <li><a href="https://zkscan.io" className="text-blue-500">https://zkscan.io</a></li>
          <li><a href="https://link.zksync.io/" className="text-blue-500">https://link.zksync.io/</a></li>
          <li><a href="https://withdraw.zksync.io" className="text-blue-500">https://withdraw.zksync.io</a></li>
          <li><a href="https://checkout.zksync.io/link" className="text-blue-500">https://checkout.zksync.io/link</a></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Impacts in Scope</h2>
        <ul className="list-disc list-inside">
          <li>Double spending (Critical Impact)</li>
          <li>Inability to generate a block for a priority operation that is added through a smart contract (Critical Impact)</li>
          <li>Minting fungible tokens not through a deposit (Critical Impact)</li>
          <li>Ability to steal/burn/freeze other people's tokens (Critical Impact)</li>
          <li>Ability to execute a transaction with changed signed parameters (e.g. sender/recipient/amount/tokenId/feeToken/...) (High Impact)</li>
          <li>Ability to create a block with public input information that is not enough to restore state transition (High Impact)</li>
          <li>Loss of user funds by permanent burning, freezing or direct theft (Critical Impact)</li>
          <li>Network shutdown (Critical Impact)</li>
          <li>Temporary freezing of funds for at least 24 hours (High Impact)</li>
          <li>Forceful activation of exodus mode (High Impact)</li>
          <li>Blocking of upgrade system (High Impact)</li>
          <li>Smart contract gas drainage (Medium Impact)</li>
          <li>Griefing (e.g. no profit motive for an attacker, but damage to the users or the protocol) (Medium Impact)</li>
          <li>Smart contract fails to deliver promised returns, but doesn’t lose value (Low Impact)</li>
          <li>Leak of user data (Critical Impact)</li>
          <li>Redirected funds by address modification (Critical Impact)</li>
          <li>Site goes down (Critical Impact)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Out of Scope & Rules</h2>
        <p>The following vulnerabilities are excluded from the rewards for this bug bounty program:</p>
        <ul className="list-disc list-inside">
          <li>Attacks that the reporter has already exploited themselves, leading to damage</li>
          <li>Attacks requiring access to leaked keys/credentials</li>
          <li>Attacks requiring access to privileged addresses (governance, strategist)</li>
          <li>Basic economic governance attacks (e.g. 51% attack)</li>
          <li>Logic errors with rebase tokens and interest-bearing tokens</li>
          <li>Best practice critiques</li>
          <li>Sybil attacks</li>
          <li>Centralization risks</li>
          <li>Theoretical vulnerabilities without any proof or demonstration</li>
          <li>Self-XSS</li>
          <li>Clickjacking/UI redressing with minimal security impact</li>
          <li>Tab-nabbing</li>
          <li>Vulnerabilities only exploitable in old browsers or platforms (e.g. old version of browser which differs from the last stable version or outdated OS which do not receive security updates anymore)</li>
          <li>Captcha bypass using OCR</li>
          <li>CSRF with no security impact (logout CSRF, change language, etc.)</li>
          <li>Missing HTTP Security Headers (such as X-FRAME-OPTIONS) or cookie security flags (such as “httponly”)</li>
          <li>Server-side information disclosure such as IPs, server names, and most stack traces</li>
          <li>Vulnerabilities used to enumerate or confirm the existence of users or tenants</li>
          <li>Vulnerabilities requiring unlikely user actions</li>
          <li>URL Redirects (unless combined with another vulnerability to produce a more severe vulnerability)</li>
          <li>Lack of SSL/TLS best practices</li>
          <li>DDoS vulnerabilities</li>
          <li>Attacks requiring privileged access from within the organization</li>
          <li>Feature requests</li>
          <li>Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS.</li>
          <li>Vulnerabilities that require physical access to a user’s device</li>
          <li>Issues that have no security impact (E.g. Failure to load a web page)</li>
          <li>Phishing (E.g. HTTP Basic Authentication Phishing)</li>
          <li>Attacks requiring MITM or physical access to a user’s device.</li>
          <li>Missing best practices without a working video Proof of Concept.</li>
        </ul>
        <p>The following activities are prohibited by this bug bounty program:</p>
        <ul className="list-disc list-inside">
          <li>Any testing with mainnet or public testnet contracts; all testing should be done on private testnets</li>
          <li>Any testing with pricing oracles or third party smart contracts</li>
          <li>Attempting phishing or other social engineering attacks against our employees and/or customers</li>
          <li>Any testing with third party systems and applications (e.g. browser extensions) as well as websites (e.g. SSO providers, advertising networks)</li>
          <li>Any denial of service attacks</li>
          <li>Automated testing of services that generates significant amounts of traffic</li>
          <li>Public disclosure of an unpatched vulnerability in an embargoed bounty</li>
        </ul>
      </div>
    </div>
  );
};

export default BountyDetail;
