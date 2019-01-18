const express = require("express");
const bodyParser = require("body-parser");
const Cors = require('cors');
const logger = require('morgan');
const passport = require('passport');
const loginRoute = require('./routes/api/login/loginUser')
const deleteUserRoute = require('./routes/api/login/deleteUser')
const findUserRoute = require('./routes/api/login/findUsers')
//const forgotPWRoute = require('./routes/api/login/forgotPassword')
const registerUserRoute = require('./routes/api/login/registerUser')
const resetPWRoute = require('./routes/api/login/resetPassword')
const updatePWRoute = require('./routes/api/login/updatePassword')
const updatePWEmailRoute = require('./routes/api/login/updatePasswordViaEmail')
const updateUserRoute = require('./routes/api/login/updateUser')
const routes = require("./routes");

const app = express();
// express/ API port
const PORT = process.env.PORT || 3001;

require('./config/passport');

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//test to make sure express is working
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.use(routes);
app.use(loginRoute)
app.use(deleteUserRoute)
app.use(findUserRoute)
//app.use(forgotPWRoute)
app.use(registerUserRoute)
app.use(resetPWRoute)
app.use(resetPWRoute)
app.use(updatePWRoute)
app.use(updatePWEmailRoute)
app.use(updateUserRoute)


app.listen(PORT, function() {
    console.log(`Lisetning ==> Server now on port ${PORT}!`);
});

module.exports = app;
