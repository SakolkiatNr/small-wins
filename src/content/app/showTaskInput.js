// import AddTaskFormHandler from "../data/createTask";
import { renderAddTask } from "../data/createTask";
import { submitBtnHandler } from "../data/getDataInfo";

function showTaskInput(targetContainer) {
    // Pop up task input function
    renderAddTask(targetContainer);
}

export function activeAddTaskButton(tasksData) {
    // Show task input when click Add Task button
    const taskContainerTarget = document.querySelector('.tasks-container');
    const addTaskBtn = document.querySelector('.add-task-btn');
        
    addTaskBtn.addEventListener('click', () => {
        showTaskInput(taskContainerTarget);
        submitBtnHandler(tasksData);
    })
}

