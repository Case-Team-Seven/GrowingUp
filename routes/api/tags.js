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

// api/users/add
router.post("/add", function(req, res) {

    const tag = req.body;
    console.log("REQ.BODY", req.body);

    const sql = "INSERT INTO `tags` (name) VALUES (?)"


    connection.query(sql, [tag.name],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    // res.send(user);
    res.redirect("/")
});




module.exports = router;