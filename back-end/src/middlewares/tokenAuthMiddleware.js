const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../auth/jwt.auth');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send({ message: 'Token not found' });

  jwt.verify(token, jwtSecret, function(err, _decoded) {
    if (err) return res.status(401).send({ message: 'Invalid Token' });
    
    return next();
  });
};

module.exports = {
  validateLogin,
  validateRegister,
  validateToken,
};