import React, { useState } from 'react';
import SmallHeader from './components/SmallHeader';
import LargeHeader from './components/LargeHeader';
import WelcomeMessage from './components/WelcomeMessage';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import GetInTouchSection from './components/GetInTouchSection';
import TestimonialSection from './components/TestimonialSection';
import TaxationAndAccounting from './components/TaxationAndAccounting';
import BusinessAdvisory from './components/BusinessAdvisory';
import Innovation from './components/Innovation';
import FinancialPlanning from './components/FinancialPlanning';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('Home');

  const changeView = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'Home':
        return (
          <>
            <WelcomeMessage changeView={changeView} />
            <ServicesSection changeView={changeView} />
            <TestimonialSection changeView={changeView} />
          </>
        );
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

  return (
    <div className="App">
      <SmallHeader />
      <LargeHeader />
      {renderView()}
      {currentView !== 'ContactUs' && <GetInTouchSection changeView={changeView} />}
      <Footer />
    </div>
  );
}

export default App;
