import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GeneralSection from './components/GeneralSection';
import OurPlatforms from './components/OurPlatforms';
import Carrers from './components/Carrers';
import CTASection from './pages/Home/CTASection';
import Footer from './components/Footer';
import GeneralPage from './components/GeneralPage';
import Platform from './components/Platform';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  useEffect(() => {
    // 모든 페이지 클래스 제거
    document.body.classList.remove('general-page', 'platform-page');
    
    // 현재 페이지에 맞는 클래스 추가
    if (location.pathname === '/general') {
      document.body.classList.add('general-page');
    } else if (location.pathname === '/platform') {
      document.body.classList.add('platform-page');
    }
    
    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove('general-page', 'platform-page');
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/general" element={<GeneralPage />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/" element={
          <div className="w-full min-h-screen bg-global-5">
            <Header />
            <main>
              <HeroSection />
              <GeneralSection />
              <OurPlatforms />
              <Carrers />
              <CTASection />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
