const express = require('express');

const loginRoute = require('./loginRoute');
const userRouter = require('./userRouter');

const apiRoutes = express.Router();

apiRoutes.use(loginRoute);
apiRoutes.use(userRouter);

module.exports = apiRoutes;