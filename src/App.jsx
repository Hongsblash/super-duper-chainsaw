import React from 'react';
import SmallHeader from './components/SmallHeader';
import LargeHeader from './components/LargeHeader';
import WelcomeMessage from './components/WelcomeMessage';
import ServicesSection from './components/ServicesSection';
import GetInTouchSection from './components/GetInTouchSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <SmallHeader />
      <LargeHeader />
      <WelcomeMessage />
      <ServicesSection />
      <TestimonialSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}

export default App;
