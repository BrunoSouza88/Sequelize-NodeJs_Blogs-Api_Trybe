const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  // const xablau = users.reduce((acc, curr) => { 
  //   const { password: _, ...usersWithouPassword } = curr;
  //   acc.push(usersWithouPassword);
  //   console.log('accccccccccccc', acc);
  //   return acc;
  // }, []);
  // console.log('xablau', users.password);
  return users;
};

module.exports = { 
  getAllUsers,
 };