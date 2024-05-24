import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-700 h-screen text-white w-64 p-4">
      <ul>
        <li className="mb-2">
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li className="mb-2">
          <Link href="/dashboard" className="text-white">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link href="/hunting" className="text-white">Hunting</Link>
        </li>
        <li className="mb-2">
          <Link href="/settings" className="text-white">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
