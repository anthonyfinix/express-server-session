
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../../modals/user");
const config = require('../../../config');
const passport = require("passport");

module.exports = async (req, res, next) => {
  passport.authenticate('local',function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/dashboard');
    });
  })(req, res, next);
};
