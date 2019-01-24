import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './components/Home/HomePage';
import Login from './components/LogIn/LogIn';
//import Protected from './Protected';
import './App.css';
import './components/CategoryList/CategoryList.css';
import UserProfile from "./pages/Users/UserProfile";
import TopicPosts from "./pages/Posts/TopicPosts";
import PostForm from "./pages/PostForm/PostForm";
import PostPage from "./pages/Posts/PostPage";
//import Navigation from './components/shared/Navigation';
import HomePage from './components/Home/HomePage';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import './App.css';



// export default class App extends Component {
//     render() {
//         return (
//         <Router>
//             <div className="App">
//                 <Navigation/>
//                 <main>
//                     <Switch>
//                         <Route path="/" exact component={HomePage}/>
//                         <Route path="/login"
//                                render={() => <LoginPage baseUrl={config.url}/>}
//                         />
//                         <Route path="/implicit/callback" component={ImplicitCallback}/>
//                         <Route path="/register" component={RegistrationForm}/>
//                         <SecureRoute path="/profile" component={ProfilePage}/>


//                         <Route exact path="/addPost" component={PostForm}/>
//                         <Route exact path="/userProfile/:id" component={UserProfile}/>
//                         <Route exact path="/topics/:id/posts" component={TopicPosts}/>
//                         <Route exact path="/posts/:id/" component={PostPage}/>
//                     </Switch>
//                 </main>
//             </div>
//         </Router>
//         );
//     }
// }



function onAuthRequired({history}) {
    history.push('/login');
}

class App extends Component {
    render() {
        return (
            <Router>
                <Security issuer='https://dev-336569.oktapreview.com/oauth2/default'
                          client_id='0oaj1jfs16YgQs7LW0h7'
                          redirect_uri={'https://grownupish.herokuapp.com/implicit/callback'}
                          onAuthRequired={onAuthRequired} >
                    <Route path='/' exact={true} component={Home} />
                    {/* <SecureRoute path='/protected' component={Protected} /> */}
                    <Route path='/login' render={() => <Login baseUrl='https://dev-336569.oktapreview.com' />} />
                    <Route path='/implicit/callback' component={ImplicitCallback} />
                    <Route path="/register" component={RegistrationForm}/>
                    <Route exact path="/addPost" component={PostForm}/>
                    <Route exact path="/userProfile/:id" component={UserProfile}/>
                    <Route exact path="/topics/:id/posts" component={TopicPosts}/>
                    <Route exact path="/posts/:id/" component={PostPage}/>
                </Security>
            </Router>
        );
    }
}

export default App;







