import { IncomingForm } from 'formidable';
import nodemailer from 'nodemailer';

// Disable Next.js default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ error: 'Failed to process form data.' });
    }

    // Normalize the parsed fields and file
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const blurb = Array.isArray(fields.blurb) ? fields.blurb[0] : fields.blurb;
    const position = Array.isArray(fields.position) ? fields.position[0] : fields.position;
    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;

    // Validate required fields and resume file
    if (!name || !email || !blurb || !position || !resumeFile || !resumeFile.filepath) {
      console.error('Invalid input or file:', { name, email, blurb, position, resumeFile });
      return res.status(400).json({ error: 'All fields and a valid resume file are required.' });
    }

    try {
      // Debugging: Log resume file details
      console.log('Resume file details:', resumeFile);

      // Configure Nodemailer
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'colin.cressman@gmail.com', // Replace with your email
          pass: 'qvdd vcit awrm vftk', // Replace with your app-specific password
        },
      });

      // Email options
      const mailOptions = {
        from: '"Careers Team" <colin.cressman@gmail.com>',
        to: 'colin.cressman@gmail.com',
        subject: `Job Application for ${position}`,
        text: `
          A new job application has been submitted:
          
          Name: ${name}
          Email: ${email}
          Position: ${position}
          
          Blurb:
          ${blurb}
        `,
        attachments: [
          {
            filename: resumeFile.originalFilename || 'resume.pdf', // Fallback to a default filename
            path: resumeFile.filepath, // Use the file path
          },
        ],
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send application email.' });
    }
  });
}
