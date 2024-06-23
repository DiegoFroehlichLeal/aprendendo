function adicionarTarefa() {

    let taskInput = document.getElementById('newTaskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        let newTask = document.createElement('li');
        newTask.textContent = taskText;
        document.getElementById('taskList').appendChild(newTask);
        taskInput.value = '';
        taskInput.focus();
    } else {
        alert('Por favor, insira uma tarefa');
    }
}

document.getElementById('addTaskButton').addEventListener('click', adicionarTarefa);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter'){
        adicionarTarefa();
    }
    
})

