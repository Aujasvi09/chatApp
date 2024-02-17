const loginController = require("../controlllers/loginController")
const  signUpController = require( "../controlllers/signupController")

const express = require("express")

const router = express.Router()

// router.post("/login",loginController)
router.route("/signup").post(signUpController)
router.route("/login").post(loginController)

module.exports = router