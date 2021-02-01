const express  = require('express');
const router   = express.Router();
const passport = require('../config/passport.js');

router.get('/login', function(req,res){
  res.render('auth/login');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google'), authSuccess
);

router.get("/current_user", (req, res) => { 
  res.send(req.user); 
});


function authSuccess(req, res) {
  res.redirect('/');
}

module.exports = router;