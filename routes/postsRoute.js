//Libraries
const express = require("express");
const router = express.Router();

//middleware
const { validateToken } = require("../middlewares/authMiddleware");

//Controllers, used in callback after making requests
const {
  createPost,
  getPosts,
  getPostById,
} = require("../controllers/postsControllers.js");

router.get("/getposts", getPosts);
router.get("/:id", getPostById);
router.post("/createpost", validateToken, createPost);

module.exports = router;
