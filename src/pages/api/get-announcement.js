// src/pages/api/get-announcement.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'announcement.txt');
  console.log('Resolved file path:', filePath);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8').trim();
    const { announcement } = JSON.parse(fileContent);
    res.status(200).json({ announcement });
  } catch (err) {
    console.error('Error reading announcement file:', err);
    res.status(500).json({ error: 'Server error' });
  }
}
