import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleHomeClick = () => {
    closeMenu();
    if (location.pathname === '/') {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page first, then scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLeaderboardClick = () => {
    closeMenu();
    if (location.pathname === '/') {
      // Already on home page, just scroll to section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">Touchdown Treasury</Link>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><button className="nav-link-btn" onClick={handleHomeClick}>HOME</button></li>
            <li><button className="nav-link-btn" onClick={handleLeaderboardClick}>LEADERBOARD</button></li>
            <li><Link to="/draft" onClick={closeMenu}>DRAFT</Link></li>
            <li><Link to="/playoffs" onClick={closeMenu}>PLAYOFFS</Link></li>
            {/* <li><a href="#featured">FEATURED</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

