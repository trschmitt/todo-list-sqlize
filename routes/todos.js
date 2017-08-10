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
  Models.todo
    .create({
      description: req.body.itemInput,
      complete: false
    })
    .then(() => {
      res.redirect("/");
    });
});

router.get("/edit/:id", (req, res) => {
  Models.todo.findById(parseInt(req.params.id)).then(todos => {
    res.render("edit", { todos: todos });
  });
});

router.post("/edit/:id", (req, res) => {
  Models.todo.findById(parseInt(req.params.id)).then(todo => {
    todo.update({ description: req.body.editDescription }).then(todo => {
      res.redirect("/");
    });
  });
});

/** Commenting out delete all functionality as i am not sure of hwo it works yet**/

// router.post("/delete/all", (req, res) => {
//   Models.todo.findAll().then(todo => {
//     todo.destroy({force: true}).then(todo => {
//       document.querySelector('delete-all').addEventListener('submit', (e) => {if(!confirm("Delete All?")) {e.preventDefault()}})
//       res.redirect("/")
//     })
//   })
// })

router.post("/:id/done", (req, res) => {
  Models.todo.findById(parseInt(req.params.id)).then(todo => {
    todo.update({ complete: true }).then(todo => {
      res.redirect("/");
    });
  });
});

router.post("/:id/delete", (req, res) => {
  Models.todo.findById(parseInt(req.params.id)).then(todo => {
    todo.destroy({ force: true }).then(todo => {
      res.redirect("/");
    });
  });
});

router.post("/:id/redo", (req, res) => {
  Models.todo.findById(parseInt(req.params.id)).then(todo => {
    todo.update({ complete: false }).then(todo => {
      res.redirect("/");
    });
  });
});

module.exports = router;
