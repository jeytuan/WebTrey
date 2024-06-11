import React, { useState, useEffect } from 'react';
import { Dropdown, Button, Loader, Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const scanOptions = [
  { key: 'url', value: 'url_scans', text: 'URL Scans' },
  { key: 'contract', value: 'contract_scans', text: 'Contract Scans' },
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
  const [logs, setLogs] = useState<{ fileName: string; content: string }[]>([]);
  const [activeTab, setActiveTab] = useState<string>('Terminal');
  const [wsLogs, setWsLogs] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8765');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.log) {
        setWsLogs((prevLogs) => [...prevLogs, data.log]);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleScan = async () => {
    if (!selectedScan || !selectedTarget) {
      alert('Please select a scan type and target.');
      return;
    }

    setLoading(true);
    setResult(null);
    setWsLogs([]);

    try {
      const response = await fetch(`/api/vuln-scan?scanType=${selectedScan}&target=${selectedTarget}`);
      const data = await response.json();

      if (response.ok) {
        setResult(data.results);
        setLogs(data.logFiles);
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
            <>
              {wsLogs.length > 0 && (
                <div className="scan-result">
                  <h2>Real-Time Logs</h2>
                  <pre>{wsLogs.join('\n')}</pre>
                </div>
              )}
              {result && (
                <div className="scan-result">
                  <h2>Scan Results</h2>
                  <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
              )}
            </>
          )}
        </Tab.Pane>
      )
    },
    ...logs.map((log, index) => ({
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
