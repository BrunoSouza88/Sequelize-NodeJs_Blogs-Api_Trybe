const { Category } = require('../models');

const postCategory = async (name) => {
  const category = await Category.create({ name });
  console.log('category service', category);
  return category;
};

module.exports = {
  postCategory,
};
