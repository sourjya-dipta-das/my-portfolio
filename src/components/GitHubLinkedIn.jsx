import React from 'react';
import { Github, Linkedin, GitCommit, GitPullRequest, Code2, ExternalLink } from 'lucide-react';
import { personalInfo, githubActivityData } from '../data/portfolioData';

export default function GitHubLinkedIn() {
  return (
    <section className="section" id="social-connect">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Github size={14} />
            <span>ONLINE PRESENCE</span>
          </div>
          <h2 className="section-title">GitHub & LinkedIn Profiles</h2>
          <p className="section-subtitle">
            Connect with me on professional platforms to explore code repositories and developer updates.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* GitHub Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 50, height: 50, background: 'rgba(56, 189, 248, 0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                <Github size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>GitHub Activity</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>@{githubActivityData.username}</p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
              Explore my open-source repositories, project commits, and full-stack codebase implementations.
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                <span>Annual Commit Activity</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{githubActivityData.contributionsThisYear} Commits</span>
              </div>
              {/* Visual simulated contribution bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: '4px' }}>
                {Array.from({ length: 48 }).map((_, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      height: 12, 
                      borderRadius: 2, 
                      background: i % 7 === 0 ? '#10b981' : i % 3 === 0 ? 'rgba(16, 185, 129, 0.6)' : i % 2 === 0 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255,255,255,0.05)' 
                    }} 
                  />
                ))}
              </div>
            </div>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Github size={18} />
              <span>Visit GitHub Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 50, height: 50, background: 'rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-indigo)' }}>
                <Linkedin size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>LinkedIn Network</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Full-Stack Developer</p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
              Let's connect professionally for career opportunities, full-time positions, internships, and technical discussions.
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                Open to Opportunities
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Software Engineer &bull; Full-Stack Web Developer &bull; Frontend/Backend Intern
              </div>
            </div>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', borderColor: 'var(--accent-indigo)', color: 'var(--accent-indigo)' }}
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Recent Commits Feed Widget */}
        <div className="card">
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GitCommit size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span>Recent Code Repositories & Activity</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {githubActivityData.recentCommits.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Code2 size={16} style={{ color: 'var(--accent-indigo)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{c.repo}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{c.msg}</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{c.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
