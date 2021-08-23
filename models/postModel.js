const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  username: String,
  //association between posts and comments
  //a post can have many comments
  //that is why we assign a configuration array
  //does this relation need to exist?
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
});

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;
