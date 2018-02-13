const mongoose = require('mongoose');

// Diary Schema
const DiarySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        Required: [true]
    },
    startDate: {
        type: Date,
        default: Date.now,
        Required: [true]
    },
    dueDate: {
        type: String,
        Required: [true]
    },
    lecturer: {
        type: mongoose.Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'Lecturer', // References Document
        Required: [true]
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'StudentGroup', // References Document
        Required: [true]
    }],
    room: {
        type: String,
        required: true,
        Required: [true]
    },
    module: {
        type: mongoose.Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'Module', // References Document
        Required: [true]
    },
    percentage: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

const Diary = module.exports = mongoose.model('Diary', DiarySchema);

module.exports.addEntry = function (newEntry, callback) {
    newEntry.save(callback);
}