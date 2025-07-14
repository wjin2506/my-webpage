import React, { useState } from 'react';

const MissionSection = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  return (
    <section className="bg-global-5 py-12 sm:py-16 lg:py-[76px]">
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement */}
        <div className="flex justify-center items-center w-full mb-16 sm:mb-20 lg:mb-[134px] mt-8 sm:mt-12 lg:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight sm:leading-tight lg:leading-[76px] text-center text-global-1 max-w-full">
            <span className="text-global-1">We help people </span>
            <span className="text-global-3">DO MORE</span>
            <span className="text-global-1"> by making services </span>
            <span className="text-global-3">MORE</span>
            <span className="text-global-1"> accessible, affordable, and impactful in Maritime Enterprises from Home to the Frontlines</span>
          </h2>
        </div>

        {/* Platforms Section */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[72px] justify-start items-center w-full">
          
          {/* Section Title */}
          <div className="flex justify-start items-center w-full">
            <h3 className="text-3xl sm:text-4xl lg:text-[50px] font-normal leading-tight sm:leading-tight lg:leading-[61px] text-left text-global-1">
              Our Platforms
            </h3>
          </div>

          {/* Platforms List */}
          <div className="flex flex-col justify-start items-center w-full">
            
            {/* Oceanlife Platform */}
            <div 
              className="flex flex-col lg:flex-row justify-start items-start w-full border-t border-global-4 py-4 sm:py-6 lg:py-[10px] cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredPlatform('oceanlife')}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-4 lg:mb-0">
                <div className="flex flex-col lg:flex-row justify-start items-start w-full lg:w-1/2 mb-6 lg:mb-0">
                  <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[78px] justify-start items-start w-full lg:w-auto mb-6 lg:mb-0 lg:mr-8">
                    <p className="text-base sm:text-lg lg:text-lg font-normal leading-6 sm:leading-7 lg:leading-[25px] text-left text-global-1 max-w-[450px] sm:max-w-[500px] lg:max-w-[100%]">
                      Live Seamlessly,<br />
                      Even at Sea -<br />
                      with Oceanlife
                    </p>
                    <p className="text-base sm:text-lg lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-[22px] text-left text-global-3">
                      01
                    </p>
                  </div>
                  <div className="flex justify-start items-start pt-0 lg:pt-2 -ml-2 lg:-ml-4">
                    {hoveredPlatform === 'oceanlife' ? (
                      <video 
                        src="/video/pm1.mp4" 
                        autoPlay 
                        muted 
                        loop 
                        className="w-40 sm:w-48 lg:w-[320px] h-40 sm:h-48 lg:h-[200px] ml-6 lg:ml-12 object-cover rounded-md transition-all duration-300"
                      />
                    ) : (
                      <img 
                        src="/image/img_vector.svg" 
                        alt="Oceanlife Platform" 
                        className="w-32 sm:w-40 lg:w-[180px] h-32 sm:h-40 lg:h-[180px] ml-6 lg:ml-12 transition-all duration-300"
                      />
                    )}
                  </div>
                </div>
                <h4 className={`text-6xl sm:text-8xl lg:text-[150px] font-normal leading-tight sm:leading-tight lg:leading-[182px] text-left text-global-1 transition-transform duration-300 ${hoveredPlatform === 'oceanlife' ? 'transform translate-x-4 lg:translate-x-8' : ''}`}>
                  Oceanlife
                </h4>
              </div>
            </div>

            {/* WISER Platform */}
            <div 
              className="flex flex-col lg:flex-row justify-start items-start w-full border-t border-global-4 py-4 sm:py-6 lg:py-3 cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredPlatform('wiser')}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="flex flex-col lg:flex-row justify-start items-center w-full mb-4 lg:mb-0">
                <div className="flex flex-col lg:flex-row justify-start items-start w-full lg:w-1/2 mb-6 lg:mb-0">
                  <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[54px] justify-start items-start w-full lg:w-auto mb-6 lg:mb-0 lg:mr-8">
                    <p className="text-base sm:text-lg lg:text-lg font-normal leading-6 sm:leading-7 lg:leading-[25px] text-left text-global-1 max-w-[450px] sm:max-w-[500px] lg:max-w-[100%]">
                      Work well, Live fully,<br />
                      Begin again.<br />
                      WISER is where your<br />
                      next chapter begins.
                    </p>
                    <p className="text-base sm:text-lg lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-[22px] text-left text-global-3">
                      02
                    </p>
                  </div>
                  <div className="flex justify-start items-start pt-0 lg:pt-2 -ml-2 lg:-ml-4">
                    {hoveredPlatform === 'wiser' ? (
                      <video 
                        src="/video/pm2.mp4" 
                        autoPlay 
                        muted 
                        loop 
                        className="w-40 sm:w-48 lg:w-[320px] h-40 sm:h-48 lg:h-[200px] ml-5 lg:ml-10 object-cover rounded-md transition-all duration-300"
                      />
                    ) : (
                      <img 
                        src="/image/img_logo_simbol_wiser.svg" 
                        alt="WISER Platform" 
                        className="w-32 sm:w-40 lg:w-[180px] h-32 sm:h-40 lg:h-[180px] ml-5 lg:ml-10 transition-all duration-300"
                      />
                    )}
                  </div>
                </div>
                <h4 className={`text-6xl sm:text-8xl lg:text-[150px] font-normal leading-tight sm:leading-tight lg:leading-[182px] text-left text-global-1 transition-transform duration-300 ${hoveredPlatform === 'wiser' ? 'transform translate-x-4 lg:translate-x-8' : ''}`}>
                  WISER
                </h4>
              </div>
            </div>

            {/* SIM Platform */}
            <div 
              className="flex flex-col lg:flex-row justify-start items-start w-full border-t border-global-4 py-4 sm:py-6 lg:py-3 cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredPlatform('sim')}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="flex flex-col lg:flex-row justify-start items-center w-full mb-4 lg:mb-0">
                <div className="flex flex-col lg:flex-row justify-start items-start w-full lg:w-1/2 mb-6 lg:mb-0">
                  <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[28px] justify-start items-start w-full lg:w-auto mb-6 lg:mb-0 lg:mr-8">
                    <p className="text-base sm:text-lg lg:text-lg font-normal leading-6 sm:leading-7 lg:leading-[25px] text-left text-global-1 max-w-[450px] sm:max-w-[500px] lg:max-w-[100%]">
                      Unlock access,<br />
                      surface hidden<br />
                      opportunities,<br />
                      and drive smarter<br />
                      efficiency
                    </p>
                    <p className="text-base sm:text-lg lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-[22px] text-left text-global-3">
                      03
                    </p>
                  </div>
                  <div className="flex justify-start items-start pt-0 lg:pt-2 -ml-2 lg:-ml-4">
                    {hoveredPlatform === 'sim' ? (
                      <video 
                        src="/video/pm3.mp4" 
                        autoPlay 
                        muted 
                        loop 
                        className="w-40 sm:w-48 lg:w-[320px] h-40 sm:h-48 lg:h-[200px] ml-6 lg:ml-12 object-cover rounded-md transition-all duration-300"
                      />
                    ) : (
                      <div className="flex flex-col lg:flex-row justify-start items-center ml-6 lg:ml-12 transition-all duration-300">
                        <img 
                          src="/image/img_vector_gray_100.svg" 
                          alt="SIM Icon 1" 
                          className="w-10 sm:w-12 lg:w-[48px] h-32 sm:h-36 lg:h-[154px] mb-2 lg:mb-0 lg:mr-3"
                        />
                        <img 
                          src="/image/img_vector_gray_100_188x16.svg" 
                          alt="SIM Icon 2" 
                          className="w-4 sm:w-5 lg:w-[16px] h-40 sm:h-44 lg:h-[188px] mb-2 lg:mb-0 lg:mr-3"
                        />
                        <img 
                          src="/image/img_vector_gray_100_190x78.svg" 
                          alt="SIM Icon 3" 
                          className="w-16 sm:w-18 lg:w-[78px] h-40 sm:h-44 lg:h-[190px]"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <h4 className={`text-6xl sm:text-8xl lg:text-[150px] font-normal leading-tight sm:leading-tight lg:leading-[182px] text-left text-global-1 transition-transform duration-300 ${hoveredPlatform === 'sim' ? 'transform translate-x-4 lg:translate-x-8' : ''}`}>
                  SIM
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;