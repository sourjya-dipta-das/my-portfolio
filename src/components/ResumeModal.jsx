import React from 'react';
import { X, Download, FileText, CheckCircle, GraduationCap, Code2, Briefcase, Mail, MapPin } from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Triggers download of resume file
    const link = document.createElement('a');
    link.href = '/Sourjyatipta_Das_Resume.pdf';
    link.download = 'Sourjyatipta_Das_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {personalInfo.name}
            </h2>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
              {personalInfo.role} &bull; CSE Student
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              <MapPin size={14} style={{ display: 'inline', marginRight: 4 }} />
              {personalInfo.location} | {personalInfo.email}
            </p>
          </div>

          <button onClick={handleDownload} className="btn btn-primary">
            <Download size={18} />
            <span>Download PDF Resume</span>
          </button>
        </div>

        {/* Resume Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Executive Summary */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span>Professional Summary</span>
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={16} style={{ color: 'var(--accent-indigo)' }} />
              <span>Education</span>
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <span>{edu.degree}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>{edu.period}</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                  {edu.institution}, {edu.location}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 size={16} style={{ color: 'var(--accent-emerald)' }} />
              <span>Technical Skills</span>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {skillsData.map((cat, idx) => (
                <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>{cat.category}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {cat.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={16} style={{ color: 'var(--accent-purple)' }} />
              <span>Key Software Projects</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {projectsData.slice(0, 3).map((p) => (
                <div key={p.id} style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    <span>{p.name}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-indigo)' }}>{p.category}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {p.shortDesc}
                  </p>
                  <div className="tech-tags">
                    {p.techStack.map(t => (
                      <span key={t} className="tech-tag" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
          <button onClick={handleDownload} className="btn btn-primary" style={{ width: '100%' }}>
            <Download size={18} />
            <span>Download Official PDF Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
}
