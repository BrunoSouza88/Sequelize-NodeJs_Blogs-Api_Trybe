/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */

const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    post_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  })
  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category , {
      as: 'post_id',
      through: PostCategoryTable,
      foreignKey: 'post_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'category_id',
      through: PostCategoryTable,
      foreignKey: 'category_id',
    })
  }
  
  return PostCategoryTable;
};

module.exports = PostCategorySchema;