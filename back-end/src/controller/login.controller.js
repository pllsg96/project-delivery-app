const services = require('../services/login.services');

const login = async (req, res) => {
  try {
    const { body } = req;
    const result = await services(body);
    if (result.type) {
      return res.status(result.statusCode).send(result.message);
    }
    res.status(result.statusCode).send(result.message);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = login;