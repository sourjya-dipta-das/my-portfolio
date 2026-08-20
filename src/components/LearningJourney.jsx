import React from 'react';
import { Compass, Milestone, Code, Terminal, GitCommit } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export default function LearningJourney() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>DEVELOPMENT TIMELINE</span>
          </div>
          <h2 className="section-title">Learning & Growth Journey</h2>
          <p className="section-subtitle">
            My engineering milestone timeline showing technical skill acquisition and project building.
          </p>
        </div>

        <div className="timeline">
          {journeyTimeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-sub">{item.subtitle}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
