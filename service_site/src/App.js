import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header2 from './components/common/Header2';
import HeroSection from './components/HeroSection';
import GeneralSection from './components/GeneralSection';
import MissionSection from './pages/Home/MissionSection';
import Carrers from './components/Carrers';
import CTASection from './pages/Home/CTASection';
import Footer from './components/Footer';
import GeneralPage from './components/GeneralPage';
import Platform from './components/Platform';
import Home2 from './pages/Home/index2';
import Home3 from './pages/Home/index3';
import Home4 from './pages/Home/index4';
import Home5 from './pages/Home/index5';
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
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/home5" element={<Home5 />} />
        <Route path="/" element={
          <div className="w-full min-h-screen bg-global-5">
            <Header2 />
            <main>
              <HeroSection />
              <GeneralSection />
              <MissionSection />
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
