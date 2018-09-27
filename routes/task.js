const router = require("express").Router();
const Model = require("../models");
const Tasks = Model.Tasks;

router.get('/tasks', function (request, response) {
    Tasks.findAll()
        .then(function (data) {
            response.render("task", { taskData: data });
        })
        .catch(function (error) {
            console.log(error);
        });
});

router.get('/tasks/add', function (request, response) {
    response.render("addtask");
});

router.post('/tasks/add', function (request, response) {
    Tasks.create({
        title: request.body.title,
        description: request.body.description,
        points: request.body.points,
        totalPoints: request.body.totalPoints,
        EmployeeId: request.body.employeeId,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    response.render("addemployee");
});

router.get('/tasks/:id/delete', function (request, response) {
    Tasks.destroy({
        where:{
            id: request.params.id
        }
    })
    .then(deleted=>{
        console.log(deleted);
        response.redirect("/tasks");
    });

});

module.exports = router;