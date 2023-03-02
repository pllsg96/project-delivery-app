const validateEmail = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  const emailTest = emailRegex.test(email);
  return emailTest;
};

module.exports = validateEmail;
