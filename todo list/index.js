var id = document.getElementById('button');
var container = document.getElementById('taskContainer');
var deleteButton = document.getElementById('delete');
var taskContent;
var taskId = 0;

id.addEventListener('click', () => {
    taskContent = prompt("Enter the task");
    var div = document.createElement('div');
    div.classList = 'task';
    var task = document.createElement('h4');
    task.textContent = taskContent;
    var delte = document.createElement('h4');
    delte.textContent = 'delete';
    div.appendChild(task);
    div.appendChild(delte);
    container.appendChild(div);
});

deleteButton.addEventListener('click', (e) => {
    var tasks = document.getElementsByClassName('task');

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].remove(); 
    }
});
