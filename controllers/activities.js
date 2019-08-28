const Activity = require('../models/activity');

module.exports = {
    activity,
    index, 
    add, 
    update, 
    delete: deleteAct,
    new: newAct
}

// show one
function activity(req, res) {
    Activity.findById(req.params.id, function(err, activity) {
        res.render('activities/activity', {
            activity
        });
    });
}

// show all
// looks right 
function index(req, res) {
    Activity.find({}, (err, activities) => {
        res.render('activities/all', { 
        activities,
        user: req.user 
    })
    }) 
}

// should be good
function add(req,res) {
    Activity.add(req.body, function(err, activity) {
        res.redirect('/activities');
    });
}

/// This will need to be refactored 
function update(req, res) {
    Activity.findById(req.params.id, function(err, activity) {
        // activity.activities.push(req.body);
        activity.save(function(err, activity) {
            res.redirect(`/activities/${activity._id}`);
        });
    });
}

// should be good
function newAct(req, res) {
    res.render('activities/new', {title: 'Add Activity'});
}

// this one should be good
function deleteAct(req, res) {
    Activity.findOneAndDelete(req.params.id, function(err) {
        res.redirect('/activities');
    });
}