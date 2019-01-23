const router = require("express").Router();
const  connection = require("../../db/connection.js");


// api/posts
router.get("/", function(req, res) {

    const sql = "SELECT * FROM posts";

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results);

    });

});



// api/posts/recent
router.get("/recent", function(req, res) {

    const sql = "select * from posts\n" +
        "join(select count(*) commentCount from comments c, posts  where posts.id = c.post_id) as com\n" +
        "join(select topics.title topicTitle from topics, posts where posts.topic_id = topics.id) as top\n" +
        "order by created desc;\n"

    connection.query(sql, function(err, results) {
        if (err) {throw err; }

        res.json(results)

    });

});




//get a single post
// api/posts/id
// router.get("/:id", function(req, res) {
//
//     const sql = "SELECT * FROM posts WHERE id = "+ req.params.id;
//
//     connection.query(sql, function(err, results) {
//         if (err) {throw err;}
//
//         res.json(results[0]);
//
//     });
//
// });

//NEW
//get a single post
// api/posts/id
router.get("/:id", function(req, res) {

    const sql = "select * from posts\n" +
        "  join(select users.username from users, posts where posts.user_id = users.id) as post\n" +
        "where posts.id =" + req.params.id;

    connection.query(sql, function(err, results) {
        if (err) {throw err;}

        res.json(results[0]);

    });

});



//get all posts for a topic
// api/posts/topics/id
// router.get("/topics/:id", function(req, res) {
//
//     const sql = "SELECT * FROM posts WHERE topic_id = "+ req.params.id;
//
//     connection.query(sql, function(err, results) {
//         if (err) throw err;
//
//         res.json(results)
//
//     });
//
// });

router.get("/topics/:id", function(req, res) {

    const sql = "select posts.id, posts.body, posts.user_id, posts.topic_id, posts.updated, posts.created, posts.score, t.title as topicName from posts\n" +
        "join topics t ON posts.topic_id = t.id\n" +
        "where posts.topic_id = " + req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});




// api/posts/add
router.post("/add", function(req, res) {

    const post = req.body;

    const sql = "INSERT INTO `posts` (title, body, user_id, topic_id) VALUES (?, ?, ?, ?)"


    connection.query(sql, [post.title, post.body, post.user_id, post.topic_id],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    res.json(post);
});






module.exports = router;