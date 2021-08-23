//Database model import
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

//controller used to create user
const createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });
  if (user) {
    res.send("Username already exists");
  } else {
    bcrypt.hash(password, 10).then(async (hash) => {
      const newUser = new UserModel({ username: username, password: hash });
      await newUser.save();
      res.send("User created! You will be redirected to login page :)");
    });
  }
};

//controller used to login
const login = async (req, res) => {
  const { username, password } = req.body;
  //querying for a user where username = req.username
  //if there is no equal username, user will be null
  //if there is, then user will populate with value for that queried user
  //remember user is an object as follows: {username: "", password: ""}
  const user = await UserModel.findOne({ username: username });
  if (!user) res.json({ error: "User does not exist" });

  //comparing req.password with user.password in db
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong username/password combination" });
    } else {
      //creating json webtoken using the function sign()
      //the webtoken contians an object with the username and a user id
      const accessToken = sign(
        { username: user.username, id: user._id },
        "importantsecret"
      );
      res.json({ token: accessToken, username: user.username, id: user._id });
    }
  });
};

exports.createUser = createUser;
exports.login = login;
