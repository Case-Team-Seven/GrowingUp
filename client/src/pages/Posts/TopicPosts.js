import React, { Component } from "react";

import API from "../../utils/api";
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from "react-router-dom";


class TopicPosts extends Component  {
    state = {
        posts: []
    };

    componentDidMount() {
        console.log("Component did mount (this): ", this)
        API.getAllPostsForTopic(this.props.match.params.id)
            .then(res =>  this.setState({ posts: res.data}))
            .catch(err => console.log(err));
    }

    getTopicInfo() {

    }




    render() {

        console.log("Render Posts: ", this.state.posts)
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>POSTS</h1>
                        <h1>POSTS</h1>
                        <h1>POSTS</h1>
                        <h1>POSTS</h1>

                        <ListGroup>
                            {
                            this.state.posts.map(post =>

                                <ListGroupItem key={post.id} value={post.id}>   <Link to={'/posts/'+ post.id} >{post.title} </Link></ListGroupItem>

                            )}

                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default TopicPosts;
