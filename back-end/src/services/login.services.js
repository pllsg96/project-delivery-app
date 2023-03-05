const md5 = require('md5');
const { User } = require('../database/models');
const authToken = require('../auth/jwt.auth');

const login = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return { type: 'invalid_fields', statusCode: 404, message: 'Invalid fields' };
  }
  
  const encryptedPassword = md5(password);

  if (user.password !== encryptedPassword) {
    return { type: 'invalid_fields', statusCode: 404, message: 'Invalid fields' };
  }

  const createToken = authToken.createToken(user);

  const res = {
    email: user.email,
    name: user.name,
    role: user.role,
    token: createToken,
  };

  return { type: null, statusCode: 200, message: res };
};

module.exports = login;
