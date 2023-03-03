const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

const jwtSecretPath = path.join(__dirname, '../../jwt.evaluation.key');

const jwtSecret = require("fs")
  .readFileSync(jwtSecretPath, { encoding: "utf-8" });


const createToken = (user) => {
  console.log(__dirname);
  const header = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, jwtSecret, header);
  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, jwtSecret);
    return data;
  } catch (error) {
    return false;
  }
};

module.exports = { createToken, validateToken, jwtSecret };