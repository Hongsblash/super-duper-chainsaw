import React from 'react';
import { Button } from '@mui/material';
import './About.css';

const About = ({ changeView }) => {
  return (
    <div className="about">
      <h1>About ABC Accounting Firm</h1>
      <p>
        Here is some information about the ABC Accounting Firm. We specialize in providing a wide range of accounting services, including taxation and accounting, business advisory, innovation, and financial planning. Our team of experienced professionals is dedicated to helping businesses achieve their financial goals.
      </p>
      <Button
        className="about-button"
        onClick={() => changeView('Home')}
      >
        Go Back
      </Button>
    </div>
  );
};

export default About;
