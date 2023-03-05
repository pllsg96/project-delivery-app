const services = require('../services/login.services');

const login = async (req, res) => {
  try {
    const { body } = req;
    const result = await services(body);
    if (result.type) {
      return res.status(result.statusCode).json(result.message);
    }
    res.status(result.statusCode).json(result.message);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = login;
