const routes = require('express').Router()
const Controller = require('../controllers/employee.js')

routes.get('/', Controller.showAll)

routes.get('/add', (req, res) => res.render('employees/add-employee'))
routes.post('/add', Controller.add)

routes.get('/:id/edit', Controller.readOne)
routes.post('/:id/edit', Controller.edit)

routes.post('/:id/delete', Controller.delete)

module.exports = routes