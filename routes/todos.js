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
  Models.todo.findById(parseInt(req.params.id)).then((todo) => {
    todo.update({ complete: true }).then((todo) => {
      res.redirect("/");
    });
  });
});
// have to use front end js click events for delete buttons that fetch instance and then post to that route

router.post("/:id/delete", (req, res) => {
  Models.todo.findById(parseInt(req.params.id)).then((todo) => {
    todo.destroy({ force: true }).then((todo) => {
      res.redirect("/");
    })
  })
});

router.post("/:id/redo", (req, res) => {
  Models.todo.findById(parseInt(req.params.id)).then((todo) => {
    todo.update({ complete: false }).then((todo) => {
      res.redirect("/");
    });
  });
});


module.exports = router;
