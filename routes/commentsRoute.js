//libraries
const express = require("express");
const router = express.Router();

//imports
const CommentModel = require("../models/commentModel.js");
const { validateToken } = require("../middlewares/authMiddleware");

//controllers, used in callback after making a request
const {
  getComment,
  createComment,
  deleteComment,
} = require("../controllers/commentsController");

//route to get a comment assigned to a specific post
router.get("/getcomments/:postId", getComment);

//route to create a comment and assign in to a post
router.post("/createcomment", validateToken, createComment);

//route to delete a comment
router.delete("/deletecomment/:commentId", deleteComment);

module.exports = router;
