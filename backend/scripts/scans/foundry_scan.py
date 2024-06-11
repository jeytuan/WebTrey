import os

def run_foundry_scan(target_contract):
    print(f"Running Foundry scan on {target_contract}")
    os.system(f"forge test --contracts {target_contract} --json > /app/logs/foundry_scan_report.json")

if __name__ == "__main__":
    target = input("Enter the target contract file path: ")
    run_foundry_scan(target)
