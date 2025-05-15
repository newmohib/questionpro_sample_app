const jwt = require('jsonwebtoken');
const ApiError = require('../utils/apiError');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) throw new ApiError(401, 'Unauthorized');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) throw new ApiError(403, 'Forbidden');
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;