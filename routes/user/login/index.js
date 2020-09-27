const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../../modals/user");
const config = require("../../../config");
const passport = require("passport");

module.exports = passport.authenticate('local', { successRedirect: '/',
failureRedirect: '/login',
failureFlash: true })
