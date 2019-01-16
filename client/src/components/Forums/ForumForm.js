import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ForumForm.css';

export default class Example extends React.Component {


    render() {
        return (
            <Form className="forumForm">
                <FormGroup>
                    <Label for="exampleText"><h2>Title:</h2> </Label>
                    <Input type="textarea" name="text" id="exampleTextTitle" />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="exampleText"><h2>Your Question:</h2> </Label>
                    <br></br>
                    <Input type="textarea" name="text" id="exampleTextQuestion" />
                </FormGroup>
                <br></br>
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
                <Button className="formSubmitButton">Submit</Button>
                
            </Form>

            
        );
    }
}