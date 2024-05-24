# security_action.py
import json
import os
from giza_actions.action import Action, action
from giza_actions.task import task

# Directly define the API_HOST
API_HOST = "https://actions-server-jeytuan-dblzzhtf5q-ew.a.run.app"
os.environ["API_HOST"] = API_HOST

# Load API key from JSON file
api_key_path = "C:\\Users\\justi\\.giza\\.api_key.json"
with open(api_key_path, 'r') as f:
    api_key = json.load(f)["api_key"]

# Define tasks without decorators
def vulnerability_scan():
    print("Starting vulnerability scan...")
    # Here you would call your actual vulnerability scanning tools
    # This is just a dummy scan result for demonstration
    scan_result = {
        "vulnerabilities": [
            {"id": "VULN-001", "severity": "high", "description": "SQL Injection vulnerability"},
            {"id": "VULN-002", "severity": "medium", "description": "Cross-Site Scripting (XSS)"}
        ]
    }
    print("Vulnerability scan completed.")
    return scan_result

def security_audit(scan_result):
    print("Starting security audit...")
    # Here you would perform your security audit based on the scan results
    # This is just a dummy audit result for demonstration
    audit_result = {
        "findings": [
            {"id": "AUD-001", "severity": "high", "description": "Unpatched server"},
            {"id": "AUD-002", "severity": "low", "description": "Deprecated software version"}
        ]
    }
    print("Security audit completed.")
    return audit_result

def threat_intelligence():
    print("Gathering threat intelligence...")
    # Here you would gather actual threat intelligence
    # This is just dummy threat intelligence for demonstration
    threat_info = {
        "threats": [
            {"id": "THREAT-001", "type": "Malware", "description": "New malware detected"},
            {"id": "THREAT-002", "type": "Phishing", "description": "Phishing campaign targeting users"}
        ]
    }
    print("Threat intelligence gathered.")
    return threat_info

# Manually wrap the functions with the task decorator
vulnerability_scan_task = task(vulnerability_scan, name="Vulnerability Scan")
security_audit_task = task(security_audit, name="Security Audit")
threat_intelligence_task = task(threat_intelligence, name="Threat Intelligence")

# Define the action function
def execute_security_action():
    scan_result = vulnerability_scan_task()
    audit_result = security_audit_task(scan_result)
    threat_info = threat_intelligence_task()
    return {
        "scan_result": scan_result,
        "audit_result": audit_result,
        "threat_info": threat_info
    }

# Manually wrap the action function with the action decorator
security_action = action(execute_security_action, name="Security Action", log_prints=True)

if __name__ == "__main__":
    action_deploy = Action(
        entrypoint=security_action, 
        name="security-action"
    )
    action_deploy.serve(name="security-deployment")
