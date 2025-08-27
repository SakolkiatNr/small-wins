import Task from "./taskData";
import AddTaskFormHandler from "./createTask";

const newTaskData = new AddTaskFormHandler().getInputValue();

export function createNewTask(){
    const newTask = new Task(
        name = newTaskData.title,
        desc = newTaskData.desc,
        date = newTask.date,
        priority = newTaskData.prio,
        tag = newTaskData.tag
    )

    const createBtn = document.querySelector('.add-task-btn');

    return newTask;
}
