import React from 'react';
import './ServicesSection.css';
import { FaCalculator, FaBriefcase, FaLightbulb, FaChartLine } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Expert Services</h2>
      <p>Experience the benefits of working with professionals</p>
      <div className="services-grid">
        <div className="service-box">
          <button onClick={() => alert("Link to Taxation and Accounting page")}>
            <FaCalculator className="service-icon" />
            Taxation and Accounting
          </button>
        </div>
        <div className="service-box">
          <button onClick={() => alert("Link to Business Advisory page")}>
            <FaBriefcase className="service-icon" />
            Business Advisory
          </button>
        </div>
        <div className="service-box">
          <button onClick={() => alert("Link to Innovation page")}>
            <FaLightbulb className="service-icon" />
            Innovation
          </button>
        </div>
        <div className="service-box">
          <button onClick={() => alert("Link to Financial Planning page")}>
            <FaChartLine className="service-icon" />
            Financial Planning
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
