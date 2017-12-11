const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/database');

// Lecturer Schema
const LecturerSchema = mongoose.Schema({
    // _id: {
    //     Schema.ObjectId
    // },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    lecturerId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Lecturer = module.exports = mongoose.model('Lecturer', LecturerSchema);

// module.exports.getUserById = function(id, callback) {
//     Lecturer.findById(id, callback);
// }

module.exports.getUserByEmail = function(email, callback) {
    const query = { email : email }
    Lecturer.findOne(query, callback);
}

module.exports.addUser = function (newLecturer, callback){
    // genSalt = a random key to hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newLecturer.password, salt, (err, hash) => {
            if(err) throw err;
            newLecturer.password = hash;
            newLecturer.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}