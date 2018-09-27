const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8888;
const indexRouter = require("./routes/index");
const employeeRouter = require("./routes/employee");
const taskRouter = require("./routes/task");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/', employeeRouter);
app.use('/', taskRouter);

app.listen(PORT, function () {
    console.log(`App runs on ${PORT}`);
});