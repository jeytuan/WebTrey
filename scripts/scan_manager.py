import json
import subprocess
import datetime
import os
from log_manager import log_and_print

CONFIGS_DIR = "/path/to/webtrey-dashboard/scripts/configs"  # Adjust this path accordingly

def load_config(client_name):
    config_file = f"{CONFIGS_DIR}/{client_name}.json"
    with open(config_file, "r") as f:
        return json.load(f)

def run_scan(script_name, target, client_name, scan_type):
    log_file = log_and_print(f"Running {script_name} scan on {target}", client_name, scan_type)
    subprocess.run(["python3", f"/app/scans/{script_name}", target], stdout=open(log_file, "a"), stderr=subprocess.STDOUT)
    log_and_print(f"Completed {script_name} scan on {target}", client_name, scan_type)

def perform_scans(client_name):
    config = load_config(client_name)
    for url in config["urls"]:
        run_scan("burp_scan.py", url, client_name, "url_scans")
        run_scan("nmap_scan.py", url, client_name, "url_scans")
        run_scan("nikto_scan.py", url, client_name, "url_scans")
        run_scan("sslscan.py", url, client_name, "url_scans")
    for contract in config["smart_contracts"]:
        run_scan("slither_scan.py", contract, client_name, "contract_scans")
        run_scan("echidna_scan.py", contract, client_name, "contract_scans")
        run_scan("foundry_scan.py", contract, client_name, "contract_scans")
        run_scan("hardhat_scan.py", contract, client_name, "contract_scans")

if __name__ == "__main__":
    clients = ["ssv_network", "giza", "zksync", "starknet", "linea_sepolia", "enzyme", "lambda"]
    for client in clients:
        perform_scans(client)
