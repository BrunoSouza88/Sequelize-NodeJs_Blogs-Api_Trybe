const jwt = require('jsonwebtoken');
const { User } = require('../models');

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    throw new Error('Invalid fields');
  }
  const token = jwt.sign(
    { id: user.id, email: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1H' },
  );
  return token;
};

module.exports = {
  loginService,
};
