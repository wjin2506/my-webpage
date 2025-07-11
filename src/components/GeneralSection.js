import React, { useState, useEffect } from "react";
import "./GeneralSection.css";

const slides = [
  {
    label: "AIPCON 6",
    title: "Powering Outcomes With Palantir AIP in Real Time ↗",
    image: "/image/generalimage.png"
  },
  {
    label: "CYBERNETIC",
    title: "Driving AI Functions",
    image: "/image/generalimage.png"
  },
  {
    label: "CEO Greeting",
    title: "Designed for OCECARE Users ↗",
    image: "/image/generalimage.png"
  },
  {
    label: "회사소개 영상",
    title: "회사 소개 영상입니다.",
    image: "/image/generalimage.png"
  }
];

const GeneralSection = () => {
  // 분기 1: 메모리 저장 - 탭 상태를 localStorage에 저장
  const [activeSlide, setActiveSlide] = useState(() => {
    const saved = localStorage.getItem('generalSection-activeSlide');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  // 분기 1: 상태 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('generalSection-activeSlide', activeSlide.toString());
  }, [activeSlide]);

  return (
    <section className="general-section">
      <div className="general-tabs-row">
        <div className="general-tabs">
          {slides.map((slide, idx) => (
            <button
              key={slide.label}
              className={`general-tab${idx === activeSlide ? " active" : ""}`}
              onClick={() => setActiveSlide(idx)}
            >
              {slide.label}
            </button>
          ))}
        </div>
        <button className="see-all-btn">SEE ALL</button>
      </div>
      
      <div className="general-image-wrapper fade-slide">
        <img 
          src={process.env.PUBLIC_URL + slides[activeSlide].image} 
          alt={slides[activeSlide].title}
          className="general-main-image"
        />
        <div className="general-image-overlay">
          <div className="general-image-label">{slides[activeSlide].label}</div>
          <div className="general-image-title">{slides[activeSlide].title}</div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSection; 