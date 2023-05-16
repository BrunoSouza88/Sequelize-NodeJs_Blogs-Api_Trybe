/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */

const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      field: 'post_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      unique: true,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      field: 'category_id',
      onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
    },
  },{
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })
  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category , {
      through: PostCategoryTable,
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategoryTable,
			as: 'BlogPost',
      foreignKey: 'categoryId',
			otherKey: 'postId',
    })
  }
  
  return PostCategoryTable;
};

module.exports = PostCategorySchema;