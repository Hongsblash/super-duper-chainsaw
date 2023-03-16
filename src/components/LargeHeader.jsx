import React from 'react';
import './LargeHeader.css';

const LargeHeader = () => {
  return (
    <header className="large-header">
      <img src="logo.png" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Services</a>
            <div className="dropdown-menu">
              <a href="/sublink1">Taxation and Accounting</a>
              <a href="/sublink2">Business Advisory</a>
              <a href="/sublink3">Innovation</a>
              <a href="/sublink4">Financial Planning</a>
            </div>
          </li>
          <li>
            <a href="/">Utilities</a>
            <div className="dropdown-menu">
              <a href="/sublink5">Terms</a>
              <a href="/sublink6">Privacy</a>
              <a href="/sublink7">Sitemap</a>
            </div>
          </li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default LargeHeader;
