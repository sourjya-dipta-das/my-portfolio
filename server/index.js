import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for contact form submissions
const contactSubmissions = [];

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: name, email, subject, message.'
    });
  }

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

  return res.json({
    success: true,
    message: `Thank you ${name}! Your message has been received. Sourjyatipta will get back to you shortly at ${email}.`
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Express Backend Server running on http://localhost:${PORT}`);
});
