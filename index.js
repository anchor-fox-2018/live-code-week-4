const express = require('express')
const app = express()
const port = 1234;
const models = require('./models/index.js')
const employees = models.Employees
app.get('/', function(req, res){
    console.log("test")
})
app.listen(port, () => {
    console.log('App listening on port :',port);
});
app.get('/employees',function(req,res){
    employees.findAll()
        .then(function(employees){
            res.send(employees);
        })
})