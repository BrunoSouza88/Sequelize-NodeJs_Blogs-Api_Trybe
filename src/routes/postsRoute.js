const express = require('express');
const { createPost, findAllController } = require('../controllers/postController');
const { authenticateToken } = require('../middlewares/tokenValidator');
const categoriesValidator = require('../middlewares/categoryValidator');
const postBodyValidator = require('../middlewares/postBodyValidator');

const postsRouter = express.Router();

postsRouter.get('/post', authenticateToken, findAllController);
postsRouter.post('/post', authenticateToken, categoriesValidator, postBodyValidator, createPost);

module.exports = postsRouter;