var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/teachers', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});

module.exports = mongoose;

