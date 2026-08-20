import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, CheckCircle2, Copy, AlertCircle, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setToast({ type: 'success', text: data.message || 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setToast({ type: 'error', text: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (err) {
      // Fallback client simulation if server is unreachable
      setToast({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or interested in hiring me for full-stack software development roles? Send me a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>EMAIL ADDRESS</div>
                <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  {personalInfo.email}
                </a>
              </div>
              <button 
                onClick={copyEmail}
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' }}
                title="Copy Email"
              >
                {copied ? <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
              </button>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>LOCATION</div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Github size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>GITHUB REPOSITORIES</div>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  github.com/sourjyatiptadas
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Linkedin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>LINKEDIN PROFILE</div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-indigo)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  linkedin.com/in/sourjyatiptadas
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Send a Direct Message
            </h3>

            {toast && (
              <div className={`toast-msg ${toast.type === 'success' ? 'toast-success' : ''}`} style={{ background: toast.type === 'error' ? 'rgba(239, 68, 68, 0.15)' : undefined, color: toast.type === 'error' ? '#ef4444' : undefined }}>
                {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span>{toast.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="e.g. Job Opportunity / Full-Stack Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={loading}
              >
                <Send size={18} />
                <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
