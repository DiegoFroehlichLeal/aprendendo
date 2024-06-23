function adicionarTarefa() {

    let inputTarefa = document.getElementById('novaTarefa');
    let tarefaTexto = inputTarefa.value.trim();

    if (tarefaTexto !== '') {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefaTexto;
        document.getElementById('listaTarefas').appendChild(novaTarefa);
        inputTarefa.value = '';
        inputTarefa.focus();
    } else {
        alert('Por favor, insira uma tarefa');
    }
}

document.getElementById('adicionarBotao').addEventListener('click', adicionarTarefa);
document.getElementById('novaTarefa').addEventListener('keypress', function(event) {
    if (event.key === 'Enter'){
        adicionarTarefa();
    }
    
})

