const services = require('../services/R2.service.js');

const R2getHandler = async (req, res) => {
  try {
    const result = await services.R2getService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { R2getHandler };
