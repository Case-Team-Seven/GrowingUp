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
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import './../../components/Forums/ForumPost.css';
import dateFns from "date-fns";


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

    .then(
        API.getAllCommentsForAPost(this.props.match.params.id)
            .then(res =>  this.setState({ comments: res.data}))

        ).catch(err => console.log(err))
    };


    handleComment = event => {
        this.setState({comment: event.target.value}, () => {
            console.log(this.state);
        });

    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

        let now = Date.now();
        now = dateFns.format(now, 'YYYY-MM-DD HH:MM:SS')

        const data = {
            body: this.state.comment,
            post_id: this.state.post.id,
            user_id: 1,
            // created: now,
            // updated: now,


            // file: this.state.file
        }

        //this isnt capturing your data. you need to grab it from your form inputs
        // console.log(data);
        console.log(" HANDLE SUBMIT ADD COMMENT");

        // axios.post('/api/posts/add', data).then((res)=>{console.log(res.data.errors)})
        API.addComment(data).then((res)=>{console.log(res.data.errors)})
            .catch(error => console.log(error))

    };


    componentDidUpdate(prevState) {
        // Typical usage (don't forget to compare props):
        if (this.state.comments !== prevState.comments) {
            API.getAllCommentsForAPost(this.props.match.params.id)
                .then(res =>  this.setState({ comments: res.data}))
        }
    }








    render() {
        // console.log("render function (this.state.post): ", this.state.post)
        // console.log("render function (this.state.comments): ", this.state.comments)


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

                            <Form className="forumForm" onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="title" for="exampleText"><h2>Leave a comment:</h2> </Label>
                                    <Input type="textarea" name="text" onChange={this.handleComment} value={this.state.comment} id="commentText" />
                                </FormGroup>

                                <Button type="submit" className="formSubmitButton">Add Comment</Button>
                            </Form>

                            <ListGroup>
                                {
                                    this.state.comments.map(comment =>
                                        <ListGroupItem key={comment.id} value={comment.id}>  {comment.body} :: CREATED: {comment.created} ::: UPDATED: {comment.updated} </ListGroupItem>

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
