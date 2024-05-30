import os

def run_hardhat_scan(target_contract):
    print(f"Running Hardhat scan on {target_contract}")
    os.system(f"npx hardhat test {target_contract} > /app/logs/hardhat_scan_report.txt")

if __name__ == "__main__":
    target = input("Enter the target contract file path: ")
    run_hardhat_scan(target)
