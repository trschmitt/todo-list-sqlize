const sequelize = require('sequelize');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const url = require("url");
const bodyParser = require('body-parser');

app.set("port", process.env.PORT || 3010);

/** sequelize model setup **/
const models = require("./models");
models.todo.findOne().then(function (todos) {
  console.log(todos);
})
/**************************/

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.use("/", require("./routes/todos"));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

if (require.main === module) {
  app.listen(app.get("port"), err => {
    if (err) {
      throw err;
      exit(1);
    }

    console.log(
      `Node running in ${app.get("env")} mode @ http://localhost:${app.get(
        "port"
      )}`
    );
  });
}
