"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const axios_1 = __importDefault(require("axios"));
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
const downloadContract = (url, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(url);
        fs.writeFileSync(outputPath, response.data);
        console.log(`Downloaded: ${url} to ${outputPath}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to download ${url}:`, error.message);
        }
        else {
            console.error(`Failed to download ${url}:`, error);
        }
    }
});
const retrieveContracts = () => __awaiter(void 0, void 0, void 0, function* () {
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
        yield downloadContract(contractUrl, filePath);
    }
});
retrieveContracts();
