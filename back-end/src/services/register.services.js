const md5 = require('md5');
const { createToken } = require('../auth/jwt.auth');
const { User } = require('../database/models');
const { validateRegister } = require('./validations/registerValidations');

const serviceRegister = async (name, email, password) => {
  const isNewUserValid = await validateRegister({ email, name, password });

  if(!isNewUserValid.valid) {
    return { type: 'User_Validation_Error', statusCode: 400, message: isNewUserValid.message};
  }

  const crypPassword = md5(password);
  
  await User.create({ name, email, password: crypPassword, role: 'customer' });

  const res = {
    token: createToken({ name, email }),
  };

  return { type: null, statusCode: 201, message: res };
};

module.exports = {
  serviceRegister,
};
