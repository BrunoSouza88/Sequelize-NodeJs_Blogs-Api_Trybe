const express = require('express');

const userRouter = express.Router();

const {
  displayNameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/Validations');

const { authenticateToken } = require('../middlewares/tokenValidator');

const { getAllUsers, createUser, getOneUser } = require('../controllers/userController');

userRouter.post('/user', emailValidator, displayNameValidator, passwordValidator, createUser);
userRouter.get('/user', authenticateToken, getAllUsers);
userRouter.get('/user/:id', authenticateToken, getOneUser);

module.exports = userRouter;