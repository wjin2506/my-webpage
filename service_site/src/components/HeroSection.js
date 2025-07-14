import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-video-background">
        <video
          src={process.env.PUBLIC_URL + '/video/intro.mp4'}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-text-container">
        <h1 className="hero-title animate-up">A Great Place to Work</h1>
        <p className="hero-subtitle animate-up" style={{ animationDelay: '0.2s' }}>
          Powered by Domain-Driven<br />
          AI-Optimized Solutions
        </p>
      </div>
      <div className="scroll-indicator-img">
        <img src={process.env.PUBLIC_URL + '/image/main_scroll.png'} alt="Scroll to explore" />
      </div>
    </section>
  );
};

export default HeroSection; 