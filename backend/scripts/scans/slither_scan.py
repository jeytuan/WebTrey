import os

def run_slither_scan(target_contract):
    print(f"Running Slither scan on {target_contract}")
    os.system(f"slither {target_contract} --json /app/logs/slither_scan_report.json")

if __name__ == "__main__":
    target = input("Enter the target contract file path: ")
    run_slither_scan(target)
