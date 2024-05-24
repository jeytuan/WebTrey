import type { NextApiRequest, NextApiResponse } from 'next';
import { ThreatIntel } from '../../lib/types';

const mockThreatIntel: ThreatIntel[] = [
  { id: '1', name: 'Sample Threat 1', description: 'Description for sample threat 1' },
  { id: '2', name: 'Sample Threat 2', description: 'Description for sample threat 2' }
];

export default (req: NextApiRequest, res: NextApiResponse<ThreatIntel[] | { message: string }>) => {
  res.status(200).json(mockThreatIntel);
};
