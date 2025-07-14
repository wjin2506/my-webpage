import React, { useEffect, useRef } from "react";
import "./OurPlatforms.css";

const platforms = [
  {
    name: "Oceanlife",
    desc: "Live Seamlessly, Even at Sea – with Oceanlife",
    number: "01",
    video: "/video/pm1.mp4"
  },
  {
    name: "WISER",
    desc: "Work well, Live fully, Begin again",
    number: "02",
    video: "/video/pm2.mp4"
  },
  {
    name: "SIM",
    desc: "Unlock access, surface hidden opportunities, and drive smarter efficiency",
    number: "03",
    video: "/video/pm3.mp4"
  }
];

const OurPlatforms = () => {
  const videoRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer 설정
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // 영상이 50% 이상 보일 때 재생
            video.play().catch(e => console.log('Video play failed:', e));
          } else {
            // 영상이 보이지 않을 때 정지
            video.pause();
          }
        });
      },
      {
        threshold: [0, 0.5, 1], // 0%, 50%, 100% 가시성에서 트리거
        rootMargin: '0px 0px -100px 0px' // 하단 100px 마진
      }
    );

    // 모든 비디오 요소 관찰 시작
    videoRefs.current.forEach((video) => {
      if (video) {
        observerRef.current.observe(video);
      }
    });

    // 클린업 함수
    return () => {
      if (observerRef.current) {
        videoRefs.current.forEach((video) => {
          if (video) {
            observerRef.current.unobserve(video);
          }
        });
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="our-platforms-section">
      <div className="our-platforms-desc">
        <p>
          We help people <span className="highlight">DO MORE</span> by making services <span className="highlight">MORE</span> accessible, affordable, and impactful in Maritime Enterprises from Home to the Frontlines
        </p>
      </div>
      <span className="our-platforms-title-link" style={{cursor: 'not-allowed'}}>
        <h2 className="our-platforms-title">Our Platforms</h2>
      </span>
      <div className="platforms-list-vertical">
        {platforms.map((p, idx) => (
          <React.Fragment key={p.name}>
            <div className="platform-card-link" style={{cursor: 'not-allowed'}}>
              <div className="platform-card">
                <div className="platform-number-top">{p.number}</div>
                <div className="platform-video-container">
                  <video 
                    ref={el => videoRefs.current[idx] = el}
                    src={p.video} 
                    className="platform-video" 
                    muted 
                    loop 
                    playsInline
                    preload="metadata"
                    onError={(e) => console.log('Video error:', e)}
                  />
                </div>
                <div className="platform-content">
                  <h3 className="platform-name-vertical">{p.name}</h3>
                  <p className="platform-desc-vertical">{p.desc}</p>
                </div>
              </div>
            </div>
            {idx < platforms.length - 1 && <div className="platform-divider-vertical" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurPlatforms; 