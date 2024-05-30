// webtrey-dashboard/frontend/components/Logs.tsx
import React, { useEffect, useState } from 'react';

const Logs: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Fetch logs from the server
    const fetchLogs = async () => {
      const response = await fetch('/api/logs');
      const data = await response.json();
      setLogs(data.logs);
    };

    fetchLogs();
  }, []);

  return (
    <div className="logs-container">
      <h2>Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
