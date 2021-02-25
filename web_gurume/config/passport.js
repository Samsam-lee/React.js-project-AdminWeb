
require('dotenv').config;
const passport         = require('passport');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;
const {OAuth2Client} = require('google-auth-library');

const User = require('../models/userTb.model');

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});


passport.use( new GoogleStrategy(
  {
    clientID      : process.env.GOOGLE_CLIENT_ID,
    clientSecret  : process.env.GOOGLE_SECRET,
    callbackURL   : '/auth/google/callback',
    passReqToCallback   : true
  }, (accessToken, refreshToken, profile, done) => {
    // console.log(accessToken); 
    // console.log(refreshToken); 
    console.log(profile); 

    const googleID = profile.id;
    
    // create user object 
    const newUser = {
      name: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
      memo: googleID
    };

    console.log(newUser);

    // search if the user exists else create one 
    User.findOne({memo : googleID}).then((user) => {
      if(!user){
        new User(newUser).save().then((createdUser) => {
          console.log('User: ', createdUser);
          done(null, createdUser);
        })
        .catch((err) => {
          console.log('Error', err);
          done(err, null);
        });
      }
      else {
        console.log('Already exists', user);        
        done(null, user);
      }
    })
    .catch((err) => {
      console.log('Error', err);      
      done(err, null);
    });
  }
));


module.exports = passport;