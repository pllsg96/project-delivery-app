const { User } = require('../../database/models');

const validateRegister = async (user) => {
  const { name, email, password } = user; 

  const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);

  if(!validEmail || name.length < 12 || password.length < 6) return {
    valid: false,
    message: {
      email: !validEmail ? 'Wrong Email Format' : 'Ok',
      name: name.length < 12 ? 'Name must be contain at least 12 characters' : 'Ok',
      password: password.length < 6 ? 'Password must be contain at least 6 characters': 'Ok',
    },
  };

  const userExists = await User.findOne({ where: { email } });

  if (userExists) return {
    valid: false,
    message: `User with email ${email} already exists`,
  };

  return {
    valid: true,
  };
}; 

module.exports = {  
  validateRegister,
};
