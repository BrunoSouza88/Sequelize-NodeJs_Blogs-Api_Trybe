const express = require('express');

const { loginController } = require('../controllers/loginController');

const { createUser } = require('../controllers/userController');

const {
  displayNameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/Validations');

// const { authenticateToken } = require('../middlewares/tokenValidator');

const { getAllUsers } = require('../services/userService');

const apiRoutes = express.Router();

apiRoutes.post('/login', loginController);
apiRoutes.post('/user', emailValidator, displayNameValidator, passwordValidator, createUser);
apiRoutes.get('/user', getAllUsers);

module.exports = apiRoutes;