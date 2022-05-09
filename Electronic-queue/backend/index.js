const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/db');
const account = require('./routes/account');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors());

app.use(passport.initialize());
// app.use(passport.session());

require('./config/passport');

app.use(bodyParser.json());

app.use('/account',account);

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("Sucses");
});

mongoose.connection.on('error', (err) => {
    console.log("Sucses" + err);
});

app.listen(port, () => {
    console.log("Server has been started " + port);
})