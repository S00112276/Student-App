const mongoose = require('mongoose');

// Diary Schema
const DiarySchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date
    },
    lecturer: {
        type: mongoose.Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'Lecturer' // References Document
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'StudentGroup' // References Document
    }],
    room: {
        type: String,
        required: true,
        lowercase: true
    },
    module: {
        type: mongoose.Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'Module' // References Document
    }
});

const Diary = module.exports = mongoose.model('Diary', DiarySchema);