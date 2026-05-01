import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { verifyToken } from '../../utils/verifyToken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: 'Password is required' });
    }

    try {
      const filePath = path.join(process.cwd(), 'src', 'data', 'password.json');
      const passwordAlreadySet = fs.existsSync(filePath);

      // If a password is already set, require the existing admin JWT to change it
      if (passwordAlreadySet) {
        try {
          verifyToken(req);
        } catch {
          return res.status(401).json({ error: 'Unauthorized: must be logged in to change password' });
        }
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const passwordData = { hash: hashedPassword };
      fs.writeFileSync(filePath, JSON.stringify(passwordData));

      res.status(200).json({ message: 'Password set successfully' });
    } catch (error) {
      console.error('Error setting password:', error);
      res.status(500).json({ error: 'Failed to set password' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
