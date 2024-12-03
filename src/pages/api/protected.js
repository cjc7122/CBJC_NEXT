// src/pages/api/protected.js

import { verifyToken } from '../../utils/verifyToken';

export default function handler(req, res) {
  try {
    const decoded = verifyToken(req);
    res.status(200).json({ message: 'You have access to this protected route!', user: decoded });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
