import React, { Component } from 'react';
import logo from './logo.svg';
import {NavTop} from "./components/Nav/NavTop/NavTop";
import LogIn from "./components/LogIn/LogIn";
import CategoryList from "./components/CategoryList/CategoryList";
import ForumPost from "./components/Forums/ForumPost";
import ForumForm from "./components/Forums/ForumForm";
import NewPostButton from './components/Button/NewPost/NewPostButton'; 
import './App.css';
import { Button } from 'reactstrap';
import Post from './components/Forums/Post';


class App extends Component {
    render() {
        return (
            <div className="mainContainer">
                

                    <NavTop render={<h1>Grownupish</h1>}/>
                    <NewPostButton />
                
                <div className="logInContainer" >
                    <LogIn />
                </div>
                <div className="logInContainer">
                    <CategoryList />
                </div>
                <div className="forumsContainer">
                    <ForumPost />
                    <Post  />
                    
                </div>
                <div className="forumsFormContainer">
                    <ForumForm />
                </div>
            </div>
        );
    }
}

export default App;