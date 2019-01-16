import React from 'react';


const PostDiv = (props) => (
    <div className="panel panel-default post-body">
        <div className="panel-body">
           { props.postBody }
        </div>
    </div>
);

export default PostDiv;