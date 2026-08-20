import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for contact form submissions
const contactSubmissions = [];

const emailConfigured = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
const transporter = emailConfigured
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  : null;

if (transporter) {
  transporter.verify((error) => {
    if (error) {
      console.error('Gmail connection failed:', error);
    } else {
      console.log('Gmail is ready to send emails');
    }
  });
} else {
  console.warn('Email delivery is disabled. Set EMAIL_USER and EMAIL_PASS to enable it.');
}

// API Routes

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, subject, message.'
      });
    }

    // Store submission
    const submission = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      receivedAt: new Date().toISOString()
    };

    contactSubmissions.push(submission);

    console.log('📬 New Contact Form Submission Received:', submission);

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
New message from your portfolio website

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

-------------------------
Received at: ${new Date().toLocaleString()}
      `
    };

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    }

    return res.json({
      success: true,
      message: transporter
        ? `Thank you ${name}! Your message has been sent successfully.`
        : `Thank you ${name}! Your message has been received successfully.`
    });

  } catch (error) {
    console.error('❌ Email sending failed:', error);

    return res.status(500).json({
      success: false,
      message: 'Message received, but email could not be sent.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Express Backend Server running on http://localhost:${PORT}`);
});