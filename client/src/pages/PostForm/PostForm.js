import React, { Component } from "react";
import NewPostButton from "../../components/Button/NewPost/NewPostButton";
import ForumForm from "../../components/Forums/ForumForm";
import { Button, Form, FormGroup, Label, Input, FormText } from "../../components/Forums/ForumForm";
// import '../../components/Forums/forumPost.css';
// import { Button, Collapse } from '../../components/Button/NewPost/NewPostButton';
// import '../../components/Forums/NewPostButton.css';

// import API from "../../utils/API";
import { Link } from "react-router-dom";


    class PostForm extends Component {
        // state = {
        //     books: [],
        //     title: "",
        //     author: "",
        //     synopsis: ""
        // };

        render() {
            return (  
                    <ForumForm />
            );
          }
        
    }
// 


//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  


export default PostForm;
