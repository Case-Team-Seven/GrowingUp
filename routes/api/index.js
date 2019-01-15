const router = require("express").Router();
const userRoutes = require("./users");

// users routes
// /api/users
router.use("/users", userRoutes);



module.exports = router;
