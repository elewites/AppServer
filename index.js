//Libraries
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
const postsRouter = require("./routes/postsRoute.js");
app.use("/posts", postsRouter);

const commentsRouter = require("./routes/commentsRoute.js");
app.use("/comments", commentsRouter);

const userRouter = require("./routes/usersRoute");
app.use("/users", userRouter);

const likesRouter = require("./routes/likesRoute");
app.use("/likes", likesRouter);

//Database connection
const CONNECTION_URI =
  "mongodb+srv://eros:better_together@cluster0.exjg5.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  ).catch(error => {
    console.log(error);
    app.listen(PORT, () => console.log('connected to server but not to db'));
  }
  );
