import { NextApiRequest, NextApiResponse } from 'next/types';
import { Article } from '../../types';

const data = [
  {
    id: 1,
    description: 'API REST e RESTFUL',
    url: 'https://dev.to/henriqueholtz/api-rest-e-restful-b3m',
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  // To see loading:
  // await setTimeout(() => res.status(200).json(data), 600);

  res.status(200).json(data);
}
