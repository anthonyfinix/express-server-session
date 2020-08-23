const bcrypt = require("bcrypt");
module.exports = async (password, round) => {
  return bcrypt.compare(password, round);
};