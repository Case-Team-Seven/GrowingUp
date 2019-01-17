import React, { Component } from "react";
import API from "../../utils/api";
import { Link } from "react-router-dom";


class Users extends Component {
    state = {
        users: [],
        first_name: "",
        last_name: "",
        username: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({ user: res.data, first_name: "", last_name: ""})
            )
            .catch(err => console.log(err));
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>

                hello users page
            </div>
        );
    }
}

export default Users;
