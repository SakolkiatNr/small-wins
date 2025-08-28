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

// TODO
// Add filter for today date
// Add filter for this week date
// Add filter for tag
