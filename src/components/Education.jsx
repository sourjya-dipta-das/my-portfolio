import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic qualifications and technical foundation in Computer Science & Engineering.
          </p>
        </div>

        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="edu-header">
              <div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-school">{edu.institution}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="tech-tag" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', borderColor: 'var(--border-accent)' }}>
                  {edu.status}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.25rem' }}>
              <MapPin size={16} style={{ color: 'var(--accent-indigo)' }} />
              <span>{edu.location}</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              {edu.description}
            </p>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Key Highlights & Coursework</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {edu.achievements.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <Award size={15} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
