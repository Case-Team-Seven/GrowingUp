import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import './components/CategoryList/CategoryList.css';


import UserProfile from "./pages/Users/UserProfile";
import TopicPosts from "./pages/Posts/TopicPosts";
import PostForm from "./pages/PostForm/PostForm";
import PostPage from "./pages/Posts/PostPage";
import Navigation from './components/shared/Navigation';
import HomePage from './components/Home/HomePage';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';



export default class App extends Component {
    render() {
        return (
        <Router>
            <div className="App">
                <Navigation/>
                <main>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/login"
                               render={() => <LoginPage baseUrl={config.url}/>}
                        />
                        <Route path="/implicit/callback" component={ImplicitCallback}/>
                        <Route path="/register" component={RegistrationForm}/>
                        <SecureRoute path="/profile" component={ProfilePage}/>


                        <Route exact path="/addPost" component={PostForm}/>
                        <Route exact path="/userProfile/:id" component={UserProfile}/>
                        <Route exact path="/topics/:id/posts" component={TopicPosts}/>
                        <Route exact path="/posts/:id/" component={PostPage}/>
                    </Switch>
                </main>
            </div>
        </Router>
        );
    }
}




