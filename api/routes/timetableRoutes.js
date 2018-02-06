/* // Routes for Timetable
const express = require('express');
const router = express.Router();
const Modules = require('../models/moduleModel');
const StudentGroup = require('../models/studentGroupModel');

// Add Module
router.post('/addModule', (req, res, next) => {
    let newModule = new Module({
        name: req.body.name,
        date: req.body.date,
        lecturer: req.body.lecturer,
        groups: req.body.groups,
        room: req.body.room
    });

    newModule.save();
});

// Retrieve Timetable
//router.get('/timetable') */