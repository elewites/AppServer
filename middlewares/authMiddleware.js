//libraries
const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  try {
    //we use verify() to verify if the given web token is the appropiate one
    //it will also parse or unhash the payload that is stored in the web token
    const validToken = verify(accessToken, "importantsecret");

    //we instantiate a request variable to access the payload elsewhere
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
