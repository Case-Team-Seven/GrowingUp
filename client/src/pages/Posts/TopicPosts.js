import React, { Component } from "react";
import API from "../../utils/api";
import { Link } from "react-router-dom";
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'


class TopicPosts extends Component  {
    state = {
        posts: []
    };

    componentDidMount() {
        // console.log("Component did mount (this): ", this)
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
