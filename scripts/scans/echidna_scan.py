import os

def run_echidna_scan(target_contract):
    print(f"Running Echidna scan on {target_contract}")
    os.system(f"echidna-test {target_contract} --config /app/configs/echidna_config.yaml")

if __name__ == "__main__":
    target = input("Enter the target contract file path: ")
    run_echidna_scan(target)
