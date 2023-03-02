const { User } = require('../../database/models');

const validateRegister = async (user) => {
  const { name, email, password } = user; 

  const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);

  if (!validEmail || name.length < 12 || password.length < 6) {
    return {
      valid: false,
      message: 'Wrong Fields Formats',
    };
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return {
      valid: false,
      message: `User with email ${email} already exists`,
    };
  }

  return {
    valid: true,
  };
}; 

module.exports = {  
  validateRegister,
};
