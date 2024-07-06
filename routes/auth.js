var express = require('express');
var router = express.Router();
var {Register, Login, Logout, getUser} = require('../controller/auth')
var{verifyToken} = require('../middleware/verifyToken')


router.get('/', getUser);
router.post('/', Register);

module.exports = router;