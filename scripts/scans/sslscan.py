import os

def run_sslscan(target_url):
    print(f"Running SSLScan on {target_url}")
    os.system(f"sslscan {target_url} > /app/logs/sslscan_report.txt")

if __name__ == "__main__":
    target = input("Enter the target URL: ")
    run_sslscan(target)
