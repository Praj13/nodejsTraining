const todoModel = require('../models/todoModel');

// Create Todo
exports.createTodo = (req, res) => {
  const { title, userId } = req.body;

  const newTodo = {
    id: todoModel.getNewTodoId(),
    title,
    userId,
    completed: false,
  };

  todoModel.todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Get All Todos
exports.getAllTodos = (req, res) => {
  res.json(todoModel.todos);
};

// Get Todo by ID
exports.getTodoById = (req, res) => {
  const todo = todoModel.todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
};

// Update Todo
exports.updateTodo = (req, res) => {
  const todo = todoModel.todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;

  res.json(todo);
};

// Delete Todo
exports.deleteTodo = (req, res) => {
  const index = todoModel.todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  todoModel.todos.splice(index, 1);
  res.json({ message: 'Todo deleted' });
};
