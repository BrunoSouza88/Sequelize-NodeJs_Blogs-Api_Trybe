const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.Authorization;
  console.log('token validator', authHeader);
  const token = authHeader && authHeader.split('')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: 'Invalid Token' });
    }
    req.user = user;
  });
  next();
};

module.exports = {
  authenticateToken,
};