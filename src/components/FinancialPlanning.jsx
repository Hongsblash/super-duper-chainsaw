import React from 'react';
import { Button } from '@mui/material';
import './FinancialPlanning.css';

const FinancialPlanning = ({ changeView }) => {
  return (
    <div className="financial-planning">
      <h1>Financial Planning</h1>
      <p>
        Our financial planning services are designed to help individuals and businesses achieve their financial goals. We provide comprehensive financial advice, including budgeting, investment management, retirement planning, and risk management. Our team of experts is dedicated to helping clients make informed decisions and develop a roadmap to financial success.
      </p>
      <Button
        className="financial-planning-button"
        variant="contained"
        onClick={() => changeView('Home')}
      >
        Go Back
      </Button>
    </div>
  );
};

export default FinancialPlanning;
