import React, { useState, useEffect, useRef } from "react";
import "./GeneralSection.css";

const slides = [
  {
    label: "Maritime Blockchain",
    title: "The fundamental premise of maritime blockchain↗",
    image: "/image/B1.png",
    link: "https://vmsblog.com/the-fundamental-premise-of-maritime-blockchain-acf673110b13"
  },
  {
    label: "Who is Vemans?",
    title: "Who is Vemans, working alongside VMS Holdings?↗",
    image: "/image/B2.png",
    link: "https://vmsblog.com/who-is-vemans-working-alongside-vms-holdings-421653ccd690"
  },
  {
    label: "Oceanlife, Reinforced",
    title: "Enhancing Maritime Healthcare Infrastructure↗",
    image: "/image/B3.png",
    link: "https://vmsblog.com/enhancing-maritime-healthcare-infrastructure-c1c638363e76"
  },
  {
    label: "The Maritime AI Imperative",
    title: "Why the Ocean Industry Demands AI — and Why We Are Building It↗",
    image: "/image/B4.png",
    link: "https://vmsblog.com/why-the-ocean-industry-demands-ai-and-why-we-are-building-it-3b98468f21b0"
  },
  {
    label: "Ocean First, Health Always",
    title: "Why We Started with the Ocean and Why We Began with Healthcare↗",
    image: "/image/B5.png",
    link: "https://vmsblog.com/why-we-started-with-the-ocean-and-why-we-began-with-healthcare-3665c530ee7f"
  }
];

const GeneralSection = () => {
  // 분기 1: 메모리 저장 - 탭 상태를 localStorage에 저장
  const [activeSlide, setActiveSlide] = useState(() => {
    const saved = localStorage.getItem('generalSection-activeSlide');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  // 호버 상태 관리
  const [isHovering, setIsHovering] = useState(false);

  // 터치 스와이프 관리
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 마우스 드래그 관리
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // 프로그레스 바 상태 관리
  const [progress, setProgress] = useState(0);
  
  // interval 관리를 위한 ref
  const intervalRef = useRef(null);

  // 분기 1: 상태 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('generalSection-activeSlide', activeSlide.toString());
  }, [activeSlide]);

  // 수동으로 슬라이드 변경하는 함수
  const changeSlide = (newSlide) => {
    setActiveSlide(newSlide);
    setProgress(0);
    // 기존 interval 정리하고 새로 시작
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // 호버 중이 아니면 새로운 interval 시작
    if (!isHovering) {
      startAutoSlide();
    }
  };

  // 자동 슬라이드 시작 함수
  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setProgress(0);
    
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          setActiveSlide(current => {
            const next = (current + 1) % slides.length;
            return next;
          });
          return 0;
        }
        return newProgress;
      });
    }, 100);
  };

  // 자동 슬라이드 기능
  useEffect(() => {
    if (isHovering) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }
    
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  // 컴포넌트 마운트 시 자동 슬라이드 시작
  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // 이전/다음 슬라이드 함수
  const nextSlide = () => {
    const newSlide = (activeSlide + 1) % slides.length;
    changeSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (activeSlide - 1 + slides.length) % slides.length;
    changeSlide(newSlide);
  };

  // 터치 스와이프 핸들러
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // 마우스 드래그 핸들러
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMouseStart(e.clientX);
    e.preventDefault(); // 텍스트 선택 방지
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || !mouseStart) return;
    
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setIsDragging(false);
    setMouseStart(0);
    setMouseEnd(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setMouseStart(0);
    setMouseEnd(0);
  };

  return (
    <section className="general-section">
      {/* 탭 네비게이션 */}
      <div 
        className="general-tabs-row"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="general-tabs">
          {slides.map((slide, idx) => (
            <button
              key={slide.label}
              className={`general-tab${idx === activeSlide ? " active" : ""}`}
              onClick={() => {
                changeSlide(idx);
              }}
              style={{
                '--progress': idx === activeSlide ? `${progress}%` : '0%'
              }}
            >
              <span className="tab-text-back">{slide.label}</span>
              <span className="tab-text-front">{slide.label}</span>
            </button>
          ))}
        </div>
        <a 
          href="https://vmsblog.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="see-all-btn"
        >
          SEE ALL
        </a>
      </div>
      
      {/* 캐러셀 컨테이너 */}
      <div 
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <div className="general-image-wrapper">
                <a 
                  href={slide.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="general-image-link"
                >
                  <img 
                    src={process.env.PUBLIC_URL + slide.image} 
                    alt={slide.title}
                    className="general-main-image"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 좌우 화살표 */}
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          <span>›</span>
        </button>

        {/* 인디케이터 */}
        <div className="carousel-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-indicator ${idx === activeSlide ? 'active' : ''}`}
              onClick={() => {
                changeSlide(idx);
              }}
            >
              {idx === activeSlide && (
                <div 
                  className="indicator-progress"
                  style={{ 
                    transform: `rotate(${progress * 3.6}deg)` // 360도 / 100% = 3.6도
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralSection; 