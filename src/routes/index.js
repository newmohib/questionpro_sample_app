const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth');
const healthController = require('../controllers/health.controller');


router.get('/health', healthController.healthCheck);
// router.get('/employees/:id/subordinates', employeeController.getSubordinates);
router.get('/protected', authMiddleware, authController.protectedRoute);
// router.post('/login', authController.login);

/**
 * @swagger
 * /employees/{id}/subordinates:
 *   get:
 *     summary: Get all subordinates under an employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: List of subordinates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       400:
 *         description: Invalid ID format
 *       500:
 *         description: Server error
 */
router.get('/employees/:id/subordinates', employeeController.getSubordinates);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.post('/login', authController.login);

module.exports = router;