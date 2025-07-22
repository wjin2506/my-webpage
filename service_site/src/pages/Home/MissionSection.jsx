import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MissionSection = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="bg-global-5 py-8 md:py-12 lg:py-[76px]">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement */}
        <div className="flex justify-center items-center w-full mb-12 md:mb-16 lg:mb-[134px] mt-6 md:mt-8 lg:mt-16">
          <h2 className="text-2xl md:text-3xl lg:text-[64px] font-normal leading-tight md:leading-tight lg:leading-[76px] text-center text-global-1 max-w-full px-4">
            <span className="text-global-1">We help people </span>
            <span className="text-global-3">DO MORE</span>
            <span className="text-global-1"> by making services </span>
            <span className="text-global-3">MORE</span>
            <span className="text-global-1"> accessible, affordable, and impactful in Maritime Enterprises from Home to the Frontlines</span>
          </h2>
        </div>

        {/* Platforms Section */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[72px] justify-start items-center w-full">
          
          {/* Section Title */}
          <div className="flex justify-start items-center w-full">
            <h3 className="text-2xl md:text-3xl lg:text-[50px] font-normal leading-tight md:leading-tight lg:leading-[61px] text-left text-global-1">
              Our Platforms
            </h3>
          </div>

          {/* Platforms List */}
          <div className="flex flex-col justify-start items-center w-full">
            
            {/* Oceanlife Platform */}
            <div className="w-full border-t border-global-4 group"
                 onMouseEnter={() => setHoveredPlatform('oceanlife')}
                 onMouseLeave={() => setHoveredPlatform(null)}>
              {/* Mobile Layout - Following Figma Design */}
              <div className="flex flex-col lg:hidden">
                <div 
                  className="flex flex-col items-start p-6 gap-6 w-full bg-white border-t border-gray-200 cursor-pointer"
                  onClick={() => {
                    // index2.jsx로 페이지 이동
                    navigate('/home2');
                  }}
                >
                  {/* Image/Video Section */}
                  <div className="flex flex-row items-start w-full">
                    <video 
                      src="/video/pm1.mp4" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      controls
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  
                  {/* Title and Number Row */}
                  <div className="flex flex-row items-center justify-between w-full h-[77px]">
                    <h4 className="flex-1 text-[64px] font-normal leading-[120%] text-left text-global-1 tracking-[-0.025em]">
                      Oceanlife
                    </h4>
                    <p className="text-base font-normal leading-[140%] text-right text-gray-400 tracking-[-0.025em] h-[22px]">
                      01
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg font-normal leading-[140%] text-left text-global-1 tracking-[-0.025em] w-full">
                    Live Seamlessly,<br />
                    Even at Sea - with<br />
                    Oceanlife
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Original Web Layout with Proper Vertical Alignment */}
              <div className="hidden lg:flex lg:flex-row justify-start items-center w-full py-4 sm:py-6 lg:py-[10px]">
                <div className="flex flex-row justify-center items-center w-full">
                  <div className="flex flex-row justify-start items-center w-1/2">
                    <div className="flex flex-col gap-[78px] justify-start items-start mr-8">
                      <p className="text-lg font-normal leading-[25px] text-left text-global-1 max-w-[76%]">
                        Live Seamlessly,<br />
                        Even at Sea -<br />
                        with Oceanlife
                      </p>
                      <p className="text-lg font-normal leading-[22px] text-left text-global-3 transition-all duration-300 group-hover:text-[#0095b8] group-hover:font-semibold group-hover:scale-110">
                        01
                      </p>
                    </div>
                    <div className="ml-12">
                      {hoveredPlatform === 'oceanlife' ? (
                        <video 
                          src="/video/pm1.mp4" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-[400px] h-[240px] object-cover"
                        />
                      ) : (
                        <img 
                          src="/image/img_vector.svg" 
                          alt="Oceanlife Platform" 
                          className="w-[180px] h-[180px] transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-1/2">
                    <h4 className="text-[150px] font-normal leading-[182px] text-left text-global-1 transition-all duration-300 group-hover:text-global-3 group-hover:translate-x-2">
                      Oceanlife
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* WISER Platform */}
            <div className="w-full border-t border-global-4 group"
                 onMouseEnter={() => setHoveredPlatform('wiser')}
                 onMouseLeave={() => setHoveredPlatform(null)}>
              {/* Mobile Layout - Following Figma Design */}
              <div className="flex flex-col lg:hidden">
                <div className="flex flex-col items-start p-6 gap-6 w-full bg-white border-t border-gray-200">
                  {/* Image/Video Section */}
                  <div className="flex flex-row items-start w-full">
                    <video 
                      src="/video/pm2.mp4" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      controls
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  
                  {/* Title and Number Row */}
                  <div className="flex flex-row items-center justify-between w-full h-[77px]">
                    <h4 className="flex-1 text-[64px] font-normal leading-[120%] text-left text-global-1 tracking-[-0.025em]">
                      WISER
                    </h4>
                    <p className="text-base font-normal leading-[140%] text-right text-gray-400 tracking-[-0.025em] h-[22px]">
                      02
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg font-normal leading-[140%] text-left text-global-1 tracking-[-0.025em] w-full">
                    Work well, Live fully,<br />
                    Begin again.<br />
                    WISER is where your<br />
                    next chapter begins.
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Original Web Layout with Proper Vertical Alignment */}
              <div className="hidden lg:flex lg:flex-row justify-start items-center w-full py-3">
                <div className="flex flex-row justify-start items-center w-full">
                  <div className="flex flex-row justify-start items-center w-1/2">
                    <div className="flex flex-col gap-[54px] justify-start items-start mr-8">
                      <p className="text-lg font-normal leading-[25px] text-left text-global-1 max-w-[76%]">
                        Work well, Live fully,<br />
                        Begin again.<br />
                        WISER is where your<br />
                        next chapter begins.
                      </p>
                      <p className="text-lg font-normal leading-[22px] text-left text-global-3 transition-all duration-300 group-hover:text-[#0095b8] group-hover:font-semibold group-hover:scale-110">
                        02
                      </p>
                    </div>
                    <div className="ml-12">
                      {hoveredPlatform === 'wiser' ? (
                        <video 
                          src="/video/pm2.mp4" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-[400px] h-[240px] object-cover"
                        />
                      ) : (
                        <img 
                          src="/image/img_logo_simbol_wiser.svg" 
                          alt="WISER Platform" 
                          className="w-[180px] h-[180px] transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-1/2">
                    <h4 className="text-[150px] font-normal leading-[182px] text-left text-global-1 transition-all duration-300 group-hover:text-global-3 group-hover:translate-x-2">
                      WISER
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* SIM Platform */}
            <div className="w-full border-t border-global-4 group"
                 onMouseEnter={() => setHoveredPlatform('sim')}
                 onMouseLeave={() => setHoveredPlatform(null)}>
              {/* Mobile Layout - Following Figma Design */}
              <div className="flex flex-col lg:hidden">
                <div className="flex flex-col items-start p-6 gap-6 w-full bg-white border-t border-gray-200">
                  {/* Image/Video Section */}
                  <div className="flex flex-row items-start w-full">
                    <video 
                      src="/video/pm3.mp4" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      controls
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  
                  {/* Title and Number Row */}
                  <div className="flex flex-row items-center justify-between w-full h-[77px]">
                    <h4 className="flex-1 text-[64px] font-normal leading-[120%] text-left text-global-1 tracking-[-0.025em]">
                      SIM
                    </h4>
                    <p className="text-base font-normal leading-[140%] text-right text-gray-400 tracking-[-0.025em] h-[22px]">
                      03
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg font-normal leading-[140%] text-left text-global-1 tracking-[-0.025em] w-full">
                    Unlock access,<br />
                    surface hidden<br />
                    opportunities,<br />
                    and drive smarter<br />
                    efficiency
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Original Web Layout with Proper Vertical Alignment */}
              <div className="hidden lg:flex lg:flex-row justify-start items-center w-full py-3">
                <div className="flex flex-row justify-start items-center w-full">
                  <div className="flex flex-row justify-start items-center w-1/2">
                    <div className="flex flex-col gap-[28px] justify-start items-start mr-8">
                      <p className="text-lg font-normal leading-[25px] text-left text-global-1 max-w-[86%]">
                        Unlock access,<br />
                        surface hidden<br />
                        opportunities,<br />
                        and drive smarter<br />
                        efficiency
                      </p>
                      <p className="text-lg font-normal leading-[22px] text-left text-global-3 transition-all duration-300 group-hover:text-[#0095b8] group-hover:font-semibold group-hover:scale-110">
                        03
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center flex-1 px-8 ml-12">
                      {hoveredPlatform === 'sim' ? (
                        <video 
                          src="/video/pm3.mp4" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-[400px] h-[240px] object-cover"
                        />
                      ) : (
                        <>
                          <img 
                            src="/image/img_vector_gray_100.svg" 
                            alt="SIM Icon 1" 
                            className="w-[48px] h-[154px] mr-3 transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
                          />
                          <img 
                            src="/image/img_vector_gray_100_188x16.svg" 
                            alt="SIM Icon 2" 
                            className="w-[16px] h-[188px] mr-3 transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
                          />
                          <img 
                            src="/image/img_vector_gray_100_190x78.svg" 
                            alt="SIM Icon 3" 
                            className="w-[78px] h-[190px] transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-1/2">
                    <h4 className="text-[150px] font-normal leading-[182px] text-left text-global-1 transition-all duration-300 group-hover:text-global-3 group-hover:translate-x-2">
                      SIM
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;