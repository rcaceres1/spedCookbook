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
function index(req, res) {
    Activity.find({}, (err, activities) => {
        res.render('activities/all', { 
        activities,
        user: req.user 
    })
    }) 
}

function add(req,res) {
    Activity.add(req.body, function(err, activity) {
        res.redirect('/activities');
    });
}

function update(req, res) {
    Activity.findById(req.params.id, function(err, activity) {
        activity.activities.push(req.body);
        activity.save(function(err, activity) {
            res.redirect(`/activities/${activity._id}`);
        });
    });
}

function newAct(req, res) {
    res.render('activities/new', {title: 'Add Activity'});
}

function deleteAct(req, res) {
    Activity.findOne({'activities._id': req.params.id}, function(err, activity) {
        activities.id(req.params.id).remove();
        res.redirect('/activities');
    });
}