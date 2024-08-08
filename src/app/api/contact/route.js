import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  let body = '';

  try {
    body = await req.text();
    const boundary = body.split('\r\n')[0];
    const parts = body
      .split(boundary)
      .filter((part) => part !== '--' && part.trim() !== '');
    const data = {};

    for (let part of parts) {
      const [rawHeaders, rawContent] = part.split('\r\n\r\n');
      if (!rawHeaders || !rawContent) continue;

      const headers = rawHeaders.split('\r\n');
      const contentDisposition = headers.find((header) =>
        header.includes('Content-Disposition')
      );
      const nameMatch = contentDisposition.match(/name="([^"]+)"/);
      if (nameMatch) {
        const name = nameMatch[1].trim();
        const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
        if (filenameMatch) {
          const filename = filenameMatch[1];
          const contentType = headers
            .find((header) => header.includes('Content-Type'))
            .split(': ')[1];
          const contentBuffer = Buffer.from(rawContent, 'binary');

          data[name] = {
            filename,
            content: contentBuffer,
            contentType,
          };
        } else {
          data[name] = rawContent.trim();
        }
      }
    }


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
      userfile,
    } = data;

    if (!first_name || !last_name || !email || !phone) {
      return new NextResponse(
        JSON.stringify({
          status: 'error',
          message: 'Missing required fields',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.titan.email',
        port: 465,
        secure: true,
        auth: {
          user: 'info@wattlesol.info',
          pass: 'soqtan-mUkzyq-defci9',
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

      const mailOptions = {
        from: 'info@wattlesol.info',
        to: 'info@wattlesol.info',
        subject: 'New Contact Form Submission',
        text: `Details: ${first_name}, ${last_name}, ${email}, ${phone}, ${company}, ${role}, ${category}, ${message}, ${budget}`,
        html: htmlContent,
        attachments: userfile
          ? [
              {
                filename: userfile.filename,
                content: userfile.content,
                contentType: userfile.contentType,
              },
            ]
          : [],
      };

      await transporter.sendMail(mailOptions);

      return new NextResponse(
        JSON.stringify({
          status: 'success',
          message: 'Email sent successfully',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({
          status: 'error',
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
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: 'Bad request. Form parsing error.',
        error: err.message,
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
