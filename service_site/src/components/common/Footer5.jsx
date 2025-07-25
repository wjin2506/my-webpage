import React from 'react';
import Button5 from '../ui/Button5';
import '../Home5.css';

const Footer5 = () => {
  const offeringLinks = [
    "Shipping",
    "Cruise & Passenger Shipping", 
    "Offshore Plant",
    "Shipbuilding & Ship Repair",
    "Port & Terminal Operations",
    "Naval",
    "Fisheries & Aquaculture",
    "Marine Insurance",
    "Marine Finance",
    "Marine Research & Surveying",
    "Maritime Education & Training",
    "Environmental Monitoring & Marine Safety",
    "Salvage & Wreck Removal"
  ];

  const impactLinks = [
    "Use case",
    "Develop case", 
    "Research case"
  ];

  const capabilityLinks = [
    "Ocecare",
    "AI",
    "Em'cy Action",
    "3min Medical Service",
    "WISER",
    "Mental Wellness",
    "Medical Support",
    "Education",
    "SIM"
  ];

  return (
    <footer className="w-full bg-global-5 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        {/* Left Column - Company Info */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[16%]">
          <p className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-global-1">
            © 2025 VMS Holdings Inc.<br />
            All rights reserved.
          </p>
          
          <div className="h-[1px] w-full lg:w-[204px] bg-global-1"></div>
          
          <div className="flex flex-col gap-4 sm:gap-5">
            <Button5
              variant="outline"
              className="border-global-1 text-global-1 rounded-[18px] px-6 sm:px-8 py-2 text-sm sm:text-base font-normal leading-5"
            >
              YOUTUBE
            </Button5>
            <Button5
              variant="outline"
              className="border-global-1 text-global-1 rounded-[18px] px-6 sm:px-8 py-2 text-sm sm:text-base font-normal leading-5"
            >
              Blog
            </Button5>
            <Button5
              variant="outline"
              className="border-global-1 text-global-1 rounded-[18px] px-6 sm:px-8 py-2 text-sm sm:text-base font-normal leading-5"
            >
              SNS LINK
            </Button5>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12 lg:gap-0 w-full lg:w-[70%] lg:mr-[166px]">
          {/* Offering Column */}
          <div className="flex flex-col gap-4 w-full sm:w-[40%]">
            <h3 className="text-xs font-normal leading-3 text-global-4 uppercase tracking-wider">
              OFFERING
            </h3>
            <ul className="flex flex-col gap-4" role="menu">
              {offeringLinks.map((link, index) => (
                <li key={index} role="menuitem">
                  <a 
                    href="#" 
                    className="text-sm sm:text-base font-normal leading-5 text-global-1 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Studies Column */}
          <div className="flex flex-col gap-4 w-full sm:w-[40%]">
            <h3 className="text-xs font-normal leading-3 text-global-4 uppercase tracking-wider">
              IMPACT STUDIES
            </h3>
            <ul className="flex flex-col gap-4 items-start" role="menu">
              {impactLinks.map((link, index) => (
                <li key={index} role="menuitem">
                  <a 
                    href="#" 
                    className="text-sm sm:text-base font-normal leading-5 text-global-1 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <h3 className="text-xs font-normal leading-3 text-global-4 uppercase tracking-wider">
              CAPABILITIES
            </h3>
            <ul className="flex flex-col gap-4" role="menu">
              {capabilityLinks.map((link, index) => (
                <li key={index} role="menuitem">
                  <a 
                    href="#" 
                    className="text-sm sm:text-base font-normal leading-5 text-global-1 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer5; 