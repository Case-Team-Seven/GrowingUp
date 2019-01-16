import React from 'react';
// import  Component  from 'react';
import { Button, Collapse } from 'reactstrap';
import './NewPostButton.css';
import ForumPost from '../../Forums/ForumPost';



export default class Example extends React.Component {


    render() {
        return (
            <div class="newPostDiv">
                <Button  outline color="primary" className="createPost">Create Post</Button>
                
            </div>
        );
    }
}



// export default Example;