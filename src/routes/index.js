const express = require('express');

const loginRoute = require('./loginRoute');
const userRouter = require('./userRouter');
const categoriesRoute = require('./categoriesRoute');

const apiRoutes = express.Router();

apiRoutes.use(loginRoute);
apiRoutes.use(userRouter);
apiRoutes.use(categoriesRoute);

module.exports = apiRoutes;