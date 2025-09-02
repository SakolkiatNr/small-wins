import Screen from "./screen";
import TasksData from "../data/tasks";
import TaskCardHandler from "./taskCardHandler";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";
// import { ProjectData } from "../data/projectData";


export function activeTaskEventHandler(projectData) {
    const tasks = new TasksData();
    const newScreen = new Screen(tasks.data);

    const container = document.querySelector('.tasks-container');
    const taskHandler = new TaskCardHandler(tasks, newScreen, projectData);

    updateContentScreen(newScreen);
    activeAddTaskButton(tasks, projectData);
    
    container.addEventListener('click', (e) => {
        taskHandler.TaskBtn(e);
    })

}