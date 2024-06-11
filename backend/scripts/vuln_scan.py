import subprocess
import datetime
import os

# Define scan targets
urls = [
    "https://wallet.zksync.io",
    "https://zkscan.io",
    "https://link.zksync.io/",
    "https://withdraw.zksync.io",
    "https://checkout.zksync.io/link"
]

smart_contracts = [
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/circuit.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/exit_circuit.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/mod.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/mint_nft.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/noop.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/withdraw.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/swap.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/withdraw_nft.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/deposit.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/transfer.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/transfer_to_new.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/forced_exit.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/change_pubkey_offchain.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/full_exit.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/witness/utils.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/allocated_structures.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/utils.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/account.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/element.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/signature.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/serialization.rs",
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/operation.rs",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/UpgradeGatekeeper.sol",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Proxy.sol",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/ZkSync.sol",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/AdditionalZkSync.sol",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Verifier.sol",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/Governance.sol",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/TokenGovernance.sol",
    "https://github.com/matter-labs/zksync/blob/breaking/contracts/contracts/ZkSyncNFTFactory.sol"
]

# Get current timestamp for unique log file names
timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")

# Output file for results
output_file = f"/app/logs/vuln_scan_results_{timestamp}.txt"

# Create logs directory if not exists
os.makedirs("/app/logs", exist_ok=True)

# Function to log and print
def log_and_print(message):
    print(message)
    with open(output_file, "a") as f:
        f.write(message + "\n")

# Function to scan a URL
def scan_url(url):
    log_and_print(f"[{datetime.datetime.now()}] Scanning URL: {url}")

    # Nmap scan
    log_and_print(f"[{datetime.datetime.now()}] Running Nmap scan on {url}")
    subprocess.run(["docker", "run", "--rm", "instrumentisto/nmap", "-sS", "-sV", url], stdout=open(output_file, "a"), stderr=subprocess.STDOUT)

    # Nikto scan
    log_and_print(f"[{datetime.datetime.now()}] Running Nikto scan on {url}")
    subprocess.run(["nikto", "-h", url], stdout=open(output_file, "a"), stderr=subprocess.STDOUT)

    # SSL scan
    log_and_print(f"[{datetime.datetime.now()}] Running SSL scan on {url}")
    subprocess.run(["sslscan", url], stdout=open(output_file, "a"), stderr=subprocess.STDOUT)

    log_and_print(f"[{datetime.datetime.now()}] Completed scanning URL: {url}")

# Function to scan a smart contract
def scan_smart_contract(url):
    log_and_print(f"[{datetime.datetime.now()}] Scanning Smart Contract: {url}")

    # Fetch the smart contract code
    result = subprocess.run(["curl", "-s", url], capture_output=True, text=True)
    code = result.stdout
    
    # Basic check for known vulnerabilities in the smart contract
    if "selfdestruct" in code:
        log_and_print(f"[{datetime.datetime.now()}] Potential issue found: selfdestruct usage")

    if "tx.origin" in code:
        log_and_print(f"[{datetime.datetime.now()}] Potential issue found: tx.origin usage")

    log_and_print(f"[{datetime.datetime.now()}] Completed scanning Smart Contract: {url}")

# Scan each URL
for url in urls:
    scan_url(url)

# Scan each smart contract
for contract in smart_contracts:
    scan_smart_contract(contract)

log_and_print(f"[{datetime.datetime.now()}] Vulnerability scan completed. Results saved to {output_file}")
