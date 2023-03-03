const md5 = require('md5');
const { createToken } = require('../auth/jwt.auth');
const { User } = require('../database/models');
const { validateRegister } = require('./validations/registerValidations');

const resFormat = (type, statusCode, message) => ({ type, statusCode, message });

const serviceRegister = async (body) => {
  const { email, name, password } = body;
  const isNewUserValid = validateRegister({ email, name, password });

  if (!isNewUserValid.valid) {
    return resFormat('User_Validation_Error', 400, { errMessage: isNewUserValid.message });
  }

  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    return resFormat('User_Validation_Error', 409, `User with email: ${email} already exist`);
  } 

  const crypPassword = md5(password);
  
  await User.create({ name, email, password: crypPassword, role: 'customer' });

  const res = {
    token: createToken({ name, email, role: 'customer' }),
  };

  return resFormat(null, 201, res);
};

module.exports = {
  serviceRegister,
};
