const express = require('express');

const {
  postCategoryController,
  getAllCategoriesController,
} = require('../controllers/categoryController');
const { authenticateToken } = require('../middlewares/tokenValidator');

const categoriesRoute = express.Router();

categoriesRoute.post('/categories', authenticateToken, postCategoryController);
categoriesRoute.get('/categories', authenticateToken, getAllCategoriesController);

module.exports = categoriesRoute;