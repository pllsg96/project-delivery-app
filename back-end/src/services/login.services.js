const md5 = require('md5');
const { User } = require('../database/models');
const authToken  = require('../auth/jwt.auth');

const login = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    return { type: 'Error', statusCode: 404, message: 'Email and password are required!' };
  }

  const encryptedPassword = md5(password);

  const user = await User.findOne({ where: { email, password: encryptedPassword } });

  if (!user) {
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
