const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi (){                 // função reutilizavel
    const li = document.createElement('li');
    return li;

}    


function criaTarefa(textoInput){
    const li = criaLi(textoInput) 
    li.innerText = textoInput
    tarefas.appendChild(li)
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});