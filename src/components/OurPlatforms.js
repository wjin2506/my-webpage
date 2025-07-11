import React from "react";
import { Link } from "react-router-dom";
import "./OurPlatforms.css";

const platforms = [
  {
    name: "Oceanlife",
    desc: "Live Seamlessly, Even at Sea – with Oceanlife",
    number: "01"
  },
  {
    name: "WISER",
    desc: "Work well. Live fully. Begin again.",
    number: "02"
  },
  {
    name: "SIM",
    desc: "Unlock access, surface hidden opportunities, and drive smarter efficiency",
    number: "03"
  }
];

const OurPlatforms = () => (
  <section className="our-platforms-section">
    <div className="our-platforms-desc">
      <p>
        We help people <span className="highlight">DO MORE</span> by making services <span className="highlight">MORE</span> accessible, affordable, and impactful in Maritime Enterprises from Home to the Frontlines
      </p>
    </div>
    <Link to="/platform" className="our-platforms-title-link">
      <h2 className="our-platforms-title">Our Platforms</h2>
    </Link>
    <div className="platforms-list-figma">
      {platforms.map((p, idx) => (
        <React.Fragment key={p.name}>
          <Link to="/platform" className="platform-row-link">
            <div className="platform-row">
              <div className="platform-left">
                <div className="logo-placeholder-figma" />
                <div className="desc-num-wrap">
                  <div className="platform-desc-figma">{p.desc}</div>
                  <div className="platform-number-figma">{p.number}</div>
                </div>
              </div>
              <div className="platform-name-figma">{p.name}</div>
            </div>
          </Link>
          {idx < platforms.length - 1 && <div className="platform-divider" />}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default OurPlatforms; 