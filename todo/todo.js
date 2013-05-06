var todo_list = [];
var todo = {};

todo.add = function (title,content) {

  var id = todo_list.length;

  // add to structure
  todo_list.push( { id: id, title: title, content: content } ) ;

  var content = '<div task_id="'+ id +
                '" class="task"><button class="button todo_edit right">Edit</button><p class="task_title">' + 
                title + '</p><p class="task_content">' + content + '<br></p></div>';


  $('#main_todo_list').append(content);
  //$('#menu #menu_todo_list').append(li);
  //$('.todo_title').on('click', app.toggle_todo_content );

}

todo.edit = function(id,title,content){
  console.log(id);
  todo_list[id] = { id: id, title: title, content: content };
  $('.task[task_id="'+id+'"] .task_title').html(title);
  $('.task[task_id="'+id+'"] .task_content').html(content);

};
