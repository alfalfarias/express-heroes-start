const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  URL: process.env.APP_URL,
  PORT: process.env.APP_PORT
};