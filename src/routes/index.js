const express = require('express');

const apiRoutes = express.Router();

apiRoutes.post('/login');

module.exports = apiRoutes;