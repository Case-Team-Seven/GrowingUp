const path = require("path");
const router = require("express").Router();

const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// router.get('/api/users', (req,res) => {
//     const list = ["user1", "user2", "user3"];
//     res.json(list);
//     console.log('Sent list of items');
// });


// router.get("/api/users/:id", function(req, res) {
//
//     console.log("Hi I'm in the user/:id route!")
//     const sql = "SELECT * FROM users WHERE id = "+ req.params.id;
//
//     connection.query(sql, function(err, results) {
//         if (err) throw err;
//
//         res.json(results)
//
//     });
//
// });

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});




module.exports = router;
