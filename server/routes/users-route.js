const express = require("express");
const router = express.Router();
const {userRegister, refreshToken} = require("../controllers/userCtrl")

router.post('/register', userRegister)

router.get('/refresh_token', refreshToken)


module.exports = router;