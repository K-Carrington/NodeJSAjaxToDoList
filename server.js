var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var ejs        = require('ejs');
var ejsLayotus = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var port       = process.env.PORT || 3000;
var todoRoutes = require('./routes/todo_routes.js');

//connect to mongo db
mongoose.connect('mongodb://localhost/todosdb');

app.get('/api/todos', todoRoutes);

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
