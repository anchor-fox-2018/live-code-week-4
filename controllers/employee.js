const Model = require('../models')

class Controller {
    static showAll(req, res) {
        Model.Employee.findAll({
                order: [
                    ['id', 'DESC']
                ]
            })
            .then(data => res.render('employees/employee', {
                employees: data
            }))
            .catch(err => res.render('employees/employee', {
                err
            }))
    }

    static readOne(req, res) {
        Model.Employee.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(data => req.render('employees/edit-employee', {
                employee: data
            }))
            .catch(err => console.log(er))
    }

    static add(req, res) {
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let email = req.body.email

        Model.Employee.create({
                firstName,
                lastName,
                email
            })
            .then(data => res.redirect('employees/employee'))
            .catch(err => console.log(err))
    }

    static edit(req, res) {
        let id = req.params.id
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let email = req.body.email

        Model.Employee.update({
                firstName,
                lastName,
                email
            }, {
                where: {
                    id: id
                }
            })
            .then(data => res.redirect('employees/employee'))
            .catch(err => console.log(err))
    }

    static delete(req, res) {
        Model.Employee.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(data => res.redirect('employees/employee'))
            .catch(err => console.log(err))
    }

} // end class controller

module.exports = Controller