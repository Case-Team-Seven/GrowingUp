const router = require("express").Router();
const  connection = require("../../db/connection.js");



// api/tags
router.get("/", function(req, res) {

    const sql = "SELECT * FROM tags;"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});

// api/tags/id
router.get("/:id", function(req, res) {

    const sql = "SELECT * FROM tags WHERE id = "+ req.params.id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});






module.exports = router;