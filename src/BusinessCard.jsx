import React, { useRef } from 'react';
import './BusinessCard.css';

const GITHUB_URL = 'https://github.com/your-placeholder-repo';
const RESUME_URL = '/resume.pdf';
const EMAIL = 'my@email.com';

const BusinessCard = () => {
  const cardRef = useRef(null);

  // 3D tilt effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6; // subtle tilt
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  // Download resume
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open GitHub
  const handleCode = () => {
    window.open(GITHUB_URL, '_blank');
  };

  return (
    <div
      className="business-card-3d"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      <div className="window-bar">
        <span className="window-dot red" />
        <span className="window-dot yellow" />
        <span className="window-dot green" />
        <span className="window-title">Business Card.json</span>
        <div className="window-actions">
          <button className="download-btn" title="Download Resume" onClick={handleDownload}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v10m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="#fff"/></svg>
          </button>
          <button className="code-btn" title="View Code" onClick={handleCode}>{'{}'}</button>
        </div>
      </div>
      <div className="code-area">
        <pre>{`{
  "name": "@fr0gger_",
  "title": "Malware Therapist",
  "email": "`}</pre>
        <a
          href={`mailto:${EMAIL}`}
          className="email-link"
          style={{ color: '#ffd580', textDecoration: 'none', fontFamily: 'inherit', fontSize: '1.18rem' }}
        >
          {EMAIL}
        </a>
        <pre>{`",
  "link": "securitybreak.io"
}`}</pre>
      </div>
    </div>
  );
};

export default BusinessCard; 