import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/app-release.apk";
    link.download = "app-release.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sections = [
    {
      id: "home",
      bg: "/1.jpg",
      typingWords: [
        "Vessel Maritimus-welfare Service",
        "Empowering Maritime Innovation",
        "Building a Sustainable Future",
        "Oceanlife: Beyond the Horizon"
      ],
      desc: "모두에게 유익한 솔루션",
      direction: "left"
    },
    {
      id: "about",
      bg: "/2.jpg",
      typingWords: [
        "지속가능한 해양산업",
        "특수성을 이해하고 최적화된 솔루션 제공"
      ],
      desc: "우리는 사람을 이해하고 지속가능한 해양산업을 만듭니다.",
      direction: "right"
    },
    {
      id: "business",
      bg: "/3.jpg",
      typingWords: [
        "Business Area",
        "스타트업 빠른 대응, 사람이 미래다"
      ],
      desc: "VMS는 스타트업의 빠른 움직임으로 미래를 엽니다.",
      direction: "left"
    },
    {
      id: "joining",
      bg: "/4.jpg",
      typingWords: [
        "Oceanlife",
        "특수 근로환경에 최적화된 Life Chain 생태계"
      ],
      desc: "우리의 기술로 더 나은 해양 환경을 만들어갑니다.",
      direction: "right"
    }
  ];

  return (
    <div className="App">
      {/* 상단 네비게이션 */}
      <motion.header
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo">VMH HOLDINGS</div>
        <nav className="nav-links">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={600}
              onSetActive={handleSetActive}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.id === "home" ? "Home" :
               section.id === "about" ? "About Us" :
               section.id === "business" ? "Business Field" :
               "Joining"}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={600} onSetActive={handleSetActive}>
            Contact
          </Link>
        </nav>
      </motion.header>

      {/* 섹션들 */}
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          background={section.bg}
          typingWords={section.typingWords}
          desc={section.desc}
          handleDownload={section.id === "home" ? handleDownload : null}
          slideDirection={section.direction}
        />
      ))}

      {/* Footer */}
      <footer id="contact" className="footer">
        <p><strong>VMS Holdings</strong> | 벤처인증, 25년 부산대표기업, 소셜벤처기업</p>
        <p>사업자등록번호 : 152-88-03359 | 개인정보 보호정책</p>
        <p>부산 영도구 태종로 727, 한국해양대학교 해양벤처진흥센터 704호</p>
        <p>Phone : +82) 02-2699-0790 | E-mail : cs@vmsforsea.com</p>
        <p>© (주)VMS Holdings 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ id, background, typingWords, desc, handleDownload, slideDirection }) {
  return (
    <motion.section
      id={id}
      className="section-container"
      initial={{
        opacity: 0,
        x: slideDirection === "left" ? -200 : 200,
        scale: 0.95
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* 배경 */}
      <div
        className="background-slide-dynamic"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + background})`
        }}
      />

      {/* 텍스트 */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1>
          <Typewriter
            words={typingWords}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>
        <p>{desc}</p>

        {handleDownload && (
          <motion.button
            className="download-btn"
            whileHover={{ scale: 1.1 }}
            onClick={handleDownload}
          >
            📥 APK 다운로드
          </motion.button>
        )}
      </motion.div>
    </motion.section>
  );
}

export default App;
