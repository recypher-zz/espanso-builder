const mongoose = require('mongoose');

const triggerSchema = new mongoose.Schema({
    trigger: {
        type: String,
        required: true,
        trim: true
    },
    isMultiline: {
        type: Boolean,
        required: true
    },
    replaceText: {
        type: String,
        required: true,
        trim: true
    },
    approved: {
        type: Boolean,
        required: true,
        default: false
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Trigger', triggerSchema);