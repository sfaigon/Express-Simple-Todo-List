const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id,text){
    id = parseInt(id);
    const todo= todos.find(todo => todo.id === id);
    Object.assign(todo,text);
    
  }

  function deleteOne(id){
    id = parseInt(id);
    // find the index
    const idx = todos.findIndex(todo => todo.id === id);
    todos.splice(idx,1);
  }
	
  function create(todo){
    //add the id
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
  }
  function getAll() {
    return todos;
  }

  function getOne(id) {
    id = parseInt(id);
    return todos.find(todo => todo.id === id);
  }