import React, {Component} from 'react';
import ForumPost from '../../components/Forums/ForumPost';
import { NavTop } from "../../components/Nav/NavTop/NavTop";
import NewPostButton from '../../components/Button/NewPost/NewPostButton';  
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoryList from "../../components/CategoryList/CategoryList";




class TimeManagement extends Component{
    render() {
        return(
            <div>
                <NavTop />
                <ForumPost />
                <NewPostButton />
                <CategoryList />
            </div>
        )
    }
}

export default TimeManagement;
