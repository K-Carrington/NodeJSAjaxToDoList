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
<<<<<<< HEAD
  todo.boolean = req.body.boolean;
=======
  todo.done = req.body.done;
>>>>>>> 377055b048612119c80da16cc798d296de50441b

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
