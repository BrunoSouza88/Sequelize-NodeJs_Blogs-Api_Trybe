const postsService = require('../services/postService');

const idValidator = async (req, res, next) => {
  const { id } = req.params;
  const result = await postsService.findByIdService(id);
  if (!result) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  next();
};

module.exports = idValidator;