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

## Results
The results will include:

Repository vulnerabilities
Documentation analysis
WHOIS information
Shodan information


## Conclusion

This project demonstrates a prototype for performing comprehensive OSINT tasks using the Giza SDK. The prototype can be extended and integrated into more extensive security auditing and vulnerability detection platforms.

