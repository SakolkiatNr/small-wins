import Task from "./taskData";

function inputValue() {
    const title = document.querySelector('.title-input').value;
    const desc = document.querySelector('.desc-input').value;
    const date = document.querySelector('.date-input').value;
    const prio = document.querySelector('.prio-input').value;
    const tag = document.querySelector('.tag-input').value;

    return {title, desc, date, prio, tag};
}

function newTask() {
    const inputValues = inputValue();
    
    const newTask = new Task(
        inputValues.title,
        inputValues.desc,
        inputValues.date,
        inputValues.prio,
        inputValues.tag,
    );
    return newTask;
}

export function submitBtnHandler(tasksData) {
    const target = document.getElementById('add-task');
    const targetContainer = document.querySelector('.input-container');
    
    target.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add input data to tasksData
        console.log('adding task input to database...')
        tasksData.addTask(newTask());
        targetContainer.remove();
    });
}

