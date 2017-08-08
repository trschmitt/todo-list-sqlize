const sequelize = require('sequelize');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

/** sequelize model setup **/
const models = require("./models");
models.todo.findOne().then(function (user) {
  console.log(todo);
})
/**************************/

app.use(express.static("public"));
app.use(require("./todoRoutes"));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");


app.get("/", (req, res) => {
	res.render("index", { todoList: todoList });
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
