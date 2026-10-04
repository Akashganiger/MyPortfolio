import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getGmailComposeUrl } from '../utils/emailHelper';
import './Footer.css';

const Footer = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const footerGmailUrl = getGmailComposeUrl(
    'Portfolio Inquiry / Opportunity - Akash Ganiger',
    'Hello Akash,\n\nI came across your portfolio and would like to connect.\n\nBest regards,\n[Your Name]'
  );

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-badge">A</span>
              <span className="footer-logo-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              Computer Science Engineering student • Java Full Stack Developer
            </p>
          </div>

          <div className="footer-links-group">
            <ul className="footer-nav">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-actions">
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={footerGmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Send Email to Akash via Gmail"
                title="Send Email via Gmail (To: akashganiger1@gmail.com)"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-note">
            Built with React &amp; Modern CSS • Clean Dark Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
