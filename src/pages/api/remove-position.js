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

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { Title } = req.body;

  if (!Title) {
    return res.status(400).json({ error: 'Title is required to remove a position' });
  }

  try {
    const data = await readPositions();
    const filteredPositions = data.positions.filter((position) => position.Title !== Title);

    if (filteredPositions.length === data.positions.length) {
      return res.status(404).json({ error: 'Position not found' });
    }

    data.positions = filteredPositions;
    await writePositions(data);
    return res.status(200).json({ message: 'Position removed successfully' });
  } catch (error) {
    console.error('Error removing position:', error);
    return res.status(500).json({ error: 'Failed to remove position' });
  }
}
