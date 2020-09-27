const path = require("path");
const express = require("express");
const session = require('express-session');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const db = require("./db.js");
const routes = require('./routes');
const expressLayouts = require("express-ejs-layouts");
const logIncomingReq = require("./utils/logIncomingRequest");
const config = require("./config");
const passport  = require('passport');
const flash = require('connect-flash')
const youtubeIDSync = require('./utils/youtubeIDSync');

const passportInitialize = require('./config/passport.config');
passportInitialize(passport);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
  secret: 'SECRET',
  resave: false,
  saveUninitialized: false,
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(logIncomingReq);
db.init().then(() => {
  app.use(routes);
  youtubeIDSync();
  app.listen(process.env.PORT || config.PORT, () => {
    console.log(`Express Listening at port ${config.PORT}`);
  });
});
