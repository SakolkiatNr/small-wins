import AddTaskFormHandler from "../data/createTask";

// export function showTaskInput() {
//     const addTaskWin = new AddTaskFormHandler();
//     const taskContainerTarget = document.querySelector('.tasks-container');
//     addTaskWin.renderAddTask(taskContainerTarget); 
// }
export function showTaskInput(targetContainer) {
    const addTaskWin = new AddTaskFormHandler();
    addTaskWin.renderAddTask(targetContainer);
}

// export const addTaskBtnTarget = document.querySelector('.add-task-btn');
// addTaskBtnTarget.addEventListener('click', () => {
//     showTaskInput();
// });