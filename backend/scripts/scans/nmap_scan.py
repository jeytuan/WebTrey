import os
import datetime
import socket

def get_ip_from_url(url):
    try:
        return socket.gethostbyname(url)
    except socket.error as e:
        print(f"Error resolving IP for {url}: {e}")
        return None

def run_nmap_scan(target):
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    log_file = f"/app/logs/nmap_scan_report_{timestamp}.txt"
    print(f"Running Nmap scan on {target}")
    with open(log_file, "w") as f:
        f.write(f"Running Nmap scan on {target}\n")
        f.flush()
        ip_address = get_ip_from_url(target)
        if ip_address:
            os.system(f"nmap -sV {ip_address} >> {log_file} 2>&1")
        else:
            f.write(f"Failed to resolve IP for {target}\n")
    print(f"Scan results saved to {log_file}")

if __name__ == "__main__":
    target = input("Enter the target (IP or URL): ")
    run_nmap_scan(target)
