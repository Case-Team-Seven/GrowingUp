import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import './components/CategoryList/CategoryList.css';


import UserProfile from "./pages/Users/UserProfile";
import TopicPosts from "./pages/Posts/TopicPosts";
import PostForm from "./pages/PostForm/PostForm";


const App = () => (
    <Router>
        <div>
            <Switch>
                {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/addPost" component={PostForm} />
                <Route exact path="/userProfile/:id" component={UserProfile} />
                <Route exact path="/topic/:id/posts" component={TopicPosts} />


            </Switch>
        </div>
    </Router>
);


export default App;