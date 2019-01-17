import React, {Component} from 'react';
import PostDiv from './PostDiv';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                'Hello World'
            ],
        }
    }

    render() {
        return (
            <div className="renderPost">
                {
                    this.state.posts.map((postBody, idx) => {
                        return (
                            <PostDiv key={idx} postBody={postBody} /> 
                        )
                    })
                }
                <div className="panel panel-default post-editor">
                    <div className="panel-body">
                        <textarea className="form-control post-editor-input" />
                        <button className="btn btn-success post-editor-button">Submit Post</button>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Post;