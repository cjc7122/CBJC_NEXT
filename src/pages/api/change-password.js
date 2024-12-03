// src/pages/api/change-password.js
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;
    const filePath = path.join(process.cwd(), 'src', 'data', 'password.json');

    if (!newPassword || newPassword !== confirmNewPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const storedData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const isPasswordValid = await bcrypt.compare(currentPassword, storedData.hash);

    if (isPasswordValid) {
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      fs.writeFileSync(filePath, JSON.stringify({ hash: hashedNewPassword }));
      res.status(200).json({ message: 'Password changed successfully' });
    } else {
      res.status(401).json({ error: 'Incorrect current password' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
