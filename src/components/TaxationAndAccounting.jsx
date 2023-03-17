import React from 'react';
import { Button } from '@mui/material';
import './TaxationAndAccounting.css';

const TaxationAndAccounting = ({ changeView }) => {
  return (
    <div className="taxation-and-accounting">
      <h1>Taxation and Accounting</h1>
      <p>
        Our taxation and accounting services are designed to help businesses manage their financial affairs effectively. We offer a comprehensive range of services, including income tax preparation, tax planning, bookkeeping, financial statement preparation, and payroll processing. Our experienced team of professionals is committed to providing accurate and timely financial information that enables businesses to make informed decisions.
      </p>
      <Button
        className="taxation-and-accounting-button"
        onClick={() => changeView('Home')}
      >
        Go Back
      </Button>
    </div>
  );
};

export default TaxationAndAccounting;
