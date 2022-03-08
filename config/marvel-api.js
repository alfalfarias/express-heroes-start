const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config();

const PRIVATE_KEY = process.env.MARVEL_API_PRIVATE_KEY;
const PUBIC_KEY = process.env.MARVEL_API_PUBLIC_KEY;

const date = new Date();
const TS = date.getTime();
const code = `${TS + PRIVATE_KEY + PUBIC_KEY}`;
const HASH = CryptoJS.MD5(code).toString();

module.exports = {
  URL: process.env.MARVEL_API_URL,
  PUBIC_KEY: process.env.MARVEL_API_PUBLIC_KEY,
  PRIVATE_KEY: process.env.MARVEL_API_PRIVATE_KEY,
  TS: TS,
  HASH: HASH,
};