const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../auth/jwt.auth');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Invalid Token' });
  }
};

module.exports = {
  validateToken,
};