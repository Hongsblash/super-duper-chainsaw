import React from 'react';
import './ServicesSection.css';
import { FaCalculator, FaBriefcase, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { Button } from '@mui/material';

const ServicesSection = ({ changeView }) => {
  return (
    <section className="services-section">
      <h2>Our Expert Services</h2>
      <p>Experience the benefits of working with professionals</p>
      <div className="services-grid">
        <div className="service-box">
          <Button onClick={() => changeView('taxationAndAccounting')} className="service-button">
            <FaCalculator className="service-icon" />
            Taxation and Accounting
          </Button>
        </div>
        <div className="service-box">
          <Button onClick={() => changeView('businessAdvisory')} className="service-button">
            <FaBriefcase className="service-icon" />
            Business Advisory
          </Button>
        </div>
        <div className="service-box">
          <Button onClick={() => changeView('innovation')} className="service-button">
            <FaLightbulb className="service-icon" />
            Innovation
          </Button>
        </div>
        <div className="service-box">
          <Button onClick={() => changeView('financialPlanning')} className="service-button">
            <FaChartLine className="service-icon" />
            Financial Planning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
