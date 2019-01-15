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






module.exports = router;