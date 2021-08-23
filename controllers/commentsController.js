//Database model import
const CommentModel = require("../models/commentModel");

//middleware
const { validateToken } = require("../middlewares/authMiddleware");

//controller used to get a comment assigned to a specific post
const getComment = async (req, res) => {
  const postId = req.params.postId;
  const listOfComments = await CommentModel.find({ post: postId });
  res.json(listOfComments);
};

//controller used to create a comment and assign it to a post
const createComment = async (req, res) => {
  const { commentBody, postId } = req.body;

  //request variable from middleware
  //will use it to add the username to the new comment that is being created
  const { username } = req.user;

  const newComment = new CommentModel({
    commentBody,
    post: postId,
    username: username,
  });
  await newComment.save();
  res.json(newComment);
};

//controller used to delete a comment
const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  const commentToDelete = await CommentModel.findByIdAndDelete(commentId);
  res.send("Comment Deleted");
};

module.exports = { getComment, createComment, deleteComment };
