import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";

export function activeTaskEventHandler(projectData, tasksData, tasksHandler, screen) {
    const tasks = tasksData;
    const newScreen = screen;
    const taskHandler = tasksHandler;

    updateContentScreen(newScreen);
    activeAddTaskButton(tasks, projectData);
    
    const container = document.querySelector('.tasks-container');
    container.addEventListener('click', (e) => {
        taskHandler.TaskBtn(e);
    })

}