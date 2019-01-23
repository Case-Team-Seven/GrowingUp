import React, { Component } from "react";
import API from "../../utils/api";
import {
    Container,
    Row,
    Col,
    Jumbotron,
    ListGroupItem,
    ListGroup,
    Card,
    Button,
    CardTitle,
    CardText,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import './../../components/Forums/ForumPost.css';
import NavTop from './../../components/Nav/NavTop/NavTop';
import BackButton from './../../components/Button/BackButton/BackButton';
import dateFns from "date-fns";
import { Link } from "react-router-dom";
import './PostPage.css';


class PostPage extends Component  {
    state = {
        comment: "",
        post: {},
        comments: []
    };

    componentDidMount() {
        console.log("COMPONENT DID MOUNT")
        // console.log("Component did mount (this): ", this)
        API.getOnePost(this.props.match.params.id)
            .then(res =>  this.setState({ post: res.data}))
            .then(API.getAllCommentsForAPost(this.props.match.params.id)
            .then(res =>  this.setState({ comments: res.data})))
            .catch(err => console.log(err))
    };


    handleComment = event => {
        this.setState({comment: event.target.value}, () => {
            console.log(this.state);
        });

    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)


        const data = {
            body: this.state.comment,
            post_id: this.state.post.id,
            user_id: 1,
            // created: now,
            // updated: now,

        }

        // console.log(" HANDLE SUBMIT ADD COMMENT");

        API.addComment(data)
            .then(API.getAllCommentsForAPost(this.props.match.params.id)
            .then(res =>  this.setState({ comments: res.data})))
            .then((res)=>{console.log(res.data.errors)})
            .catch(error => console.log(error))

        this.setState({
            comment: ''
        });
    };


    componentDidUpdate(prevState) {
        console.log("PREV STATE", prevState.comments);
        // Typical usage (don't forget to compare props):
        if(this.state.comments.length !== this.state.comments.length) {
            // console.log(" staesHAVE CHANGED", prevState.comments , this.state.comments);
            API.getAllCommentsForAPost(this.props.match.params.id)
                .then(res =>  this.setState({ comments: res.data}))

        .catch(err => console.log(err))
        }
    }








    render() {
        console.log("post: ", this.state.post)
        // console.log("render function (this.state.post): ", this.state.post)
        // console.log("render function (this.state.comments): ", this.state.comments)
        console.log("this.state.comments.length" , this.state.comments.length)

        return (

            <Container>
                <div>
                    <NavTop id="block-menue" />
                </div>
                <Row id="testRow">
                    <Col sm="6">

                     <BackButton />


                        <Jumbotron>
                            <Card body className="card-bodyPostPage">
                               <CardTitle> {this.state.post.title}</CardTitle>
                                <CardText>{this.state.post.body}</CardText>
                                
                                  <Link id="userProfileLink" to={"/userProfile/:id"}><i class="fas fa-user"> User: {this.state.post.username}</i></Link>
                                

                            </Card>

                            <Form className="forumForm" onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="title" for="exampleText"><h2>Leave a comment:</h2> </Label>
                                    <Input  rows={10} cols={100} type="textarea" name="text" onChange={this.handleComment} value={this.state.comment} id="commentText" />
                                </FormGroup>

                                <Button type="submit" className="formSubmitButton" >Add Comment</Button>
                            </Form>

                            <ListGroup>
                                
                                {
                                    this.state.comments.map(comment =>


                                    <ListGroupItem 
                                        key={comment.id} 
                                        value={comment.id} className="triangle-right" > 
                                                                                            {/* <p class="triangle-right">[text]</p>  */}
                                                <h3 className="commentBody">{comment.body}</h3>
                                                <br></br>
                                        <h6 className="commentDate">{dateFns.format(comment.created, 'MM-DD-YYYY')} </h6>
                                       <h6 className="commentDate" ><i className="fas fa-user"></i> {comment.username} </h6>
                                        </ListGroupItem>

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
