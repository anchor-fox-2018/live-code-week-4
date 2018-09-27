const models = require('../models')
const Employee = models.Employee
const Task = models.Task

class EmployeesController {
    static index (req, res){
        Employee.findAll({
            order:[['id', 'ASC']],
            include : [{
                model: Task
            }]
        })
            .then(function(employees){
                res.render('employee/index.ejs', {employees:employees})
                // res.send(employees)
            })
            .catch(function(err){
                console.log(err)
            })

            
    }

    static create (req, res) {
        res.render('employee/create.ejs')
    }

    static add(req, res){
        
    }

    static edit (req, res) {

    }

    static update (req,res) { 

    }

    static destroy (req, res){
        
    }
}

module.exports = EmployeesController;