const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var studentSchema = new Schema({
//     name: String,
//     studentId: String,
//     grade: Number,
// });

var teacherSchema = new Schema({
    name: String,
    email: String, 
    school: String,
    // students: [studentSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);