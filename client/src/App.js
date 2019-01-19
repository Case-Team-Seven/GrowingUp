import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './App.css';

import UserProfile from "./pages/Users/UserProfile";
import TopicPosts from "./pages/Posts/TopicPosts";



import './components/CategoryList/CategoryList.css';
import { Button } from 'reactstrap';
import Post from './components/Forums/Post';
import PostForm from "./pages/PostForm/PostForm";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Finance from "./pages/Finance/Finance";
import Education from "./pages/Education/Education";
import SocialMedia from "./pages/SocialMedia/SocialMedia";
import Relationships from "./pages/Relationships/Relationships";
import Partying from "./pages/Partying/Partying";
import Career from "./pages/Career/Career";
import TimeManagement from "./pages/TimeManagement/TimeManagement";
import Family from "./pages/Family/Family";

const App = () => (
    <Router>
        <div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/addPost" component={PostForm} />
                <Route exact path="/LogIn/SignUp" component={Login} />
                <Route exact path="/Finance" component={Finance} />
                <Route exact path="/Education" component={Education} />
                <Route exact path="/SocialMedia" component={SocialMedia} />
                <Route exact path="/Relationships" component={Relationships} />
                <Route exact path="/Partying" component={Partying} />
                <Route exact path="/Career" component={Career} />
                <Route exact path="/TimeManagement" component={TimeManagement} />
                <Route exact path="/Family" component={Family} />
                <Route exact path="/userProfile/:id" component={UserProfile} />
                <Route exact path="/topic/:id/posts" component={TopicPosts} />
            </Switch>
        </div>
    </Router>
);



        // return (
        //     <div className="mainContainer">
                


export default App;