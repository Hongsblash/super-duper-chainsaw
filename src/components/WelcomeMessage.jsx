import React from 'react';
import './WelcomeMessage.css';
import { Button } from '@mui/material';

const WelcomeMessage = ({ changeView }) => {
  return (
    <div className="welcome-message">
      <h1>Welcome to ABC Accounting Firm</h1>
      <p>Your trusted partner for all your accounting needs</p>
      <Button
        className="welcome-button"
        variant="contained"
        onClick={() => changeView('About')}
      >
        Learn More
      </Button>
    </div>
  );
};

export default WelcomeMessage;
