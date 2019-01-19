// import React, { Component } from 'react';
// import axios from 'axios';
// import TableRow from './TableRow';

// export default class Index extends Component {

//   constructor(props) {
//       super(props);
//       this.state = {posts: []};
//     }
//     componentDidMount(){
//       axios.get('http://localhost:3000/api/posts/add')
//       .then(res => {
//         this.setState({ posts: res.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//     }
//     tabRow(){
//         return this.state.posts.map(function(object, i){
//             return <TableRow obj={object} key={i} />;
//         });
//     }

//     render() {
//       return (
//         <div className="container">
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <td>ID</td>
//                   <td>Name</td>
//                   <td>Port</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.tabRow()}
//               </tbody>
//             </table>
//         </div>
//       );
//     }
//   }