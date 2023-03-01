const jwt = require('jsonwebtoken');

const header = { expiresIn: '30m', algorithm: 'HS256' };

const createToken = (user) => {
    const token = jwt.sign({ data: user }, '123456', header);
    return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, '123456');
    return data;
  } catch (error) {
    return false;
  }
};

module.exports = { createToken, validateToken };