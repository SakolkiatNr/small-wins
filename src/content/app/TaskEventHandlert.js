import TasksData from "../data/tasks";
import Screen from "./screen";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";

// test
import TaskCardHandler from "./taskCardHandler";

export function activeTaskEventHandler() {
    const tasks = new TasksData();
    const newScreen = new Screen(tasks.data);
    const container = document.querySelector('.tasks-container');

    updateContentScreen(newScreen, container);
    activeAddTaskButton(tasks);
    
    // test
    const taskHandler = new TaskCardHandler(tasks.data, newScreen);
    container.addEventListener('click', (e) => {
        taskHandler.TaskBtn(e);
    })
}