import os

def run_nikto_scan(target_url):
    print(f"Running Nikto scan on {target_url}")
    os.system(f"nikto -h {target_url} -output /app/logs/nikto_scan_report.txt")

if __name__ == "__main__":
    target = input("Enter the target URL: ")
    run_nikto_scan(target)
