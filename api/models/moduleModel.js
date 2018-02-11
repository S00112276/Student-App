const mongoose = require('mongoose');

// Module Schema
const ModuleSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    day: {
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
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
        required: true
    },
    description: {
        type: String
    }
});

const Module = module.exports = mongoose.model('Module', ModuleSchema);