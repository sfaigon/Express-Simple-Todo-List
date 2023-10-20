const Todo = require("../models/todo");

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update,
};
function update(req,res){
  req.body.done = !!req.body.done;
  Todo.update(req.params.id,req.body);
  res.redirect(`/todos/${req.params.id}`);
}
function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/edit", {
    title: "Edit Todo",
    todo
  })
}
function create(req, res) {
  console.log(req.body);
  //models are responsible for CRUD
  Todo.create(req.body);
  //always do a redirect when data has been changed
  res.redirect("/todos");
}

// cant make the function be new because it is reserved thats why we export new: newTodo
// and name functon newTodo
function newTodo(req, res) {
  res.render("todos/new", { title: "New Todo" });
}
function show(req, res) {
  res.render("todos/show", {
    todo: Todo.getOne(req.params.id),
    title: "To-Do Details",
  });
}
function index(req, res) {
  res.render("todos/index", {
    todos: Todo.getAll(),
    title: "All to-Dos",
  });
}
function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/todos");
}
