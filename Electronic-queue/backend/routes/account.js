const express = require('express');
const router = express.Router();
const User = require('../backend_models/user');
const passport =require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

router.post('/registration', (req, res) => {
    let newUser = new User({
        type: req.body.type,
        surname: req.body.surname,
        name: req.body.name,
        secondname: req.body.secondname,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        organisationName: req.body.organisationName
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg: "User is not added"});
        } else {
            res.json({success: true, msg: "User is added"});
        };
    })
});

router.post('/authorization', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;

    User.getUserByPhoneNumber(phoneNumber, (err, user) => {
        if (err) {
            throw err;
        };
        if (!user) {
            return res.json({success: false, msg: "User not found"});
        };

        User.comparePass(password, user.password, (err, isMatch) => {
            if (err) {
                throw err;
            };
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 3600 * 24
                });

                res.json({
                    success: true,
                    token: 'JWT' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        phoneNumber: user.phoneNumber,
                        type: user.type,
                        surname: user.surname,
                        secondname: user.secondname,
                        password: user.password,
                        organisationName: user.organisationName,
                    }
                })
            } else {
                return res.json({success: false, msg: "User not found"});
            };

        });
    });
});

module.exports = router;