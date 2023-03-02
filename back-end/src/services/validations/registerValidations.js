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

  const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);

  if (!validEmail || name.length < 12 || password.length < 6) {
    return { valid: false, message: 'Wrong Fields Formats' };
  }

  return {
    valid: true,
  };
};

module.exports = {  
  validateRegister,
};
