import React from 'react';
import logo from './logo.svg';
import {NavTop} from "./components/Nav/NavTop/NavTop";
import LogIn from "./components/LogIn/LogIn";
import CategoryList from "./components/CategoryList/CategoryList";
import ForumPost from "./components/Forums/ForumPost";
import ForumForm from "./components/Forums/ForumForm";
import NewPostButton from './components/Button/NewPost/NewPostButton'; 
import './App.css';
import { Button } from 'reactstrap';
import Post from './components/Forums/Post';
import PostForm from "./pages/PostForm/PostForm";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Finance from "./pages/Finance/Finance";
import Education from "./pages/Education/Education";
import SocialMedia from "./pages/SocialMedia/SocialMedia";
import Relationships from "./pages/Relationships/Relationships";
import Partying from "./pages/Partying/Partying";
import Career from "./pages/Career/Career";

const App = () => (
    <Router>
        <div>
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/addPost" component={PostForm} />
                <Route exact path="/LogIn/SignUp" component={Login} />
                <Route exact path="/Finance" component={Finance} />
                <Route exact path="/Education" component={Education} />
                <Route exact path="/SocialMedia" component={SocialMedia} />
                <Route exact path="/Relationships" component={Relationships} />
                <Route exact path="/Partying" component={Partying} />
                <Route exact path="/Career" component={Career} />
                {/* <Route exact path="/TimeManagement" component={TimeManagement} />
                <Route exact path="/Family" component={Family} /> */}
            </Switch>
        </div>
    </Router>
);



        // return (
        //     <div className="mainContainer">
                

        //             <NavTop render={<h1>Grownupish</h1>}/>
        //             <NewPostButton />
                
        //         <div className="logInContainer" >
        //             <LogIn />
        //         </div>
        //         <div className="logInContainer">
        //             <CategoryList />
        //         </div>
        //         <div className="forumsContainer">
        //             <ForumPost />
                    
        //         </div>
        //         <div className="forumsFormContainer">
        //             <ForumForm />
        //         </div>
        //     </div>
        // );
//     }
// }

export default App;