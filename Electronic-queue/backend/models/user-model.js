const {Schema, model} = require('mongoose');

const UserSchema = new Schema ({
    type: { type: String, requared: true },
    surname: { type: String, requared: true },
    name: { type: String, requared: true },
    secondname: { type: String, requared: true },
    phoneNumber: { type: String, unique: true, requared: true },
    password: { type: String, requared: true },
    organisationName: { type: String },
    userTalon: { type: String, unique: true, reuired: true },
})

module.exports = model('User', UserSchema);