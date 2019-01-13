const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require('mysql');

let connection;
const PORT = process.env.PORT || 3001;

// Jaws database
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
     connection = mysql.createConnection({
    host: "localhost",
    port: process.env.db_port || 3306,
    user: "root",
    password: "password",
    database: "grownup"
});

}

// Make connection.
connection.connect(function(err) {

  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}





// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`Lisetning ==> Server now on port ${PORT}!`);
});
