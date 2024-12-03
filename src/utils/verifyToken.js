// src/utils/verifyToken.js

import jwt from 'jsonwebtoken';

export function verifyToken(req) {
  const token = req.cookies?.authToken || req.headers['authorization']?.split(' ')[1];
  if (!token) throw new Error('Token is required for authentication');

  try {
    return jwt.verify(token, process.env.SECRET_JSON_KEY);
  } catch (error) {
    throw new Error('Invalid token');
  }
}
