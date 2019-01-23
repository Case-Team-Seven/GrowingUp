import React, { Component } from "react";
import ForumForm from "../../components/Forums/ForumForm";
// import {  FormGroup, Label, FormText } from "../../components/Forums/ForumForm";
// import '../../components/Forums/forumPost.css';
import BackButton from './../../components/Button/BackButton/BackButton'
import NavTop  from "../../components/Nav/NavTop/NavTop";
import "./PostForm.css";

    class PostForm extends Component {
        state = {
            Title: "",
            Select: "",
            File: "",
        };

        render() {
            return (  
                <div>
                    <div id="navTopClass">
                        <NavTop />
                    </div>
                
                    <h1 id="addPostTitle">Submit your question here!</h1>
                    <ForumForm /> 
                    {/* <NewPostButton /> */}
                    <BackButton />
                </div> 
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
//     const { title, value } = event.target;
//     this.setState({
//       [title]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // event.preventDefault();
//     if (this.state.title && this.state.selection) {
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
