import React, { Component } from "react";
import API from "../../utils/api";
import {Container, Row, Col, Jumbotron, ListGroupItem, ListGroup, Card, Button, CardTitle, CardText} from 'reactstrap';
import './../../components/Forums/ForumPost.css';

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
                <Row id="testRow">
                    <Col sm="6">
                        <Jumbotron>
                            <Card body>
                                <CardTitle>{this.state.post.title}</CardTitle>
                                <CardText>{this.state.post.body}</CardText>
                                {/* <div>{this.state.post.user_id}</div> */}
                                {/* <div>{this.state.post.topic_id}</div> */}
                                {/* <Button>Go somewhere</Button> */}
                            </Card>

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
