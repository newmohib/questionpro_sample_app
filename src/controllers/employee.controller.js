const employeeService = require('../services/employee.service');

class EmployeeController {
  async getSubordinates(req, res) {
    try {
      const subordinates = await employeeService.getSubordinates(req.params.id);
      res.json(subordinates);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new EmployeeController();