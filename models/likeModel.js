const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  //association between like and post
  //a like can only have on post
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },

  //association between like and user
  //a like can only have one user
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const LikeModel = mongoose.model("like", likeSchema);

module.exports = LikeModel;
