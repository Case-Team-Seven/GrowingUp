import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import config from '../../app.config';

export default withAuth(
  class RegistrationForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        sessionToken: null
      };
      this.oktaAuth = new OktaAuth({ url: config.url });
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    async checkAuthentication() {
      const sessionToken = await this.props.auth.getIdToken();
      if (sessionToken) {
        this.setState({ sessionToken });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    handleFirstNameChange(e) {
      this.setState({ firstName: e.target.value });
    }
    handleLastNameChange(e) {
      this.setState({ lastName: e.target.value });
    }
    handleEmailChange(e) {
      this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(user => {
          this.oktaAuth
            .signIn({
              username: this.state.email,
              password: this.state.password
            })
            .then(res =>
              this.setState({
                sessionToken: res.sessionToken
              })
            );
        })
        .catch(err => console.log);
    }

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }

      return (
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="form-element">
            <Label for="email">Email:</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@something.com"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </FormGroup>
          <FormGroup className="form-element">
            <Label for="firstName">First Name:</Label>
            <Input
              type="text"
              id="firstName"
              placeholder="Enter your first name here"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </FormGroup>
          <FormGroup className="form-element">
            <Label for="lastName">Last Name:</Label>
            <Input
              type="text"
              id="lastName"
              placeholder="Enter your last name here"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </FormGroup>
          <Button type="submit" id="submit" value="Register">Submit</Button>
        </Form>
      );
    }
  }
);