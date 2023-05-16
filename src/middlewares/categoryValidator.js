const { Category } = require('../models');

const categoriesValidator = async (req, res, next) => {
  const { categoryIds } = req.body;
  const ifCategory = await Category.findAll({ where: { id: categoryIds } });

  if (ifCategory.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = categoriesValidator;