import { tasksArr } from "../data/taskData";
import { taskCard } from "./taskCard";

export function renderTasks() {
    const tasks = tasksArr;
    const tasksContainer = document.querySelector('.tasks-container');

    // clear container
    tasksContainer.innerHTML = '';

    for (const task in tasks) {
        const taskObj = tasks[task];
        tasksContainer.append(taskCard(taskObj));
    }
    
}
