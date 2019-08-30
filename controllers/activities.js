const Activity = require('../models/activity');

module.exports = {
    activity,
    delete: deleteAct,
    index, 
    add, 
    update, 
    new: newAct
}

// show one
function activity(req, res) {
    Activity.findById(req.params.id, function(err, activity) {
        res.render('activities/activity', {
            user: req.user,
            activity
        });
    });
}
function deleteAct(req, res) {
    Activity.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/activities');
    });
}

// show all
// looks right 
function index(req, res) {
    Activity.find({}, (err, activities) => {
        res.render('activities/all', { 
        user: req.user,
        activities
    })
    }) 
}

// should be good
function add(req,res) {
    Activity.create(req.body, function(err, activity) {
        res.redirect('/activities');
    });
}

/// This will need to be refactored 
function update(req, res) {
    Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity) {
        res.redirect(`/activities/${req.params.id}`)
    });
}

// should be good
function newAct(req, res) {
    res.render('activities/new', {
        user: req.user,
        title: 'Add Activity'});
}

// this one should be good
