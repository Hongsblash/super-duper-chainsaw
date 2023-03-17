import React from 'react';
import { Button } from '@mui/material';
import './GetInTouchSection.css';

const GetInTouchSection = ({ changeView }) => {
  return (
    <section className="get-in-touch-section">
      <h2>Get in Touch</h2>
      <p>Reach out to us for personalized solutions and expert advice</p>
      <Button
        className="get-in-touch-button"
        variant="outlined"
        onClick={() => changeView('ContactUs')}
      >
        Contact Us
      </Button>
    </section>
  );
};

export default GetInTouchSection;
