import React, { Component } from "react";

import API from "../../utils/api";
import {Container, Row, Col, Jumbotron} from 'reactstrap'


class UserProfile extends Component {
    state = {
        user: { }
    };

    componentDidMount() {
        console.log("Component did mount (this): ", this)
        API.getUser(this.props.match.params.id)
            .then(res =>  this.setState({ user: res.data}))
                .catch(err => console.log(err));
    }




    render() {
        console.log("render function (this.state.user): ", this.state.user)
        console.log("this.state.users.first_name", this.state.user.first_name)

            return (

            <Container>
                <Row>
                    <Col>
      <Jumbotron>

          <h1>{this.state.user.first_name} </h1>
          <h1>{this.state.user.last_name} </h1>
          <h1>{this.state.user.email} </h1>
          <h1>{this.state.user.username} </h1>











      </Jumbotron>
                    </Col>
                </Row>
            </Container>



        );
    }
}

export default UserProfile;
