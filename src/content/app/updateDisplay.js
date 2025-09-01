import { openProjectContainer } from "./toggleProject";
import ProjectButtonsHandler from "./projectBtnHandler";

function changeHeader(name) {
    // change Header name
    const headerTarget = document.querySelector('.content-header');
    headerTarget.innerHTML = name;
}

export function updateContentScreen(screenObj) {
    const sidebarContainer = document.querySelector('.sidebar');

    sidebarContainer.addEventListener('click', (e) => {
        if (e.target.id != 'project-btn' &&
            e.target.id != 'toggle-theme' &&
            e.target.id != ''
        ) {
            changeHeader(e.target.innerHTML);
        }

        // change content display
        if (e.target.id === 'inbox-btn') screenObj.renderDefault();
        if (e.target.id === 'today-btn') screenObj.filterToday();
        if (e.target.id === 'week-btn') screenObj.filterWeek();
        if (e.target.id === 'complete-btn') screenObj.filterCompleted();

        // open project display
        if (e.target.id === 'project-btn') openProjectContainer(e);

        // toggle light dark
        if (e.target.id === 'toggle-theme') console.log('ligh/dark');

        const projectNavHandler = new ProjectButtonsHandler();
        projectNavHandler.projectBtn(e);
    });
}