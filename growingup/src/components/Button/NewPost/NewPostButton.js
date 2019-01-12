import React from 'react';
import { Button } from 'reactstrap';
import './NewPostButton.css';



export default class Example extends React.Component {

  render() {
    return (
      <div class="newPostDiv">
        <Button outline color="primary" className="createPost">Create Post</Button>{' '}
      </div>
    );
  }
}