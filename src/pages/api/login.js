import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    try {
      // Read the stored password hash
      const filePath = path.join(process.cwd(), 'src', 'data', 'password.json');
      if (!fs.existsSync(filePath)) {
        return res.status(400).json({ error: 'Password has not been set up yet.' });
      }

      const storedData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const storedHash = storedData.hash;

      // Compare the provided password with the stored hash
      const isPasswordValid = await bcrypt.compare(password, storedHash);

      if (isPasswordValid) {
        // Generate JWT token
        const token = jwt.sign({ user: 'admin' }, process.env.SECRET_JSON_KEY, { expiresIn: '1h' });

        // Set the token as a secure, HttpOnly cookie
        res.setHeader('Set-Cookie', `authToken=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict; ${process.env.NODE_ENV === 'production' ? 'Secure' : ''}`);

        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
