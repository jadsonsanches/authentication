const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb+srv://jadson:wednesday2013@jadsoncluster-gefcz.gcp.mongodb.net/events?retryWrites=true&w=majority"
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(db, err => {
    if (err)
        console.log('Error! ' + err);
    else
        console.log('Connected to mongoDb');
});

router.get('/', (req, res) => {
    res.send('From API route');
});

router.post('/resgister', (req, res) => {
    let userData = req.body
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error)
            console.log(error);
        else
            res.status(200).send(registeredUser);
    });
})

module.exports = router;