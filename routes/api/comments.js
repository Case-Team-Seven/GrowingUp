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

        res.json(results)

    });

});






module.exports = router;