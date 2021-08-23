const mongoose = require("mongoose");

//model for querying a comment document into the database
const commentSchema = mongoose.Schema({
  commentBody: String,
  //association between comments and posts
  //a comment can have only one post
  //that is why we use configuration object instead of array
  //check out postModel for one to many association
  post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  username: { type: String, required: true },
});

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel;
