const theme = document.querySelector('.change-theme');
const task = document.getElementById('display');

const plusButton =  document.querySelector('.btn-plus');
const clearButton = document.querySelector('.btn-clear');

const list = document.getElementById('list');

let id = 0;

/*Declarando itens e parseando o array (dividindo o array), em caso de false cria array vazio*/ 
const itens = JSON.parse(localStorage.getItem("tasks")) || [];

// Necessario iterar o array para criar os elementos:
itens.forEach ((elemento) => {
    // Na iteração, chamada a função cria elemento com o parametro elemento passado que são
    // os objetos parseados do array e atualiza meu localStorage
    createTask(elemento);
})
// Funcionalidade de task done ao finalizar tarefa
list.addEventListener('click', (evento) => {
    const selected = evento.target;
    selected.classList.toggle('marked');
})
// Implementando Dark mode
theme.addEventListener('click', () => {
    theme.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
})

plusButton.addEventListener('click', (evento) => {
        if(task.value!=''){
                    // Criando um objeto
        const taskObject = {
            "task": task.value,
            "id":id
        }
            if(itens.length>=10){
                alert("Maximum number of tasks exceeded");
            }
            else{
                // Atualiza minha lista
                createTask(taskObject);
                console.log(itens.length);

                // Inserindo um objeto no array (Sequencia de objetos)
                itens.push(taskObject);

                // Setando no localStorage o array e transformando mem string o array de objetos
                localStorage.setItem("tasks",JSON.stringify(itens));
                // Zerando o display
                task.value='';
            }
        }
        else{
            alert("Please, insert a task!")
        }
})

clearButton.addEventListener('click', () => {
    clearTask();
    itens.length=0;
})
function createTask(newItem){
    // Criado tag li que possui a classe task e 
    // o data-atributtes data-id
    const newTask = document.createElement("li");
    newTask.classList.add('task');
    newTask.setAttribute('data-id',id);

    newTask.innerHTML = newItem.task;
    list.appendChild(newTask);
    id++;   
}
function clearTask(){
    while (list.firstChild) {
        task.value='';
        localStorage.clear();
        
        list.removeChild(list.firstChild);
        id=0;
      }
}