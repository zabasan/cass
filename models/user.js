const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: String,
    mail: String,
    plusOne: {type: Boolean, default: null, select: true},
    isComing: {type: Boolean, default: null, select: true},
    confirm_at: {type: Date, default: null, select: true},
    after_12: {type: Boolean, default: false, select: true},
    comments: String

}, { minimize: false });

User = mongoose.model('User', UserSchema);

module.exports = User;