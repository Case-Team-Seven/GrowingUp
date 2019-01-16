const router = require("express").Router();
const  connection = require("../../db/connection.js");



// api/posts
router.get("/", function(req, res) {

    const sql = "SELECT * FROM posts;"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/posts/id
router.get("/:id", function(req, res) {

    const sql = "SELECT * FROM posts WHERE id = "+ req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/users/add
router.post("/add", function(req, res) {

    const post = req.body;
    console.log("REQ.BODY", req.body);

    const sql = "INSERT INTO `posts` (title, body, created, updated, user_id, topic_id) VALUES (?, ?, ?, ?, ?, ?)"


    connection.query(sql, [post.title, post.body, post.created,
        post.updated, post.user_id, post.topic_id],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    // res.send(user);
    res.redirect("/")
});






module.exports = router;