const theme = document.querySelector('.change-theme');
const task = document.getElementById('display');
const plusButton =  document.getElementById('btn-plus');
const clearButton = document.getElementById('btn-clear');
const list = document.getElementById('list');
let id = 0;

plusButton.addEventListener('click', () => {
    createTask();
    task.value='';
;})

clearButton.addEventListener('click', () => {
    clearTask();
;})

list.addEventListener('click', (evento) => {
    const selected = evento.target;
    console.log(evento);
    console.log(evento.target);
    console.log(evento.target.dataset);

    selected.classList.toggle('marked');

    // selected.style.cssText =
    // 'text-decoration: line-through;'
    
;})


theme.addEventListener('click', () => {
    theme.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
})







function createTask(){
    // Criado tag li que possui a classe task e o data-atributtes data-id

    const newTask = document.createElement("li");
    newTask.classList.add('task');
    newTask.setAttribute('data-id',id);
    
    newTask.innerHTML = task.value;
    
    list.appendChild(newTask);

    id++;
}
function clearTask(){
    const item = document.getElementsByTagName('li');
    list.remove(item);
}