const express = require('express'); 
const router = express.Router(); 
const DiaryEntry = require('../models/diaryModel');

// Add to diary
router.post('/addtodiary', (req, res, next) => {
    let newEntry = new DiaryEntry({
        title: req.body.title,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        lecturer: req.body.lecturer,
        groups: req.body.groups,
        room: req.body.room,
        module: req.body.module
    });

    // Save New Diary Entry & Check For Errors
    newEntry.save(function(err) {
        if(err)
            res.send(err);

        else
            res.json({ message: 'Entry Added to DB!' });
    });
});

module.exports = router;