import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { activeTaskEventHandler } from "./app/TaskEventHandlert";

import ProjectButtonsHandler from "./app/projectBtnHandler";
import { ProjectData } from "./data/projectData";


export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    // Render
    renderSidebar(target);
    renderContent(contentTarget);
    
    // active event listener
    activeTaskEventHandler();

    // project Nav handler
    const pjData = new ProjectData();
    const pjBtnHandler = new ProjectButtonsHandler(pjData);

    document.addEventListener('click', (event) => {
        pjBtnHandler.projectBtn(event);
    })

}