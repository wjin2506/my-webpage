import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
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
        
        <div className="footer-content">
          <div className="footer-column">
            <h4>OFFERING</h4>
            <ul>
              <li>Shipping</li>
              <li>Cruise & Passenger Shipping</li>
              <li>Offshore Plant</li>
              <li>Shipbuilding & Ship Repair</li>
              <li>Port & Terminal Operations</li>
              <li>Naval</li>
              <li>Fisheries & Aquaculture</li>
              <li>Marine Insurance</li>
              <li>Marine Finance</li>
              <li>Marine Research & Surveying</li>
              <li>Maritime Education & Training</li>
              <li>Environmental Monitoring & Marine Safety</li>
              <li>Salvage & Wreck Removal</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>IMAPCT STUDIES</h4>
            <ul>
              <li>Use case</li>
              <li>Develop case</li>
              <li>Research case</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>CAPABILITIES</h4>
            <ul>
              <li>Ocecare</li>
              <li>AI</li>
              <li>Em'cy Action</li>
              <li>3min Medical Service</li>
              <li>WISER</li>
              <li>Mental Wellness</li>
              <li>Medical Support</li>
              <li>Education</li>
              <li>SIM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 