import os
import datetime
import socket

def get_ip_from_url(url):
    try:
        return socket.gethostbyname(url)
    except socket.error as e:
        print(f"Error resolving IP for {url}: {e}")
        return None

def run_sslscan(target_url):
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    log_file = f"/app/logs/sslscan_report_{timestamp}.txt"
    print(f"Running SSLScan on {target_url}")
    with open(log_file, "w") as f:
        f.write(f"Running SSLScan on {target_url}\n")
        f.flush()
        os.system(f"sslscan {target_url} >> {log_file} 2>&1")
    print(f"Scan results saved to {log_file}")

if __name__ == "__main__":
    target = input("Enter the target URL or IP: ")
    run_sslscan(target)
