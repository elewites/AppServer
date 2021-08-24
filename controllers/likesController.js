//Database Model Import for Likes
const LikeModel = require("../models/likeModel");

//controller used to like a post or unlike a post
const likePost = async (req, res) => {
  const { id } = req.user;
  const { postId } = req.body;
  const newLike = new LikeModel({ postId, userId: id });
  res.json(newLike);
};

module.exports = { likePost };
