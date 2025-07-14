import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('Maritime Blockchain');

  const tabs = [
    'Maritime Blockchain',
    'Who is Vemans?',
    'Oceanlife, Reinforced',
    'The Maritime AI Imperative',
    'Ocean First, Health Always'
  ];

  const tabContent = [
    {
      title: 'Maritime Blockchain',
      subtitle: 'The fundamental premise of maritime blockchain↗',
      backgroundImage: '/image/img_1kjd92i4ocpxtxcym86mbya_1.png'
    },
    {
      title: 'Who is Vemans?',
      subtitle: 'Who is Vemans, working alongside VMS Holdings?↗',
      backgroundImage: '/image/img_1pgiyogmjoeyqhit7y4d4wq_1.png'
    },
    {
      title: 'Oceanlife, Reinforced',
      subtitle: 'Enhancing Maritime Healthcare Infrastructure↗',
      backgroundImage: '/image/img_11fcoqil5eswk1vzs1mrlra_1.png'
    },
    {
      title: 'The Maritime AI Imperative',
      subtitle: 'Why the Ocean Industry Demands AI — and Why We Are Building It↗',
      backgroundImage: '/image/img_1pgiyogmjoeyqhit7y4d4wq_1_709x1350.png'
    },
    {
      title: 'Ocean First, Health Always',
      subtitle: 'Why We Started with the Ocean and Why We Began with Healthcare↗',
      backgroundImage: '/image/img_1pgiyogmjoeyqhit7y4d4wq_1_1.png'
    }
  ];

  const activeContent = tabContent.find(content => content.title === activeTab) || tabContent[0];

  return (
    <section className="bg-global-4 py-12 sm:py-16 lg:py-[100px]">
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-8 sm:mb-12 lg:mb-20">
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-3 w-full lg:flex-1 mb-4 lg:mb-0">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 lg:px-4 py-2 lg:py-2 text-sm sm:text-base lg:text-lg font-medium leading-5 sm:leading-6 lg:leading-[22px] rounded-sm border transition-colors ${
                  activeTab === tab
                    ? 'bg-global-5 text-global-1 border-transparent' :'bg-global-5 text-global-2 border-transparent hover:text-global-1'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <Button 
            variant="outline"
            size="small"
            className="text-sm lg:text-sm font-normal leading-4 lg:leading-[17px] px-3 sm:px-4 lg:px-4 py-2 lg:py-2 border border-global-1 rounded-sm"
          >
            SEE ALL
          </Button>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          <div className="flex flex-nowrap gap-4 lg:gap-4 overflow-x-auto lg:overflow-x-visible">
            <div 
              className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[1350px] h-[400px] sm:h-[500px] lg:h-[708px] bg-cover bg-center bg-no-repeat rounded border border-transparent"
              style={{ backgroundImage: `url('${activeContent.backgroundImage}')` }}
            >
              <div className="bg-global-1 rounded p-4 sm:p-5 lg:p-5 h-full flex flex-col justify-start items-start">
                <div className="bg-global-2 rounded-md p-4 sm:p-5 lg:p-5 shadow-[0px_4px_20px_#888888ff] max-w-[280px] sm:max-w-[350px] lg:max-w-[40%] mt-4 sm:mt-5 lg:mt-5">
                  <p className="text-sm sm:text-base lg:text-base font-normal leading-5 lg:leading-5 text-global-4 mb-2 sm:mb-3 lg:mb-[10px]">
                    {activeContent.title}
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-[34px] font-normal leading-6 sm:leading-8 lg:leading-[40px] text-global-4">
                    {activeContent.subtitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;