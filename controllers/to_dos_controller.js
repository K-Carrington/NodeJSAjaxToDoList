var Todo = require ('../models/todo.js');

function index(req, res) {
  To_do.find({}, function(err, to_do) {
    if (err) throw err;
    res.json(to_do);
  });
};

module.exports = {
  index:index;
};
