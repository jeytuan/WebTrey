# Netsoul WebTrey - Giza OSINT Security Action

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

## Docker Installation

This project provides a Docker container for the WebTrey dashboard application, which is a comprehensive solution for managing and analyzing security vulnerabilities. The container includes a suite of tools designed to integrate seamlessly with Giza AI, enabling advanced security automation and intelligence.

### Prerequisites
Docker installed on your local machine. Download Docker

### Pulling the Docker Image
To pull the Docker image from Docker Hub, use the following command:

    ```sh
     docker pull jeytuan/webtrey_vm:latest
    ```

### Running the Docker Container
To run the Docker container, use the following command:
    ```sh
    docker run -d --name webtrey_vm -p 3001:3000 jeytuan/webtrey_vm:latest
    ```

### Accessing the Application
Once the container is running, the application can be accessed in your web browser at:
http://localhost:3001

### Stopping the Docker Container
To stop the running container, use the following command:

    ```sh
docker stop webtrey_vm
    ```

### Removing the Docker Container
To remove the container, use the following command:

    ```sh
docker rm webtrey_vm
    ```


### Updating the Docker Image
To update the Docker image to the latest version, use the following commands:

    ```sh
docker pull jeytuan/webtrey_vm:latest
docker stop webtrey_vm
docker rm webtrey_vm
docker run -d --name webtrey_vm -p 3001:3000 jeytuan/webtrey_vm:latest
    ```

# Included Tools
The WebTrey Docker container includes the following tools:

    - Giza SDK: Enables the integration of AI models and the execution of verifiable machine learning tasks.
    - Slither: A static analysis tool to find vulnerabilities in Solidity smart contracts.
    - Mythril: A security analysis tool for Ethereum smart contracts.
    - Echidna: A smart contract fuzzer for finding vulnerabilities in Ethereum smart contracts.
    - Foundry: A blazing fast, portable and modular toolkit for Ethereum application development.
    - Hardhat: A development environment to compile, deploy, test, and debug Ethereum software.
    - Python 3.10: Includes various security libraries and tools for automation and analysis.

# Integration with Giza AI

### Value Statement
The integration with Giza AI empowers the WebTrey Dashboard with advanced AI capabilities, providing the following benefits:

1. Automated Vulnerability Detection: Leverage Giza's AI models to automatically detect vulnerabilities in smart contracts and applications.

2. OSINT (Open Source Intelligence) Capabilities: Use Giza AI to perform comprehensive OSINT scans, identifying potential attack vectors and security risks across Giza's GitHub repositories and documentation.

3. Continuous Monitoring: Utilize Giza AI agents to continuously monitor and analyze security logs, providing real-time threat intelligence and automated responses to security incidents.

4. Verifiable Inferences: Ensure the integrity and authenticity of AI predictions with Giza's verifiable machine learning models, providing a higher level of trust and security in automated decision-making processes.

5. Seamless Integration: Easily integrate Giza AI's powerful features into your existing workflows, enhancing your security operations with minimal effort.

# Contributing
If you wish to contribute to this project, please fork the repository and submit a pull request.