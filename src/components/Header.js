import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="palantir-floating-header-wrapper">
      <header className="palantir-floating-header">
        <div className="header-logo-area">
          <img src={process.env.PUBLIC_URL + '/image/vmslogo.png'} alt="VMS Holdings Logo" className="header-logo" />
        </div>
        <div className="header-actions">
          <button className="get-started-btn">
            <img src={process.env.PUBLIC_URL + '/image/header3.png'} alt="Get Started" className="header-btn-img" />
          </button>
          <button className="icon-btn" aria-label="Search">
            <img src={process.env.PUBLIC_URL + '/image/header2.png'} alt="Search" className="header-btn-img" />
          </button>
          <button className="icon-btn" aria-label="Menu">
            <img src={process.env.PUBLIC_URL + '/image/header1.png'} alt="Menu" className="header-btn-img" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header; 