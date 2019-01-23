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
//     const sql = "select posts.id, posts.title, posts.body, posts.user_id, posts.topic_id, posts.updated, posts.created, posts.score, t.title as topicName from posts\n" +
//         "join topics t ON posts.topic_id = t.id\n" +
//         "where posts.topic_id = " + req.params.id;
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

    const sql = "select\n" +
        " p.id,\n" +
        " p.title,\n" +
        " p.body,\n" +
        " p.user_id,\n" +
        " p.topic_id,\n" +
        " p.created,\n" +
        " p.updated,\n" +
        "(select count(*) from comments c where p.id = c.post_id) as commentCount,\n" +
        "(select topics.title  from topics where p.topic_id = topics.id) as topicTitle,\n" +
        "(select users.username  from users where p.user_id = users.id) as username\n" +
        "from posts p\n" +
        "where p.topic_id = " + req.params.id +"\n" +
        "group by p.id, p.title, p.body, p.user_id, p.topic_id, p.created, p.updated, topicTitle, username\n" +
        "order by created desc;"

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