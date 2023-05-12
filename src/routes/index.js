const express = require('express');
const { loginController } = require('../controllers/loginController');

const apiRoutes = express.Router();

apiRoutes.post('/login', loginController);

module.exports = apiRoutes;