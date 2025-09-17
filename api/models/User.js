const mongoose = require('mongoose');

const UserSchema = new Schema({
    googleId: { type: String, unique: true },
    email: String,
    name: String,
    preferences: {
        favoriteTriggers: [String],
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);