//Database Model Import
const PostModel = require("../models/postModel.js");

//controller used to find all posts
const getPosts = async (req, res) => {
  const listOfPosts = await PostModel.find();
  res.json(listOfPosts);
};

//controller used to find a post by specified id
const getPostById = async (req, res) => {
  const id = req.params.id;
  const post = await PostModel.findById(id);
  res.json(post);
};

//controller used to create a post
const createPost = async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  //request variable from middleware
  //will use it to add the username to the new post that is being created
  const { username } = req.user;

  const newPost = new PostModel({
    title: title,
    content: content,
    username: username,
  });
  await newPost.save();
  res.json(newPost);
};

//exports
exports.getPosts = getPosts;
exports.getPostById = getPostById;
exports.createPost = createPost;
