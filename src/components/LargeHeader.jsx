import React from 'react';
import './LargeHeader.css';

const LargeHeader = () => {
  return (
    <header className="large-header">
      <img src="logo.png" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Link 1</a>
            <div className="dropdown-menu">
              <a href="/sublink1">Sublink 1</a>
              <a href="/sublink2">Sublink 2</a>
              <a href="/sublink3">Sublink 3</a>
              <a href="/sublink4">Sublink 4</a>
            </div>
          </li>
          <li>
            <a href="/">Link 2</a>
            <div className="dropdown-menu">
              <a href="/sublink5">Sublink 5</a>
              <a href="/sublink6">Sublink 6</a>
              <a href="/sublink7">Sublink 7</a>
            </div>
          </li>
          <li><a href="/">Link 3</a></li>
          <li><a href="/">Link 4</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default LargeHeader;
