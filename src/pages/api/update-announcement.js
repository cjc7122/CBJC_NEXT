import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Only allow POST requests
  if (req.method === 'POST') {
    const { announcement } = req.body;
    const filePath = path.join(process.cwd(), 'src', 'data', 'announcement.txt');

    // Write the new announcement text to the file, overwriting the previous content
    fs.writeFile(filePath, JSON.stringify({ announcement }), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to announcement file:', err);
        return res.status(500).json({ error: 'Failed to write announcement to file.' });
      }
      res.status(200).json({ message: 'Announcement updated successfully' });
    });
  } else {
    // Return 405 for any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
