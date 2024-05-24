import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-200 p-4 flex justify-center">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-black text-gray-500">Overview</Link>
        </li>
        <li>
          <Link href="/bounties" className="hover:text-black text-gray-500">Bounties</Link>
        </li>
        <li>
          <Link href="/vuln-scan" className="hover:text-black text-gray-500">Vuln Scan</Link>
        </li>
        <li>
          <Link href="/ai-agents" className="hover:text-black text-gray-500">AI Agents</Link>
        </li>
        <li>
          <Link href="/threat-intel" className="hover:text-black text-gray-500">Threat Intel</Link>
        </li>
        <li>
          <Link href="/reports" className="hover:text-black text-gray-500">Reports</Link>
        </li>
        <li>
          <Link href="/mindmap" className="hover:text-black text-gray-500">Mindmap</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
