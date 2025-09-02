import Screen from "./screen";
import TasksData from "../data/tasks";
import TaskCardHandler from "./taskCardHandler";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";
// import { ProjectData } from "../data/projectData";


export function activeTaskEventHandler(projectData, tasksData, tasksHandler, screen) {
    // const tasks = new TasksData();
    // const newScreen = new Screen(tasks.data);
    // const taskHandler = new TaskCardHandler(tasks, newScreen, projectData);
    
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