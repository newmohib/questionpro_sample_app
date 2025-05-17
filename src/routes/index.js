const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth');
const healthController = require('../controllers/health.controller');


router.get('/health', healthController.healthCheck);
// router.get('/employees/:id/subordinates', employeeController.getSubordinates);
router.get('/protected/employees/:id/subordinates', authMiddleware, employeeController.getSubordinates);

router.get('/employees/:id/subordinates', employeeController.getSubordinates);
router.post('/employees', employeeController.createEmployee);

router.post('/login', authController.login);

module.exports = router;