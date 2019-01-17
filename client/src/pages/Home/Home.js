import React, { Component } from "react";
import { NavTop } from "../../components/Nav/NavTop/NavTop";
import NewPostButton from '../../components/Button/NewPost/NewPostButton';  
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForumPost from "../../components/Forums/ForumPost";
import CategoryList from "../../components/CategoryList/CategoryList";


class Home extends Component {
    render() {
        return (  
            <div>
                <NavTop />
                
                <ForumPost />
                <CategoryList />
                <NewPostButton />
            </div>
        );
      }
}
export default Home;