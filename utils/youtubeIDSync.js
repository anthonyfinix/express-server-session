const cron = require("node-cron");
const { createConnection } = require("mongoose");
module.exports = () => {
  cron.schedule("* 23 * * *", () => {
      console.log('Checking Youtube for latest updates')
  });
};
