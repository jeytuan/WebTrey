# Use Ubuntu as the base image
FROM ubuntu:latest

# Install basic tools and utilities
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    sudo \
    vim \
    openssh-client \
    git \
    build-essential \
    nmap \
    wireshark \
    john \
    ruby \
    ruby-dev \
    libffi-dev \
    postgresql \
    libpq-dev \
    nodejs \
    npm \
    python3 \
    python3-pip \
    python3-dev \
    libpcap-dev \
    cargo \
    rustc \
    python3-venv \
    linux-headers-generic \
    curl \
    wget \
    zlib1g-dev \
    libssl-dev \
    libreadline-dev \
    libyaml-dev \
    libxml2-dev \
    libxslt1-dev \
    libcurl4-openssl-dev \
    software-properties-common && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Verify installation of tools
RUN nmap --version && \
    curl --version

# Install Metasploit
RUN gem install bundler && \
    git clone https://github.com/rapid7/metasploit-framework.git /opt/metasploit-framework && \
    cd /opt/metasploit-framework && \
    bundle install

# Install Ganache and Truffle
RUN npm install -g ganache-cli truffle

# Install solc 0.7.0 from solc-bin
RUN mkdir -p /usr/local/bin/solc-v0.7.0 && \
    curl -L "https://binaries.soliditylang.org/linux-amd64/solc-linux-amd64-v0.7.0+commit.9e61f92b" -o /usr/local/bin/solc-v0.7.0/solc && \
    chmod +x /usr/local/bin/solc-v0.7.0/solc && \
    ln -s /usr/local/bin/solc-v0.7.0/solc /usr/bin/solc

# Add solc to PATH explicitly
ENV PATH="/usr/local/bin/solc-v0.7.0:${PATH}"

# Set up virtual environment for Mythril and install it
RUN python3 -m venv /venv && \
    /venv/bin/pip install mythril

# Set up virtual environment for Giza and install it
RUN python3 -m venv /giza_venv && \
    /giza_venv/bin/pip install giza

# Ensure the Giza virtual environment is set up correctly
RUN /giza_venv/bin/python --version && \
    /giza_venv/bin/pip --version && \
    /giza_venv/bin/pip list

# Install Slither
RUN python3 -m venv /slither_venv && \
    /slither_venv/bin/pip install slither-analyzer

# Install Burp Suite (Community Edition)
RUN mkdir -p /opt/burp && \
    curl -L "https://portswigger.net/burp/releases/download?product=community&version=2022.12.2&type=Linux" -o /opt/burp/burp.sh && \
    chmod +x /opt/burp/burp.sh

# Install Foundry and Hardhat
SHELL ["/bin/bash", "-c"]
RUN curl -L https://foundry.paradigm.xyz | bash && \
    source $HOME/.bashrc && \
    PATH="$HOME/.foundry/bin:$PATH" && \
    foundryup && \
    npm install -g hardhat

# Create application directories
RUN mkdir -p /app/scripts/scans /app/scripts/configs /app/logs

# Copy the Python vulnerability scan scripts
COPY backend/webtrey/webtrey/security_action.py /app/security_action.py
COPY backend/webtrey/giza/actions/ /app/giza/actions/
COPY backend/webtrey/giza/giza_manager.py /app/giza/giza_manager.py
COPY backend/webtrey/giza/giza_run.py /app/giza/giza_run.py
COPY backend/webtrey/giza/tasks/ /app/giza/tasks/
COPY backend/scripts/scans/ /app/scripts/scans/
COPY backend/scripts/configs/ /app/scripts/configs/
COPY backend/scripts/log_manager.py /app/scripts/
COPY backend/scripts/scan_manager.py /app/scripts/
COPY backend/scripts/ws_server.py /app/scripts/
COPY backend/scripts/vuln_scan.py /app/scripts/

# Ensure all scripts are executable
RUN chmod +x /app/*.py /app/giza/actions/*.py /app/giza/tasks/*.py /app/scripts/*.py /app/scripts/scans/*.py

# Expose ports if needed (example: for SSH, Metasploit, etc.)
EXPOSE 22 3000

# Default command to keep the container running
CMD ["tail", "-f", "/dev/null"]