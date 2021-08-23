const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  //association between user and posts
  //a user can have many posts
  //hence configuration array is used
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
