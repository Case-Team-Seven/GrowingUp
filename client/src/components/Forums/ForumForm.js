import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ForumForm.css';
// import axios here
import axios from 'axios';

class ForumForm extends Component {
    state = {
      title: "",
      topicId: "",
      question: ""
    };


      handleCategorySelect = (event) => {
          console.log(event.target.value)
          this.setState({topicId: event.target.value})
          console.log(this.state)
      }

      handleQuestion = event => {
          this.setState({question: event.target.value})
          console.log(this.state)
      }
      handleTitle = event => {
        this.setState({title: event.target.value})
        console.log(this.state)
      }

      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

        const data = {
            title: this.state.title,
            body: this.state.question,
            topic_id: this.state.topicId
        }

        //this isnt capturing your data. you need to grab it from your form inputs
        console.log(data)
        axios.post('/api/posts/add', data).then((res)=>{console.log(res)})
      }

    render() {
        return (
            <Form className="forumForm" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title" for="exampleText"><h2>Title:</h2> </Label>
                    <Input type="textarea" name="text" onChange={this.handleTitle} value={this.state.title} id="exampleTextTitle" />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="exampleSelect"><h2>Select/Assign Category</h2></Label>
                    <Input onChange={this.handleCategorySelect} class="selectCategoryInput" type="select" name="select" id="exampleSelect">
                        <option>Finance</option>
                        <option>Education</option>
                        <option>Social Media</option>
                        <option>Relationships</option>
                        <option>Partying</option>
                        <option>Career</option>
                        <option>Time Management</option>
                        <option>Family</option>
                    </Input>
                    

                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="exampleText"><h2>Your Question:</h2> </Label>
                    <br></br>
                    <Input type="textarea" name="text" onChange={this.handleQuestion} id="exampleTextQuestion" value={this.state.question} />
                </FormGroup>
                <br></br>
                <hr></hr>
                <FormGroup className="insertFileDiv">
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <br></br>
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <br></br>
                <Button type="submit" className="formSubmitButton">Submit data</Button> 
            </Form>

            
        );
    }
}

export default ForumForm;