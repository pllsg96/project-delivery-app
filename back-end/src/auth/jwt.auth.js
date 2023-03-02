const jwt = require('jsonwebtoken');

const header = { expiresIn: '30m', algorithm: 'HS256' };

const jwtSecret = '123456';

const createToken = (user) => {
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