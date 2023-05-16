const postsService = require('../services/postService');

const createPost = async (req, res) => {
  try {
    console.log('req body controller', req.body);
    console.log('req user controller', req.user);
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
  
    const createdPost = await postsService.createPost(title, content, categoryIds, id);
    console.log('createdPost controller', createdPost);
    return res.status(201).json(createdPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// req 13

const findAllController = async (_req, res) => {
  try {
    const result = await postsService.findAllService();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// req 14
const findByIdController = async (req, _res) => {
 const { id } = req.params;
 const postbyId = await postsService.findByIdService(id);
 console.log(postbyId);
};
module.exports = { createPost, findAllController, findByIdController };