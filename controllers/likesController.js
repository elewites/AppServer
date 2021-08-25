//Database Model Import for Likes
const LikeModel = require("../models/likeModel");

//controller used to like a post or unlike a post
const likePost = async (req, res) => {
  const { id } = req.user;
  const { postId } = req.body;
  const findLike = LikeModel.findOne({ postId, userId: id });

  if (!findLike) {
    const newLike = new LikeModel({ postId, userId: id });
    await newLike.save();
    res.json(newLike);
  } else {
    await LikeModel.findOneAndDelete({ postId, userId: id });
    res.json("Post Unliked");
  }
};

module.exports = { likePost };
