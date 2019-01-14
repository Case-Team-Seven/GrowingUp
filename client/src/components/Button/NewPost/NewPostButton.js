import React from 'react';
// import  Component  from 'react';
import { Button, Collapse } from 'reactstrap';
import './NewPostButton.css';
import ForumPost from '../../Forums/ForumPost';



export default class Example extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderForumForm() {

    }

    render() {
        return (
            <div class="newPostDiv">
                <Button  outline color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }} className="createPost">Create Post</Button>
                <Collapse isOpen={this.state.collapse}>
                    <ForumPost />
                </Collapse>
            </div>
        );
    }
}



// export default Example;