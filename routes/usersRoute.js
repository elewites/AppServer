//Libraries
const express = require("express");
const router = express.Router();

//middleware
const { validateToken } = require("../middlewares/authMiddleware");

//controllers, used in callback for requests
const { createUser, login } = require("../controllers/usersController");

router.post("/createuser", createUser);
router.post("/login", login);

/*Simple get request route
Didn't use a controller for this one.
will use this route to make sure the authentication web token is not faked
by injecting some random token.
Instead the validateToken middleware will verify if token is valid.
Call to this route is made by a useEffect in App.js
That useEffect is in charge of setting the authState
The response will also allow us to use the req.user info in frontend
*/
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
