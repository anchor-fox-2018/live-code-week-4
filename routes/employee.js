const router = require("express").Router();
const Model = require("../models");
const Employees = Model.Employees;

router.get('/employees', function (request, response) {
    //response.send("employees");
    Employees.findAll()
        .then(function (data) {
            response.render("employee", { employeeData: data });
            //console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });

});

router.get('/employees/add', function (request, response) {
    //response.send("add employees");
    response.render("addemployee");
});

router.post('/employees/add', function (request, response) {
    // console.log(request.body.firstName);
    Employees.create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        totalPoints: request.body.totalPoints,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    response.render("addemployee");
});

router.get('/employees/:id/edit', function (request, response) {
    //response.send(`edit id nomor ${request.params.id}`);
    Employees.findById(request.params.id)
        .then(function (data) {
            console.log(data);
            response.render("editemployee", { employeeData: data });
        })
        .catch(function (error) {
            console.log(error);
        });

});

router.post('/employees/:id/edit', function (request, response) {
    Employees.update({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        totalPoints: request.body.totalPoints,
        createdAt: new Date(),
        updatedAt: new Date()
    },
        {
            returning: true,
            where: {
                id: request.params.id
            }
        })
        .then(function(){
            response.redirect("/employees");
        });

        // TODO ngebug ga bs return ke page awal
    Employees.findById(request.params.id)
        .then(function (data) {
            console.log(data);
            response.render("editemployee", { employeeData: data });
        })
        .catch(function (error) {
            console.log(error);
        });
});

router.get('/employees/:id/delete', function (request, response) {
    Employees.destroy({
        where:{
            id: request.params.id
        }
    })
    .then(deleted=>{
        console.log(deleted);
        response.redirect("/employees");
    });

});

module.exports = router;