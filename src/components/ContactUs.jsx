import React from 'react';
import { Button } from '@mui/material';
import './ContactUs.css';

const ContactUs = ({ changeView }) => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        We would be delighted to hear from you. Feel free to reach out to us
        with any questions or inquiries.
      </p>
      <p>Email: info@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <Button
        className="contact-us-button"
        variant="contained"
        onClick={() => changeView('Home')}
      >
        Go Back
      </Button>
    </div>
  );
};

export default ContactUs;
