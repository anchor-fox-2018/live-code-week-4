const app = require('express')()
const bodyParser = require('body-parser')
const indexRoute = require('./routes/index.js')
const employeeRoute = require('./routes/employee.js')
    //const taskRoute = require('./routes/task.js')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', indexRoute)
app.use('/employees', employeeRoute)
    //app.use('/tasks', taskRoute)

app.listen(3000)