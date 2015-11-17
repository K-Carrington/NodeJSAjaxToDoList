var todoController = require('../controllers/todos_controller.js');
var express        = require('express');
var todoRoutes     = express.Router();

todoRoutes.route('/api/todos')
  .get(todoController.index)
  .post(todoController.create);

todoRoutes.route('/:text')
  .get(todoController.show)
  .patch(todoController.update)
  .delete(todoController.destroy);

module.exports = todoRoutes;
