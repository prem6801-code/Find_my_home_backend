const express = require("express");
const { login, register, logout } = require("../controllers/authController");
const router = express.Router();

router.post('/register',register).post('/login',login).post('/logout',logout);

module.exports=router
