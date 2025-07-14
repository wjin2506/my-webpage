import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 분기 3: 메모리 저장 - 전체 네비게이션 상태를 localStorage에 저장
  const [isFullNavOpen, setIsFullNavOpen] = useState(() => {
    const saved = localStorage.getItem('header-fullNavOpen');
    return saved === 'true';
  });

  // 분기 3: 전체 네비게이션 상태 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('header-fullNavOpen', isFullNavOpen.toString());
  }, [isFullNavOpen]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (isFullNavOpen) {
          setIsFullNavOpen(false);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isFullNavOpen || isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isFullNavOpen, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFullNav = () => {
    setIsFullNavOpen(!isFullNavOpen);
  };

  const closeFullNav = () => {
    // 분기 3: 전체 네비게이션 닫기 시 메모리에서도 업데이트
    setIsFullNavOpen(false);
  };

  return (
    <>
      {isMobile ? (
        /* 모바일 헤더 */
        <div className="mobile-header-wrapper">
          <header className="mobile-header">
            <div className="mobile-logo">
              <img
                src={process.env.PUBLIC_URL + "/image/mobileLogo.png"}
                alt="VMS Logo"
                className="mobile-logo-img"
              />
            </div>
            
            {/* Header 이미지 버튼들을 헤더에 직접 배치 */}
            <div className="mobile-header-buttons">
              <button 
                className="mobile-header-btn"
                onClick={() => {
                  // Demo 모달 열기 이벤트 발생
                  window.dispatchEvent(new CustomEvent('openDemoModal'));
                }}
                aria-label="Get Started"
              >
                <img
                  src={process.env.PUBLIC_URL + "/image/getstarted_main.png"}
                  alt="Get Started"
                  className="mobile-header-btn-img"
                />
              </button>
              <button 
                className="mobile-header-btn"
                onClick={() => console.log('Menu clicked')}
                aria-label="Menu"
              >
                <img
                  src={process.env.PUBLIC_URL + "/image/header1.png"}
                  alt="Menu"
                  className="mobile-header-btn-img"
                />
              </button>
              <button 
                className="mobile-header-btn"
                onClick={(e) => e.preventDefault()}
                aria-expanded={isFullNavOpen}
                aria-controls="full-navigation"
                aria-label="Search"
                style={{cursor: 'not-allowed'}}
                disabled
              >
                <img
                  src={process.env.PUBLIC_URL + "/image/header2.png"}
                  alt="Search"
                  className="mobile-header-btn-img"
                />
              </button>
            </div>
            
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </header>
          
          {/* 모바일 메뉴 */}
          <nav 
            id="mobile-navigation"
            className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
            role="navigation"
            aria-label="Mobile navigation menu"
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="mobile-nav-content">
              <a href="#home" className="mobile-nav-link" role="menuitem">Home</a>
              <a href="#platforms" className="mobile-nav-link" role="menuitem">Our Platforms</a>
              <a href="#careers" className="mobile-nav-link" role="menuitem">Careers</a>
              <a href="#demo" className="mobile-nav-link" role="menuitem">Demo</a>
              <a href="#contact" className="mobile-nav-link" role="menuitem">Contact</a>
              <button 
                className="mobile-cta-btn" 
                role="menuitem"
                onClick={() => {
                  // Demo 모달 열기 이벤트 발생
                  window.dispatchEvent(new CustomEvent('openDemoModal'));
                  setIsMobileMenuOpen(false); // 모바일 메뉴 닫기
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/image/getstarted_main.png"}
                  alt="Get Started"
                  className="mobile-cta-btn-img"
                />
              </button>
            </div>
          </nav>
        </div>
      ) : (
        /* 데스크톱 헤더 */
        <div className="palantir-floating-header-wrapper">
          <header className="palantir-floating-header">
            <div className="header-logo-area">
              <img
                src={process.env.PUBLIC_URL + "/image/image2.png"}
                alt="VMS Holdings Logo"
                className="header-logo"
              />
            </div>
                         <div className="header-actions">
               <button
                 className="get-started-btn"
                 onClick={() => {
                   // Demo 모달 열기 이벤트 발생
                   window.dispatchEvent(new CustomEvent('openDemoModal'));
                 }}
                 aria-label="Get Started"
                 style={{
                   backgroundImage: `url(${
                     process.env.PUBLIC_URL + "/image/getstarted_main.png"
                   })`,
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                   backgroundRepeat: "no-repeat",
                   width: "380px",
                   minWidth: "380px",
                   maxWidth: "380px",
                   height: "40px",
                   minHeight: "40px",
                   maxHeight: "40px",
                 }}
               >
                 <img
                   src={process.env.PUBLIC_URL + "/image/getstarted_main.png"}
                   alt="Get Started"
                   className="header-btn-img"
                   style={{ display: "none" }}
                 />
               </button>
               <button 
                 className="icon-btn" 
                 aria-label="Menu"
                 onClick={() => console.log('Desktop Menu clicked')}
               >
                 <img
                   src={process.env.PUBLIC_URL + "/image/header1.png"}
                   alt="Menu"
                   className="header-btn-img"
                 />
               </button>
               <button 
                 className="icon-btn" 
                 aria-label="Search"
                 aria-expanded={isFullNavOpen}
                 aria-controls="full-navigation"
                 onClick={(e) => e.preventDefault()}
                 style={{cursor: 'not-allowed'}}
                 disabled
               >
                 <img
                   src={process.env.PUBLIC_URL + "/image/header2.png"}
                   alt="Search"
                   className="header-btn-img"
                 />
               </button>
             </div>
          </header>
                 </div>
      )}
      
      {/* 전체 화면 네비게이션 메뉴 - 모바일/데스크톱 공통 */}
      {isFullNavOpen && (
        <div 
          id="full-navigation"
          className="full-nav-overlay"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          onClick={closeFullNav}
        >
          <div className="full-nav-container" onClick={(e) => e.stopPropagation()}>
            {/* 상단 헤더 */}
                         <div className="full-nav-header">
               <div className="full-nav-logo">
                 <img
                   src={process.env.PUBLIC_URL + "/image/image2.png"}
                   alt="VMS Holdings Logo"
                   className="full-nav-logo-img"
                 />
               </div>
               <div className="full-nav-header-actions">
                 <button 
                   className="full-nav-get-started"
                   onClick={() => {
                     // Demo 모달 열기 이벤트 발생
                     window.dispatchEvent(new CustomEvent('openDemoModal'));
                     setIsFullNavOpen(false); // 전체 네비게이션 닫기
                   }}
                 >
                   <img
                     src={process.env.PUBLIC_URL + "/image/getstarted_main.png"}
                     alt="Get Started"
                     className="full-nav-get-started-img"
                   />
                 </button>
                 <button 
                   className="full-nav-close"
                   onClick={closeFullNav}
                   aria-label="Close navigation"
                 >
                   ×
                 </button>
               </div>
             </div>
             
             {/* 메인 컨텐츠 */}
             <div className="full-nav-content">
               {/* 좌측 네비게이션 */}
               <nav className="full-nav-main">
                 <div className="nav-section">
                   <h3 className="nav-section-title">NAVIGATION</h3>
                   <ul className="nav-main-list">
                     <li><span style={{cursor: 'not-allowed'}}>General</span></li>
                     <li><span style={{cursor: 'not-allowed'}}>Our Platform</span></li>
                     <li className="nav-sub-item"><a href="#oceanlife">↳ Oceanlife</a></li>
                     <li className="nav-sub-item"><a href="#wiser">↳ WISER</a></li>
                     <li className="nav-sub-item"><a href="#sim">↳ SIM</a></li>
                     <li><a href="#offering">Offering</a></li>
                     <li><a href="#impact">Impact Studies</a></li>
                     <li><a href="#careers">Careers</a></li>
                     <li><a href="#ir">IR</a></li>
                   </ul>
                 </div>
               </nav>
               
               {/* 우측 컨텐츠 */}
               <div className="full-nav-right">
                 {/* Latest News */}
                 <div className="nav-news-section">
                   <h3 className="nav-section-title">LATEST NEWS</h3>
                   <div className="news-items">
                     <div className="news-item">
                       <span className="news-date">APRIL 24, 2025</span>
                       <div className="news-content">
                         <img src={process.env.PUBLIC_URL + "/image/generalimage.png"} alt="News" className="news-image" />
                         <p className="news-text">Busan Hosts 2025 Startup Support Program Launch - 153 Promising Startups Gather.</p>
                       </div>
                     </div>
                     <div className="news-item">
                       <span className="news-date">JANUARY 31, 2025</span>
                       <div className="news-content">
                         <img src={process.env.PUBLIC_URL + "/image/generalimage.png"} alt="News" className="news-image" />
                         <p className="news-text">VMS Holdings and Sangju Fishing Village Collaborating on the 'Health Station' project.</p>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Offerings */}
                 <div className="nav-offerings-section">
                   <h3 className="nav-section-title">OFFERINGS</h3>
                   <p className="offerings-text">Our platforms are adopted across maritime enterprises to enrich employees with balanced, fulfilling work lives, while enabling employers to build adaptive resilience and operational strength through data-informed accountability and structural cost efficiency.</p>
                 </div>
                 
                 {/* Quick Links */}
                 <div className="nav-quick-links">
                   <h3 className="nav-section-title">QUICK LINKS</h3>
                   <ul className="quick-links-list">
                     <li><a href="#about">About VMS Holdings</a></li>
                     <li><a href="#blog">Blog</a></li>
                     <li><a href="#investor">Investor Relations</a></li>
                     <li><a href="#ceo">Letters from the CEO</a></li>
                     <li><a href="#privacy">Privacy & Civil Liberties</a></li>
                     <li><a href="#security">Information Security</a></li>
                     <li><a href="#partners">Partners</a></li>
                     <li><a href="#learning">VMS Software Learning</a></li>
                     <li><a href="#contact">Contact</a></li>
                   </ul>
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
