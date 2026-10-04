import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Eye, X } from 'lucide-react';
import './Certificates.css';

const Certificates = ({ certificatesData }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Certificates &amp; <span>Specializations</span>
          </h2>
          <p className="section-subtitle">
            Industry and university-certified specializations in Full Stack Java development, Machine Learning, and Artificial Intelligence.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card card">
              {/* Certificate Image Preview Banner */}
              <div
                className="cert-image-banner"
                onClick={() => setSelectedCert(cert)}
                title="Click to expand certificate"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="cert-banner-img"
                  loading="lazy"
                />
                <div className="cert-image-overlay">
                  <span className="cert-preview-pill">
                    <Eye size={14} />
                    <span>Enlarge Certificate</span>
                  </span>
                </div>
              </div>

              <div className="cert-content-body">
                <div className="cert-top-row">
                  <div className="cert-badge-wrap">
                    <div className="cert-icon-box">
                      <Award size={20} className="cert-icon" />
                    </div>
                    <div>
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-partner">{cert.partner} • {cert.issueDate}</span>
                    </div>
                  </div>

                  <div className="cert-status-badge">
                    <span className="cert-dot-verified" />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="cert-title">{cert.title}</h3>

                <div className="cert-topics-box">
                  <span className="cert-topics-heading">Curriculum Focus:</span>
                  <ul className="cert-topics-list">
                    {cert.topics.map((topic, idx) => (
                      <li key={idx} className="cert-topic-item">
                        <CheckCircle2 size={13} className="topic-check" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cert-footer">
                  <div className="cert-meta">
                    <span className="cert-code">ID: {cert.credentialCode}</span>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-verify-cert"
                    aria-label={`Verify Certificate for ${cert.title}`}
                  >
                    <span>View Official Verification</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        {selectedCert && (
          <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
            <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="cert-modal-header">
                <div className="modal-title-wrap">
                  <Award size={18} className="text-accent-red" />
                  <h3 className="modal-title">{selectedCert.title}</h3>
                </div>
                <button
                  className="cert-modal-close"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="cert-modal-body">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-img"
                />
              </div>

              <div className="cert-modal-footer">
                <span className="modal-issuer">{selectedCert.issuer}</span>
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span>Verify on Coursera</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
