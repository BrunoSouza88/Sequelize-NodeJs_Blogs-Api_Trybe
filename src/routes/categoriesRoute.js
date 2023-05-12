const express = require('express');

const { postCategoryController } = require('../controllers/categoryController');
const { authenticateToken } = require('../middlewares/tokenValidator');

const categoriesRoute = express.Router();

categoriesRoute.post('/categories', authenticateToken, postCategoryController);

module.exports = categoriesRoute;