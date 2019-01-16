import React from 'react';
// import  Component  from 'react';
import { Button, Collapse } from 'reactstrap';
import './NewPostButton.css';
import ForumPost from '../../Forums/ForumPost';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



export default class Example extends React.Component {


    render() {
        return (
            <div class="newPostDiv">
                <Link to="/addPost">
                    <Button outline color="primary" className="createPost">Create Post</Button>
                </Link>
            </div>
        );
    }
}



// export default Example;