const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  username: String,
  //association between posts and comments
  //a post can have many comments
  //that is why we assign a configuration array
  //does this relation need to exist?
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "like" }],
});

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;
