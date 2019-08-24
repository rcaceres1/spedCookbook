const mongoose = require('mongoose');

var activitySchema = new Mongoose.Schema({
    name: String,
    materials: String,
    activPic: String,
    directions: String,
    comment: [commentSchema]
}, {
    timestamps: true
});

var commentSchema = new Mongoose.Schema({
    content: String,
    rating: { type: String, min: 'D', max: 'A', default: 'A'}
}, {
    timestamps: true
});
module.exports = mongoose.model('Activity', activitySchema);