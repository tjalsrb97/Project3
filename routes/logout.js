require('dotenv').config();
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var crypto = require('crypto');


router.get('/', function(req, res) {
    console.log(req.session.user);
    delete req.session.user;
    req.session.save(() => {
        console.log(req.session);
        res.redirect('/');
    });
});

module.exports = router;
