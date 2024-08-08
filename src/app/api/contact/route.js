// api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  // Accessing body directly as Next.js handles parsing
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

  try {
    // Configure the mail transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email',
      port: 465,
      secure: true,
      auth: {
        user: 'info@wattlesol.info', // Use environment variables here
        pass: 'soqtan-mUkzyq-defci9', // Use environment variables here
      },
    });

    const htmlContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>First Name:</strong> ${first_name}</p>
      <p><strong>Last Name:</strong> ${last_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Budget:</strong> ${budget}</p>
    `;

    // Attempt to send an email
    await transporter.sendMail({
      from: 'info@wattlesol.info',
      to: 'info@wattlesol.info', // List of recipients
      subject: 'New Contact Form Submission',
      text: `Details: ${first_name}, ${last_name}, ${email}, ${phone}, ${company}, ${role}, ${category}, ${message}, ${budget}`,
      html: htmlContent,
    });

    return new NextResponse(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new NextResponse(
      JSON.stringify({
        message: 'Internal server error',
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export const config = {
  api: {
    bodyParser: true, // Set this to true to use Next.js's built-in body parser
  },
};
