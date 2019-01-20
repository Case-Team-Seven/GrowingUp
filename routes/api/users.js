const connection = require("../../db/connection.js");
const express = require('express');
const router = express.Router();
const oktaClient = require('../../lib/oktaClient');

/* Create a new User (register). */
router.post('/', (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  oktaClient
    .createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    });
});



// api/users
router.get("/", function(req, res, next) {

    const sql = "SELECT * FROM users;"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/users/id
router.get("/:id", function(req, res) {

    const sql = "SELECT * FROM users WHERE id = "+ req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/users/add
router.post("/add", function(req, res) {

    const user = req.body;
    console.log("REQ.BODY", req.body);

    const sql = "INSERT INTO `users` (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?)"


    connection.query(sql, [user.first_name, user.last_name, user.username,
        user.email, user.password],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    // res.send(user);
    res.redirect("/")
});






module.exports = router;