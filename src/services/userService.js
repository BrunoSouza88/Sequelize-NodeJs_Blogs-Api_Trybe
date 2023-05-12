const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll();
  console.log('get all users service', users);
  return users;
};

module.exports = { 
  getAllUsers,
 };