import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import TabSection from './TabSection';
import MissionSection from './MissionSection';
import Carrers from '../../components/Carrers';
import CTASection from './CTASection';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-global-5">
      <Header />
      <main>
        <HeroSection />
        <TabSection />
        <MissionSection />
        <Carrers />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;