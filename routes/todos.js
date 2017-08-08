const express = require("express");
const router = express.Router();

const models = require("../models");

router.get("/", (req, res) => {
  models.todo.findAll().then(todos => {
    res.render("index", { todos: todos });
  });
  models.todo.findById(req.params.id).then(todo => {
    res.render("index", { todo: todo });
  });
});

module.exports = router;
