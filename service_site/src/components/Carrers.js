import React from "react";
import "./Carrers.css";

const Carrers = () => (
  <section className="carrers-section">
    <div className="carrers-container">
      <div className="carrers-image-side">
        <img 
          src={process.env.PUBLIC_URL + "/image/imageCarrers.png"} 
          alt="Carrers Team"
          className="carrers-main-image"
        />
      </div>
      <div className="carrers-content-side">
        <h1 className="carrers-title">
          There is so much left to build
        </h1>
        <p className="carrers-description">
          Vemans deliver domain-specific innovation for the maritime industry's most critical enterprises
        </p>
        <button className="carrers-cta-btn">
          LEARN MORE
        </button>
      </div>
    </div>
  </section>
);

export default Carrers; 