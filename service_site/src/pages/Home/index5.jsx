import React, { useState } from 'react';
import Header2 from '../../components/common/Header2';
import Footer5 from '../../components/common/Footer5';
import Button5 from '../../components/ui/Button5';
import '../../components/Home5.css';

const Home5 = () => {
  const [selectedTab, setSelectedTab] = useState('01');

  const tabData = [
    { id: '01', label: 'Ocealife', active: true },
    { id: '02', label: 'Ocecare', active: false },
    { id: '03', label: '3min Medical Service', active: false }
  ];

  const industries = [
    { number: '1', name: 'Shipping', active: true },
    { number: '2', name: 'Cruise & Passenger Shipping', active: false },
    { number: '3', name: 'Offshore Plant', active: false },
    { number: '4', name: 'Shipbuilding & Ship Repair', active: false },
    { number: '5', name: 'Port & Terminal Operations', active: false },
    { number: '6', name: 'Naval', active: false },
    { number: '7', name: 'Fisheries & Aquaculture', active: false },
    { number: '8', name: 'Marine Insurance', active: false },
    { number: '9', name: 'Marine Finance', active: false },
    { number: '10', name: 'Marine Research & Surveying', active: false },
    { number: '11', name: 'Maritime Education & Training', active: false },
    { number: '12', name: 'Environmental Monitoring & Marine Safety', active: false },
    { number: '13', name: 'Salvage & Wreck Removal', active: false }
  ];

  const demoSteps = [
    { number: '01', title: 'Demo \nRequest' },
    { number: '02', title: 'Representative \nContact' },
    { number: '03', title: 'Access Link \nShared' },
    { number: '04', title: 'Client Identification \nNumber Entry' },
    { number: '05', title: 'Full Access \nGranted' }
  ];

  return (
    <div className="home5-container w-full bg-global-3">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images5/img_.png')" }}>
        <Header2 />
        
        {/* Hero Content */}
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1380px] mx-auto">
            <img 
              src="/images5/img_logo_simlogo.svg" 
              alt="SIM Logo" 
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[528px] h-auto mb-8 sm:mb-12 lg:mb-16"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-global-4 py-6 sm:py-8">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-base sm:text-lg font-medium leading-5 sm:leading-6 text-global-1">
              IPS(Integrate Platform Service)
            </p>
            <p className="text-base sm:text-lg font-medium leading-5 sm:leading-6 text-global-1 text-center">
              Ocealife
            </p>
            <p className="text-base sm:text-lg font-medium leading-5 sm:leading-6 text-global-1 text-right">
              Get Started
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-global-4 py-16 sm:py-20 lg:py-60">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-normal leading-tight lg:leading-[97px] text-global-1 mb-2 sm:mb-4">
                Unlock access,
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-medium leading-tight lg:leading-[97px] bg-gradient-to-r from-[#5179bf] via-[#9d8de2] to-[#49acd1] bg-clip-text text-transparent">
                surface hidden opportunities,
              </h1>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-normal leading-tight lg:leading-[97px] text-global-1">
              and drive smarter efficiency
            </h1>
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base font-medium leading-5 text-global-3 mb-6 sm:mb-8">
              It is no longer optional — it is required to survive.
            </p>
            
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <img 
                src="/images/img_arrow_down.svg" 
                alt="Scroll down" 
                className="w-4 h-4"
              />
              <p className="text-xs font-normal leading-3 text-global-1 uppercase tracking-wider">
                Scroll to Explore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start SIM Section */}
      <div className="relative bg-cover bg-center bg-no-repeat bg-global-1" style={{ backgroundImage: "url('/images/img_imagevideo.png')" }}>
        <div className="py-16 sm:py-20 lg:py-20">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-0">
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[78px] text-global-5 lg:self-center lg:w-auto">
                Start SIM
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:ml-auto">
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 text-base sm:text-lg font-medium leading-5 sm:leading-6 rounded-lg border transition-colors ${
                      tab.id === selectedTab
                        ? 'border-global-5 text-global-5 bg-transparent' :'border-global-6 text-global-6 bg-transparent'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features List Section */}
      <div className="bg-global-4">
        {/* Intelligence for Maritime Workforce */}
        <div className="py-16 sm:py-20 lg:py-25">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6 sm:gap-8 mb-4 sm:mb-5">
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">
                [01]
              </p>
              <div className="h-[1px] w-full max-w-[200px] sm:max-w-[280px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">02</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">03</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">04</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[76px] text-global-1 lg:w-[40%] lg:self-center">
                Intelligence for the Maritime Workforce
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-6 sm:leading-7 lg:leading-7 text-global-1 lg:w-[58%]">
                Maritime operations demand more than management — they require understanding. SIM is built to surface insight from complexity — blending domain expertise, patented systems, and vertical AI to empower the people who move the ocean economy.
              </p>
            </div>
          </div>
        </div>

        {/* Patented for Maritime Edge */}
        <div className="py-16 sm:py-20 lg:py-25">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6 sm:gap-8 mb-4 sm:mb-5">
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">01</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">[02]</p>
              <div className="h-[1px] w-full max-w-[200px] sm:max-w-[280px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">03</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">04</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[76px] text-global-1 lg:w-[40%] lg:self-center">
                Patented for the Maritime Edge
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-6 sm:leading-7 lg:leading-7 text-global-1 lg:w-[58%]">
                SIM is powered by a portfolio of field-tested maritime patents — enabling it to operate natively within the constraints of vessels, offshore platforms, and high-latency networks. Built not on assumptions, but on operational history at sea.
              </p>
            </div>
          </div>
        </div>

        {/* Vertical AI */}
        <div className="py-16 sm:py-20 lg:py-25">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6 sm:gap-8 mb-4 sm:mb-5">
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">01</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">02</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">[03]</p>
              <div className="h-[1px] w-full max-w-[200px] sm:max-w-[280px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">04</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[76px] text-global-1 lg:w-[40%] lg:self-center">
                Vertical AI, Trained on a Million Maritime Records
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-6 sm:leading-7 lg:leading-7 text-global-1 lg:w-[58%]">
                We do not generalize AI — we specialize it. With over one million maritime-specific data points, SIM's vertical AI models are trained exclusively on labor conditions, vessel operations, and compliance risks. This enables real-time decisions grounded in the real world — by rank, by duty, by sea state.
              </p>
            </div>
          </div>
        </div>

        {/* Proven Control */}
        <div className="py-16 sm:py-20 lg:py-25">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6 sm:gap-8 mb-4 sm:mb-5">
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">01</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">02</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">03</p>
              <div className="h-[1px] w-6 sm:w-[30px] bg-global-1"></div>
              <p className="text-base sm:text-lg font-normal leading-5 sm:leading-6 text-global-1">[04]</p>
              <div className="h-[1px] w-full max-w-[200px] sm:max-w-[280px] bg-global-1"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[76px] text-global-1 lg:w-[40%] lg:self-center">
                Proven Control Across the Stack
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-6 sm:leading-7 lg:leading-7 text-global-1 lg:w-[58%]">
                From edge sensors to executive dashboards, SIM connects the full data stack — surfacing patterns, logging anomalies, and syncing decisions in real time. Built for command. Designed for trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Appreciation Section */}
      <div className="bg-global-5 py-16 sm:py-20 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-global-1 pt-16 sm:pt-20">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-6xl lg:text-[100px] font-normal leading-tight lg:leading-[120px] text-global-1 lg:w-[56%] lg:self-center">
                We sincerely appreciate your interest
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-8 sm:leading-10 lg:leading-10 text-global-1 lg:w-[32%]">
                For detailed information on features, benefits, and service usage, please submit a Demo Request. Our team will contact you within 2 business days.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              <p className="text-xl sm:text-2xl lg:text-2xl font-normal leading-7 sm:leading-8 lg:leading-8 text-global-1 text-center">
                Our demo follows the steps below and is completely free of charge.
              </p>

              <div className="flex flex-col sm:flex-row justify-end gap-8 sm:gap-0 sm:justify-between">
                {demoSteps.map((step, index) => (
                  <div key={step.number} className="flex flex-col gap-1 sm:gap-1.5 w-full sm:w-auto">
                    <p className="text-xs font-normal leading-3 text-global-4 uppercase tracking-wider">
                      / {step.number}
                    </p>
                    <p className="text-xl sm:text-2xl lg:text-2xl font-normal leading-6 sm:leading-7 lg:leading-7 text-global-1 whitespace-pre-line">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-global-2 px-4 sm:px-5 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 self-end w-full sm:w-[74%]">
                <h3 className="text-3xl sm:text-4xl lg:text-[50px] font-normal leading-tight lg:leading-[61px] text-global-1">
                  Request a Demo
                </h3>
                <img 
                  src="/images/img_icon_arrow.svg" 
                  alt="Arrow" 
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-global-1 py-16 sm:py-20 lg:py-29">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-0">
            <div className="flex flex-col gap-8 sm:gap-10 w-full lg:w-[42%]">
              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-normal leading-tight lg:leading-[60px] text-global-5 lg:w-[74%]">
                Solving complex problems across all industries in days, not years.
              </h2>
              <Button5
                variant="outline"
                className="border-global-1 text-global-1 bg-transparent px-6 sm:px-8 lg:px-[34px] py-2 sm:py-2.5 text-sm font-medium leading-4 w-auto"
                rightImage={{ src: "/images5/img_icon_arrow.svg", width: 16, height: 16 }}
              >
                See Our Impact
              </Button5>
            </div>

            <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:self-center">
              {industries.map((industry, index) => (
                <div 
                  key={industry.number}
                  className={`flex flex-col sm:flex-row justify-start items-start border-t border-global-6 py-5 sm:py-6 px-2 sm:px-2.5 gap-4 sm:gap-0 ${
                    index === 0 ? '' : ''
                  }`}
                >
                  <p className={`text-xl sm:text-2xl lg:text-2xl font-medium leading-7 sm:leading-8 lg:leading-8 w-auto sm:w-auto ${
                    industry.active ? 'text-global-2' : 'text-global-2'
                  } ${index === 0 ? 'mt-1' : 'mt-1'}`}>
                    {industry.number}
                  </p>
                  <p className={`text-3xl sm:text-4xl lg:text-[50px] font-normal leading-tight lg:leading-[61px] uppercase self-center ${
                    industry.active ? 'text-global-5' : 'text-global-2'
                  } ${index === 0 ? 'sm:ml-[100px]' : index === 2 || index === 5 || index === 7 ? 'sm:ml-[54px]' : index === 1 || index === 4 || index === 9 || index === 10 || index === 11 ? '' : 'sm:ml-[54px]'} ${
                    index === 1 || index === 4 || index === 9 || index === 10 || index === 11 ? 'lg:w-[90%]' : 'w-auto'
                  } ${index === 3 || index === 6 ? 'sm:mr-[26px] lg:mr-[54px]' : ''}`}>
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer5 />
    </div>
  );
};

export default Home5;