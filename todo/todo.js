var todo = {};

todo.tasks = [];

/** Add a task to structure and inside DOM **/
todo.add = function (title,content,categories) {

  var task_id = this.tasks.length;

  // add to structure
  this.tasks[task_id] =  { id:task_id, title: title, content: content, done: false, categories: [] } ;

  this.add_to_ui(this.tasks[task_id]);

}

todo.add_to_ui = function(task){
  // add to DOM
  var dom_content = '<div id="task_' + task.id + '" class="task">' +
                '<button class="button task_status right">' + (task.done?"Undo":"Done") + 
                '</button><p class="task_title">' + task.title + 
                '</p><p class="task_content">' + task.content + '<br></p></div>';

  $('#main_todo_list').append(dom_content);
 
}


todo.toggle_task_status = function(task_id){

  // IMPORTANTE: check for error
  if(typeof todo.tasks[task_id]!='object')
  {
    console.log("ERROR!!! Task " + id + " not found!");
    return;
  }

  var current_status = todo.tasks[task_id].done;
  console.log("Toggle lo status di " + task_id + " da " + current_status );

  // update structure
  todo.tasks[task_id].done=(current_status?false:true);

  // update UI
  $('#task_' + task_id + ' .task_status').html(current_status?"Done":"Undo");

}


/** Returns an array of tasks based on done/undone */
todo.get_tasks_from_status = function(done){

  /* OLD NORMAL FOR */
  var n_tasks=this.tasks.length;
  var i=0;
  var completed_tasks = [];

  for(;i<n_tasks;n++)
  {
    if(this.tasks[i].done)
    {
      completed_tasks.push(this.tasks[i]);
    }
  }

  console.log(completed_tasks);
  return completed_tasks;




  /* EACH JQUERY/JQMOBY METHOD */
  $.each(this.tasks,function(id,task){
    if(task.done) completed_tasks.push(task);
  });

  console.log(completed_tasks);
  return completed_tasks;


  /* MAP METHOD */
  completed_tasks = $.map(this.tasks,function(task){
    if(task.done) return task;
  })[0];
  console.log(completed_tasks);
  return completed_tasks;




  
};

