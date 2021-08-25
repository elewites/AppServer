//Database Model Import for Likes
const LikeModel = require("../models/likeModel");
const PostModel = require("../models/postModel");

//controller used to like a post or unlike a post
const likePost = async (req, res) => {
  const { id } = req.user;
  const { postId } = req.body;

  const findLike = await LikeModel.findOne({ postId, userId: id });
  const findPost = await PostModel.findOne({ _id: postId });

  if (!findLike) {
    //if findLike is empty, create a like document with req.user.id and req.body.postId
    const newLike = new LikeModel({ postId, userId: id });
    await newLike.save();

    //we also push the id of newLike to array of the correspoding post
    //**Check association we created in PostModel
    findPost.likes.push(newLike._id);
    await findPost.save();

    res.json(newLike);
    //
  } else {
    //if findLike is not empty, we remove a like from the array of the post
    await findPost.likes.pull({ _id: findLike._id });
    await findPost.save();

    //we also delete the like from the likes collection
    await LikeModel.findOneAndDelete({ postId, userId: id });

    res.json("Post Unliked");
  }
};

module.exports = { likePost };
