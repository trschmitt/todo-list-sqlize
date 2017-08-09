const express = require("express");
const router = express.Router();

const models = require("../models");

router.get("/", (req, res) => {
  models.todo.findAll({ completed:false }).then(todos => {
    res.render("index", { todos: todos });
  });
});

router.post("/", (req, res) => {
  models.todo.findAll().then(todo => {
    res.redirect("/");
  });
})

router.post("/:id/done", (req, res) => {
  res.redirect("/")
})

router.post("/:id/delete", (req, res) => {
  res.redirect("/")
})


module.exports = router;
