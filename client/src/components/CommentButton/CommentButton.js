import React from 'react';
// import  Component  from 'react';
import { Button, Collapse } from 'reactstrap';
import './CommentButton.css';
// import ForumPost from '../../Forums/ForumPost';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



export default class Example extends React.Component {


    render() {
        return (
            <div class="newCommentDiv">
                    <Button outline color="primary" className="createComment">Create Post</Button>
            </div>
        );
    }
}



// export default Example;