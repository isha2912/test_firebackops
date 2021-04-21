const services = require('../services/TestRoute.service.js');

const TestRoutepostHandler = async (req, res) => {
  try {
    const result = await services.TestRoutepostService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { TestRoutepostHandler };
