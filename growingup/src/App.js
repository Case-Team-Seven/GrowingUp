import React, { Component } from 'react';
import logo from './logo.svg';
import NavTop from "./components/Nav/NavTop/NavTop";
import LogIn from "./components/LogIn/LogIn";
import CategoryList from "./components/CategoryList/CategoryList";
import ForumPost from "./components/Forums/ForumPost";
import ForumForm from "./components/Forums/ForumForm";
import NewPostButton from './components/Button/NewPost/NewPostButton';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return ( 
      <div className="mainContainer">
        <div className="header" id="masthead">
          <NavTop />
          <NewPostButton />
          
        </div>
        <div className="logInContainer">
          <LogIn />
        </div>
        <div className="logInContainer">
          <CategoryList />
        </div>
        <div className="ForumsContainer">
          <ForumPost />
        </div>
        <div className="ForumsContainer">
          <ForumForm />
        </div>
      </div>
    );
  }
}

export default App;
