require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/signin', function(req, res, next) {
  res.render('users/signin', { siteSection: 'users', title: 'Signin' });
});

router.get('/signup', function(req, res, next) {
  res.render('users/signup', { siteSection: 'users', title: 'Signup' });
});

module.exports = router;