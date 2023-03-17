import React from 'react';
import { Button } from '@mui/material';
import './Innovation.css';

const Innovation = ({ changeView }) => {
  return (
    <div className="innovation">
      <h1>Innovation</h1>
      <p>
        Our innovation services focus on helping businesses identify opportunities for growth and improvement through cutting-edge strategies and technologies. We work closely with clients to develop innovative solutions, foster collaboration, and drive sustainable growth in their industry.
      </p>
      <Button
        className="innovation-button"
        variant="contained"
        onClick={() => changeView('Home')}
      >
        Go Back
      </Button>
    </div>
  );
};

export default Innovation;
