/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */

const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now'),
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now'),
    },
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });
  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user',
    })
  }
  return BlogPostTable;
};

module.exports = BlogPostSchema;