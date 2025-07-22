import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header2';
import Footer from '../../components/common/Footer2';
import Button from '../../components/ui/Button2';
import ChipView from '../../components/ui/ChipView2';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 380);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 380);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chipItems = ['VIDEO', 'DETAILS'];
  const industries = [
    'SHIPPING',
    'CRUISE & PASSENGER SHIPPING', 
    'OFFSHORE PLANT',
    'SHIPBUILDING & SHIP REPAIR',
    'PORT & TERMINAL OPERATIONS',
    'NAVAL',
    'FISHERIES & AQUACULTURE',
    'MARINE INSURANCE',
    'MARINE FINANCE',
    'MARINE RESEARCH & SURVEYING',
    'MARITIME EDUCATION & TRAINING',
    'ENVIRONMENTAL MONITORING & MARINE SAFETY',
    'SALVAGE & WRECK REMOVAL'
  ];

  const demoSteps = [
    { number: '01', title: 'Demo \nRequest' },
    { number: '02', title: 'Representative \nContact' },
    { number: '03', title: 'Access Link \nShared' },
    { number: '04', title: 'Client Identification \nNumber Entry' },
    { number: '05', title: 'Full Access \nGranted' }
  ];

  return (
          <div className="w-full bg-global-4">
        {/* Hero Section */}
        <div className="relative min-h-screen bg-cover bg-center pt-24" style={{ backgroundImage: "url('/images2/img_.png')" }}>
        <Header />
        
        <div className={`flex flex-col items-center justify-center pt-8 pb-16 ${
          isMobile ? 'px-3' : 'px-4 sm:px-6 lg:px-8'
        }`}>
          <div className={`w-full mb-8 lg:mb-16 ${
            isMobile ? 'max-w-[280px]' : 'max-w-[1000px]'
          }`}>
            <img 
              src="/images2/img_logo_oceanlife.svg" 
              alt="Oceanlife Logo" 
              className={`w-full h-auto mx-auto ${
                isMobile ? 'max-w-[280px]' : 'max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px]'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className={`bg-global-5 ${isMobile ? 'py-4' : 'py-6 lg:py-8'}`}>
        <div className={isMobile ? 'px-3' : 'px-4 sm:px-6 lg:px-8'}>
          <div className={`flex justify-between items-center ${
            isMobile ? 'flex-col gap-2' : 'flex-col sm:flex-row gap-4 sm:gap-0'
          }`}>
            <p className={`font-medium text-global-1 ${
              isMobile ? 'text-sm' : 'text-lg'
            }`}>IPS(Integrate Platform Service)</p>
            <p className={`font-medium text-global-1 ${
              isMobile ? 'text-sm' : 'text-lg'
            }`}>Oceanlife</p>
            <p className={`font-medium text-global-1 ${
              isMobile ? 'text-sm' : 'text-lg'
            }`}>Get Started</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className={`bg-global-5 ${isMobile ? 'py-8' : 'py-16 lg:py-24'}`}>
        <div className={`max-w-[1380px] mx-auto ${
          isMobile ? 'px-3' : 'px-4 sm:px-6 lg:px-8'
        }`}>
          <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16 lg:mb-24'}`}>
            <h1 className={`font-normal text-global-1 leading-tight ${
              isMobile ? 'text-2xl mb-2' : 'text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] mb-4 lg:mb-6'
            }`}>
              Live Seamlessly,
            </h1>
            <h2 className={`font-medium text-global-1 leading-tight bg-gradient-to-r from-[#5179bf] via-[#9d8de2] to-[#49acd1] bg-clip-text text-transparent ${
              isMobile ? 'text-2xl' : 'text-4xl sm:text-5xl lg:text-6xl xl:text-[80px]'
            }`}>
              Even at Sea - with Oceanlife
            </h2>
          </div>

          <div className="text-center">
            <p className={`font-medium text-global-4 ${
              isMobile ? 'text-sm mb-6' : 'text-base mb-8'
            }`}>
              Disease Prevention, Cost Reduction, Early Action
            </p>
            
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/images2/img_arrow_down.svg" 
                alt="Arrow Down" 
                className={isMobile ? 'w-3 h-3' : 'w-4 h-4'}
              />
              <p className={`font-normal uppercase text-global-1 tracking-wider ${
                isMobile ? 'text-xs' : 'text-xs'
              }`}>
                Scroll to Explore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Section */}
      <div className={`bg-global-2 ${isMobile ? 'py-8' : 'py-16 lg:py-20'}`}>
        <div className={`max-w-[1380px] mx-auto ${
          isMobile ? 'px-3' : 'px-4 sm:px-6 lg:px-8'
        }`}>
          <div className={`flex items-center ${
            isMobile ? 'flex-col gap-6' : 'flex-col lg:flex-row gap-8 lg:gap-16'
          }`}>
            <div className={isMobile ? 'w-full' : 'w-full lg:w-1/4'}>
              <div className={`mb-8 ${isMobile ? 'text-center' : 'text-center lg:text-left'}`}>
                <h3 className={`font-normal text-global-7 mb-2 ${
                  isMobile ? 'text-xl' : 'text-2xl lg:text-[34px]'
                }`}>
                  Start Oceanlife
                </h3>
                <p className={`font-normal text-global-3 ${
                  isMobile ? 'text-lg' : 'text-2xl lg:text-[34px]'
                }`}>
                  →Ocecare
                </p>
              </div>
            </div>

            <div className={`flex gap-4 ${
              isMobile ? 'w-full justify-center' : 'w-full lg:w-3/4 justify-end'
            }`}>
              <div className={`border border-global-3 rounded-lg ${
                isMobile ? 'px-2 py-1' : 'px-3 py-1.5'
              }`}>
                <p className={`uppercase text-global-6 mb-1 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>AI - SHALOM</p>
                <p className={`text-global-3 ${
                  isMobile ? 'text-base' : 'text-lg'
                }`}>01</p>
              </div>
              <div className={`border border-global-3 rounded-lg ${
                isMobile ? 'px-2 py-1' : 'px-3 py-1.5'
              }`}>
                <p className={`text-global-6 mb-1 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>PHR</p>
                <p className={`text-global-3 ${
                  isMobile ? 'text-base' : 'text-lg'
                }`}>02</p>
              </div>
              <div className={`border border-global-3 rounded-lg ${
                isMobile ? 'px-2 py-1' : 'px-3 py-1.5'
              }`}>
                <p className={`text-global-3 ${
                  isMobile ? 'text-base' : 'text-lg'
                }`}>03</p>
              </div>
            </div>
          </div>

          <div className={`flex justify-center ${isMobile ? 'mt-8' : 'mt-12'}`}>
            <div className={`relative w-full ${
              isMobile ? 'max-w-[350px]' : 'max-w-[996px]'
            }`}>
              <video 
                src="/video/OurPlatform_Prototype_Main2.mp4" 
                autoPlay
                muted
                loop
                playsInline
                controls
                className={`w-full h-auto border border-global-3 ${
                  isMobile ? 'rounded-lg shadow-[0px_20px_20px_#00000033]' : 'rounded-2xl shadow-[0px_40px_40px_#00000033]'
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Sections */}
      {/* Section 1 - Designed for Those who work at sea */}
      <div className="bg-global-5 py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto">
          {/* Progress Indicators */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-lg text-global-1">[01]</span>
            <div className="h-[1px] w-[280px] bg-global-1"></div>
            <span className="text-lg text-global-1">02</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">03</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">04</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5">
              <h2 className="text-4xl lg:text-[64px] font-normal text-global-1 leading-tight mb-8">
                Designed for Those who work at sea
              </h2>
            </div>

            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              <div className="mb-16">
                <p className="text-xl lg:text-2xl font-normal text-global-1 leading-relaxed mb-16">
                  Deploy core systems that adapt to physical constraints, remote locations, and high-risk environments — to deliver a new standard of life for those who live and work at sea.
                </p>

                <div className="flex items-center gap-4 mb-16">
                  <Button className="bg-global-1 text-global-7 px-7 py-2 rounded-full text-sm font-medium">
                    VIDEO
                  </Button>
                  <span className="text-sm font-medium text-global-1 px-4">DETAILS</span>
                </div>
              </div>

              <div className="flex justify-center">
                                  <div className="relative max-w-[790px] w-full">
                    <video 
                      src="/video/OurPlatform_Prototype1.mp4" 
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-auto rounded-lg border border-global-1"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Trusted Through Capability */}
      <div className="bg-global-5 py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto">
          {/* Progress Indicators */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-lg text-global-1">01</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">[02]</span>
            <div className="h-[1px] w-[280px] bg-global-1"></div>
            <span className="text-lg text-global-1">03</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">04</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5">
              <h2 className="text-4xl lg:text-[64px] font-normal text-global-1 leading-tight mb-8">
                Trusted Through Capability
              </h2>
            </div>

            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              <div className="mb-16">
                <p className="text-xl lg:text-2xl font-normal text-global-1 leading-relaxed mb-16">
                  Designed with resilience. Proven in use. Trusted by those who rely on it to keep their people safe.
                </p>

                <ChipView 
                  items={chipItems}
                  selectedIndex={0}
                  className="mb-16"
                />
              </div>

              <div className="flex justify-center">
                                  <div className="relative max-w-[790px] w-full">
                    <video 
                      src="/video/OurPlatform_Prototype2.mp4" 
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-auto rounded-lg border border-global-1"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Align Employers with Operational Strength */}
      <div className="bg-global-5 py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto">
          {/* Progress Indicators */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-lg text-global-1">01</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">02</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">[03]</span>
            <div className="h-[1px] w-[280px] bg-global-1"></div>
            <span className="text-lg text-global-1">04</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5">
              <h2 className="text-4xl lg:text-[64px] font-normal text-global-1 leading-tight mb-8">
                Align Employers with Operational Strength
              </h2>
            </div>

            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              <div className="mb-16">
                <p className="text-xl lg:text-2xl font-normal text-global-1 leading-relaxed mb-16">
                  Simplify compliance, reduce risk, and reinforce workforce performance through connected intelligence.
                </p>

                <ChipView 
                  items={chipItems}
                  selectedIndex={0}
                  className="mb-16"
                />
              </div>

              <div className="flex justify-center">
                <div className="relative max-w-[790px] w-full">
                  <img 
                    src="/images2/img_image_1.png" 
                    alt="Operational Strength" 
                    className="w-full h-auto rounded-lg border border-global-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Start with Proven Patterns and Real Cases */}
      <div className="bg-global-5 py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto">
          {/* Progress Indicators */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-lg text-global-1">01</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">02</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">03</span>
            <div className="h-[1px] w-[30px] bg-global-1"></div>
            <span className="text-lg text-global-1">[04]</span>
            <div className="h-[1px] w-[280px] bg-global-1"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5">
              <h2 className="text-4xl lg:text-[64px] font-normal text-global-1 leading-tight mb-8">
                Start with Proven Patterns and Real Cases
              </h2>
            </div>

            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              <div className="mb-16">
                <p className="text-xl lg:text-2xl font-normal text-global-1 leading-relaxed mb-16">
                  Launch from a curated library of ready-made workflows built for maritime use — then adapt as you grow.
                </p>

                <div className="flex items-center gap-4 mb-16">
                  <Button className="bg-global-1 text-global-7 px-7 py-2 rounded-full text-sm font-medium">
                    VIDEO
                  </Button>
                  <span className="text-sm font-medium text-global-1 px-4">DETAILS</span>
                </div>
              </div>

              <div className="flex justify-center">
                                  <div className="relative max-w-[790px] w-full">
                    <video 
                      src="/video/Emergency Protocol.mp4" 
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-auto rounded-lg border border-global-1"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appreciation Section */}
              <div className="bg-white py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto">
          <div className="border-t border-global-1 pt-16 lg:pt-20 pb-16 lg:pb-20">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
              <div className="w-full lg:w-3/5">
                <h2 className="text-5xl lg:text-[100px] font-normal text-global-1 leading-tight">
                  We sincerely appreciate your interest
                </h2>
              </div>
              
              <div className="w-full lg:w-2/5">
                <p className="text-2xl lg:text-[34px] font-normal text-global-1 leading-relaxed">
                  For detailed information on features, benefits, and service usage, please submit a Demo Request. Our team will contact you within 2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Demo Process */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl font-normal text-global-1 mb-8">
              Our demo follows the steps below and is completely free of charge.
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-4 mb-12">
              {demoSteps.map((step, index) => (
                <div key={index} className="flex-1">
                  <p className="text-xs uppercase text-global-5 mb-2 tracking-wider">
                    / {step.number}
                  </p>
                  <p className="text-xl lg:text-2xl font-normal text-global-1 leading-relaxed whitespace-pre-line">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Request Demo Button */}
            <div className={`bg-global-3 rounded-lg flex justify-between items-center ${
              isMobile ? 'p-3' : 'p-5'
            }`}>
              <h3 className={`font-normal text-global-1 ${
                isMobile ? 'text-xl' : 'text-3xl lg:text-[50px]'
              }`}>
                Request a Demo
              </h3>
              <img 
                src="/images2/img_icon_arrow.svg" 
                alt="Arrow Icon" 
                className={isMobile ? 'w-8 h-8' : 'w-12 h-12'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className={`bg-global-1 ${isMobile ? 'py-8' : 'py-16 lg:py-24'}`}>
        <div className={`max-w-[1380px] mx-auto ${
          isMobile ? 'px-3' : 'px-4 sm:px-6 lg:px-8'
        }`}>
          <div className={`flex gap-12 lg:gap-16 ${
            isMobile ? 'flex-col gap-8' : 'flex-col lg:flex-row'
          }`}>
            <div className={isMobile ? 'w-full' : 'w-full lg:w-2/5'}>
              <h2 className={`font-normal text-global-7 leading-tight ${
                isMobile ? 'text-xl mb-6' : 'text-3xl lg:text-[50px] mb-8 lg:mb-12'
              }`}>
                Solving complex problems across all industries in days, not years.
              </h2>
              
              <Button 
                variant="outline" 
                className="border-global-7 text-global-7 hover:bg-global-7 hover:text-global-1 px-8 py-3 text-sm font-medium flex items-center gap-3"
              >
                See Our Impact
                <img 
                  src="/images2/img_icon_arrow_white_a700.svg" 
                  alt="Arrow" 
                  className="w-4 h-4"
                />
              </Button>
            </div>

            <div className={isMobile ? 'w-full' : 'w-full lg:w-3/5'}>
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className={`border-t border-global-7/10 flex items-start group hover:bg-black transition-colors duration-300 cursor-pointer ${
                    isMobile ? 'py-4 gap-4' : 'py-6 lg:py-8 gap-8 lg:gap-16'
                  }`}
                >
                  <span className={`font-medium text-global-2 mt-1 group-hover:text-white transition-colors duration-300 ${
                    isMobile ? 'text-lg' : 'text-xl lg:text-2xl'
                  }`}>
                    {index + 1}
                  </span>
                  <h3 className={`font-normal uppercase leading-tight transition-colors duration-300 group-hover:text-white text-global-2 ${
                    isMobile ? 'text-lg' : 'text-3xl lg:text-[50px]'
                  }`}>
                    {industry}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;