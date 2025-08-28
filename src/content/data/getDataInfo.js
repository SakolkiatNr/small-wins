import Task from "./taskData";
import { tasksArr } from "./taskData";

function inputValue() {
    const title = document.querySelector('.title-input').value;
    const desc = document.querySelector('.desc-input').value;
    const date = document.querySelector('.date-input').value;
    const prio = document.querySelector('.prio-input').value;
    const tag = document.querySelector('.tag-input').value;

    return {title, desc, date, prio, tag};
}

function createNewTask() {
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

export function addTaskToArr() {
    console.log('Push new task to tasks array')
    tasksArr.push(createNewTask());
}