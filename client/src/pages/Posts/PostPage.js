import React, { Component } from "react";
import API from "../../utils/api";
import {Container, Row, Col, Jumbotron, ListGroupItem, ListGroup} from 'reactstrap'
import CommentButton from "./../../components/CommentButton/CommentButton"

class PostPage extends Component  {
    state = {
        post: {},
        comments: []
    };

    componentDidMount() {
        // console.log("Component did mount (this): ", this)
        API.getOnePost(this.props.match.params.id)
            .then(res =>  this.setState({ post: res.data}))

    .then(
        API.getAllCommentsForAPost(this.props.match.params.id)
            .then(res =>  this.setState({ comments: res.data}))

        ).catch(err => console.log(err))
    }





    render() {
        console.log("render function (this.state.post): ", this.state.post)
        console.log("render function (this.state.comments): ", this.state.comments)


        return (

            <Container>
                <Row>
                    <Col>
                        <Jumbotron>

                            <h1>{this.state.post.title} </h1>
                            <h1>{this.state.post.body} </h1>
                            <h1>{this.state.post.topic_id} </h1>
                            <h1>{this.state.post.user_id} </h1>

                            <h1> COMMENT BELOW </h1>

                            <ListGroup>
                                {
                                    this.state.comments.map(comment =>
                                        <ListGroupItem key={comment.id} value={comment.id}>  {comment.body}</ListGroupItem>

                                    )}

                            </ListGroup>

                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default PostPage;
