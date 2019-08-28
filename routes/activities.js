var express = require('express');
var router = express.Router();
var activityCntrl = require('../controllers/activities');

router.get('/', activityCntrl.index)

router.get('/new', isLoggedIn, activityCntrl.new); 


router.get('/:id', activityCntrl.activity);


router.post('/', isLoggedIn, activityCntrl.add);


router.put('/:id', isLoggedIn, activityCntrl.update);

router.delete('/:id', isLoggedIn, activityCntrl.delete);



// authorization function here
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;