import React from 'react';
import './Header2.css';

const Header2 = () => {
  return (
    <header className="header2">
      <div className="header2-content">
        <div className="header2-left">
          <img 
            src={process.env.PUBLIC_URL + "/image/headerlogoBlack.png"} 
            alt="VMS Holdings Logo" 
            className="header2-logo"
          />
        </div>
        
        <div className="header2-center">
          <button className="header2-get-started-btn">
            Get Started
          </button>
        </div>
        
        <div className="header2-right">
          <button className="header2-icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="header2-icon-btn" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header2; 