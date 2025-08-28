import { tasksArr } from "../data/taskData";
import { taskCard } from "./taskCard";

export function renderTasks() {
    // Tasks data
    const tasks = tasksArr;
    const tasksContainer = document.querySelector('.tasks-container');

    // clear container
    tasksContainer.innerHTML = '';

    // render task
    for (const task in tasks) {
        const taskObj = tasks[task];
        console.log(taskObj.date);
        tasksContainer.append(taskCard(taskObj));
    }
    
}

// if id === 'today' run this function
function filterToday(tasks) {
    for (const task in tasks) {
        const today = tasks[task].date
    }

}
