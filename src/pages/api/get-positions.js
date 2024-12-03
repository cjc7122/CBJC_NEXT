import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'positions.json');
  console.log('Resolved file path:', filePath);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const storedData = JSON.parse(fileContent);
    const positions = storedData.positions;
    res.status(200).json({ positions });
  } catch (err) {
    console.error('Error reading positions file:', err.message);
    res.status(500).json({ error: 'Server error: Unable to read positions data.' });
  }
}
