const express = require("express");
const router = express.Router();

const models = require("../models");

router.get("/", (req, res) => {
  models.todo.findAll().then(todos => {
    res.render("index", { todos: todos });
  });
});

router.post("/", (req, res) => {
  models.todo.findAll().then(todo => {
    res.redirect("/");
  });
})

router.post("/:id", (req, res) => {
  res.redirect("/")
})

router.post("/:id/delete",(req, res) => {
  res.redirect("/")
})


module.exports = router;
