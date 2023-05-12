const { Category } = require('../models');

const postCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  postCategory,
  getAllCategories,
};
