import fs from 'fs/promises';
import path from 'path';
import { verifyToken } from '../../utils/verifyToken';

// Helper function to get the file path
const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'positions.json');

// Helper function to read positions data
const readPositions = async () => {
  const filePath = getFilePath();
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
};

// Helper function to write positions data
const writePositions = async (data) => {
  const filePath = getFilePath();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
};

export default async function handler(req, res) {
  try {
    verifyToken(req);
  } catch {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { Title, Description, Requirements } = req.body;

  if (!Title || !Description || !Requirements) {
    return res.status(400).json({ error: 'Title, Description, and Requirements are required' });
  }

  try {
    const data = await readPositions();
    data.positions.push({ Title, Description, Requirements });

    await writePositions(data);
    return res.status(201).json({ message: 'Position added successfully' });
  } catch (error) {
    console.error('Error adding position:', error);
    return res.status(500).json({ error: 'Failed to add position' });
  }
}
