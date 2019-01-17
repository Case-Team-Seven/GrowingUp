import React, { Component } from "react";

import API from "../../utils/api";
import {Container, Row, Col, Jumbotron} from 'reactstrap'


class TopicPosts extends Component {
    state = {
        posts: {}
    };

    componentDidMount() {
        console.log("Component did mount (this): ", this)
        API.getAllPostsForTopic(this.props.match.params.id)
            .then(res =>  this.setState({ posts: res.data}))
            .catch(err => console.log(err));
    }




    render() {

        console.log("Render Posts: ", this.state.posts)

        return (

            <Container>
                <Row>
                    <Col>


                    </Col>
                </Row>
            </Container>



        );
    }
}

export default TopicPosts;
