import React from 'react';
import { X, Github, ExternalLink, CheckCircle, Code2, Server } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span className="project-badge">{project.category}</span>
        </div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          {project.name}
        </h2>

        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          {project.fullDesc}
        </p>

        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code2 size={16} style={{ color: 'var(--accent-cyan)' }} />
            <span>Technologies Used</span>
          </h4>
          <div className="tech-tags">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.3rem 0.75rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.highlights && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
              Key Technical Features
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {project.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            <Github size={18} />
            <span>Source Code</span>
          </a>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
