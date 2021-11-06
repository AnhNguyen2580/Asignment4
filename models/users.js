import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true, // not null allow
    },
    password: {
        type: String,
        required: true, // not null allow
    },
    token: [String], // array token for authentication,
}, { timestamps: true });

module.exports = mongoose.model('users', usersSchema);
