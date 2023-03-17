import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import About from './About';

const ParentComponent = () => {
  const [currentView, setCurrentView] = useState('Home');

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      {currentView === 'Home' ? (
        <WelcomeMessage changeView={changeView} />
      ) : (
        <About changeView={changeView} />
      )}
    </div>
  );
};

export default ParentComponent;
