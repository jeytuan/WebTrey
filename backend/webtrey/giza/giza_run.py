import os
import json
import requests
from dotenv import load_dotenv
from giza_actions.task import task
from giza_actions.action import action
import whois
import shodan
from datetime import datetime

# Load environment variables from .env.local
load_dotenv(dotenv_path='../../../.env.local')

API_HOST = "https://actions-server-jeytuan-dblzzhtf5q-ew.a.run.app"
os.environ["API_HOST"] = API_HOST

# Load API key from the correct path
api_key_path = r"C:\Users\justi\.giza\.api_key.json"
with open(api_key_path, 'r') as f:
    api_key = json.load(f)["api_key"]

# Set up GitHub credentials
GITHUB_API_URL = "https://api.github.com"
GITHUB_ORG = "gizatechxyz"
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")  # Loaded from .env.local
SSH_KEY = os.getenv("SSH_KEY")  # Loaded from .env.local

# Shodan API key
SHODAN_API_KEY = os.getenv("SHODAN_API_KEY")  # Loaded from .env.local

# Check if the GitHub token is set
if not GITHUB_TOKEN:
    raise ValueError("GitHub token is not set. Please set the GITHUB_TOKEN environment variable.")

headers = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

# Fetch Repositories Task
@task
def fetch_repositories():
    print("Fetching repositories from GitHub...")
    url = f"{GITHUB_API_URL}/orgs/{GITHUB_ORG}/repos"
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise an exception for HTTP errors
    repos = response.json()
    print(f"Fetched {len(repos)} repositories.")
    return repos

# Scan Repository Task
@task
def scan_repository(repo):
    print(f"Scanning repository {repo['name']} for vulnerabilities...")
    # Placeholder for actual scanning logic
    scan_result = {
        "repo": repo['name'],
        "vulnerabilities": [
            {"id": "VULN-001", "severity": "high", "description": "Placeholder vulnerability"}
        ]
    }
    print(f"Scan completed for repository {repo['name']}.")
    return scan_result

# Analyze Documentation Task
@task
def analyze_documentation():
    print("Analyzing documentation for potential vulnerabilities...")
    # Placeholder for documentation analysis logic
    analysis_result = {
        "findings": [
            {"id": "DOC-001", "severity": "medium", "description": "Placeholder documentation issue"}
        ]
    }
    print("Documentation analysis completed.")
    return analysis_result

# WHOIS Information Task
@task
def domain_info(domain):
    print(f"Fetching WHOIS information for domain: {domain}")
    whois_info = whois.whois(domain)
    return whois_info

# Shodan Search Task
@task
def shodan_search(ip):
    print(f"Searching Shodan for information on IP: {ip}")
    api = shodan.Shodan(SHODAN_API_KEY)
    host = api.host(ip)
    return host

# Aggregate Results Task
@task
def aggregate_results(repo_results, doc_analysis, domain_data, shodan_data):
    print("Aggregating results from scans, documentation analysis, WHOIS, and Shodan...")
    aggregated_results = {
        "repo_scans": repo_results,
        "documentation_analysis": doc_analysis,
        "domain_info": domain_data,
        "shodan_info": shodan_data
    }
    print(f"Aggregated results: {json.dumps(aggregated_results, indent=2, default=str)}")
    return aggregated_results

# Main Action
@action
def execute_osint_security_action():
    repos = fetch_repositories()
    repo_results = [scan_repository(repo) for repo in repos]
    doc_analysis = analyze_documentation()
    domain_data = domain_info("example.com")  # Replace with the actual domain
    shodan_data = shodan_search("8.8.8.8")  # Replace with the actual IP
    aggregated_results = aggregate_results(repo_results, doc_analysis, domain_data, shodan_data)
    return aggregated_results

if __name__ == "__main__":
    execute_osint_security_action()
