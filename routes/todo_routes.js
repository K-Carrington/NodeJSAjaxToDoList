var todoController = require('../controllers/todos_controller.js');
var express        = require('express');
var todoRoutes     = express.Router();

todoRoutes.route('/api/todos')
  .get(todoController.index);

module.exports = todoRoutes;
