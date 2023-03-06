const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtSecret = fs.readFileSync('jwt.evaluation.key');

const createToken = (user) => {
  const header = {
    expiresIn: '1d',
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
