import Task from "./taskData";

function inputValue() {
    const title = document.querySelector('.title-input').value;
    const desc = document.querySelector('.desc-input').value;
    const date = document.querySelector('.date-input').value;
    const prio = document.querySelector('.prio-input').value;
    const tag = document.querySelector('.tag-input').value;

    console.log('return input value!');
    console.log(title);
    console.log(desc);
    console.log(date);
    return {title, desc, date, prio, tag};
}


function createNewTask() {
    const inputValues = inputValue();
    
    const newTask = new Task(
        taskTitle = inputValues.title,
        desc = inputValues.desc,
        date = inputValues.date,
        priority = inputValues.prio,
        tag = inputValues.tag,
    );
}