import { NextApiRequest, NextApiResponse } from 'next/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}
