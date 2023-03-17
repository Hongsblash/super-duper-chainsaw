import React from 'react';
import './TaxReturnHighlight.css';

const TaxReturnHighlight = ({ changeView }) => {
  return (
    <section className="tax-return-highlight">
      <div className="tax-return-content">
        <h2>Tax Return Services</h2>
        <p>
          We offer expert tax return services to individuals and businesses. Our
          experienced team ensures you get the maximum refund and tax savings
          possible.
        </p>
        <button
          className="find-out-more-btn"
          onClick={() => changeView('taxationAndAccounting')}
        >
          Find out more
        </button>
      </div>
    </section>
  );
};

export default TaxReturnHighlight;
