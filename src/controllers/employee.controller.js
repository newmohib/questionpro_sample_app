const employeeService = require('../services/employee.service');

class EmployeeController {
  async getSubordinates(req, res) {
    try {
      const subordinates = await employeeService.getSubordinates(req.params.id);
      res.json(subordinates);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
  async createEmployee(req, res) {
  try {
    const { name, position, supervisorId } = req.body;

    // Call the service to create the employee
    //const newEmployee = await employeeService.createEmployee({ name, position, supervisorId });

    // Sample data
    await employeeService.createEmployee({ id: 1, name: 'Alice', position: 'CTO', supervisorId: null });
    await employeeService.createEmployee({ id: 2, name: 'Bob', position: 'Senior Software Engineer', supervisorId: 1 });
    await employeeService.createEmployee({ id: 3, name: 'Charlie', position: 'Software Engineer', supervisorId: 2 });


    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
}

module.exports = new EmployeeController();