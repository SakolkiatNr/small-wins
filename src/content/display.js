import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { activeTaskEventHandler } from "./app/TaskEventHandlert";

import ProjectButtonsHandler from "./app/projectBtnHandler";
import { ProjectData } from "./data/projectData";
import { openProjectContainer } from "./app/toggleProject";

export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    // Render
    renderSidebar(target);
    renderContent(contentTarget);
    
    
    // project Nav handler
    const pjData = new ProjectData();
    const pjBtnHandler = new ProjectButtonsHandler(pjData);
    
    // project input button listener
    document.addEventListener('click', (event) => {
        pjBtnHandler.projectBtn(event);
    })

    // active event listener
    activeTaskEventHandler(pjData.projects);

    // toggle project container
    const projectsBtn = document.querySelector('.project-nav');
    projectsBtn.addEventListener('click', () => {
        openProjectContainer(pjData.projects);
    })


}