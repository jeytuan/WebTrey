import subprocess

def scan_vuln_action(target):
    # Implementation of vulnerability scan
    results = {}
    nmap_output = subprocess.run(['nmap', '-sS', '-sV', target], capture_output=True, text=True)
    results['nmap'] = nmap_output.stdout

    nikto_output = subprocess.run(['nikto', '-h', target], capture_output=True, text=True)
    results['nikto'] = nikto_output.stdout

    sslscan_output = subprocess.run(['sslscan', target], capture_output=True, text=True)
    results['sslscan'] = sslscan_output.stdout

    return results
