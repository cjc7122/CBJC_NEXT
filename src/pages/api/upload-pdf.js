import fs from 'fs';
import path from 'path';
import { verifyToken } from '../../utils/verifyToken';

export default async function handler(req, res) {
  try {
    verifyToken(req);
  } catch {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const uploadsDir = path.join(process.cwd(), 'src', 'data');

    // Ensure the uploads directory exists
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Check if there is a file and filename in the request
    if (!req.body || !req.body.pdf || !req.body.filename) {
      return res.status(400).json({ error: 'No file or filename provided' });
    }

    // Sanitize filename — strip any path components and enforce .pdf extension
    const rawFilename = path.basename(req.body.filename);
    if (!rawFilename.endsWith('.pdf') || rawFilename.includes('..')) {
      return res.status(400).json({ error: 'Invalid filename' });
    }

    // Decode the base64 content to binary
    const base64File = req.body.pdf;
    const binaryData = Buffer.from(base64File, 'base64');

    // Define the file path using the sanitized filename
    const filePath = path.join(uploadsDir, rawFilename);

    // Ensure the resolved path is still inside uploadsDir (belt-and-suspenders)
    if (!filePath.startsWith(uploadsDir)) {
      return res.status(400).json({ error: 'Invalid filename' });
    }

    // Write the file to the uploads directory
    fs.writeFile(filePath, binaryData, 'binary', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ error: 'Failed to save file' });
      }
      res.status(200).json({ message: 'PDF uploaded successfully', filename: rawFilename });
    });
  } else {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
