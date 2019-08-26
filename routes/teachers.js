var express = require('express');
var router = express.Router();
var teacherCntrl = require('../controllers/teachers');
 
/* GET users listing. */

router.get('/teachers', teacherCntrl.index);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
