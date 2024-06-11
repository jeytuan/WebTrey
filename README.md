# OSINT Security Action

## Overview
This project uses the Giza SDK to perform an OSINT security action. The action fetches repositories from the Giza GitHub organization, scans them for vulnerabilities, analyzes documentation, retrieves WHOIS information for a domain, and searches Shodan for information on an IP address.

## Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Set up environment variables in `.env.local`:
    ```plaintext
    GITHUB_TOKEN=<your_github_token>
    SHODAN_API_KEY=<your_shodan_api_key>
    SSH_KEY=<your_ssh_key>
    ```

## Usage
To run the OSINT security action, execute:
```sh
python giza_run.py
```

## Results
The results will include:

Repository vulnerabilities
Documentation analysis
WHOIS information
Shodan information

## Vulnerability Disclosure Program (VDP) Investigation
As part of this project, we have also investigated what an in-scope Vulnerability Disclosure Program (VDP) for Giza AI would look like. Our proposed VDP includes a clear scope of assets, a structured reward system based on the severity of vulnerabilities, and a detailed process for reporting and handling vulnerabilities. This VDP aims to enhance the security posture of Giza AI by encouraging the identification and responsible disclosure of potential vulnerabilities.

## Conclusion

This project demonstrates a prototype for performing comprehensive OSINT tasks using the Giza SDK. The prototype can be extended and integrated into more extensive security auditing and vulnerability detection platforms.

# Potential Attack Vectors
1. Smart Contract Vulnerabilities:
    - Reentrancy attacks
    - Integer overflows/underflows
    - Access control issues
    - Insecure storage

2. Machine Learning Model Risks:
    - Model poisoning
    - Adversarial inputs
    - Data leakage
    - Model inversion

3. Zero-Knowledge Proofs (ZK Proofs):
    - Incorrect implementation of ZK proofs
    - Verification bypass
    - Cryptographic weaknesses

4. Protocol-Level Attacks:
    - Sybil attacks
    - Front-running
    - Oracle manipulation


