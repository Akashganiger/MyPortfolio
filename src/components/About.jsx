import React from 'react';
import { GraduationCap, MapPin, Mail, Award, CheckCircle2, Download, Layers, Brain, Cpu, BookOpen } from 'lucide-react';
import { getGmailComposeUrl } from '../utils/emailHelper';
import portraitImg from '../assets/akash_portrait.jpg';
import resumePdf from '../assets/resume.pdf';
import './About.css';

const About = ({ personalInfo }) => {
  const { education, focusAreas } = personalInfo;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">
            Computer Science Engineering student focused on building robust full-stack systems and exploring practical AI/ML solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Portrait & Quick Meta Card */}
          <div className="about-profile-col">
            <div className="about-card card">
              <div className="about-image-wrapper">
                <img
                  src={portraitImg}
                  alt={personalInfo.name}
                  className="about-portrait-img"
                  loading="lazy"
                />
                <div className="about-badge-status">
                  <span className="dot-pulse-green" />
                  <span>CS Engineering Student</span>
                </div>
              </div>

              <div className="about-profile-summary">
                <h3 className="about-name">{personalInfo.name}</h3>
                <p className="about-role-tag">{personalInfo.role}</p>

                <div className="about-contact-list">
                  <div className="about-contact-item">
                    <MapPin size={15} className="contact-icon" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <a
                    href={getGmailComposeUrl(
                      'Connecting with Akash Ganiger',
                      'Hello Akash,\n\nI came across your profile and would like to connect with you.\n\nBest regards,\n[Your Name]'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-item about-email-link"
                    title="Click to compose email in Gmail (To: akashganiger1@gmail.com)"
                  >
                    <Mail size={15} className="contact-icon" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <div className="about-contact-item">
                    <Award size={15} className="contact-icon" />
                    <span>8.6 CGPA • AIET</span>
                  </div>
                </div>

                <a
                  href={resumePdf}
                  download="Akash_Basavaraj_Ganiger_Resume.pdf"
                  className="btn btn-outline btn-full-width"
                  id="about-resume-btn"
                  title="Download Resume PDF"
                >
                  <Download size={15} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Short Intro, Core Pillars & Academic Journey */}
          <div className="about-content-col">
            {/* Short Introduction Card */}
            <div className="card about-intro-card">
              <h3 className="about-card-title">Computer Science &amp; Engineering Background</h3>
              <p className="about-intro-text">
                {personalInfo.aboutIntro}
              </p>

              {/* Core Focus Pillars */}
              <div className="focus-grid">
                {focusAreas && focusAreas.map((area, idx) => (
                  <div key={idx} className="focus-box">
                    <div className="focus-header">
                      <CheckCircle2 size={16} className="focus-check" />
                      <h4 className="focus-title">{area.title}</h4>
                    </div>
                    <p className="focus-desc">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Journey / Education Section */}
            <div className="card about-education-card">
              <div className="card-header-flex">
                <div className="card-title-group">
                  <BookOpen size={18} className="text-accent-red" />
                  <h3 className="about-card-title">Education</h3>
                </div>
                <span className="education-counter">Academic Timeline</span>
              </div>

              <div className="education-list">
                {education && education.map((edu) => (
                  <div key={edu.id} className={`education-item ${edu.current ? 'current-edu' : ''}`}>
                    <div className="edu-timeline-marker">
                      <span className="edu-marker-dot" />
                      <span className="edu-marker-line" />
                    </div>

                    <div className="edu-content">
                      <div className="edu-top-row">
                        <h4 className="edu-degree">{edu.degree}</h4>
                        <span className={`edu-score-badge ${edu.current ? 'badge-primary' : 'badge-neutral'}`}>
                          {edu.score}
                        </span>
                      </div>

                      <div className="edu-meta-row">
                        <span className="edu-institution">{edu.institution}</span>
                        <span className="edu-period-separator">•</span>
                        <span className="edu-period">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
