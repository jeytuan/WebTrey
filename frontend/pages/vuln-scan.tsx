import React, { useState, useEffect } from 'react';
import Logs from '../components/Logs';
import { Dropdown, Button, Loader, Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const scanOptions = [
  { key: 'all', value: 'all', text: 'Run All Scans' },
  { key: 'burp', value: 'burp_scan.py', text: 'Burp Scan' },
  { key: 'nmap', value: 'nmap_scan.py', text: 'Nmap Scan' },
  { key: 'nikto', value: 'nikto_scan.py', text: 'Nikto Scan' },
  { key: 'sslscan', value: 'sslscan.py', text: 'SSLScan' },
  { key: 'slither', value: 'slither_scan.py', text: 'Slither Scan' },
  { key: 'echidna', value: 'echidna_scan.py', text: 'Echidna Scan' },
  { key: 'foundry', value: 'foundry_scan.py', text: 'Foundry Scan' },
  { key: 'hardhat', value: 'hardhat_scan.py', text: 'Hardhat Scan' }
];

const targetOptions = [
  { key: 'enzyme', value: 'Enzyme', text: 'Enzyme' },
  { key: 'giza', value: 'Giza', text: 'Giza' },
  { key: 'lambda', value: 'Lambda', text: 'Lambda' },
  { key: 'linea', value: 'Linea', text: 'Linea' },
  { key: 'ssv_network', value: 'SSV Network', text: 'SSV Network' },
  { key: 'starknet', value: 'Starknet', text: 'Starknet' },
  { key: 'zksync', value: 'zkSync', text: 'zkSync' }
];

const VulnScanPage: React.FC = () => {
  const [selectedScan, setSelectedScan] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<{ target: string; fileName: string; content: string }[]>([]);
  const [activeTab, setActiveTab] = useState<string>('Terminal');

  useEffect(() => {
    const loadLogs = async () => {
      const logFiles = [
        'zkSync/url_scans/vuln_scan_results_20240526_053917.log',
        'zkSync/url_scans/vuln_scan_results_20240526_053925.log'
      ];
      const fetchedLogs = await Promise.all(
        logFiles.map(async (file) => {
          const response = await fetch(`/logs/${file}`);
          const content = await response.text();
          return { target: 'zkSync', fileName: file, content };
        })
      );
      setLogs(fetchedLogs);
    };

    loadLogs();
  }, []);

  const handleScan = async () => {
    if (!selectedScan || !selectedTarget) {
      alert('Please select a scan type and target.');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/vuln-scan?scan=${selectedScan}&target=${selectedTarget}`);
      const data = await response.json();

      if (response.ok) {
        setResult(data.output);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const panes = [
    {
      menuItem: 'Terminal',
      render: () => (
        <Tab.Pane>
          {loading ? (
            <Loader active inline="centered" />
          ) : (
            result && (
              <div className="scan-result">
                <h2>Scan Result</h2>
                <pre>{result}</pre>
              </div>
            )
          )}
        </Tab.Pane>
      )
    },
    ...logs
      .filter(log => log.target === selectedTarget)
      .map((log, index) => ({
        menuItem: `Log ${index + 1}`,
        render: () => (
          <Tab.Pane key={index}>
            <h3>{log.fileName}</h3>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '10px', borderRadius: '5px' }}>
              {log.content}
            </pre>
          </Tab.Pane>
        )
      }))
  ];

  const handleTabChange = (e: React.SyntheticEvent, data: any) => {
    const newIndex = data.activeIndex;
    if (typeof newIndex === 'number') {
      setActiveTab(panes[newIndex].menuItem);
    }
  };

  return (
    <div className="vuln-scan-container">
      <h1>Vulnerability Scan</h1>
      <p>Select a scan type and target, then start the vulnerability scan.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Dropdown
          placeholder="Select Scan Type"
          fluid
          selection
          options={scanOptions}
          onChange={(e, { value }) => setSelectedScan(value as string)}
        />
        <Dropdown
          placeholder="Select Scan Target"
          fluid
          selection
          options={targetOptions}
          onChange={(e, { value }) => setSelectedTarget(value as string)}
        />
      </div>
      <Button onClick={handleScan} disabled={loading} primary>
        {loading ? 'Scanning...' : 'Start Scan'}
      </Button>
      <h2>Logs</h2>
      <div className="logs-container">
        <Tab
          menu={{ fluid: true, vertical: true }}
          panes={panes}
          activeIndex={panes.findIndex((pane) => pane.menuItem === activeTab)}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
};

export default VulnScanPage;
