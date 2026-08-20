import React, { useState } from 'react';
import { 
  Code2, Palette, FileJson, Atom, Server, Cpu, Globe, 
  Database, Table, Binary, Terminal, Coffee, FileCode, 
  GitBranch, Laptop, Send, Package, Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon Map
const iconMap = {
  Code2, Palette, FileJson, Atom, Server, Cpu, Globe, 
  Database, Table, Binary, Terminal, Coffee, FileCode, 
  GitBranch, Laptop, Send, Package
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map(s => s.category)];

  const getFilteredSkills = () => {
    if (activeCategory === 'All') {
      return skillsData.flatMap(cat => cat.skills);
    }
    const found = skillsData.find(cat => cat.category === activeCategory);
    return found ? found.skills : [];
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I use to design, develop, and deploy scalable full-stack applications.
          </p>
        </div>

        <div className="skills-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon-wrap">
                  <IconComponent size={22} />
                </div>
                <div className="skill-info">
                  <div className="skill-name-row">
                    <span>{skill.name}</span>
                    <span className="skill-level-text">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
