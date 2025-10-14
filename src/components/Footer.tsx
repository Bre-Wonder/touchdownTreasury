import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Touchdown Treasury</h3>
            <p className="footer-description">
              Your premier destination for authentic football memorabilia, 
              collectibles, and exclusive merchandise. Celebrating the spirit 
              of the game since 2024.
            </p>
            <div className="footer-social">
              <a href="#twitter" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="var(--color-dark-red)"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="var(--color-dark-red)"/>
                </svg>
              </a>
              <a href="#tiktok" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="#youtube" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2.12 3.14 3.14 0 00.71 1.36 3.09 3.09 0 001.53.84 45.18 45.18 0 008.59.26c2.31 0 4.63-.17 6.94-.26a3.05 3.05 0 002.13-1.09 3.53 3.53 0 00.6-1.68c.34-2.17.34-4.34 0-6.51zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li><a href="#all">All Products</a></li>
              <li><a href="#new">What's New</a></li>
              <li><a href="#apparel">Apparel</a></li>
              <li><a href="#collectibles">Collectibles</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Information</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          <div className="footer-column newsletter-column">
            <h4>Newsletter</h4>
            <p className="newsletter-description">
              Be the first to hear about new offerings and exclusive deals
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-payment">
            <span>Payment methods:</span>
            <div className="payment-icons">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">💰</span>
              <span className="payment-icon">🏦</span>
            </div>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Touchdown Treasury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

