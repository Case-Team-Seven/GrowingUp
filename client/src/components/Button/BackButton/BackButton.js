import React from 'react';
// import  Component  from 'react';
import { Button, Collapse } from 'reactstrap';
import './BackButton.css';
// import ForumPost from '../../Forums/ForumPost';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



export default class Example extends React.Component {


    render() {
        return (
            <div class="backButtonDiv">
                <Link to='/topic/1/posts/'>
                    <Button outline color="primary" className="backButtonClass">Back</Button>
                </Link>
            </div>
        );
    }
}



// export default Example;