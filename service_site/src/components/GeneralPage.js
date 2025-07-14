import React, { useState } from 'react';
import Header2 from './Header2';
import './GeneralPage.css';

const GeneralPage = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => {
    setIsDemoOpen(true);
  };

  const closeDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <div className="general-page">
      {/* Header2 사용 */}
      <Header2 />
      
      {/* Top Section - 텍스트 먼저, 이미지 나중에 */}
      <section className="general-top-section">
        <div className="general-container">
          {/* Title and Description Row - 헤더 바로 아래 */}
          <div className="title-description-row">
            <div className="title-section">
              <h1 className="page-main-title">Own the Edge</h1>
            </div>
            <div className="description-section">
              <p className="main-description">
                Advanced technology is no longer optional for the maritime industry — it's essential to thrive.
              </p>
              <div className="ceo-letter-link">
                <a href="#ceo-letter" className="ceo-link">
                  Read CEO's Greeting Letter
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Section - 텍스트 아래로 이동 */}
          <div className="main-image-section">
            <div className="main-image-container">
              <img 
                className="main-business-image"
                src={process.env.PUBLIC_URL + "/image/General1image.png"}
                alt="Business professionals shaking hands"
              />
              <div className="play-overlay">
                <button className="play-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="white"/>
                  </svg>
                </button>
                <span className="play-text">Play Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="general-content">
        {/* Technology Section with Image */}
        <section className="technology-section">
          <div className="general-container">
            <div className="technology-title-section">
              <h2 className="technology-heading">
                Advanced technology is no longer optional for the Maritime Industry.
              </h2>
            </div>
            <div className="technology-content-section">
              <div className="technology-text-right">
                <p>
                  The advancement of technology is no longer a trend; it is the dominant force of our age. Humanity has always progressed through efficiency, and efficiency has always served profit. Today, the maritime industry stands at the precipice of radical transformation.
                </p>
                <p>
                  Yet even now, no technology has ever conquered nature — nor should it. Technology must be shaped to serve people, not the other way around. Only when it empowers life, does it earn its right to exist.
                </p>
                <p>
                  At VMS, we recognize that in an era of accelerating AI advancement, the ability to apply technology effectively is no longer optional — it is existential for any organization seeking to compete and endure. We align ourselves with our customers' missions, investing deeply to deliver real outcomes that advance their goals and sustain their competitiveness. This approach is at odds with commodity SaaS that has come to dominate the market. This philosophy stands in stark contrast to the commoditized SaaS models that dominate today's market — platforms designed for the lowest common denominator, offering marginal efficiencies but zero strategic value to the organizations that adopt them.
                </p>
                <p>
                  Our customers view technological progress as both a risk and a lever for competitive advantage — but only when they are able to shape it on their terms. Generic tools fail not because they lack features — but because they lack context. And without context, no system can adapt — let alone lead — in the high-stakes environments that define what's next. Technology is becoming more specialized and fragmented. Services must follow — not with generality, but with precision.
                </p>
                <p>
                  For these customers, VMS builds the domain-specific systems of tomorrow and delivers them today. We've moved beyond marginal gains to embed practical innovation into the operational backbone of modern maritime enterprise.
                </p>
                <div className="principle-box">
                  <div className="principle-header">
                    <span className="principle-icon">↗</span>
                    <span className="principle-label">Principle</span>
                  </div>
                  <p className="principle-text">
                    The first Principle : Technology must serve people — and we make it do so, where it matters most: at sea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Great Place to Work Section */}
        <section className="workplace-section">
          <div className="general-container">
            <div className="workplace-layout">
              <div className="workplace-left">
                <h2 className="workplace-main-title">A great place to work</h2>
              </div>
              
              <div className="workplace-right">
                <div className="workplace-subtitle">
                  <p>A great place to work is where technology unlocks opportunity, and every worker finds smarter ways to thrive.</p>
                </div>
                
                <div className="workplace-content">
                  <p>
                    At VMS, this is not a slogan — it is our mandate. We build systems that bring this vision to life in one of the world's most demanding and underserved environments: the maritime industry. For decades, critical inefficiencies in maritime operations have gone unaddressed. Essential services that workers on land take for granted — real-time communication, access to healthcare, streamlined workflows — remain either unavailable or painfully outdated at sea. At the same time, Enterprise are burdened by safety liabilities, regulatory complexity, and rising costs — all driven by outdated practices, unnecessary intermediaries, and inefficient procedures.
                  </p>
                  
                  <p>
                    We believe this is not a technical limitation. It is a failure of will — and of design. At VMS, we don't deliver generic platforms. We deliver domain-specific orchestration — tools engineered with the intelligence, speed, and precision necessary to solve real maritime challenges.
                  </p>
                  
                  <p>
                    Our systems lower operational risk, reduce cost, and improve compliance — while also giving workers on the frontlines the tools they need to stay safe, stay healthy, and stay connected. By digitizing and optimizing workflows that were once paper-based or non-existent, we help Enterprise protect their people, their budgets, and their futures. By enabling seamless access to welfare services, medical systems, and intelligent task automation, we help workers focus less on survival — and more on purpose.
                  </p>
                  
                  <p>
                    In a world where land-based industries are racing ahead with AI-powered solutions, maritime remains decades behind. With adoption rates below 17%, the sector is underserved, undervalued — and ripe for reinvention.
                  </p>
                  
                  <p>
                    We are not here to introduce technology for technology's sake.<br/>
                    We are here to make work better — tangibly, measurably, meaningfully.<br/>
                    Because advanced technology is no longer optional for the maritime industry.
                  </p>
                  
                  <p className="workplace-emphasis">
                    <strong>It is now the very condition for its survival.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products/Services Section */}
        <section className="products-section">
          <div className="general-container">
            <div className="products-list">
              <div className="product-item">
                <div className="product-header">
                  <span className="product-arrow">↳</span>
                  <h3 className="product-title">Oceanlife</h3>
                </div>
                <div className="product-content">
                  <span className="product-description">Eco-system for the people in maritime field</span>
                  <div className="product-explore">
                    <span>Explore Oceanlife</span>
                    <span className="explore-arrow">→</span>
                  </div>
                </div>
              </div>

              <div className="product-item">
                <div className="product-header">
                  <span className="product-arrow">↳</span>
                  <h3 className="product-title">WISER</h3>
                </div>
                <div className="product-content">
                  <span className="product-description">Support system for the the people in maritime field</span>
                  <div className="product-explore">
                    <span>Explore WISER</span>
                    <span className="explore-arrow">→</span>
                  </div>
                </div>
              </div>

              <div className="product-item">
                <div className="product-header">
                  <span className="product-arrow">↳</span>
                  <h3 className="product-title">SIM</h3>
                </div>
                <div className="product-content">
                  <span className="product-description">Operating System for the Modern Enterprise</span>
                  <div className="product-explore">
                    <span>Explore SIM</span>
                    <span className="explore-arrow">→</span>
                  </div>
                </div>
              </div>

              <div className="product-item">
                <div className="product-header">
                  <span className="product-arrow">↳</span>
                  <h3 className="product-title">VMS CI/BI Logo</h3>
                </div>
                <div className="product-content logo-content">
                  <div className="logo-section">
                    <p className="logo-description">Logo that contains the mission of VMS, A great place to work.</p>
                    
                    <div className="logo-downloads">
                      <button className="logo-download-btn">
                        <span>VMS LOGO</span>
                        <span className="download-icon">↓</span>
                      </button>
                      <button className="logo-download-btn">
                        <span>Oceanlife LOGO</span>
                        <span className="download-icon">↓</span>
                      </button>
                      <button className="logo-download-btn">
                        <span>WISER LOGO</span>
                        <span className="download-icon">↓</span>
                      </button>
                      <button className="logo-download-btn">
                        <span>SIM LOGO</span>
                        <span className="download-icon">↓</span>
                      </button>
                    </div>
                    
                    <p className="logo-disclaimer">
                      This page provides access to VMS's official logos for use by external partners, media, and project stakeholders. Please review the usage guidelines below before downloading or using any of the assets. Unauthorized modification or commercial misuse is strictly prohibited and may require prior approval from VMS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="get-started-section">
          <div className="general-container">
            <div className="get-started-layout">
              <div className="get-started-left">
                <h2 className="get-started-heading">
                  Get started with VMS in minutes.
                </h2>
              </div>
              
              <div className="get-started-right">
                <div className="demo-form-container">
                  <div className="form-card-section">
                    <div className="card-icon">+</div>
                    <p className="card-text">ADDING YOUR BUSINESS CARD ENABLES FASTER SERVICE SUPPORT</p>
                  </div>
                  
                  <div className="form-content">
                    <div className="form-group">
                      <label>FIRST NAME *</label>
                      <input type="text" />
                    </div>
                    
                    <div className="form-group">
                      <label>LAST NAME *</label>
                      <input type="text" />
                    </div>
                    
                    <div className="form-group">
                      <label>BUSINESS EMAIL ADDRESS *</label>
                      <input type="email" />
                    </div>
                    
                    <div className="form-group">
                      <label>PHONE NUMBER *</label>
                      <input type="tel" />
                    </div>
                    
                    <div className="form-group">
                      <label>JOB TITLE *</label>
                      <input type="text" />
                    </div>
                    
                    <div className="form-group">
                      <label>ENTERPRISE / INSTITUTION *</label>
                      <input type="text" />
                    </div>
                    
                    <div className="form-group">
                      <label>COUNTRY *</label>
                      <select>
                        <option>Select...</option>
                        <option>United States</option>
                        <option>South Korea</option>
                        <option>Japan</option>
                        <option>China</option>
                        <option>Singapore</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label>TELL US ABOUT YOUR PROJECT. A BIT OF CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER.</label>
                      <textarea rows="4" placeholder=""></textarea>
                    </div>
                    
                    <div className="form-group checkbox-group">
                      <label>OPT-IN TO RECEIVE VMS PRODUCT UPDATES</label>
                      <input type="checkbox" />
                    </div>
                    
                    <div className="form-group checkbox-group">
                      <label>OPT-IN TO PERSONALIZED SALES OUTREACH</label>
                      <input type="checkbox" />
                    </div>
                    
                    <div className="form-group checkbox-group">
                      <label>OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS</label>
                      <input type="checkbox" />
                    </div>
                    
                    <button className="form-submit-button">Submit</button>
                    
                    <div className="recaptcha-container">
                      <div className="recaptcha-checkbox">
                        <input type="checkbox" id="recaptcha" />
                        <label htmlFor="recaptcha">I'm not a robot</label>
                      </div>
                    </div>
                    
                    <div className="privacy-notice">
                      <p>Please see our <a href="#" className="privacy-link">Privacy Policy</a> regarding how we will handle this information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="general-container">
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

      {/* Demo Modal */}
      {isDemoOpen && (
        <div className="demo-modal-overlay" onClick={closeDemo}>
          <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="demo-close-btn" onClick={closeDemo}>×</button>
            <div className="demo-content">
              <h2>Request a Demo</h2>
              <p>Experience VMS maritime solutions firsthand</p>
              <button onClick={closeDemo}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralPage; 