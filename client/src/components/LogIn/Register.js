import React, { Component } from 'react';
import axios from 'axios'
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FormControl, ControlLabel } from "react-bootstrap";
import "./register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    };
  }

  componentDidMount() {
    axios.get('/api/getList').then(console.log).catch(console.error)
  }

  validateForm() {
    return this.state.first_name.length > 0 && this.state.last_name.length > 0 && this.state.username.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    }

    console.log("handle submit function")
    axios.post('/registerUser', { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(err => console.error('Error', err))
  }

  render() {
    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstName" bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              autoFocus
              name="first_name"
              type="text"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="lastName" bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              autoFocus
              name="last_name"
              type="text"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}