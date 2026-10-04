import React from 'react';
import { ArrowDown, Download, Eye, Code2, Award, Sparkles, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getGmailComposeUrl } from '../utils/emailHelper';
import portraitImg from '../assets/akash_portrait.jpg';
import resumePdf from '../assets/resume.pdf';
import './Hero.css';

const Hero = ({ personalInfo }) => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const recruiterGmailUrl = getGmailComposeUrl(
    "Job Opportunity / Recruiter Inquiry for Akash Ganiger",
    "Hello Akash,\n\nI came across your portfolio and would like to connect regarding an opportunity at our company.\n\nCompany Name:\nRole / Position:\nLocation:\nMessage:\n\nBest regards,\n[Your Name]\n[Your Contact Information]"
  );

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Hero Content Column */}
        <div className="hero-content animate-fade-in">
          {/* Status Badge */}
          <div className="status-pill">
            <span className="pulse-indicator">
              <span className="pulse-dot" />
              <span className="pulse-ring" />
            </span>
            <span>{personalInfo.status || "Available for Opportunities"}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-highlight">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            {personalInfo.role} &amp; CS Engineering Student
          </h2>

          <p className="hero-description">
            {personalInfo.shortIntro} Specialized in building full-stack web applications with{' '}
            <strong className="text-white">React.js, Java, Spring Boot, Python, and MySQL</strong>, alongside exploring{' '}
            <strong className="text-white">applied AI/ML</strong>.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn btn-primary"
              id="hero-view-projects-btn"
            >
              <span>View Projects</span>
              <ArrowDown size={16} />
            </a>

            <a
              href={recruiterGmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-email-accent"
              id="hero-email-btn"
              title="Click to compose email in Gmail directly (To: akashganiger1@gmail.com)"
            >
              <Mail size={16} />
              <span>Email Me</span>
            </a>

            <a
              href={resumePdf}
              download="Akash_Basavaraj_Ganiger_Resume.pdf"
              className="btn btn-outline btn-resume-accent"
              id="hero-download-resume-btn"
              title="Download Resume PDF"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="hero-view-resume-btn"
              title="View Resume in Browser"
            >
              <Eye size={16} />
              <span>View</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="hero-github-btn"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={17} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="hero-linkedin-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={17} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-bar">
            {personalInfo.metrics && personalInfo.metrics.map((metric, idx) => (
              <div key={idx} className="metric-item">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Portrait Column */}
        <div className="hero-visual">
          <div className="portrait-wrapper">
            <div className="portrait-frame">
              <img
                src={portraitImg}
                alt={personalInfo.name}
                className="portrait-image"
                loading="eager"
              />
            </div>
            
            {/* Ambient Floating Badges */}
            <div className="floating-badge badge-top">
              <Code2 size={16} className="badge-icon-red" />
              <div className="badge-info">
                <span className="badge-title">Full Stack Development</span>
                <span className="badge-sub">Java • Spring Boot • React</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <Award size={16} className="badge-icon-gold" />
              <div className="badge-info">
                <span className="badge-title">8.6 CGPA Distinction</span>
                <span className="badge-sub">Alva's Institute of Engg.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
