import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* Add your logo here */}
      </div>
      <div className="footer-contact">
        <span>Phone: (123) 456-7890</span>
        <span>Email: info@example.com</span>
      </div>
      <div className="footer-links">
        <a href="#welcome-message">Welcome</a>
        <a href="#services-section">Services</a>
        <a href="#get-in-touch-section">Get in Touch</a>
        <a href="#testimonial-section">Testimonials</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/sitemap">Sitemap</a>
      </div>
      <div className="footer-social">
        {/* Add social media links here */}
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.twitter.com">Twitter</a>
        <a href="https://www.linkedin.com">LinkedIn</a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} ABC Accounting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
