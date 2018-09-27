const routes = require('express').Router()
const Controller = require('../controllers/task.js')

routes.get('/', Controller.showAll)

routes.get('/add', (req, res) => res.render('tasks/add-task'))
routes.post('/add', Controller.add)

routes.post('/:id/mark-as-completed', Controller.mark)
routes.post('/:id/delete', Controller.delete)

module.exports = routes