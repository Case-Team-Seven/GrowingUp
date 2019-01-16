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







module.exports = router;