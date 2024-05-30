import datetime
import os

LOG_BASE_DIR = "/path/to/webtrey-dashboard/logs"  # Adjust this path accordingly

def log_and_print(message, client_name, scan_type):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    full_message = f"[{timestamp}] {message}"
    print(full_message)
    log_dir = f"{LOG_BASE_DIR}/{client_name}/{scan_type}"
    os.makedirs(log_dir, exist_ok=True)
    log_file = f"{log_dir}/log_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
    with open(log_file, "a") as f:
        f.write(full_message + "\n")
    return log_file
