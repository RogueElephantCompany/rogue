import React from 'react';
import logo from '../styles/logo.png';

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">The Rogue Elephant Company</h1>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
};

export default Header;
