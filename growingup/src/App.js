import React, { Component } from 'react';
import logo from './logo.svg';
import NavTop from "./components/Nav/NavTop/NavTop";
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return ( 
      <div className="mainContainer">
        <NavTop />
      </div>
    );
  }
}

export default App;
