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

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { Email } = req.body;

  if (!Email) {
    return res.status(400).json({ error: 'Email is required to remove an employee' });
  }

  try {
    const data = await readEmployees();
    const filteredEmployees = data.Employees.filter((employee) => employee.Email !== Email);

    if (filteredEmployees.length === data.Employees.length) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    data.Employees = filteredEmployees;
    await writeEmployees(data);
    return res.status(200).json({ message: 'Employee removed successfully' });
  } catch (error) {
    console.error('Error removing employee:', error);
    return res.status(500).json({ error: 'Failed to remove employee' });
  }
}
