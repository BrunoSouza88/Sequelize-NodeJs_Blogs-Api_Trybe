const { postCategory } = require('../services/categoriesService');

const postCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const categoryPosted = await postCategory(name);
    return res.status(201).json(categoryPosted);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  postCategoryController,
};