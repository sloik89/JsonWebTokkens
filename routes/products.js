const express = require("express");
const router = express.Router();
const { getData, login } = require("../controllers/products");
const authenticationMiddleware = require("../middleware/auth");
router.route("/").post(login);
router.route("/").get(authenticationMiddleware, getData);

module.exports = router;
