const theme = document.querySelector('.change-theme');
const task = document.getElementById('display');
const plusButton =  document.getElementById('btn-plus');
const clearButton = document.getElementById('btn-clear');
const list = document.getElementById('list');
let id = 0;

plusButton.addEventListener('click', () => {
    console.log("Adicionar");
    createTask();
;})

clearButton.addEventListener('click', () => {
    clearTask();
    console.log("Apagar");
;})

theme.addEventListener('click', () => {
    theme.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
})
function createTask(){
    const newTask = document.createElement("li");
    newTask.classList.add('task');
    newTask.setAttribute('data-id',id);
    list.appendChild(newTask);
    newTask.innerHTML = task.value;
    id++;
    task.value='';
}
function clearTask(){
    list.removeChild(li);
}