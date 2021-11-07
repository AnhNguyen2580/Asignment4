const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    age: {
        type: Number
    },
})

module.exports = Users = mongoose.model('users', usersSchema);
