const {
  getTodos,
  postTodo,
  updateTodo,
} = require('../controller/todoController');

const router = require('express').Router();

// ROuting todo CRUD

router.get('/todos', getTodos);
router.post('/todo', postTodo);
router.patch('/todo/:id/:action', updateTodo);

module.exports = router;
