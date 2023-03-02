const validFields = (name, email, password) => {
  if (!name || !email || !password) {
    return { valid: false, message: 'Some requireds fields are missing' };
  }
  return null;
};

const validateRegister = (user) => {
  const { name, email, password } = user;

  const fieldsError = validFields(name, email, password);

  if (fieldsError) return fieldsError;

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  const emailTest = emailRegex.test(email);

  if (!emailTest || name.length < 12 || password.length < 6) {
    return { valid: false, message: 'Wrong Fields Formats' };
  }

  return {
    valid: true,
  };
};

module.exports = {  
  validateRegister,
};
