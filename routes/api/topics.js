const router = require("express").Router();
const  connection = require("../../db/connection.js");



// api/topics
router.get("/", function(req, res) {

    const sql = "SELECT * FROM topics;"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/topics/id
router.get("/:id", function(req, res) {

    const sql = "SELECT * FROM topics WHERE id = "+ req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});


// api/users/add
router.post("/add", function(req, res) {

    const topic = req.body;
    console.log("REQ.BODY", req.body);

    const sql = "INSERT INTO `topics` (user_id, title, created) VALUES (?, ?, ?)"


    connection.query(sql, [topic.user_id, topic.title, topic.created,
        ],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    // res.send(user);
    res.redirect("/")
});



module.exports = router;