const passport = require("passport");
const routes = require("express").Router();
const home = require("./home");
const login = require("./user/login");
const register = require("./user/register");
const api = require("./api");
const test = require("./test");
const notFound = require("../utils/notfound");
const errorHandle = require("../utils/errorHandle");

routes.get("/", home);
routes.get("/login", async (req, res) => {
  if(req.user) return res.redirect('/')
  res.render("login",{errors:req.flash('error')});
});
routes.post("/login", login);
routes.get("/register", async (req, res) => res.render("register"));
routes.post("/register", register);
routes.get("/dashboard", async (req, res) =>
  res.render("dashboard", { user: req.user })
);
routes.get("/profile", async (req, res) =>
  res.render("profile", { user: req.user })
);
routes.use("/api", api);
routes.use("/test", test);
routes.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
routes.use(notFound);
routes.use(errorHandle);

module.exports = routes;
