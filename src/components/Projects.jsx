import React from 'react';
import { FolderGit2, ExternalLink, Check, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

const Projects = ({ projectsData }) => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software projects showcasing full-stack Java development, intelligent AI integrations, and real-world system architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card card ${project.isOngoing ? 'project-card-ongoing' : ''}`}
            >
              {/* Card Header with Badges */}
              <div className="project-card-header">
                <div className="project-badges-group">
                  <span className="project-category-badge">{project.badge}</span>
                  {project.isOngoing ? (
                    <span className="badge-ongoing">
                      <span className="ongoing-pulse" />
                      <Clock size={12} />
                      <span>ONGOING</span>
                    </span>
                  ) : (
                    <span className="badge-completed">Completed</span>
                  )}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="project-card-title">{project.title}</h3>

              {/* Technologies List */}
              <div className="project-tech-pills">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullet Descriptions */}
              <div className="project-description-block">
                <ul className="project-bullet-list">
                  {project.description.map((bullet, idx) => (
                    <li key={idx} className="project-bullet-item">
                      <Check size={14} className="bullet-check-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Action Buttons */}
              <div className={`project-actions ${!project.githubUrl ? 'single-action' : ''}`}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-project-action"
                    title="View GitHub Repository"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                )}

                <a
                  href={project.viewProjectUrl}
                  target={project.viewProjectUrl !== '#' ? '_blank' : undefined}
                  rel={project.viewProjectUrl !== '#' ? 'noopener noreferrer' : undefined}
                  className="btn btn-secondary btn-project-action btn-view-project"
                  title="View Project Details"
                  aria-label={`View details for ${project.title}`}
                >
                  <span>{project.isOngoing ? 'In Active Development' : 'View Project'}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
