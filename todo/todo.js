
todo.add = function (title,content) {

  var li = '<li>' + title + '</li>';

  // add to structure
  //todo_list.push( { title: title, content: content } ) ;
  //

  console.log("Son qui e aggiungo " + li);

  $('#main_todo_list').append(li);

}
