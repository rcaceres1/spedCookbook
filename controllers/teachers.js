const Teacher = require('../models/teacher');

module.exports = {
   index,
   account 
};

function index(req, res, next) {

    res.render('teachers/index', {
        user: req.user,
        teachers, 
        name: req.query.name,
        sortKey
    })
}

function account(req, res, next) {
    if(!req.user) return res.redirect('/');
    Teacher.findById(req.user._id, function(err, teacher) {
        res.render('teachers/account', {
            user: req.user,
            teacher
        });
    });
}


