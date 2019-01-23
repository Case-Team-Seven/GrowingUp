import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavTop from '../Nav/NavTop/NavTop'
import config from '../../app.config';
import './RegistrationForm.css'

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
    handleDisplayNameChange(e) {
      this.setState({ displayName: e.target.value });
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
        
        
        
        <Container>
        <NavTop />
        <br></br>
        
        <div id='regForm'>
        <h1 className='regTitle'>Registration</h1>
        <div id='innerRegForm'>
        <Form onSubmit={this.handleSubmit} className="pure-form">
          <FormGroup className="form-element">            
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </FormGroup>
          <FormGroup className="form-element">
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </FormGroup>
          <FormGroup className="form-element">
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </FormGroup>
          <FormGroup className="form-element">
            <Input
              type="text"
              id="displayName"
              placeholder="Display Name"
              value={this.state.displayName}
              onChange={this.handleDisplayNameChange}
            />
          </FormGroup>
          <FormGroup className="form-element">
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </FormGroup>           
          <p className='passwordNotice'>Password must be 8-15 characters long and include a capital letter and a number</p>
          
          <Button type="submit" id="submit" value="Register" className="regBtn">Submit</Button>
        </Form>
        </div>
        </div>
        </Container>
      );
    }
  }
);