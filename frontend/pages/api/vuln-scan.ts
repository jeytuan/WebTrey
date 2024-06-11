import { NextApiRequest, NextApiResponse } from 'next';
import Docker from 'dockerode';
import fs from 'fs';
import path from 'path';

// Connect to Docker daemon via TCP
const docker = new Docker({ host: 'localhost', port: 2375 });

interface ScanScripts {
  [key: string]: string[];
}

const scanScripts: ScanScripts = {
  url_scans: ['burp_scan.py', 'nmap_scan.py', 'nikto_scan.py', 'sslscan.py'],
  contract_scans: ['slither_scan.py', 'echidna_scan.py', 'foundry_scan.py', 'hardhat_scan.py'],
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const target = (req.query.target as string) || 'zksync';
    const scanType = (req.query.scanType as string) || 'url_scans';
    const container = docker.getContainer('webtrey_vm');

    if (!scanScripts[scanType]) {
      return res.status(400).json({ error: 'Invalid scan type' });
    }

    const results = await Promise.all(
      scanScripts[scanType].map(async (scriptName) => {
        const exec = await container.exec({
          Cmd: ['/usr/bin/python3', `/app/scripts/scans/${scriptName}`, target],
          AttachStdout: true,
          AttachStderr: true,
          Tty: true,
        });

        const stream = await exec.start({});
        
        return new Promise<{ scriptName: string; output: string }>((resolve, reject) => {
          let output = '';
          
          stream.on('data', (data) => {
            output += data.toString();
          });

          stream.on('end', () => {
            resolve({ scriptName, output });
          });

          stream.on('error', (error) => {
            reject(error);
          });
        });
      })
    );

    // Read logs directory and return the list of log files
    const logDir = path.join('/app/logs');
    const logFiles = fs.readdirSync(logDir).map((file) => ({
      fileName: file,
      content: fs.readFileSync(path.join(logDir, file), 'utf-8'),
    }));

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ results, logFiles });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
