import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

const smartContracts = [
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/circuit.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/exit_circuit.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/mod.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/mint_nft.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/noop.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/withdraw.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/swap.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/withdraw_nft.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/deposit.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/transfer.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/transfer_to_new.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/forced_exit.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/change_pubkey_offchain.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/full_exit.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/witness/utils.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/allocated_structures.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/utils.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/account.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/element.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/signature.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/serialization.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/master/core/lib/circuit/src/operation.rs",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/UpgradeGatekeeper.sol",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/Proxy.sol",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/ZkSync.sol",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/AdditionalZkSync.sol",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/Verifier.sol",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/Governance.sol",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/TokenGovernance.sol",
    "https://raw.githubusercontent.com/matter-labs/zksync/breaking/contracts/contracts/ZkSyncNFTFactory.sol"
];

const downloadContract = async (url: string, outputPath: string) => {
    try {
        const response = await axios.get(url);
        fs.writeFileSync(outputPath, response.data);
        console.log(`Downloaded: ${url} to ${outputPath}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to download ${url}:`, error.message);
        } else {
            console.error(`Failed to download ${url}:`, error);
        }
    }
};

const retrieveContracts = async () => {
    const baseDir = path.join(__dirname, 'smart_contracts');
    console.log(`Base directory: ${baseDir}`);
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
        console.log(`Created directory: ${baseDir}`);
    }

    for (const contractUrl of smartContracts) {
        const fileName = path.basename(contractUrl);
        const filePath = path.join(baseDir, fileName);
        console.log(`Downloading ${contractUrl} to ${filePath}`);
        await downloadContract(contractUrl, filePath);
    }
};

retrieveContracts();
