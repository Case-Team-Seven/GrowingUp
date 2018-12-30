import React, { Component } from 'react';
import logo from './logo.svg';
import NavTop from "./components/Nav/NavTop/NavTop";
import LogIn from "./components/LogIn/LogIn";
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return ( 
      <div className="mainContainer">
        <div className="header">
          <NavTop />
        </div>
        <div className="logInContainer">
          <LogIn />
        </div>
      </div>
    );
  }
}

export default App;
