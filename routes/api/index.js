const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
const commentRoutes = require("./comments");
const tagRoutes = require("./tags");
const topicRoutes = require("./topics");





// /api/users
router.use("/users", userRoutes);

// /api/posts
router.use("/posts", postRoutes);

// /api/comments
router.use("/comments", commentRoutes);

// /api/tags
router.use("/tags", tagRoutes);

// /api/topics
router.use("/topics", topicRoutes);



module.exports = router;
