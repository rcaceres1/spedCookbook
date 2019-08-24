const mongoose = require('mongoose');

var teacherSchema = new Mongoose.Schema({
    name: String,
    email: String, 
    school: String,
    student: [studentSchema],
    googleId: String
}, {
    timestamps: true
});

var studentSchema = new Mongoose.Schema({
    name: String,
    studentId: String,
    grade: Number, 
    //acivityAssigned?
});

module.exports = mongoose.model('Teacher', teacherSchema);