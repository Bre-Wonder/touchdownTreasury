import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Touchdown Treasury</h3>
          <p className="footer-description">
            Your premier destination for football pools, playoffs, and drafts done right. Because someone had to fix what your buddy’s spreadsheet ruined. Keeping the game spirit alive since 2025.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Touchdown Treasury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

