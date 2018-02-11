const mongoose = require('mongoose');

// Student Group Schema
const StudentGroup = mongoose.Schema({  
    name: {
        type: String,
        required: true
    }
});

// Course Schema
const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    groups: [StudentGroup] // Embedded Document
    /* Modules: [{
        type: Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'Module' // References Module Document
    }] */
});

const Course = module.exports = mongoose.model('Course', CourseSchema);