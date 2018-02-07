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
    let newStudent = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.studentId + "@mail.itsligo.ie",
        username: req.body.username,
        studentId: req.body.studentId,
        password: req.body.password
    });

    Student.addUser(newStudent, (err, user) => {
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
    let newLecturer = new Lecturer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.studentId + "@mail.itsligo.ie",
        username: req.body.username,
        lecturerId: req.body.studentId,
        password: req.body.password
    });

    Lecturer.addUser(newLecturer, (err, user) => {
        if(err){
        res.json({ success: false, msg: 'Failed to register lecturer: ' +  err});
        }
        else {
            res.json({ success: true, msg: 'Lecturer registered!' });
        }
    });
});
// End Register Lecturer

// Authenticate Lecturer
router.post('/authenticatelecturer', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    // Call method from User & retrieve Lecturer by email
    Lecturer.getUserByEmail(email, (err, lecturer) => {
        if(err) throw err;
        
        if(!lecturer) {
            return res.json({ success: false, msg: 'Lecturer not found' });
        }

        User.comparePassword(password, lecturer.password, (err, isMatch) => {
            if(err) throw err;

            if(isMatch) {
                const token = jwt.sign({ data: lecturer }, config.secret, {
                    expiresIn: 86400 // 1 day in seconds
                });
                res.json({
                    success: true,
                    token: 'JWT '+ token,
                    user: {
                        id: lecturer._id,
                        firstName: lecturer.firstName,
                        lastName: lecturer.lastName,
                        email: lecturer.email,
                        username: lecturer.username,
                        lecturerId: lecturer.lecturerId
                    }
                });
            }
            else {
                return res.json({ success: false, msg: 'Incorrect Password' });
            }
        });
    });
});
// End Auth Lecturer

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.send({ user: req.user });
});

// Retrieve All Lecturers
router.get('/lecturers', (req, res) => {
    Lecturer.findById({}, function(err, lecturer) {
        if(err)
            res.send(err);

        res.json(lecturer);
    })
})

module.exports = router;