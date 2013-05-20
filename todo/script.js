
$(document).ready(function(){

  // static events bindings
  $('#add_button').on('click', app.add_todo );
  $('#select_tasks_status').on('change',app.select_tasks_status);

  // dynamic events bindings
  $('#main_todo_list').delegate('.task_title','click', app.toggle_todo_content );
  $('#main_todo_list').delegate('.task_status','click', app.set_task_status );

});


var app = {};

app.select_tasks_status = function(){
  var selected_status = $(this).val();
  console.log(selected_status);
  $('#main_todo_list').html('');

  switch(selected_status){
    case 'todo':
      $.each(todo.tasks,function(id,task){ if(!task.done) todo.add_to_ui(task); });
      break;
    case 'done':
      $.each(todo.tasks,function(id,task){ if(task.done) todo.add_to_ui(task); });
      break;
    case 'all':
      $.each(todo.tasks,function(id,task){ todo.add_to_ui(task); });
      break;
  }

  


};

app.set_task_status = function(){
  var task_id = $(this).parent().attr('id').split('_')[1];
  todo.toggle_task_status(task_id);
};

app.edit_todo = function(){

  console.log("Dentro edit_todo");
  var id = $('#edit_task_id').val();
  var title = $('#edit_task_title').val();
  var content = $('#edit_task_content').val();

  // modifico la struttura
  todo.edit(id,title,content);
  $.ui.loadContent('#main');

};

app.edit_todo_content = function(e){
  var id= $(this).parent().attr('task_id');
  console.log("Edit todo_content id: " + id);
  var task = todo_list[id];
  $('#edit #edit_task_title').val(task.title);
  $('#edit #edit_task_content').val(task.content);
  $('#edit #edit_task_id').val(id);
  $.ui.loadContent('#edit');
};

app.test_click = function(e){
  console.log(this.id);
  if(this.id=='main') e.stopPropagation();
};

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


app.toggle_todo_content= function(e){
  console.log(this);
  console.log("Son qui dentro");
  var content_el = $(this).siblings('.task_content').eq(0);
  content_el.toggle();
};



app.clickHandler = function(evt){
  //console.log(evt);
  return true;
};




