const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const model = require('./models/index.js');

const Employees = model.Employees;
const Tasks = model.Tasks;
const TaskEmployees = model.TasksEmployees;

// LANDING PAGE //
app.get('/', function(req, res) {
    res.render('index.ejs')
})

////////////////////////
// ALL EMPLOYEES PAGE //
////////////////////////

// EMPLOYEES LANDING PAGE //
app.get('/employees', function (req, res) {
    Employees.findAll({

        })
        .then(function (Employees) {
            res.render('employees.ejs', {Employees: Employees})
        })
})

// EMPLOYEES ADD-GET PAGE //
app.get('/employees/add', function(req, res) {
    Employees.findAll({

    })
        .then(function (Employees) {
            res.render('employeesadd.ejs', {Employees: Employees})
        })
})

// EMPLOYEES ADD-POST PAGE //
app.post('/employees/add', function (req, res) {
    // res.send(req.body)
    Employees.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
        .then(function(datum) {
            res.redirect('/employees')
        })
})

// EMPLOYEES ID-GET EDIT PAGE //
app.get('employees/:id/edit', function (req, res) {
    Employees.findAll({

        })
        .then(function (Employees) {
            res.send('employees.ejs')
        })
})

// EMPLOYEES RAW DISPLAY //
app.get('/employeesraw', function(req, res) {
    Employees.findAll({

    })
        .then(function(Employeesraw) {
            res.send(Employeesraw)
        })
})

////////////////////
// ALL TASKS PAGE //
////////////////////

// TASKS LANDING PAGE //
app.get('/tasks', function(req, res) {
    Tasks.findAll({

    })
        .then(function(Tasks) {
            res.render('tasks.ejs', {Tasks: Tasks})
        })
})

// TASKS ADD-GET PAGE //
app.get('/tasks/add', function (req, res) {
    Employees.findAll({

        })
        .then(function (Employees) {
            res.render('tasksadd.ejs', {Employees: Employees})
        })
})

// TASKS ADD-POST PAGE //
app.post('/tasks/add', function (req, res) {
    // res.send(req.body)
    Tasks.create({
        title: req.body.title,
        description: req.body.description,
        points: req.body.points,
        // employee: req.body.employeeNum
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(function(datum) {
            res.redirect('/tasks')
        })
})

// TASKS RAW DISPLAY //
app.get('/tasksraw', function(req, res) {
    Tasks.findAll({

    })
        .then(function(Tasksraw) {
            res.send(Tasksraw)
        })
})

// APP LISTEN //
app.listen(port,function() {
    console.log(`running on: ${port}`)
})