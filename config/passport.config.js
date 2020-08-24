const localStrategy = require("passport-local").Strategy;
const User = require("../modals/user");
const bcrypt = require("bcrypt");
const passport = require('passport');

module.exports = function initialize(passport) {
  passport.use(
    new localStrategy(function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) return done(err,false,{message:'there was an unknown error'});
        if (!user) return done(null, false,{message:'no user found'});
        bcrypt.compare(password, user.password, (err, result) => {
          if (!result) return done(err,false,{message:'password doesnt match'});
          if (err) return done(err,false,{message:'there was an error decrypting password'});
          return done(null, user,{message:'success'});
        });
      });
    })
  );
};
passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(function (username, done) {
  User.findOne({ username: username }, function (err, user) {
    done(err, user);
  });
});
