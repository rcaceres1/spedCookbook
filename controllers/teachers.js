const Teacher = require('../models/teacher');

module.exports = {
   index 
}

function index(req, res, next) {

    res.render('teachers/index', {
        teachers, 
        user: req.user,
        name: req.query.name,
        sortKey
    })
}


