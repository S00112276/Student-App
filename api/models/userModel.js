var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create user Schema & model
var UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String
    },
    studentID: {
        type: String,
        required: [true, 'Student ID is required']
    }
});

module.exports = mongoose.model('Users', UserSchema);