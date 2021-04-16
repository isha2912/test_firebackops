const { makeFirstCall } = require('./first.service.js');

const R2getService = async req => {
  const first = makeFirstCall([null]);
  return first;
};
module.exports = { R2getService };
