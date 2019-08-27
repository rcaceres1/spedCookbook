const Teacher = require('../models/teacher');

module.exports = {
   index,
   account 
};

function index(req, res, next) {

    res.render('teachers/index', {
        teachers, 
        user: req.user,
        name: req.query.name,
        sortKey
    })
}

function account(req, res, next) {
    Teacher.findById(req.params.id, function(err, teacher) {
        res.render('teachers/account', {
            title: 'My Account',
            name: teacher.name,
            email: teacher.email,
            school: teacher.school, 
            user: req.user
        });
    });
}


