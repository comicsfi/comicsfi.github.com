
$(document).ready(function(){

  $('#add_button').on('click', app.add_todo );

});


var app = {};

app.add_todo = function(){
  var title = $('#new_todo_title').val();
  var content = $('#new_todo_content').val();

  if(title=='' || content =='')
  {
    $.ui.popup({title:"Error",message:"<strong>Mandatory fields!</strong>",cancelOnly:true,cancelText:"Ok"});
    return;
  }

  todo.add(title,content);
  $.ui.loadContent('#main');

};




