


import './App.css';

// import UserProfile from "./pages/Users/UserProfile"
// import TopicPosts from "./pages/Posts/TopicPosts"


import { Button } from 'reactstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';


import React, { Fragment } from 'react';





const App = ({ classes }) => (
  <Fragment>
    
    <main className={classes.main}>
      <Home />
    </main>
  </Fragment>
);

export default App;


                


