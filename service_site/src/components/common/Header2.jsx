import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 380);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 380);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full py-4 fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div style={{
          backdropFilter: 'blur(20px)',
          background: 'rgba(49,49,49,0.20)',
          borderRadius: '15px'
        }} className={`py-3 ${isMobile ? 'px-3' : 'px-4 sm:px-5'} sm:py-3.5`}>
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className={isMobile ? "w-auto" : "w-[120px] sm:w-[150px] md:w-[196px]"}>
              <img 
                src={isMobile ? "/image/mobileLogo.png" : "/images2/img_logo_vms.svg"} 
                alt="VMS Logo" 
                className={isMobile ? "h-[38px] w-auto" : "w-full h-[24px] sm:h-[28px] md:h-[32px]"}
              />
            </div>

            {/* Navigation - Always visible */}
            <div className={`flex items-center ${isMobile ? 'gap-2' : 'gap-6 xl:gap-8'}`}>
              <Button 
                variant="outline" 
                className={`py-[7px] font-medium bg-header-2 text-white transition-colors duration-200 ${
                  isMobile ? 'px-2 text-xs' : 'px-10 text-base'
                }`}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  width: isMobile ? '80px' : '280px',
                  height: isMobile ? '28px' : '40px'
                }}
              >
                Get Started
              </Button>
              
              <div className={`flex items-center ${isMobile ? 'gap-1' : 'gap-2'}`}>
                <button 
                  className={`bg-header-2 rounded hover:bg-global-7 transition-colors duration-200 ${
                    isMobile ? 'p-1.5' : 'p-2'
                  }`}
                  style={{ border: '1px solid rgba(255, 255, 255, 0.15)' }}
                  aria-label="Search"
                >
                  <img 
                    src="/images2/img_search.svg" 
                    alt="Search" 
                    className={isMobile ? 'w-5 h-5' : 'w-6 h-6'}
                  />
                </button>
                
                <button 
                  className={`bg-header-2 rounded hover:bg-global-7 transition-colors duration-200 ${
                    isMobile ? 'p-1.5' : 'p-2'
                  }`}
                  style={{ border: '1px solid rgba(255, 255, 255, 0.15)' }}
                  aria-label="Menu"
                >
                  <img 
                    src="/images2/img_menu.svg" 
                    alt="Menu" 
                    className={isMobile ? 'w-5 h-5' : 'w-6 h-6'}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button - Hidden since main buttons are always visible */}
            {/* <button 
              className="lg:hidden p-2 bg-header-2 border border-global-7 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <img 
                src="/images2/img_menu.svg" 
                alt="Menu" 
                className="w-6 h-6"
              />
            </button> */}
          </div>

          {/* Mobile Menu - Removed since all buttons are always visible */}
        </div>
      </div>
    </header>
  );
};

export default Header;