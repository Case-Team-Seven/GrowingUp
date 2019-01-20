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

//get a single post
// api/posts/id
router.get("/:id", function(req, res) {

    const sql = "SELECT * FROM posts WHERE id = "+ req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results[0]);

    });

});

//get all posts for a topic
// api/posts/topics/id
router.get("/topics/:id", function(req, res) {

    const sql = "SELECT * FROM posts WHERE topic_id = "+ req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});




// api/users/add
router.post("/add", function(req, res) {

    const post = req.body;
    console.log("U HIT ME");
    console.log(req.body)

    //res.send('hey whatsup hello')


    const sql = "INSERT INTO `posts` (title, body, user_id, topic_id) VALUES (?, ?, ?, ?, ?, ?)"


    connection.query(sql, [post.title, post.body, post.user_id, post.topic_id],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    res.json(post);
    //res.redirect("/")
});


// // api/users/add
// router.post("/add", function(req, res) {
//
//     const post = req.body;
//     console.log("U HIT ME");
//     console.log(req.body)
//
//     res.send('hey whatsup hello')
//
//
//     const sql = "INSERT INTO `posts` (title, body, topic_id, user_id) VALUES (?, ?, ?, ?)"
//
//
//     connection.query(sql, [post.title, post.body, post.topic_id, post.user_id],  function(err, result){
//         if(err) throw err;
//         console.log("1 record inserted");
//     });
//
//     res.send(post);
//     // res.redirect("/")
// });





module.exports = router;