import React from 'react';
import { User, CheckCircle, GraduationCap, Code, Rocket, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>BACKGROUND & PASSION</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer who loves writing clean code and turning ideas into full-stack web applications.
          </p>
        </div>

        <div className="about-grid">
          <div className="card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GraduationCap style={{ color: 'var(--accent-cyan)' }} />
              <span>CSE Student & Developer</span>
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>
              I am <strong>{personalInfo.name}</strong>, a Computer Science and Engineering student at <strong>{personalInfo.university}</strong>, Kolkata.
            </p>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
              My core passion lies in <strong>Full-Stack Web Development</strong>. I spend my time mastering modern JavaScript ecosystem frameworks like React.js, Node.js, Express.js, and MongoDB, alongside strengthening core programming fundamentals in C/C++, Java, and Python.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span>Focus on clean, reusable code architecture and optimized REST APIs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span>Active problem solver practicing Data Structures & Algorithms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span>Eager learner ready to contribute to real-world software engineering teams</span>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-val">{stat.value}</div>
                <div className="stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
