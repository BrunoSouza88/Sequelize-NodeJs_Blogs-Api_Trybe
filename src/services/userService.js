const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  // const xablau = users.reduce((acc, curr) => { 
  //   const { password: _, ...usersWithouPassword } = curr;
  //   acc.push(usersWithouPassword);
  //   console.log('accccccccccccc', acc);
  //   return acc;
  // }, []);
  return users;
};

const getOneUser = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
  return user;
};

module.exports = { 
  getAllUsers,
  getOneUser,
 };