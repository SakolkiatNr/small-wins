import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { activeTaskEventHandler } from "./app/TaskEventHandlert";

import ProjectButtonsHandler from "./app/projectBtnHandler";
import { ProjectData } from "./data/projectData";
import { openProjectContainer } from "./app/toggleProject";

import TasksData from "./data/tasks";
import TaskCardHandler from "./app/taskCardHandler";
import Screen from "./app/screen";

export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    // Render
    renderSidebar(target);
    renderContent(contentTarget);
    
    // project Nav handler
    const pjData = new ProjectData();
    const pjBtnHandler = new ProjectButtonsHandler(pjData);

    const tasks = new TasksData();
    const newScreen = new Screen(tasks.data);
    const taskHandler = new TaskCardHandler(tasks, newScreen, pjData.projects);
    
    // active task event listener
    activeTaskEventHandler(pjData.projects, tasks, taskHandler, newScreen);

    // project input button listener
    document.addEventListener('click', (event) => {
        pjBtnHandler.projectBtn(event);
    })

    // toggle project container
    const projectsBtn = document.querySelector('.project-nav');
    projectsBtn.addEventListener('click', () => {
        openProjectContainer(pjData.projects, tasks.data);
    })
    

}