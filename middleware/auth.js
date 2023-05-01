const { UnauthenicatedError } = require("../errors");
const jwt = require("jsonwebtoken");
const authenticationMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token.startsWith("Bearer ") || !token) {
    throw new UnauthenicatedError("No token provided", 401);
  }
  token = token.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnauthenicatedError("Not authorized to access this route");
  }
};
module.exports = authenticationMiddleware;
