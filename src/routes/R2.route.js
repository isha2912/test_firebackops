const express = require('express');
const R2Handler = require('../handlers/R2.handler.js');

const R2Router = express.Router();

R2Router.get('/xx', R2Handler.R2getHandler);

module.exports = {
  R2Router,
};
