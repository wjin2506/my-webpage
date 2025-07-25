import React, { useState } from 'react';
import Button4 from '../ui/Button4';
import '../Home4.css';

const Header4 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 pb-4">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="bg-header-1 rounded-[14px] px-4 sm:px-5 py-3 sm:py-3.5 shadow-[0px_4px_20px_#888888ff]">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/images4/img_logo_vms_kor.svg" 
                alt="WISER Logo" 
                className="h-8 w-auto sm:h-8 md:w-[196px] md:h-[32px]"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Button4
                variant="glass"
                size="medium"
                className="px-6 sm:px-8 py-1.5 sm:py-2 text-base sm:text-lg font-medium font-inter"
              >
                Get Started
              </Button4>
              
              <div className="flex items-center gap-2">
                <button 
                  className="bg-header-2 border border-[#ffffff19] p-2 rounded hover:bg-[#ffffff33] transition-all duration-200"
                  aria-label="Search"
                >
                  <img 
                    src="/images4/img_search.svg" 
                    alt="Search" 
                    className="w-6 h-6"
                  />
                </button>
                
                <button 
                  className="bg-header-2 border border-[#ffffff19] p-2 rounded hover:bg-[#ffffff33] transition-all duration-200"
                  aria-label="Menu"
                >
                  <img 
                    src="/images4/img_menu.svg" 
                    alt="Menu" 
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden bg-header-2 border border-[#ffffff19] p-2 rounded hover:bg-[#ffffff33] transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <img 
                src="/images4/img_menu.svg" 
                alt="Menu" 
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pt-4 border-t border-[#ffffff19]`}>
            <div className="flex flex-col gap-4">
              <Button4
                variant="glass"
                size="medium"
                fullWidth
                className="text-base font-medium font-inter"
              >
                Get Started
              </Button4>
              
              <div className="flex justify-center gap-2">
                <button 
                  className="bg-header-2 border border-[#ffffff19] p-2 rounded hover:bg-[#ffffff33] transition-all duration-200"
                  aria-label="Search"
                >
                  <img 
                    src="/images4/img_search.svg" 
                    alt="Search" 
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header4; 