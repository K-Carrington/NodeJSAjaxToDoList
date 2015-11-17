var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var ejs        = require('ejs');
var ejsLayotus = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var port       = process.env.PORT || 3000;
var todoRoutes = require('./routes/todo_routes.js');
var Todo       = require('./models/todo.js');

//connect to mongo db
mongoose.connect('mongodb://localhost/todosdb');

//create 1 Todo item in db
var todo1 = new Todo({
  text: "Milk",
	done: true
});

todo1.save(function(err){
  console.log("To do item added");
});

app.get('/api/todos', todoRoutes);

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
