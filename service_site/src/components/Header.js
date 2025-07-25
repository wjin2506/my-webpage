import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  // 분기 3: 메모리 저장 - 전체 네비게이션 상태를 localStorage에 저장
  const [isFullNavOpen, setIsFullNavOpen] = useState(() => {
    const saved = localStorage.getItem('header-fullNavOpen');
    return saved === 'true';
  });

  // 모바일 화면 감지를 위한 상태 (390px 기준)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  // 분기 3: 전체 네비게이션 상태 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('header-fullNavOpen', isFullNavOpen.toString());
  }, [isFullNavOpen]);

  // 화면 크기 변화 감지 (390px 기준)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (isFullNavOpen) {
          setIsFullNavOpen(false);
        }
      }
    };

    if (isFullNavOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isFullNavOpen]);

  const closeFullNav = () => {
    // 분기 3: 전체 네비게이션 닫기 시 메모리에서도 업데이트
    setIsFullNavOpen(false);
  };

  // 로고 이미지 소스 결정
  const getLogoSrc = () => {
    return isMobile 
      ? process.env.PUBLIC_URL + "/image/mobileLogo.png"
      : process.env.PUBLIC_URL + "/image/image2.png";
  };

  return (
    <>
      {/* 웹 헤더를 모바일/데스크톱 모두 동일하게 사용 */}
      <div className="palantir-floating-header-wrapper">
        <header className="palantir-floating-header">
          <div className="header-logo-area">
            <img
              src={getLogoSrc()}
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
              onClick={() => console.log('Menu clicked')}
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
                   src={getLogoSrc()}
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
