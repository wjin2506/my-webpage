import React from 'react';
import Button from '../ui/Button';

const Footer = () => {
  const offeringLinks = [
    'Shipping',
    'Cruise & Passenger Shipping',
    'Offshore Plant',
    'Shipbuilding & Ship Repair',
    'Port & Terminal Operations',
    'Naval',
    'Fisheries & Aquaculture',
    'Marine Insurance',
    'Marine Finance',
    'Marine Research & Surveying',
    'Maritime Education & Training',
    'Environmental Monitoring & Marine Safety',
    'Salvage & Wreck Removal'
  ];

  const impactStudies = [
    'Use case',
    'Develop case',
    'Research case'
  ];

  const capabilities = [
    'Ocecare',
    'AI',
    'Emergency Action',
    '3min Medical Service',
    'WISER',
    'Mental Wellness',
    'Medical Support',
    'Education',
    'SIM'
  ];

  return (
    <footer className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6 lg:gap-8">
            <p className="text-base text-black leading-6">
              © 2025 VMS Holdings Inc.<br />
              All rights reserved.
            </p>
            
            <div className="h-[1px] w-full lg:w-[204px] bg-black"></div>
            
            <div className="flex flex-col gap-4 lg:gap-5">
              <Button 
                variant="outline" 
                fullWidth
                className="text-base py-2 rounded-full"
              >
                YOUTUBE
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                className="text-base py-2 rounded-full"
              >
                Blog
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                className="text-base py-2 rounded-full"
              >
                SNS LINK
              </Button>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-3/4 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
            {/* Offering Column */}
            <div className="flex-1">
              <h3 className="text-xs uppercase text-gray-600 mb-4 tracking-wider">
                Offering
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {offeringLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-base text-black hover:text-gray-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Studies Column */}
            <div className="flex-1 md:flex-none md:w-1/3">
              <h3 className="text-xs uppercase text-gray-600 mb-4 tracking-wider">
                Impact Studies
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {impactStudies.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-base text-black hover:text-gray-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities Column */}
            <div className="flex-1 md:flex-none md:w-1/3">
              <h3 className="text-xs uppercase text-gray-600 mb-4 tracking-wider">
                Capabilities
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {capabilities.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-base text-black hover:text-gray-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;