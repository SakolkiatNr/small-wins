import { renderAddTask } from "../data/createTask";
import { submitBtnHandler } from "../data/getDataInfo";

function showTaskInput(targetContainer, projectData) {
    // Pop up task input function
    renderAddTask(targetContainer, projectData);
}

export function activeAddTaskButton(tasksData, projectData) {
    // Show task input when click Add Task button
    const taskContainerTarget = document.querySelector('.tasks-container');
    const addTaskBtn = document.querySelector('.add-task-btn');
        
    addTaskBtn.addEventListener('click', () => {
        showTaskInput(taskContainerTarget, projectData);
        submitBtnHandler(tasksData);
    })
}


// TODO
// Project screen and project tag
// hide ADDTASK button when change page
    // show in project and Inbox only