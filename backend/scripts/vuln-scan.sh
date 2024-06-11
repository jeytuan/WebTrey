#!/bin/bash

# Ensure required tools are installed
apt-get update && apt-get install -y nmap nikto sslscan jq

# Get current timestamp for unique log file names
timestamp=$(date +"%Y%m%d_%H%M%S")

# Define scan targets
declare -a urls=(
    "https://wallet.zksync.io"
    "https://zkscan.io"
    "https://link.zksync.io/"
    "https://withdraw.zksync.io"
    "https://checkout.zksync.io/link"
)

declare -a smart_contracts=(
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit"
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/circuit.rs"
    "https://github.com/matter-labs/zksync/tree/master/core/lib/circuit/src/exit_circuit.rs"
    # Add more smart contract URLs as needed
)

# Output file for results
output_file="/app/logs/vuln_scan_results_$timestamp.txt"

# Create logs directory if not exists
mkdir -p /app/logs

# Clear previous results
> $output_file

# Function to scan a URL with nmap and nikto
scan_url() {
    local url=$1
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Scanning URL: $url" | tee -a $output_file

    # Nmap scan
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Running Nmap scan on $url" | tee -a $output_file
    nmap -sS -sV $url 2>&1 | tee -a $output_file

    # Nikto scan
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Running Nikto scan on $url" | tee -a $output_file
    nikto -h $url 2>&1 | tee -a $output_file

    # SSL scan
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Running SSL scan on $url" | tee -a $output_file
    sslscan $url 2>&1 | tee -a $output_file

    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Completed scanning URL: $url" | tee -a $output_file
}

# Function to scan a smart contract
scan_smart_contract() {
    local url=$1
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Scanning Smart Contract: $url" | tee -a $output_file

    # Fetch the smart contract code
    code=$(curl -s $url)
    
    # Basic check for known vulnerabilities in the smart contract
    if [[ $code == *"selfdestruct"* ]]; then
        echo "[$(date +"%Y-%m-%d %H:%M:%S")] Potential issue found: selfdestruct usage" | tee -a $output_file
    fi

    if [[ $code == *"tx.origin"* ]]; then
        echo "[$(date +"%Y-%m-%d %H:%M:%S")] Potential issue found: tx.origin usage" | tee -a $output_file
    fi

    # Add more smart contract checks as needed
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Completed scanning Smart Contract: $url" | tee -a $output_file
}

# Scan each URL
for url in "${urls[@]}"; do
    scan_url $url
done

# Scan each smart contract
for contract in "${smart_contracts[@]}"; do
    scan_smart_contract $contract
done

echo "[$(date +"%Y-%m-%d %H:%M:%S")] Vulnerability scan completed. Results saved to $output_file."
