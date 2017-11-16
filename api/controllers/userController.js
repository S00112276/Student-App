'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

// Return all users 
exports.list_all_users = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

// Create a user
exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

// Return a user based on _id
exports.read_a_user = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

// Update an existing user
exports.update_a_user = function (req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body,
        { new: true }, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
};

// Delete a user based on _id
exports.delete_a_user = function (req, res) {
    User.findOneAndRemove({userId:req.params.userId},
         function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};