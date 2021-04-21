const { makeFourthCall } = require('./fourth.service.js');
const utils = require('../utils/index.js');

const TestRoutepostService = async req => {
  const third = await utils.makeAPICall(
    `https://www.typeyoururl.com`,
    'GET',
    {},
  );
  const fourth = makeFourthCall([third]);
  return fourth;
};
module.exports = { TestRoutepostService };
