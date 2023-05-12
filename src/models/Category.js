/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */

const CategorySchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
  }, {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  })
  return categoriesTable;
}

module.exports = CategorySchema;