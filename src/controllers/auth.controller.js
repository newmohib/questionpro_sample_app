const jwt = require('jsonwebtoken');

class AuthController {
  async login(req, res) {
    // Implement your login logic here
    const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET);
    res.json({ token });
  }

  async protectedRoute(req, res) {
    res.json({ message: 'Protected route accessed' });
  }
}

module.exports = new AuthController();