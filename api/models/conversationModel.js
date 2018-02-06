const mongoose = require('mongoose');

// Conversation Schema
const ConversationSchema = mongoose.Schema({
    Participants: [{
        type: Schema.Types.ObjectId, // Gets ID for referenced Document
        ref: 'Student' // References Module Document
    }]
});

const Conversation = module.exports = mongoose.model('Conversation', ConversationSchema);