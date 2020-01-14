var express = require('express');
var router = express.Router();
var controller = require('../controller');
router.get('/login', controller.login);

/* GET home page. */
router.get('/', controller.home);
router.get('/oauthredirect',controller.oauthredirect);
module.exports = router;
