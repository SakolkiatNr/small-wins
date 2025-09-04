import Screen from "./app/screen";
import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import TaskCardHandler from "./app/taskCardHandler";
import { activeTaskEventHandler } from "./app/TaskEventHandlert";

export default function renderScreen(projectsData, tasksData) {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    // Render
    renderSidebar(target);
    renderContent(contentTarget);
    
    // project Nav handler
    const pjData = projectsData;
    const tasks = tasksData;

    const newScreen = new Screen(tasks.data);
    const taskHandler = new TaskCardHandler(tasks, newScreen, pjData.projects);
    
    // active task event listener
    activeTaskEventHandler(pjData.projects, tasks, taskHandler, newScreen);

    newScreen.renderDefault();
}