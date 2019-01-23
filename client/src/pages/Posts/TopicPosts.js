import React, { Component } from "react";
import API from "../../utils/api";
import { Link } from "react-router-dom";
import {Container, Row, Col, ListGroup, ListGroupItem, Card, Button, CardTitle, CardText} from 'reactstrap'
import './TopicPost.css';
import NavTop from './../../components/Nav/NavTop/NavTop';
import NewPostButton from './../../components/Button/NewPost/NewPostButton';
import BackButton from './../../components/Button/BackButton/BackButton';
import CategoryList from "./../../components/CategoryList/CategoryList";

class TopicPosts extends Component  {
    state = {
        posts: [],
        topicName:  ''
    };

    
    componentDidMount() {
        // console.log("Component did mount (this): ", this)
        API.getAllPostsForTopic(this.props.match.params.id)
            .then(res =>  this.setState({ posts: res.data}))
            .then(API.getTopic(this.props.match.params.id)
                .then(res =>  this.setState({ topicName: res.data.title})))
            .catch(err => console.log(err));
    }

    getTopicInfo() {

    }




    render() {

        console.log("Render Posts: ", this.state.posts)
        return (
            
            <Container>
              <NavTop /> 
            <CategoryList />
                <Row>
                    <Col>
                    
                    <NewPostButton />
                    
                        <ListGroup>
                        <h1 id="categoryTitle">{this.state.topicName}</h1>
                            {
                            this.state.posts.map(post =>
                                    //instead of listgroup, this will be the card component , first pull in the react strap elements you imported in forumpost , then insdie of list group tag or chnage it completely to match the card tags you need.
                                
                                <ListGroupItem key={post.id} value={post.id}> 

                                    {/* <Card body>
                                        <Link to={'/posts/'+ post.id} >{post.title}</Link>
                                    </Card> */}
                                    
                                    <Row id="testRow">
                                    
                                        <Col sm="6">
                                            <Link className="cardLink" to={'/posts/'+ post.id}>
                                                <Card body id="card"> 
                                                    <CardTitle>
                                                        <h2 id="titleOfPost">{post.title}</h2>
                                                    </CardTitle>
                                                    <CardText id="questionOfPost">
                                                        {post.body}
                                                    </CardText>
                                                    {/* <Button>This is where the imported comment button may go</Button> */}
                                                    <div>
                                                        <i className="fas fa-user">{post.username}</i>
                                                        <i className="fas fa-comment">Comments: {post.commentCount}</i>
                                                    </div>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </Row>
                                  
                                </ListGroupItem>

                            )}

                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default TopicPosts;
