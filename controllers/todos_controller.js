var Todo = require ('../models/todo.js');

function index(req, res) {
  To_do.find({}, function(err, todo) {
    if (err) throw err;
    res.json(todo);
  });
};

module.exports = {
  index:index
};
