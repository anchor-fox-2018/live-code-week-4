const express = require('express')
const router = express.Router()

const models = require('../models/index')
const Employee = models.Employee
const EmployeesController = require('../controllers/EmployeesController')

router.get('/', EmployeesController.index)
router.get('/add', EmployeesController.create)
router.post('/add', EmployeesController.add)
router.get('/:id/edit', EmployeesController.edit)
router.post('/:id/edit', EmployeesController.update)
router.get('/:id/delete', EmployeesController.destroy)

module.exports = router;