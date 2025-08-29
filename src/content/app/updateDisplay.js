function changeHeader(name) {
    // change Header name
    const headerTarget = document.querySelector('.content-header');
    headerTarget.innerHTML = name;
}

export function updateContentScreen(screenObj) {
    const btnContainer = document.querySelector('.sidebar-btns');
    btnContainer.addEventListener('click', (e) => {
        changeHeader(e.target.innerHTML);

        // change content display
        if (e.target.id === 'inbox-btn') screenObj.renderDefault();
        if (e.target.id === 'today-btn') screenObj.filterToday();
        if (e.target.id === 'week-btn') screenObj.filterWeek();
        if (e.target.id === 'complete-btn') screenObj.filterCompleted();
    });
}