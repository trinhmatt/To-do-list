function add_task(){
  var task = document.getElementById('task').value
  var check_box = '<input type=\'checkbox\'>'
  if (task !== '') {
    document.getElementById('tasklist').innerHTML += '<li>'+task+'</li>'
    document.getElementById('checkbox').innerHTML += check_box
    document.getElementById('task').value = ''
  }
}

function clear_tasks() {
  document.getElementById('tasklist').innerHTML = ''
  document.getElementById('checkbox').innerHTML = '' 
}

//Need to find out how to position
