import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="/">Touchdown Treasury</a>
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
            <li><a href="#home">HOME</a></li>
            <li><a href="#new">LEADERBOARD</a></li>
            <li><a href="#products">DRAFT</a></li>
            <li><a href="#merch">PLAYOFFS</a></li>
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

