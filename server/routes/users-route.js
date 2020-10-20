const express = require("express");
const router = express.Router();
const {authenticateUser} = require('../middlewares/check-auth')
const {userRegister, loginUser} = require("../controllers/userCtrl")

router.post('/register', userRegister)

router.post('/login', loginUser)





module.exports = router;