function changeHeader(name) {
    // change Header name
    const headerTarget = document.querySelector('.content-header');
    headerTarget.innerHTML = name;
}

export function updateContentScreen(screenObj) {
    const sidebarContainer = document.querySelector('.sidebar');

    sidebarContainer.addEventListener('click', (e) => {
        if (e.target.id === 'inbox-btn' ||
            e.target.id === 'today-btn' ||
            e.target.id === 'week-btn'  ||
            e.target.id === 'complete-btn'
        ) {
            changeHeader(e.target.innerHTML);
        }

        // change content display
        if (e.target.id === 'inbox-btn') screenObj.renderDefault();
        if (e.target.id === 'today-btn') screenObj.filterToday();
        if (e.target.id === 'week-btn') screenObj.filterWeek();
        if (e.target.id === 'complete-btn') screenObj.filterCompleted();

        // toggle project list container
        // if (e.target.id === 'project-btn') openProjectContainer();
        if (e.target.closest('.project-btn')) {
            changeHeader(e.target.textContent);
            screenObj.filterProject(e.target.textContent);
        }

        // toggle light dark
        if (e.target.id === 'toggle-theme') console.log('ligh/dark');
    });
}