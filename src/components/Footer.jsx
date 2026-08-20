import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Heart, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [kolkataTime, setKolkataTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setKolkataTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <a href="#" className="logo-brand" style={{ marginBottom: '0.5rem' }}>
              <div className="logo-icon">
                <Terminal size={20} />
              </div>
              <span>{personalInfo.name}</span>
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Full-Stack Developer &bull; CSE Student at Brainware University
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a 
              href={`mailto:${personalInfo.email}`}
              className="social-icon-btn"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React & Node.js.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.825rem', color: 'var(--accent-cyan)' }}>
              <Clock size={14} />
              <span>Kolkata, WB (IST): {kolkataTime || '15:17 IST'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
