const Model = require('../models')

class Controller {
    static showAll(req, res) {
        Model.Task.findAll({
                include: [Model.Employee],
                order: [
                    ['id', 'DESC']
                ]
            })
            .then(data => res.render('tasks/task', {
                tasks: data
            }))
            .catch(err => res.render('tasks/task', {
                err
            }))
    }

    static readOne(req, res) {
        Model.Task.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(data => req.render('tasks/edit-task', {
                task: data
            }))
            .catch(err => console.log(er))
    }

    static add(req, res) {
        let title = req.body.title
        let description = req.body.description
        let points = req.body.points
        let isComplete = false

        Model.Task.create({
                title,
                description,
                points,
                isComplete
            })
            .then(data => res.redirect('tasks/task'))
            .catch(err => res.render('tasks/add-task', {
                err
            }))
    }

    static delete(req, res) {
        Model.Task.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(data => res.redirect('tasks/task'))
            .catch(err => console.log(err))
    }

    static mark(req, res) {
        Model.Task.update({
                isComplete: true
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(data => res.redirect('tasks/task'))
            .catch(err => console.log(err))
    }

} // end class controller

module.exports = Controller