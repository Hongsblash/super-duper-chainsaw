import React from 'react';
import './SmallHeader.css';

const SmallHeader = () => {
  return (
    <div className="small-header">
      <div className="contact-info">
        <span>Email: info@abcaccountingfirm.com</span>
        <span>Phone: (123) 456-7890</span>
      </div>
      <div className="contact-link">
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default SmallHeader;
