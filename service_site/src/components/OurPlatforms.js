import React from "react";
import "./OurPlatforms.css";

const OurPlatforms = () => {
  return (
    <section className="our-platforms-section">
      <div className="our-platforms-desc">
        <p>
          We help people <span className="highlight">DO MORE</span> by making services <span className="highlight">MORE</span> accessible, affordable, and impactful in Maritime Enterprises from Home to the Frontlines
        </p>
      </div>
      
      <div className="our-platforms-title-container">
        <h2 className="our-platforms-title">Our Platforms</h2>
      </div>
      
      <div className="platforms-list-container">
        
                 {/* Oceanlife Platform */}
         <div className="platform-row">
           <div className="platform-left">
             <div className="platform-text-section">
               <div className="platform-text-content oceanlife-spacing">
                 <p className="platform-description">
                   Live Seamlessly,<br />
                   Even at Sea - with Oceanlife
                 </p>
                 <p className="platform-number">01</p>
               </div>
              <img 
                src={process.env.PUBLIC_URL + "/image/img_vector.svg"} 
                alt="Oceanlife Platform" 
                className="platform-image"
              />
            </div>
          </div>
          <div className="platform-right">
            <h3 className="platform-name-large">Oceanlife</h3>
          </div>
        </div>

                 {/* WISER Platform */}
         <div className="platform-row">
           <div className="platform-left">
             <div className="platform-text-section">
               <div className="platform-text-content wiser-spacing">
                 <p className="platform-description">
                   Work well, Live fully, Begin again.<br />
                   WISER is where your next chapter begins.
                 </p>
                 <p className="platform-number">02</p>
               </div>
              <img 
                src={process.env.PUBLIC_URL + "/image/img_logo_simbol_wiser.svg"} 
                alt="WISER Platform" 
                className="platform-image"
              />
            </div>
          </div>
          <div className="platform-right">
            <h3 className="platform-name-large">WISER</h3>
          </div>
        </div>

        {/* SIM Platform */}
        <div className="platform-row">
          <div className="platform-left">
            <div className="platform-text-section">
              <div className="platform-text-content">
                <p className="platform-description">
                  Unlock access, surface hidden opportunities, and drive smarter efficiency
                </p>
                <p className="platform-number">03</p>
              </div>
              <div className="sim-icons-container">
                <img 
                  src={process.env.PUBLIC_URL + "/image/img_vector_gray_100.svg"} 
                  alt="SIM Icon 1" 
                  className="sim-icon sim-icon-1"
                />
                <img 
                  src={process.env.PUBLIC_URL + "/image/img_vector_gray_100_188x16.svg"} 
                  alt="SIM Icon 2" 
                  className="sim-icon sim-icon-2"
                />
                <img 
                  src={process.env.PUBLIC_URL + "/image/img_vector_gray_100_190x78.svg"} 
                  alt="SIM Icon 3" 
                  className="sim-icon sim-icon-3"
                />
              </div>
            </div>
          </div>
          <div className="platform-right">
            <h3 className="platform-name-large">SIM</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlatforms; 