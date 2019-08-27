var express = require('express');
var router = express.Router();
var activityCntrl = require('../controllers/activities');

router.get('/', activityCntrl.index)
router.get('/:id', activityCntrl.activity);

// @ POST
// @ PRIVATE
// @ add an activity to the db
router.post('/', activityCntrl.add); //same as create

// @ PUT
// @ PRIVATE
// @ update an activity (serve a form to update)
router.put('/:id/edit', activityCntrl.update);

// @ DELETE
// @ PRIVATE
// @ delete an activity
router.delete('/:id/delete', activityCntrl.delete);


// @ GET
// @ PRIVATE
// @ serves form to add activity
router.get('/:id/new', activityCntrl.new); //same as newFlight

// authorization function here

module.exports = router;