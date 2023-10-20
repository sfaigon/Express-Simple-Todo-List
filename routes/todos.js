var express = require('express');
var router = express.Router();
var todosCtrl = require("../controllers/todos");

// /* GET users listing. */
// // get /users because of in server.js the app.use("/users")
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//all actual parths start with "/todos"

//GET /todos
router.get("/", todosCtrl.index);
//define Get/todos/new  <-- define before show route
// remember not to do /todos/new
router.get("/new", todosCtrl.new);

//  /:id routes usually need to be at the bottom because it will try to pass any other routes as an id and that id will not be found
// thats why we need to put Get /todos/new above the /:id
router.get("/:id",todosCtrl.show);
// GET /todos/new <-- this will need to be moved


router.get("/:id/edit", todosCtrl.edit);

router.post("/", todosCtrl.create);
//DELETE /todos/:id
router.delete("/:id", todosCtrl.delete);

//PUT /todos/:id
router.put("/:id", todosCtrl.update);


module.exports = router;
