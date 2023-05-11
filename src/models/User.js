/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */

const UserSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      defaultValue: false,
      type: DataTypes.STRING,
    },
    email: {
      defaultValue: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      defaultValue: false,
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  })
  userTable.associate = (models) => {
    userTable.hasMany(models.BlogPost, {
      foreignKey: 'user_id',
      as: 'users',
    })
  }
  return userTable;
};

module.exports = UserSchema;