import React from 'react';
import Header2 from './Header2';
import './Platform.css';

const Platform = () => {
  return (
    <div className="platform-page">
      {/* Header2 사용 */}
      <Header2 />
      
      {/* Top Section */}
      <section className="platform-top-section">
        <div className="platform-container">
          <div className="platform-header">
            <h1 className="platform-main-title">Platforms</h1>
            <div className="platform-description">
              <p>
                We help people do more by making services more accessible, affordable, and impactful in Maritime Enterprises from Home to the Frontlines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Products Section */}
      <section className="platform-products-section">
        <div className="platform-container">
          {/* Oceanlife */}
          <div className="platform-product">
            <div className="product-image">
              <img 
                src={process.env.PUBLIC_URL + "/image/plat1.png"} 
                alt="Oceanlife" 
                className="product-image-img"
              />
            </div>
            <div className="product-content">
              <h2 className="product-title">Live Seamlessly, Even at Sea - with Oceanlife</h2>
              <p className="product-description">
                Enable full access to shore-grade services, and build a work environment where people can truly perform.
              </p>
              <div className="product-explore">
                <span>Explore Oceanlife</span>
                <span className="explore-arrow">→</span>
              </div>
            </div>
          </div>

          {/* WISER */}
          <div className="platform-product">
            <div className="product-image">
              <img 
                src={process.env.PUBLIC_URL + "/image/plat2.png"} 
                alt="WISER" 
                className="product-image-img"
              />
            </div>
            <div className="product-content">
              <h2 className="product-title">Work well, Live fully, Begin again WISER is where your next chapter begins</h2>
              <p className="product-description">
                As society and technology accelerate, the people at sea must not be asked to stand still. Help them thrive — in work, in health, and across a lifetime.
              </p>
              <div className="product-explore">
                <span>Explore WISER</span>
                <span className="explore-arrow">→</span>
              </div>
            </div>
          </div>

          {/* SIM */}
          <div className="platform-product">
            <div className="product-image">
              <img 
                src={process.env.PUBLIC_URL + "/image/plat3.png"} 
                alt="SIM" 
                className="product-image-img"
              />
            </div>
            <div className="product-content">
              <h2 className="product-title">Unlock access, surface hidden opportunities, and drive smarter efficiency</h2>
              <p className="product-description">
                Develop and deploy technologies engineered for real operational conditions — not just to digitize, but to strengthen your competitiveness through systems built to match your environment.
              </p>
              <div className="product-explore">
                <span>Explore SIM</span>
                <span className="explore-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See Impact Section */}
      <section className="see-impact-section">
        <div className="platform-container">
          <div className="impact-content">
            <div className="impact-left">
              <h2 className="impact-title">See Impact</h2>
            </div>
            <div className="impact-right">
              <p className="impact-description">
                Our systems are deployed across complex, industrial environments to help organizations implement domain-specific solutions — fast, and where they're needed most.
              </p>
              <div className="impact-explore">
                <span>See Our Impact</span>
                <span className="explore-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="platform-container">
          <div className="footer-left">
            <div className="footer-copyright">
              <p>© 2025 VMS Holdings Inc.</p>
              <p>All rights reserved.</p>
            </div>
            
            <div className="footer-buttons">
              <button className="footer-btn">YOUTUBE</button>
              <button className="footer-btn">Blog</button>
              <button className="footer-btn">SNS LINK</button>
            </div>
          </div>
          
          <div className="footer-middle">
            <div className="footer-column">
              <h4 className="footer-title">OFFERING</h4>
              <ul className="footer-links">
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Cruise & Passenger Shipping</a></li>
                <li><a href="#">Offshore Plant</a></li>
                <li><a href="#">Shipbuilding & Ship Repair</a></li>
                <li><a href="#">Port & Terminal Operations</a></li>
                <li><a href="#">Naval</a></li>
                <li><a href="#">Fisheries & Aquaculture</a></li>
                <li><a href="#">Marine Insurance</a></li>
                <li><a href="#">Marine Finance</a></li>
                <li><a href="#">Marine Research & Surveying</a></li>
                <li><a href="#">Maritime Education & Training</a></li>
                <li><a href="#">Environmental Monitoring & Marine Safety</a></li>
                <li><a href="#">Salvage & Wreck Removal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-column">
              <div className="footer-section-group">
                <h4 className="footer-title">IMPACT STUDIES</h4>
                <ul className="footer-links">
                  <li><a href="#">Use case</a></li>
                  <li><a href="#">Develop case</a></li>
                  <li><a href="#">Research case</a></li>
                </ul>
              </div>
              
              <div className="footer-section-group">
                <h4 className="footer-title">CAPABILITIES</h4>
                <ul className="footer-links">
                  <li><a href="#">Ocecare</a></li>
                  <li><a href="#">AI</a></li>
                  <li><a href="#">Em'cy Action</a></li>
                  <li><a href="#">3min Medical Service</a></li>
                  <li><a href="#">WISER</a></li>
                  <li><a href="#">Mental Wellness</a></li>
                  <li><a href="#">Medical Support</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">SIM</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Platform; 