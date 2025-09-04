import renderSidebar from "./sidebar";
import { renderContent } from "./content";

import TaskCardHandler from "./app/taskCardHandler";
import { activeTaskEventHandler } from "./app/TaskEventHandlert";
import { openProjectContainer } from "./app/toggleProject";
import Screen from "./app/screen";

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

    // toggle project container
    const projectsBtn = document.querySelector('.project-nav');
    projectsBtn.addEventListener('click', () => {
        openProjectContainer(pjData.projects, tasks.data);
    })

    newScreen.renderDefault();
}