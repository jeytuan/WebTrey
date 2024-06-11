import subprocess
import datetime
import os

# Get current timestamp for unique log file names
timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")

# Output file for results
output_file = f"smart_contract_analysis_{timestamp}.txt"

# Directory where smart contract files are saved
smart_contracts_dir = "dist/backend/scripts/smart_contracts/zkSync"
os.makedirs(smart_contracts_dir, exist_ok=True)

# Function to log and print
def log_and_print(message):
    print(message)
    with open(output_file, "a", encoding="utf-8") as f:
        f.write(message + "\n")

# Function to analyze smart contract using Slither
def analyze_with_slither(file_path):
    log_and_print(f"[{datetime.datetime.now()}] Running Slither on {file_path}")
    if file_path.endswith(".sol"):
        subprocess.run(
            [
                "docker", "run", "--rm", "-v", f"{os.getcwd()}:/contracts", 
                "trailofbits/eth-security-toolbox", 
                "slither", 
                f"/contracts/{file_path}", 
                "--solc", "solc:0.7.0"  # Use solc from Docker image
            ], 
            stdout=open(output_file, "a", encoding="utf-8"), stderr=subprocess.STDOUT
        )

# Function to analyze smart contract using Foundry
def analyze_with_foundry(file_path):
    log_and_print(f"[{datetime.datetime.now()}] Running Foundry on {file_path}")
    if file_path.endswith(".sol"):
        subprocess.run(
            [
                "docker", "run", "--rm", "-v", f"{os.getcwd()}:/contracts", 
                "ghcr.io/foundry-rs/foundry:latest", 
                "forge", "test", 
                "--contracts", f"/contracts/{file_path}",
                "--solc-version", "0.7.0"
            ], 
            stdout=open(output_file, "a", encoding="utf-8"), stderr=subprocess.STDOUT
        )

# Function to analyze smart contract using Hardhat
def analyze_with_hardhat(file_path):
    log_and_print(f"[{datetime.datetime.now()}] Running Hardhat on {file_path}")
    if file_path.endswith(".sol"):
        subprocess.run(
            [
                "docker", "run", "--rm", "-v", f"{os.getcwd()}:/contracts", 
                "ethereum/solc:0.7.0", 
                "solc", "--bin", "--abi", f"/contracts/{file_path}"
            ], 
            stdout=open(output_file, "a", encoding="utf-8"), stderr=subprocess.STDOUT
        )

# Function to integrate Giza AI
def integrate_giza_ai(contract_code):
    log_and_print(f"[{datetime.datetime.now()}] Integrating Giza AI")
    # Implement Giza AI integration here

# Analyze each smart contract file in the directory
for root, dirs, files in os.walk(smart_contracts_dir):
    for file in files:
        file_path = os.path.join(root, file).replace("\\", "/")
        if file_path.endswith(".sol"):
            analyze_with_slither(file_path)
            analyze_with_foundry(file_path)
            analyze_with_hardhat(file_path)
            with open(file_path, "r", encoding="utf-8") as f:
                contract_code = f.read()
            integrate_giza_ai(contract_code)

log_and_print(f"[{datetime.datetime.now()}] Smart contract analysis completed. Results saved to {output_file}")
