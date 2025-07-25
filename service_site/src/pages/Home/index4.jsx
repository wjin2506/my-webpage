import React, { useState } from 'react';
import Header2 from '../../components/common/Header2';
import Button4 from '../../components/ui/Button4';
import heroBgImage from '../../assets/images4/img_.png';
import wiserBgImage from '../../assets/images4/img_imagevideo.png';
import '../../components/Home4.css';

const Home4 = () => {
  const [selectedTab, setSelectedTab] = useState('01');

  const features = [
    {
      id: '01',
      title: 'Build the Circular Economy of Work',
      description: 'Employment should not expire — it should evolve. WISER is not a welfare system. It is a framework for sustainable labor — engineered to extend the value of work, protect its participants, and return dignity to the people who power the economy.'
    },
    {
      id: '02', 
      title: 'Networked Benefits',
      description: 'One subscription. Hundreds of outcomes. Through a single corporate subscription, workers gain seamless access to discounted services across verified partners — covering essentials from food and fuel to wellness and retail.'
    },
    {
      id: '03',
      title: 'Restart Anywhere, Anytime', 
      description: 'Your work history is not static. Through verified digital identity and integrated history logs, WISER allows workers to access career support — even after contracts end, across companies, across industries.'
    },
    {
      id: '04',
      title: 'Seamless Application. Zero Paperwork',
      description: 'WISER removes the friction. All services — from education credits to benefit activation — are digital-first. Pre-filled, policy-aware interfaces reduce manual input and eliminate dead time.'
    }
  ];

  const demoSteps = [
    { id: '01', title: 'Demo \nRequest' },
    { id: '02', title: 'Representative \nContact' },
    { id: '03', title: 'Access Link \nShared' },
    { id: '04', title: 'Client Identification \nNumber Entry' },
    { id: '05', title: 'Full Access \nGranted' }
  ];

  const footerSections = {
    offering: [
      'Shipping', 'Cruise & Passenger Shipping', 'Offshore Plant', 'Shipbuilding & Ship Repair',
      'Port & Terminal Operations', 'Naval', 'Fisheries & Aquaculture', 'Marine Insurance',
      'Marine Finance', 'Marine Research & Surveying', 'Maritime Education & Training',
      'Environmental Monitoring & Marine Safety', 'Salvage & Wreck Removal'
    ],
    impact: ['Use case', 'Develop case', 'Research case'],
    capabilities: [
      'Ocecare', 'AI', 'Emergency Action', '3min Medical Service', 'WISER',
      'Mental Wellness', 'Medical Support', 'Education', 'SIM'
    ]
  };

  return (
    <div className="home4-container w-full bg-global-3">
      {/* Hero Section */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header2 />
          
          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-global-1 leading-tight mb-4 sm:mb-6">
                Work well, Live fully,
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium bg-[linear-gradient(147deg,#5179bf_0%,#9d8de2_50%,#49acd1_100%)] bg-clip-text text-transparent leading-tight">
                Begin again
              </h2>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg font-medium text-global-2 mb-6 sm:mb-8 max-w-2xl">
              Work should not cost you your health, your security, or your future
            </p>
            
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <img 
                src="/images4/img_arrow_down.svg" 
                alt="Scroll down" 
                className="w-4 h-4"
              />
              <span className="text-xs font-normal text-global-1 uppercase tracking-wide">
                Scroll to Explore
              </span>
            </div>
          </div>
          
          {/* Bottom Logo */}
          <div className="pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
            <img 
              src="/images4/img_vector.svg" 
              alt="WISER Vector" 
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-global-4 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-lg font-medium text-global-1">
            <span>IPS(Integrate Platform Service)</span>
            <span>{"Wiser"}</span>
            <span>Get Started</span>
          </div>
        </div>
      </div>

      {/* Start WISER Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wiserBgImage})` }}
      >
        <div className="absolute inset-0 bg-global-1/80"></div>
        <div className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-global-4 text-center lg:text-left">
                Start WISER
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
                <div className="bg-transparent border border-global-4 rounded-lg px-4 sm:px-5 py-2 sm:py-3 min-w-[120px] sm:min-w-[150px]">
                  <span className="text-lg font-medium text-global-4">01</span>
                  <div className="text-sm text-global-4/60 mt-1">Ocealife</div>
                </div>
                <div className="bg-transparent border border-global-5 rounded-lg px-4 sm:px-5 py-2 sm:py-3 min-w-[120px] sm:min-w-[150px]">
                  <span className="text-lg font-medium text-global-5">02</span>
                  <div className="text-sm text-global-5 mt-1">Ocecare</div>
                </div>
                <div className="bg-transparent border border-global-5 rounded-lg px-4 sm:px-5 py-2 sm:py-3 min-w-[120px] sm:min-w-[150px]">
                  <span className="text-lg font-medium text-global-5">03</span>
                  <div className="text-sm text-global-5 mt-1">3min Medical Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-global-4">
        {features.map((feature, index) => (
          <div key={feature.id} className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Progress Indicators */}
              <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
                {features.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    <span className={`text-lg font-normal ${
                      item.id === feature.id ? 'text-global-1' : 'text-global-1'
                    }`}>
                      {item.id === feature.id ? `[${item.id}]` : item.id}
                    </span>
                    {idx < features.length - 1 && (
                      <div className={`h-[1px] ${
                        item.id === feature.id ? 'w-16 sm:w-20 lg:w-[280px] bg-global-1' : 'w-6 sm:w-8 bg-global-1'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                <div className="flex items-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-global-1 leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <div className="flex items-start">
                  <p className="text-lg sm:text-xl lg:text-2xl font-normal text-global-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Demo Request Section */}
      <div className="bg-global-5 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-global-1 pt-16 sm:pt-20 pb-16 sm:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20">
              <div className="flex items-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal text-global-1 leading-tight">
                  We sincerely appreciate your interest
                </h2>
              </div>
              <div className="flex items-start">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-global-1 leading-relaxed">
                  For detailed information on features, benefits, and service usage, please submit a Demo Request. Our team will contact you within 2 business days.
                </p>
              </div>
            </div>
            
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-xl sm:text-2xl font-normal text-global-1 mb-8 sm:mb-12">
                Our demo follows the steps below and is completely free of charge.
              </p>
              
              {/* Demo Steps */}
              <div className="flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
                {demoSteps.map((step) => (
                  <div key={step.id} className="flex flex-col items-start text-left">
                    <span className="text-xs font-normal text-global-3 uppercase tracking-wide mb-2">
                      / {step.id}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-normal text-global-1 leading-tight whitespace-pre-line">
                      {step.title}
                    </h4>
                  </div>
                ))}
              </div>
              
              {/* Demo Request Button */}
              <div className="flex justify-end">
                <div className="bg-global-2 rounded px-4 sm:px-5 py-4 sm:py-5 w-full sm:w-auto max-w-2xl">
                  <div className="flex justify-between items-center gap-4 sm:gap-8">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-global-1">
                      Request a Demo
                    </span>
                    <img 
                      src="/images4/img_icon_arrow.svg" 
                      alt="Arrow" 
                      className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-global-5 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6 sm:mb-8">
                <p className="text-base font-normal text-global-1 leading-relaxed">
                  © 2025 VMS Holdings Inc.<br />
                  All rights reserved.
                </p>
              </div>
              
              <div className="h-[1px] bg-global-1 mb-6 sm:mb-8"></div>
              
              <div className="flex flex-col gap-4 sm:gap-5">
                <Button4
                  variant="outline"
                  size="medium"
                  fullWidth
                  className="border-global-1 text-global-1 rounded-[18px] py-2"
                >
                  YOUTUBE
                </Button4>
                <Button4
                  variant="outline"
                  size="medium"
                  fullWidth
                  className="border-global-1 text-global-1 rounded-[18px] py-2"
                >
                  Blog
                </Button4>
                <Button4
                  variant="outline"
                  size="medium"
                  fullWidth
                  className="border-global-1 text-global-1 rounded-[18px] py-2"
                >
                  SNS LINK
                </Button4>
              </div>
            </div>
            
            {/* Offering */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-normal text-global-3 uppercase tracking-wide mb-4 sm:mb-6">
                Offering
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {footerSections.offering.map((item, index) => (
                  <p key={index} className="text-base font-normal text-global-1 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Impact Studies */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-normal text-global-3 uppercase tracking-wide mb-4 sm:mb-6">
                Impact Studies
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {footerSections.impact.map((item, index) => (
                  <p key={index} className="text-base font-normal text-global-1 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Capabilities */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-normal text-global-3 uppercase tracking-wide mb-4 sm:mb-6">
                Capabilities
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {footerSections.capabilities.map((item, index) => (
                  <p key={index} className="text-base font-normal text-global-1 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;