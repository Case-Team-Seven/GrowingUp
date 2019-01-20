import React, { Component } from "react";
import API from "../../utils/api";
import {Container, Row, Col, Jumbotron} from 'reactstrap'
import './UserProfile.css';
import NavTop from "../../components/Nav/NavTop/NavTop";
import BackButton from "../../components/Button/BackButton/BackButton";

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
                <div>

                    <NavTop />
                    
                        {/* <Container>
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
                        </Container> */}

                        <div class="wrapper">
                            <div class="cols">
                                <div class="col" ontouchstart="this.classList.toggle('hover');">
                                    <div class="container">
                                        <div class="front" >
						                    <div class="inner">
                                                <h1 id="usernameText">{this.state.user.username} </h1>
						                    </div>
					                    </div>
                                        <div class="back">
			                                <div class="inner">
                                                <h1>{this.state.user.first_name} </h1>
                                                <h1>{this.state.user.last_name} </h1>
                                                <h1>{this.state.user.email} </h1>
						                    </div>
					                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    <BackButton />
                </div>

            

                
            

    



        );
    }
}

export default UserProfile;
