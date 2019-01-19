const router = require("express").Router();
const  connection = require("../../db/connection.js");



// api/comments
router.get("/", function(req, res) {

    const sql = "SELECT * FROM comments;"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/comments/id
router.get("/:id", function(req, res) {

    const sql = "SELECT * FROM comments WHERE id = "+ req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results[0]);

    });

});

//get all comments for a post
//api/comments/posts/id
router.get("/posts/:id", function(req, res) {

    const sql = "SELECT * FROM comments WHERE post_id = " + req.params.id;


    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});
// api/comments/add
router.post("/add", function(req, res) {

    const comment = req.body;
    console.log("REQ.BODY", req.body);

    const sql = "INSERT INTO `comments` (body, user_id, post_id, created, updated) VALUES (?, ?, ?, ?, ?)"


    connection.query(sql, [comment.body, comment.user_id, comment.post_id,
        comment.created, comment.updated],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    // res.send(user);
    res.redirect("/")
});








module.exports = router;