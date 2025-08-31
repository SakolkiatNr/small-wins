import Screen from "./screen";
import TasksData from "../data/tasks";
import TaskCardHandler from "./taskCardHandler";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";


export function activeTaskEventHandler() {
    const tasks = new TasksData();
    const newScreen = new Screen(tasks.data);
    const container = document.querySelector('.tasks-container');
    const taskHandler = new TaskCardHandler(tasks, newScreen);

    updateContentScreen(newScreen);
    activeAddTaskButton(tasks);
    
    container.addEventListener('click', (e) => {
        taskHandler.TaskBtn(e);
    })

}