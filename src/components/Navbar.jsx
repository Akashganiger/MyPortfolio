import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Eye, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import portraitImg from '../assets/akash_portrait.jpg';
import resumePdf from '../assets/resume.pdf';
import './Navbar.css';

const Navbar = ({ personalInfo }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')} aria-label="Akash Portfolio Home">
          <div className="nav-avatar-wrap">
            <img
              src={portraitImg}
              alt="Akash Basavaraj Ganiger"
              className="nav-avatar-img"
            />
          </div>
          <div className="logo-text">
            <span className="logo-name">{personalInfo.name}</span>
            <span className="logo-sub">{personalInfo.role}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.name}</span>
                  <span className="nav-link-indicator" />
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              id="theme-toggle-desktop"
            >
              {theme === 'dark' ? (
                <Sun size={17} className="theme-icon sun-icon" />
              ) : (
                <Moon size={17} className="theme-icon moon-icon" />
              )}
            </button>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view-resume"
              title="View Resume in new tab"
              id="nav-view-resume-btn"
            >
              <Eye size={14} />
              <span>View</span>
            </a>

            <a
              href={resumePdf}
              download="Akash_Basavaraj_Ganiger_Resume.pdf"
              className="btn-resume"
              id="nav-resume-btn"
              title="Download Resume PDF"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Actions and Hamburger */}
        <div className="mobile-header-actions">
          <button
            type="button"
            className="theme-toggle-btn mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-mobile-resume"
              onClick={() => setIsOpen(false)}
            >
              <Eye size={16} />
              <span>View Resume Online</span>
            </a>

            <a
              href={resumePdf}
              download="Akash_Basavaraj_Ganiger_Resume.pdf"
              className="btn btn-primary btn-mobile-resume"
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
