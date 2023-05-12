const express = require('express');
const { loginController } = require('../controllers/loginController');
const { createUser } = require('../controllers/userController');
const {
  displayNameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/Validations');

const apiRoutes = express.Router();

apiRoutes.post('/login', loginController);
apiRoutes.post('/user', emailValidator, displayNameValidator, passwordValidator, createUser);

module.exports = apiRoutes;