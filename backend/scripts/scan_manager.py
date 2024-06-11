import json
import subprocess
import datetime
import os
import asyncio
import websockets
from log_manager import log_and_print, log_output_to_file

CONFIGS_DIR = "/app/scripts/configs"
PYTHON = "/usr/bin/python3"
WEBSOCKET_URI = "ws://localhost:8765"

async def send_log_to_ws(log_message, retry_attempts=5):
    for attempt in range(retry_attempts):
        try:
            async with websockets.connect(WEBSOCKET_URI) as websocket:
                await websocket.send(json.dumps({"log": log_message}))
                return
        except Exception as e:
            print(f"Failed to connect to WebSocket server: {e}. Retrying ({attempt + 1}/{retry_attempts})...")
            await asyncio.sleep(2)
    print("Failed to connect to WebSocket server after several attempts.")

def load_config(client_name):
    config_file = f"{CONFIGS_DIR}/{client_name}.json"
    print(f"Loading config file: {config_file}")
    with open(config_file, "r") as f:
        return json.load(f)

def run_scan(script_name, target, client_name, scan_type):
    log_file = log_and_print(f"Running {script_name} scan on {target}", client_name, scan_type)
    asyncio.run(send_log_to_ws(f"Running {script_name} scan on {target}"))
    print(f"Executing: {PYTHON} /app/scripts/scans/{script_name} {target}")
    process = subprocess.Popen([PYTHON, f"/app/scripts/scans/{script_name}", target], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    for stdout_line in iter(process.stdout.readline, ""):
        log_output_to_file(log_file, stdout_line)
        asyncio.run(send_log_to_ws(stdout_line))
        print(stdout_line, end="")
    process.stdout.close()
    process.wait()
    log_and_print(f"Completed {script_name} scan on {target}", client_name, scan_type)
    asyncio.run(send_log_to_ws(f"Completed {script_name} scan on {target}"))

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
    clients = ["zksync"]  # Only focus on zkSync for now
    for client in clients:
        print(f"Starting scans for client: {client}")
        perform_scans(client)
