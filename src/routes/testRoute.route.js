const express = require('express');
const TestRouteHandler = require('../handlers/TestRoute.handler.js');

const TestRouteRouter = express.Router();

TestRouteRouter.post('/', TestRouteHandler.TestRoutepostHandler);

module.exports = {
  TestRouteRouter,
};
