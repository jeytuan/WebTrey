
import subprocess

def run_scan():
    try:
        result = subprocess.run(['/giza_venv/bin/python', '/app/scripts/scans/vuln_scan.py'], capture_output=True, text=True)
        return result.stdout
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    print(run_scan())
