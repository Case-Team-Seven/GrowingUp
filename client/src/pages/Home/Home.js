import React, {Component} from 'react';
import {NavTop} from "../../components/Nav/NavTop/NavTop";
import CategoryList from "../../components/CategoryList/CategoryList";
import ForumPost from "../../components/Forums/ForumPost";
import NewPostButton from '../../components/Button/NewPost/NewPostButton'; 
// import "./App.css";
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Home extends Component {
    render() {
        return (  
            <div>
                <NavTop />
                <CategoryList />
                <ForumPost />
                <NewPostButton />
                <NewPostButton />
            </div>
        );
      }
}
export default Home;