import fs from 'fs/promises';
import path from 'path';
import { verifyToken } from '../../utils/verifyToken';

// Helper function to get the file path
const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'employees.json');

// Helper function to read employee data
const readEmployees = async () => {
  const filePath = getFilePath();
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
};

// Helper function to write employee data
const writeEmployees = async (data) => {
  const filePath = getFilePath();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
};

export default async function handler(req, res) {
  try {
    verifyToken(req);
  } catch {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { Name, Title, Email, Phone = '' } = req.body;

  if (!Name || !Title || !Email) {
    return res.status(400).json({ error: 'Name, Title, and Email are required' });
  }

  try {
    const data = await readEmployees();
    data.Employees.push({ Name, Title, Email, Phone });

    await writeEmployees(data);
    return res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    console.error('Error adding employee:', error);
    return res.status(500).json({ error: 'Failed to add employee' });
  }
}
