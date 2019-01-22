const express = require("express");
const bodyParser = require("body-parser");
const Cors = require('cors');
const logger = require('morgan');
const routes = require("./routes");
const OktaJwtVerifier = require('@okta/jwt-verifier');
const index = require('./routes/api/index');
const users = require('./routes/api/users');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: 'https://dev-336569.oktapreview.com/oauth2/default',
    clientId: '0oaj1jfs16YgQs7LW0h7',
    assertClaims: {
      aud: 'api://default',
    },
  });

  function authenticationRequired(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);
  
    if (!match) {
      return res.status(401).end();
    }
  
    const accessToken = match[1];
  
    return oktaJwtVerifier.verifyAccessToken(accessToken)
      .then((jwt) => {
        req.jwt = jwt;
        next();
      })
      .catch((err) => {
        res.status(401).send(err.message);
      });
  }
  
  const app = express();
// express/ API port
const PORT = process.env.PORT || 3001;


app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', index);
app.use('/api/users', users);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/secure', authenticationRequired, (req, res) => {
    res.json(req.jwt);
  });
  
  /**
   * Another example route that requires a valid access token for authentication, and
   * print some messages for the user if they are authenticated
   */
  app.get('/api/messages', authenticationRequired, (req, res) => {
    res.json([{
      message: 'Hello, world!'
    }]);
  });



app.use(routes);



app.listen(PORT, function() {
    console.log(`Lisetning ==> Server now on port ${PORT}!`);
});

module.exports = app;
