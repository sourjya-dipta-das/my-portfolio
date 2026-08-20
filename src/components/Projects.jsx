import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Info, Star } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of full-stack web applications and developer tools built with React, Node.js, Express, and MongoDB.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header-bar">
                <span className="project-badge">{project.category}</span>
                {project.featured && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontSize: '0.8rem', fontWeight: 600 }}>
                    <Star size={14} fill="#f59e0b" />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1 }}
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
