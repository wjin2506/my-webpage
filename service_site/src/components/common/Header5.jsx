import React, { useState } from 'react';
import SearchView5 from '../ui/SearchView5';
import '../Home5.css';

const Header5 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (searchValue) => {
    console.log('Search submitted:', searchValue);
  };

  return (
    <header className="w-full py-4">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="bg-header-1 rounded-[14px] px-4 sm:px-5 lg:px-5 py-3 sm:py-3.5 lg:py-3.5 shadow-[0px_4px_20px_#888888ff]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/images5/img_header_logo.svg" 
                alt="SIM Maritime Intelligence Platform" 
                className="w-[150px] sm:w-[170px] lg:w-[196px] h-[24px] sm:h-[28px] lg:h-[32px]"
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="block sm:hidden p-2" 
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img 
                src="/images5/img_menu.svg" 
                alt="Menu" 
                className="w-6 h-6"
              />
            </button>

            {/* Desktop Navigation */}
            <div className={`${menuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-0 w-full sm:w-auto sm:justify-between sm:w-[32%]`}>
              {/* Search */}
              <div className="w-full sm:flex-1">
                <SearchView5
                  placeholder="Get Started"
                  onSubmit={handleSearchSubmit}
                  className="bg-header-2 border-[#ffffff19] text-global-5 placeholder-global-6 text-center px-3 py-1.5 text-sm sm:text-lg font-medium leading-5 sm:leading-6"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:ml-4">
                <button 
                  className="bg-header-2 border border-[#ffffff19] p-2 rounded hover:bg-opacity-80 transition-colors"
                  aria-label="Search"
                >
                  <img 
                    src="/images5/img_search.svg" 
                    alt="Search" 
                    className="w-6 h-6"
                  />
                </button>
                <button 
                  className="bg-header-2 border border-[#ffffff19] p-2 rounded hover:bg-opacity-80 transition-colors"
                  aria-label="Menu"
                >
                  <img 
                    src="/images5/img_menu.svg" 
                    alt="Menu" 
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

export default Header5; 