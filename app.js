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
app.use(require("./routes"));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

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
