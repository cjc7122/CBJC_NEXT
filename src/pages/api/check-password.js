// src/pages/api/check-password.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'password.json');
  const isPasswordSet = fs.existsSync(filePath);
  res.status(200).json({ isPasswordSet });
}
