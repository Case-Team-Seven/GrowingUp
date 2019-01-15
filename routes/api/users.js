const router = require("express").Router();
const  connection = require("../../db/connection.js");



// api/users
router.get("/", function(req, res) {

    const sql = "SELECT * FROM users;"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/users/id
router.get("/:id", function(req, res) {

    console.log("Hi I'm in the user/:id route!")
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