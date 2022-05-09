const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const UserSchema = mongoose.Schema({
    type: { type: String, requared: true },
    surname: { type: String, requared: true },
    name: { type: String, requared: true },
    secondname: { type: String, requared: true },
    phoneNumber: { type: String, requared: true },
    password: { type: String, requared: true },
    organisationName: { type: String, requared: true }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByPhoneNumber = function(phoneNumber, callback) {
    const query = {phoneNumber: phoneNumber};
    User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
    User.findById(query, callback);
};

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                throw err;
            };
            newUser.password = hash;
            newUser.save(callback);
        })
    });
};

module.exports.comparePass = function(passFromUser, userDBPass, callback) {
    bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
        if(err) {
            throw err;
        };
        callback(null, isMatch);
    });
};