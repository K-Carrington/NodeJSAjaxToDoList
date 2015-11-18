var Todo = require ('../models/todo.js');

function index(req, res) {
  Todo.find({}, function(err, todo) {
    if (err) throw err;
    res.json(todo);
  });
};

function create(req, res) {
  var todo = new Todo();
  todo.text = req.body.text;
  todo.done = req.body.done;

  todo.save(function(err) {
    if (err) throw err;
    res.json({success: true, message: "Todo list created!"});
  });
};

function show(req, res) {
  Todo.find({text: req.params.text}, function(err, todo) {
    if (err) throw err;
    res.json(todo);
  });
};

function update(req, res) {
  Todo.findOneAndUpdate({text: req.body.text}, function(err, todo) {
    if (err) throw err;
    res.json(todo);
  });
};

function destroy(req, res) {
  Todo.remove({text: req.params.text}, function(err) {
    if (err) throw err;
    res.json({success: true, message: "Todo list deleted!"});
  });
};

module.exports = {
  index:index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
