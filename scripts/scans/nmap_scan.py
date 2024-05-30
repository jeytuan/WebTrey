import os

def run_nmap_scan(target_ip):
    print(f"Running Nmap scan on {target_ip}")
    os.system(f"nmap -sV -oN /app/logs/nmap_scan_report.txt {target_ip}")

if __name__ == "__main__":
    target = input("Enter the target IP: ")
    run_nmap_scan(target)
