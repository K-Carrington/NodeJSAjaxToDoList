var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');

var bodyParser = require('body-parser');
var logger     = require('morgan');
var port       = process.env.PORT || 3000;
var todoRoutes = require('./routes/todo_routes.js');
var Todo       = require('./models/todo.js');

//connect to mongo db
mongoose.connect('mongodb://localhost/todosdb');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extnded: false}))
//create 1 Todo item in db
var todo1 = new Todo({
  text: "Milk",
	done: true
});

todo1.save(function(err){
  console.log("To do item added");
});

app.get('/api/todos', todoRoutes);
app.use('/', todoRoutes);

//Static page, root route shows index.html
app.use(express.static('public'))

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
