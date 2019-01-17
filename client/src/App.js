import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from './logo.svg';
import {NavTop} from "./components/Nav/NavTop/NavTop";
// import LogIn from "./components/LogIn/LogIn";
// import CategoryList from "./components/CategoryList/CategoryList";
// import ForumPost from "./components/Forums/ForumPost";
// import ForumForm from "./components/Forums/ForumForm";
import NewPostButton from './components/Button/NewPost/NewPostButton'; 
import './App.css';
// import { Button } from 'reactstrap';
// import Post from './components/Forums/Post';
import PostForm from "./pages/PostForm/PostForm"
import UserProfile from "./pages/Users/UserProfile"



const App = () => (
    <Router>
        <div>
            <NavTop />
            <NewPostButton />


            <Switch>
                <Route exact path="/addPost" component={PostForm} />
                <Route exact path="/userProfile/:id" component={UserProfile} />

            </Switch>
        </div>
    </Router>
);


export default App;