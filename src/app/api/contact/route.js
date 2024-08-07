import nodemailer from 'nodemailer';

export async function POST(req, res) {
  // Extract fields data directly from the request body
  const {
    first_name,
    last_name,
    email,
    phone,
    company,
    role,
    category,
    message,
    budget,
  } = req.body;

  // Configure the mail transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true, // True for 465, false for other ports
    auth: {
      user: 'info@wattlesol.info', // Ideally, use environment variables here
      pass: 'soqtan-mUkzyq-defci9', // Ideally, use environment variables here
    },
  });

  try {
    // Attempt to send an email
    await transporter.sendMail({
      from: 'info@wattlesol.info',
      to: 'info@wattlesol.info', // List of recipients
      subject: 'New Contact Form Submission', // Subject line
      text: `Details: ${first_name}, ${last_name}, ${email}, ${phone}, ${company}, ${role}, ${category}, ${message}, ${budget}`, // Plain text body
      html: `<p>All details here with HTML formatting</p>`, // HTML body content
    });
    console.log(res);
    // res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
}

// Ensure any other methods are handled appropriately
export function config() {
  return {
    api: {
      bodyParser: true,
    },
  };
}
