const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const tokenRight = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = tokenRight;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  authenticateToken,
};