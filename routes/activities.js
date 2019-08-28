var express = require('express');
var router = express.Router();
var activityCntrl = require('../controllers/activities');

router.get('/', activityCntrl.index)
router.get('/:id', activityCntrl.activity);

// @ POST
// @ PRIVATE
// @ add an activity to the db
router.post('/', isLoggedIn, activityCntrl.add);

// @ PUT
// @ PRIVATE
// @ update an activity (serve a form to update)
router.put('/:id/edit', isLoggedIn, activityCntrl.update);

// @ DELETE
// @ PRIVATE
// @ delete an activity
router.delete('/:id/delete', isLoggedIn, activityCntrl.delete);


// @ GET
// @ PRIVATE
// @ serves form to add activity
router.get('/:id/new', isLoggedIn, activityCntrl.new); 

// authorization function here
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;