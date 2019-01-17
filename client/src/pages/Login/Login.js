import React, {Component} from 'react';
import { Link } from "react-router-dom";
import LogIn from "../../components/LogIn/LogIn";
import { NavTop } from "../../components/Nav/NavTop/NavTop";
import { Button, Form, FormGroup, Label, Input, FormText } from "../../components/Forums/ForumForm";


class Login extends Component {
    render() {
        return(
            <div>
                <NavTop />
                <LogIn />
            </div>
        )
    }
}
export default Login;