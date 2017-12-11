//'use strict';
// Doesn't Work 
//module.exports = function (app) {
//    var users = require('../controllers/userController');
//
//    app.route('/register')
//        .post(users.registerUser);
//
//    app.route('/authenticate')
//        .post(users.AuthenticateUser);
//
//    app.route('/profile')
//        .get(users.GetProfile);
//}

// Should Work
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');
const User = require('../models/userModel');
const Student = require('../models/studentModel');
const Lecturer = require('../models/lecturerModel');

// Register Student
router.post('/registerstudent', (req, res, next) => {
    let newUser = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.studentId + "@mail.itsligo.ie",
        username: req.body.username,
        studentId: req.body.studentId,
        password: req.body.password
    });

    Student.addUser(newUser, (err, user) => {
        if(err){
        res.json({ success: false, msg: 'Failed to register student: ' + err });
        }
        else {
            res.json({ success: true, msg: 'Student registered!' });
        }
    });
});
// End Register Student

// Register Lecturer
router.post('/registerlecturer', (req, res, next) => {
    let newUser = new Lecturer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.lecturerId + "@mail.itsligo.ie",
        username: req.body.username,
        lecturerId: req.body.lecturerId,
        password: req.body.password
    });

    Lecturer.addUser(newUser, (err, user) => {
        if(err){
        res.json({ success: false, msg: 'Failed to register lecturer: ' +  err});
        }
        else {
            res.json({ success: true, msg: 'Lecturer registered!' });
        }
    });
});
// End Register Lecturer

// // Register
// router.post('/register', (req, res, next) => {
//     let newUser = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.studentId + "@mail.itsligo.ie",
//         username: req.body.username,
//         studentId: req.body.studentId,
//         password: req.body.password
//     });

//     User.addUser(newUser, (err, user) => {
//         if(err){
//         res.json({ success: false, msg: 'Failed to register user' });
//         }
//         else {
//             res.json({ success: true, msg: 'User registered!' });
//         }
//     });
// });

// Authenticate Lecturer
router.post('/authenticatelecturer', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    // Call method from User & retrieve student by studentId
    Lecturer.getUserById(email, (err, lectuerer) => {
        if(err) throw err;
        
        if(!lectuerer) {
            return res.json({ success: false, msg: 'Lecturer not found' });
        }

        User.comparePassword(password, lectuerer.password, (err, isMatch) => {
            if(err) throw err;

            if(isMatch) {
                const token = jwt.sign({ data: lectuerer }, config.secret, {
                    expiresIn: 86400 // 1 day in seconds
                });
                res.json({
                    success: true,
                    token: 'JWT '+ token,
                    user: {
                        id: lectuerer._id,
                        firstName: lectuerer.firstName,
                        lastName: lectuerer.lastName,
                        email: lectuerer.email,
                        username: lectuerer.username,
                        studentId: lectuerer.studentId
                    }
                });
            }
            else {
                return res.json({ success: false, msg: 'Incorrect Password' });
            }
        });
    });
});

// // Authentication
// router.post('/authenticate', (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     // Call method from User & retrieve student by studentId
//     User.getUserByStudentId(email, (err, user) => {
//         if(err) throw err;
        
//         if(!user) {
//             return res.json({ success: false, msg: 'User not found' });
//         }

//         User.comparePassword(password, user.password, (err, isMatch) => {
//             if(err) throw err;

//             if(isMatch) {
//                 const token = jwt.sign({ data: user }, config.secret, {
//                     expiresIn: 86400 // 1 day in seconds
//                 });
//                 res.json({
//                     success: true,
//                     token: 'JWT '+ token,
//                     user: {
//                         id: user._id,
//                         firstName: user.firstName,
//                         lastName: user.lastName,
//                         email: user.email,
//                         username: user.username,
//                         studentId: user.studentId
//                     }
//                 });
//             }
//             else {
//                 return res.json({ success: false, msg: 'Incorrect Password' });
//             }
//         });
//     });
// });

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.send({ user: req.user });
});

module.exports = router;