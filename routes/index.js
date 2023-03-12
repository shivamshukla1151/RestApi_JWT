const express = require("express");
const createError = require("http-errors");
const registerController = require("../controller/auth/registerController");
const loginController = require("../controller/auth/loginController");
// const errorHandler = require("../middlewares/errorHandler");
const router = express.Router();

router.get("/", registerController().getRegister);

router.post("/registration", registerController().register);
router.post("/login", loginController().login);

module.exports = router;
