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
            <div className="mainContainer" href="/">
                <div className="header" id="masthead">
                    <NavTop className="navTop" />
                    <NewPostButton className="newPostButton"/>

                </div>
                <div className="logInContainer" href="/">
                    <LogIn />
                </div>
                <div className="logInContainer">
                    <CategoryList />
                </div>
                <div className="forumsContainer">
                    <ForumPost />
                </div>
                <div className="forumsFormContainer">
                    <ForumForm />
                </div>
            </div>
        );
    }
}

export default App;