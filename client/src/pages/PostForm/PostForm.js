import React, { Component } from "react";
import ForumForm from "../../components/Forums/ForumForm";
// import {  FormGroup, Label, FormText } from "../../components/Forums/ForumForm";
// import '../../components/Forums/forumPost.css';

// import { NavTop } from "../../components/Nav/NavTop/NavTop";


    class PostForm extends Component {
        state = {
            Title: "",
            Select: "",
            File: "",
        };

        render() {
            return (  
                <div>
                    {/*<NavTop />*/}
                    <ForumForm /> 
                    {/* <NewPostButton /> */}
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
