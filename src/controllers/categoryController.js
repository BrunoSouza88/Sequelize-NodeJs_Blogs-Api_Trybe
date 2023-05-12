const categoriesService = require('../services/categoriesService');

const postCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const categoryPosted = await categoriesService.postCategory(name);
    return res.status(201).json(categoryPosted);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllCategoriesController = async (req, res) => {
  const allCategories = await categoriesService.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = {
  postCategoryController,
  getAllCategoriesController,
};