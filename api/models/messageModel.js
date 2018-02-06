import { Schema } from 'mongoose';

const mongoose = require('mongoose');

// Message Schema
const MessageSchema = mongoose.Schema({
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
    }
},
{
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt is when msg was sent.
});

const Message = module.exports = mongoose.model('Message', MessageSchema);