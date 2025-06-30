import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
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
      id: "about",
      typingWords: [
        "지속가능한 해양산업",
        "특수성을 이해하고 최적화된 솔루션 제공"
      ],
      desc: "우리는 사람을 이해하고 지속가능한 해양산업을 만듭니다."
    },
    {
      id: "business",
      typingWords: [
        "Business Area",
        "스타트업 빠른 대응, 사람이 미래다"
      ],
      desc: "VMS는 스타트업의 빠른 움직임으로 미래를 엽니다."
    },
    {
      id: "joining",
      typingWords: [
        "Oceanlife",
        "특수 근로환경에 최적화된 Life Chain 생태계"
      ],
      desc: "우리의 기술로 더 나은 해양 환경을 만들어갑니다."
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <Header 
        activeSection={activeSection} 
        onSetActive={handleSetActive} 
      />

      {/* Hero Section */}
      <HeroSection onDownload={handleDownload} />

      {/* Content Sections */}
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          typingWords={section.typingWords}
          desc={section.desc}
        />
      ))}
    </div>
  );
}

export default App;
