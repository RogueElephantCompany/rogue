import React, { Component } from 'react'
import { Navbar, Home, Contact, About } from './components';
import Routes from './routes';
import logo from './logo.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1 className="App-title">The Rogue Elephant Company</h1>
          <img src={logo} className="logo" alt="logo" />
        </header>
        <Routes />
      </div>
    )
  }
}

export default App
