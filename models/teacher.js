const mongoose = require('mongoose');

var teacherSchema = new Mongoose.Schema({
    name: String,
    email: String, 
    school: String,
    class: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);