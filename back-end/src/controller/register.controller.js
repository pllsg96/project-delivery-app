const { serviceRegister } = require('../services/register.services');

const register = async (req, res) => {
  try {
    const { body } = req;
    const result = await serviceRegister(body);
    if (result.type) {
      return res.status(result.statusCode).send(result.message);
    }
    res.status(result.statusCode).send(result.message);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = register;