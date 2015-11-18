//initializing global variables
//gave $ to remember its a jQuery object
console.log('1');
var $remove = $(".glyphicon-remove");
var $star = $(".glyphicon-star");
var $checkbox = $(".checkBox");
console.log('2');

//removes list item when x button is clicked
//moving from one element to another is traversing
//callbacks are functions that wait to be called again
function removeParent(){
  //adding event listener
  $(this).on('click', function(){
    $(this).parent().remove();
    //TBD delete from DB
  });
}

//toggles color of star from grey to gold
function starParent(){
  $(this).on('click', function(){
    $(this).toggleClass('active');
  });
}

//strikes through list item name
function strikeParent(){
  $(this).on('click', function(){
    $(this).next().next().toggleClass('strikethrough');
    //TBD update DB to toggle the done boolean variable
  });
}
console.log('3');

//event listeners
$(".glyphicon-remove").each(removeParent);
$(".glyphicon-star").each(starParent);
$(".checkBox").each(strikeParent);

//adds a new box and retreives value from todo id
//made callback functions to include the new items created into array
$(".btn").on('click', function(){
  console.log('add button pressed');
  $(".list").append("<p class='item'><input type='checkbox' class='checkBox'><i class='glyphicon glyphicon-star'></i><span>"+$('#todo').val()+"</span><i class='glyphicon glyphicon-remove'></i></p>");
  // Put in DB via a jQuery ajax request
  console.log('4');

  $.ajax({
          url: '/api/todos',
          method: 'POST',
          data: { text: $('#todo').val()},
          dataType: 'application/json',
          success: function(todo){
            console.log(todo);
          }
  });

  console.log('5');

  $('#todo').val('');
  $remove = $(".glyphicon-remove");
  $star = $(".glyphicon-star");
  $checkbox = $(".checkBox");
  $(".glyphicon-remove").each(removeParent);
  $(".glyphicon-star").each(starParent);
  $(".checkBox").each(strikeParent);
}); //on click
console.log('6');

  // Load all items from the database for initial display
  $.ajax({
      url: '/api/todos',
      method: 'GET',
      success: function(todos){
        console.log(todos);
        //Display all todo items:
        todos.forEach(function(t, i){
          //var textSpan = '<span class="todo-name">' + t.text + '</span>';
          //var dSpan = '<span class="todo-name">' + t.done + '</span>';
          var editTodo = '<button id="' + t._id + '" class="edit-todo">Edit</button>'
          var checked = '';
          if (t.done) {
            checked = 'checked';
          }
          var t_list_item = '<p class="item"><input type="checkbox" class="checkBox"' + checked '><i class="glyphicon glyphicon-star"></i><span>' + t.text + '</span><i class="glyphicon glyphicon-remove">' + editTodo + '</i></p>';
           $('.list').append(t_list_item);
           if (t.done) {
            //TBD turn on strikeThrough
            //$('.list').toggleClass('strikethrough');

            }
        });
        console.log('7');

        // button and callback UI to edit a todo
        $('.edit-todo').on('click', function(evt) {
          console.log('Bring up edit UI here')
          console.log(evt.target.id);
            //TBD UI to edit the todo, then need a button and
            // a callback with an ajax
        });

      } //success function
  }); //ajax
  console.log('8');

//Andy's code for changing the star color:
//
// var $stars = $(".glyphicon-star");
// function colorStar() {
//   $(this).toggleClass('active');
// }
// $stars.click(colorStar);
