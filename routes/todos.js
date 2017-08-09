const express = require("express");
const router = express.Router();

const Todo = require("../models/todo");
const Models = require("../models/index");

router.get("/", (req, res) => {
  Models.todo.findAll().then(todos => {
    res.render("index", { todos: todos });
  });
});

router.post("/", (req, res) => {
  Models.todo.create({
    description: req.body.itemInput,
    complete: false
  }).then(() => {
    res.redirect("/");
  });
});

router.post("/:id/done", (req, res) => {
  Models.todo.findById(req.params.id)
    .then(() => {
      Models.todo.update({complete: true})
  )}
    res.redirect("/");
});

router.post("/:id/delete", (req, res) => {
  res.redirect("/")
});


module.exports = router;
