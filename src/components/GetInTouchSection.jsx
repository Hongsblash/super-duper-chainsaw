import React from 'react';
import './GetInTouchSection.css';

const GetInTouchSection = () => {
  return (
    <section className="get-in-touch-section">
      <h2>Get in Touch</h2>
      <p>Reach out to us for personalized solutions and expert advice</p>
      <button onClick={() => alert("Link to Contact Us page")}>
        Contact Us
      </button>
    </section>
  );
};

export default GetInTouchSection;
