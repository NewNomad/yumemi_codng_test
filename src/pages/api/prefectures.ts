import type { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const apiKey = process.env.RESAS_API_KEY;
  if (!apiKey) {
    throw new Error('RESAS_API_KEY is not defined');
  }

  try {
    const response = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: { 'X-API-KEY': apiKey },
      },
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default handler;
