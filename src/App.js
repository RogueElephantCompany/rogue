import React, { Component } from 'react';
import { Navbar /*, Home, Contact, About*/ } from './components';
import Routes from './routes';
import Header from './components/header';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
