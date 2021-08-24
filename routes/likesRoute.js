//libraries
const express = require("express");
const router = express.Router();

//middleware
const { validateToken } = require("../middlewares/authMiddleware");

//controllers
const { likePost } = require("../controllers/likesController");

router.post("/likepost", validateToken, likePost);

module.exports = router;
