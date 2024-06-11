# OSINT Security Action

## Overview
This project uses the Giza SDK to perform an OSINT security action. The action fetches repositories from the Giza GitHub organization, scans them for vulnerabilities, analyzes documentation, retrieves WHOIS information for a domain, and searches Shodan for information on an IP address.

## Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/jeytuan/WebTrey.git
    cd WebTrey
    ```

2. Install the required dependencies:
    ```sh
    cd webtrey-dashboard/backend
    python -m venv myenv
    myenv\Scripts\activate  # On Windows
    source myenv/bin/activate  # On macOS/Linux
    pip install -r requirements.txt

    ```

3. Frontend (Next.js App)
    ```sh
    cd ../../frontend
    npm install
     ```


4. Set up environment variables in `.env.local`:
    ```plaintext
    GITHUB_TOKEN=<your_github_token>
    SHODAN_API_KEY=<your_shodan_api_key>
    SSH_KEY=<your_ssh_key>
    ```

## Usage & Running the Applications
1. Start the Backend OSINT Scan
    ```sh
    cd webtrey-dashboard/backend/webtrey/giza
    myenv\Scripts\activate  # On Windows
    source myenv/bin/activate  # On macOS/Linux
    python giza_run.py
    ```
2. Start the Frontend Web App
    ```sh
    cd ../../../../frontend
    npm run dev
    ```
    
### Web App Dashboard
The Web App dashboard, built with Next.js, provides a user-friendly interface for managing bug bounties, viewing threat intelligence, and handling vulnerability disclosures.

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

### Potential Attack Vectors
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
