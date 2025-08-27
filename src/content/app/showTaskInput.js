import AddTaskFormHandler from "../data/createTask";

// Pop up task input function
export function showTaskInput(targetContainer) {
    const addTaskWin = new AddTaskFormHandler();
    addTaskWin.renderAddTask(targetContainer);
}

// Show task input when click Add Task button
export function activeAddTaskButton() {
    const taskContainerTarget = document.querySelector('.tasks-container');
    const addTaskBtn = document.querySelector('.add-task-btn');
        
        addTaskBtn.addEventListener('click', () => {
            showTaskInput(taskContainerTarget);
            console.log('hello!')
        })
}