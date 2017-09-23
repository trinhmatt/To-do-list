function add_task(){
  var task = document.getElementById('task').value
  var check_box = '<input type=\'checkbox\'>'
  if (task !== '') {
    document.getElementById('tasklist').innerHTML += '<li>'+check_box+'<span>'+task+'</span>'+'</li>'
    document.getElementById('task').value = ''
  }
}

function clear_tasks() {
  document.getElementById('tasklist').innerHTML = ''
  document.getElementById('checkbox').innerHTML = ''
}
