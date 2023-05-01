const Products = require("../models/products");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    throw new BadRequestError("ussername and password ies empty");
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.json({ token });
};
const getData = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `This is your secret infoo and your secret number is ${luckyNumber}`,
  });
};
module.exports = {
  login,
  getData,
};
