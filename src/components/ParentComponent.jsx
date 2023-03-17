import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import About from './About';
import TaxationAndAccounting from './TaxationAndAccounting';
import BusinessAdvisory from './BusinessAdvisory';
import Innovation from './Innovation';
import FinancialPlanning from './FinancialPlanning';
import ContactUs from './ContactUs';

const ParentComponent = () => {
  const [currentView, setCurrentView] = useState('Home');

  const changeView = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 'Home':
        return <WelcomeMessage changeView={changeView} />;
      case 'About':
        return <About changeView={changeView} />;
      case 'taxationAndAccounting':
        return <TaxationAndAccounting changeView={changeView} />;
      case 'businessAdvisory':
        return <BusinessAdvisory changeView={changeView} />;
      case 'innovation':
        return <Innovation changeView={changeView} />;
      case 'financialPlanning':
        return <FinancialPlanning changeView={changeView} />;
      case 'ContactUs':
        return <ContactUs changeView={changeView} />;
      default:
        return null;
    }
  };

  return <div>{renderView()}</div>;
};

export default ParentComponent;
