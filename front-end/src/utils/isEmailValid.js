const validateEmail = (email) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const emailTest = emailRegex.test(email);
  return emailTest;
};

module.exports = validateEmail;
