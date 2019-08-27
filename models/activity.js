const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    content: String,
    rating: { type: String, min: 'D', max: 'A', default: 'A'}
}, {
    timestamps: true
});

var activitySchema = new mongoose.Schema({
    name: String,
    materials: String,
    activPic: String,
    directions: String,
    comment: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema);