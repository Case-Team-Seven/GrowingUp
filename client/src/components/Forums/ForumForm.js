import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ForumForm.css';
import API from "../../utils/api";
import dateFns from "date-fns";


// import { fileURLToPath } from 'url';

class ForumForm extends Component {
    state = {
      title: "",
      topicId: "",
      question: "",
      topics: []
    };


      handleCategorySelect = (event) => {
        // console.log(event.target.value)
        //   this.setState({topicId: event.target.value})
        //   console.log(this.state)
        // event.target.value=parseInt(event.target.value,10)
        this.setState({topicId: parseInt(event.target.value)}, () => {
            console.log(this.state);
        });
        
      }

      handleQuestion = event => {
          
          this.setState({question: event.target.value}, () => {
          console.log(this.state);
        });
        
      }
    

      handleTitle = event => {
        this.setState({title: event.target.value}, () => {
        console.log(this.state);
      });

    }

    //   handleTitle = event => {
    //     this.setState({file: event.target.value})
    //     console.log(this.state)
    //   }

        componentDidMount() {
            // console.log("Component did mount (this): ", this)
            API.getAllTopics()
                .then(res =>  this.setState({ topics: res.data}))
                .catch(err => console.log(err));
        }

      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

          let now = Date.now();
        now = dateFns.format(now, 'YYYY-MM-DD HH:MM:SS')
        
        const data = {
            title: this.state.title,
            body: this.state.question,
            // topic_id: this.state.topicId,
            topic_id: this.state.topicId,
            user_id: 1,
            created: now,
            updated: now,

            // file: this.state.file
        }

        //this isnt capturing your data. you need to grab it from your form inputs
        console.log(data)

        // axios.post('/api/posts/add', data).then((res)=>{console.log(res.data.errors)})
        API.createPost(data).then((res)=>{console.log(res.data.errors)})
        .catch(error => console.log(error))
      }

      

    render() {
        console.log("Render: " , this.state.topics)
        return (
            <Form className="forumForm" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title" for="exampleText"><h2>Title:</h2> </Label>
                    <Input type="textarea" name="text" onChange={this.handleTitle} value={this.state.title} id="exampleTextTitle" />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="exampleSelect"><h2>Select/Assign Category</h2></Label>
                    <Input onChange={this.handleCategorySelect} className="selectCategoryInput" type="select" name="select" id="exampleSelect">
                    <option>Select a Topic</option>

                    {
                        this.state.topics.map(topic =>
                        <option key={topic.id} value={topic.id}>   {topic.title} </option>
                        )}

                       
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
                <Button type="submit" href="/topics/1/posts" className="formSubmitButton">Submit</Button> 
            </Form>

            
        );
    }
}

export default ForumForm;