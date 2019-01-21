import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navigation from './components/shared/Navigation';
import HomePage from './components/Home/HomePage';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import './components/CategoryList/CategoryList.css';


import UserProfile from "./pages/Users/UserProfile";
import TopicPosts from "./pages/Posts/TopicPosts";
import PostForm from "./pages/PostForm/PostForm";
import PostPage from "./pages/Posts/PostPage";



const App = () => (
    <Router>
        <div>
            <Switch>
                {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/addPost" component={PostForm} />
                <Route exact path="/userProfile/:id" component={UserProfile} />
                <Route exact path="/topics/:id/posts" component={TopicPosts} />
                <Route exact path="/posts/:id/" component={PostPage} />
            </Switch>
        </div>
    </Router>
);


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/login"
            render={() => <LoginPage baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
        </main>
      </div>
    );
  }
}











