var todoController = require('../controllers/todos_controller.js');
var express        = require('express');
var todoRoutes     = express.Router();

todoRoutes.route('/')
  .get(todoController.index);
  .post(todoController.create);

todoRoutes.route('/:text')
  .get(toController.show);
  .patch(todoController.update);
  .delete(todoController.destroy);

module.exports = todoRoutes;
