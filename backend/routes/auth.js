const router = require("express").Router()
const User = require("../models/User")

//Register
router.post("/register", controller.register)
//Login
router.get("/register", controller.login)
