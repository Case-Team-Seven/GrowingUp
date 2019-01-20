import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import config from './app.config';
//import unregister from './serviceWorker.js';

function onAuthRequired({ history }) {
  history.push('/login');
}

ReactDOM.render(
  <Router>
    <Security
      issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}
      onAuthRequired={onAuthRequired}
    >
      <App />
    </Security>
  </Router>,
  document.getElementById('root')
);
//registerServiceWorker();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
