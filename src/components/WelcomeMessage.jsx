import React from 'react';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h1>Welcome to ABC Accounting Firm</h1>
      <p>Your trusted partner for all your accounting needs</p>
      <button onClick={() => alert("Link to a yet-to-be-determined page")}>
        Learn More
      </button>
    </div>
  );
};

export default WelcomeMessage;
