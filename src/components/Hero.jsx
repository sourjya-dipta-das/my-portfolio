import React, { useState } from 'react';
import { Github, Linkedin, FileText, ArrowRight, Code2, MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('profile.json');

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-intro">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-name">{personalInfo.name}</h1>
          
          <div className="hero-role">
            <Code2 size={24} style={{ color: 'var(--accent-cyan)' }} />
            <span>{personalInfo.role}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            <MapPin size={16} style={{ color: 'var(--accent-indigo)' }} />
            <span>{personalInfo.location} &bull; {personalInfo.university}</span>
          </div>

          <p className="hero-bio">
            {personalInfo.heroSummary}
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onOpenResume} className="btn btn-secondary">
              <FileText size={18} />
              <span>Resume</span>
            </button>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="hero-socials">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Key Domains:</span>
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">C/C++</span>
          </div>
        </div>

        {/* Developer Terminal Widget */}
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title">bash ~ sourjyatipta-dev</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => setActiveTab('profile.json')}
                style={{
                  background: activeTab === 'profile.json' ? 'var(--bg-tertiary)' : 'transparent',
                  border: 'none',
                  color: activeTab === 'profile.json' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                profile.json
              </button>
              <button 
                onClick={() => setActiveTab('stack.js')}
                style={{
                  background: activeTab === 'stack.js' ? 'var(--bg-tertiary)' : 'transparent',
                  border: 'none',
                  color: activeTab === 'stack.js' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                stack.js
              </button>
            </div>
          </div>

          <div className="terminal-body">
            {activeTab === 'profile.json' ? (
              <div>
                <p><span className="t-prompt">sourj@kolkata:~$</span> <span className="t-cmd">cat profile.json</span></p>
                <p>&#123;</p>
                <p style={{ paddingLeft: '1.25rem' }}><span className="t-key">"developer"</span>: <span className="t-string">"Sourjyatipta Das"</span>,</p>
                <p style={{ paddingLeft: '1.25rem' }}><span className="t-key">"role"</span>: <span className="t-string">"Full-Stack Developer"</span>,</p>
                <p style={{ paddingLeft: '1.25rem' }}><span className="t-key">"education"</span>: <span className="t-string">"B.Tech CSE @ Brainware Univ"</span>,</p>
                <p style={{ paddingLeft: '1.25rem' }}><span className="t-key">"location"</span>: <span className="t-string">"Kolkata, WB, India"</span>,</p>
                <p style={{ paddingLeft: '1.25rem' }}><span className="t-key">"focusAreas"</span>: [</p>
                <p style={{ paddingLeft: '2.5rem' }}><span className="t-string">"MERN Stack Web Apps"</span>,</p>
                <p style={{ paddingLeft: '2.5rem' }}><span className="t-string">"REST API Design"</span>,</p>
                <p style={{ paddingLeft: '2.5rem' }}><span className="t-string">"Algorithmic Problem Solving"</span></p>
                <p style={{ paddingLeft: '1.25rem' }}>],</p>
                <p style={{ paddingLeft: '1.25rem' }}><span className="t-key">"readyForJob"</span>: <span className="t-number">true</span></p>
                <p>&#125;</p>
              </div>
            ) : (
              <div>
                <p><span className="t-prompt">sourj@kolkata:~$</span> <span className="t-cmd">cat stack.js</span></p>
                <p><span className="t-comment">// Core technologies I build with daily</span></p>
                <p><span className="t-key">const</span> stack = &#123;</p>
                <p style={{ paddingLeft: '1.25rem' }}>frontend: [<span className="t-string">'HTML'</span>, <span className="t-string">'CSS'</span>, <span className="t-string">'JS'</span>, <span className="t-string">'React.js'</span>],</p>
                <p style={{ paddingLeft: '1.25rem' }}>backend: [<span className="t-string">'Node.js'</span>, <span className="t-string">'Express.js'</span>, <span className="t-string">'REST APIs'</span>],</p>
                <p style={{ paddingLeft: '1.25rem' }}>database: [<span className="t-string">'MongoDB'</span>],</p>
                <p style={{ paddingLeft: '1.25rem' }}>languages: [<span className="t-string">'C/C++'</span>, <span className="t-string">'Python'</span>, <span className="t-string">'Java'</span>]</p>
                <p>&#125;;</p>
                <p><span className="t-key">export default</span> stack;</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
