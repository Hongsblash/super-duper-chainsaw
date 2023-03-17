import React from 'react';
import { Button } from '@mui/material';
import './BusinessAdvisory.css';

const BusinessAdvisory = ({ changeView }) => {
  return (
    <div className="business-advisory">
      <h1>Business Advisory</h1>
      <p>
        Our business advisory services focus on helping organizations identify growth opportunities, improve performance, and optimize their operations. We provide strategic planning, financial analysis, risk management, and more to help businesses achieve their objectives.
      </p>
      <Button
        className="business-advisory-button"
        variant="contained"
        onClick={() => changeView('Home')}
      >
        Go Back
      </Button>
    </div>
  );
};

export default BusinessAdvisory;
