const router = require('express').Router();
const userController = require('../controller/user.controller.js');
const { getOTP } = require('../controller/otp.controller.js')

router.post('/registration' , userController.register);
router.post('/login' , userController.login);
router.post('/getOTP', getOTP);

module.exports = router;