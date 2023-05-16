const express = require('express');

const loginRoute = require('./loginRoute');
const userRouter = require('./userRouter');
const categoriesRoute = require('./categoriesRoute');
const postsRouter = require('./postsRoute');

const apiRoutes = express.Router();

apiRoutes.use(loginRoute);
apiRoutes.use(userRouter);
apiRoutes.use(categoriesRoute);
apiRoutes.use(postsRouter);

module.exports = apiRoutes;