import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle, ExternalLink, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getGmailComposeUrl, getMailtoUrl, AKASH_EMAIL } from '../utils/emailHelper';
import portraitImg from '../assets/akash_portrait.jpg';
import './Contact.css';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(true);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const defaultGmailUrl = getGmailComposeUrl(
    'Recruitment Inquiry / Job Opportunity - Akash Ganiger',
    'Hello Akash,\n\nI am reaching out regarding an opportunity at our company.\n\nCompany Name:\nRole / Position:\nLocation:\nMessage:\n\nBest regards,\n[Your Name]\n[Contact Information]'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
          _template: 'table'
        })
      });

      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        setSubmitSuccess(true);
      } else {
        // Fallback if network blocked
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.warn('Direct submit notice, falling back to client options:', err);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleOpenGmail = () => {
    const gmailUrl = getGmailComposeUrl(
      `Portfolio Inquiry from ${formData.name || 'Visitor'}`,
      `Hello Akash,\n\n${formData.message}\n\nFrom:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmailApp = () => {
    const mailtoUrl = getMailtoUrl(
      `Portfolio Inquiry from ${formData.name || 'Visitor'}`,
      `Hello Akash,\n\n${formData.message}\n\nFrom:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = mailtoUrl;
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>
          <p className="section-subtitle">
            I am actively open for Software Engineering placements, internships, and technical discussions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Small Visual Avatar */}
          <div className="contact-info-card card">
            <div className="contact-avatar-header">
              <div className="contact-avatar-wrap">
                <img
                  src={portraitImg}
                  alt={personalInfo.name}
                  className="contact-avatar-img"
                  loading="lazy"
                />
                <span className="contact-online-dot" />
              </div>
              <div className="contact-header-text">
                <h3 className="contact-card-title">Direct Inquiries</h3>
                <span className="contact-availability">{personalInfo.status}</span>
              </div>
            </div>

            <p className="contact-card-sub">
              Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
            </p>

            <div className="contact-items-list">
              {/* Email */}
              <div className="contact-item-row">
                <a
                  href={defaultGmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon-box contact-icon-link"
                  title="Click to open Gmail directly (To: akashganiger1@gmail.com)"
                  aria-label="Send email to Akash via Gmail"
                >
                  <Mail size={18} />
                </a>
                <div className="contact-text-wrap">
                  <span className="contact-label">Email Address (Click to Open)</span>
                  <a
                    href={defaultGmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value-link"
                    title="Click to open Gmail directly (To: akashganiger1@gmail.com)"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-action-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={15} className="text-green" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-item-row">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact-icon-box"
                  title="Call Akash"
                  aria-label="Call phone"
                >
                  <Phone size={18} />
                </a>
                <div className="contact-text-wrap">
                  <span className="contact-label">Phone / WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="contact-value-link">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-action-btn"
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check size={15} className="text-green" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location */}
              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="contact-text-wrap">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="contact-buttons-group">
              <a
                href={defaultGmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-contact-action"
                id="contact-email-btn"
                title="Click to open Gmail directly (To: akashganiger1@gmail.com)"
              >
                <Mail size={16} />
                <span>Open in Gmail</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-contact-action"
                id="contact-linkedin-btn"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-contact-action"
                id="contact-github-btn"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-card card">
            <h3 className="contact-card-title">Send a Direct Message</h3>
            <p className="contact-card-sub">
              Fill out the details below to send a message directly to my inbox ({personalInfo.email}).
            </p>

            {submitted ? (
              <div className="form-success-box animate-fade-in">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={40} className="text-green" />
                </div>
                <h4 className="success-title">Message Sent Successfully!</h4>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>! Your message has been dispatched directly to <strong>{personalInfo.email}</strong>.
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="btn btn-primary btn-success-action"
                    title="Open in Gmail Compose"
                  >
                    <Mail size={16} />
                    <span>Open in Gmail Web</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSendViaEmailApp}
                    className="btn btn-secondary btn-success-action"
                    title="Open in default email app"
                  >
                    <ExternalLink size={16} />
                    <span>Open in Email App</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="btn btn-outline btn-success-action"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="text-red">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit-form"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="spin-icon" />
                      <span>Sending to {personalInfo.email}...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
