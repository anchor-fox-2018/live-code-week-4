const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 65534;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const model = require('./models/index.js');

const employees = model.employees;
const tasks = model.tasks;
const taskemployees = model.taskemployees;

