var express = require('express');
var router = express.Router();
var passport = require('passport');
var yelpCtrl = require('./../util/yelp');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { user: req.user, costcoData: null });
});

/* Routes for OAuth */
router.get('/auth/google', passport.authenticate(
  'google', { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
