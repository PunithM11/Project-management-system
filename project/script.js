function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        listItem.innerHTML += ' <button onclick="deleteTask(this)">Delete</button> <button onclick="completeTask(this)">Complete</button>';
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function deleteTask(element) {
    var listItem = element.parentElement;
    listItem.remove();
}

function completeTask(element) {
    var listItem = element.parentElement;
    listItem.style.textDecoration = 'line-through';
    element.style.display = 'none';
}
