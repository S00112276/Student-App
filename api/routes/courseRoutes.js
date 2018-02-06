const express = require('express'); 
const router = express.Router();
const Course = require('../models/courseModel');
const Module = require('../models/moduleModel');

// Add a Course
router.post('/addcourse', (req, res, next) => {
    let newCourse = new Course({
        name: req.body.name,
        groups: req.body.groups
    });

    // Save New Course & Check For Errors
    newCourse.save(function(err) {
        if(err)
            res.send(err);

        else
            res.json({ message: 'Entry Added to DB!' });
    });
});

// Add a Module
router.post('/addmodule', (req, res, next) => {
    let newModule = new Module({
        name: req.body.name,
        day: req.body.day,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        lecturer: req.body.lecturer,
        groups: req.body.groups,
        room: req.body.room
    });

    // Save New Module & Check For Errors
    newModule.save(function(err) {
        if(err)
            res.send(err);

        else
            res.json({ message: 'Entry Added to DB!' });
    });
})

module.exports = router;