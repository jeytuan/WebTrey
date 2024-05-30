import os

def run_burp_scan(target_url):
    print(f"Running Burp Suite scan on {target_url}")
    os.system(f"/opt/burp/burp.sh -t {target_url} -o /app/logs/burp_scan_report.html")

if __name__ == "__main__":
    target = input("Enter the target URL: ")
    run_burp_scan(target)
