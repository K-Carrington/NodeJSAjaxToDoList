var mongoose = require('mongoose');

//creates todo schema
var todoSchema = new mongoose.Schema({
	text: String,//possible merge conflict?
	done: Boolean
});
todoSchema.methods.info = function(){
	console.log('To do item ' + this.text + ' is done = ' + this.done);
}

//Todo is a collection in the db
var Todo = mongoose.model('Todo', todoSchema);

//Make this model accesible to the controller
//Instantiate it for this file
module.exports = Todo; //this is the above collection in the db
