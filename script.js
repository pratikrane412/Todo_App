let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        let li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    let li = button.parentNode;
    taskList.removeChild(li);
}
