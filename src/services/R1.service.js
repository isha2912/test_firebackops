const utils = require('../utils/index.js');

const R1getService = async req => {
  const first = await utils.makeAPICall(`https://www.typeyoururl.com`, 'GET');
  return first;
};
module.exports = { R1getService };
