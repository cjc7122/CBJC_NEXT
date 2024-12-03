import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: 'Password is required' });
    }

    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const filePath = path.join(process.cwd(), 'src', 'data', 'password.json');

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
