const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const port = 8080

const EmployeeRouter = require('./routes/employeeRouter')
const TaskRouter = require('./routes/taskRouter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

// app.use(app.router)
// router.initialize(app)

app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.use('/employees', EmployeeRouter)
// app.use('/tasks', TaskRouter)

app.listen(port, function(){
    console.log(`app is listening to port : ${port}`)
})

