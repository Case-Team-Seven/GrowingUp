import React from 'react';
import './LogIn.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form className='logInForm'>
        <Label for="title" className="mr-sm-2">
            <h2>Log In</h2>
        </Label>
        <FormGroup id='formGroup1' className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            <strong>Email</strong>
          </Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup id='formGroup2' className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            <strong>Password</strong>
          </Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <br></br>
        <Button className="logInSubmitButton">
          <strong>Sign In</strong>
        </Button>
        <br></br>
        <a className="forgotPasswordLink">
          <strong>Forgot Password!</strong>
        </a>
        <br></br>
        <br></br>
        <p>Dont have an account.   <nbsp></nbsp> 
          <a className="signUpLinkButton" onClick="" href="">
            <strong>Sign Up</strong>
          </a>
        </p>
      </Form>
    );
  }
}