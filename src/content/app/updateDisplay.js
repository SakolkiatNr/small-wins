import Screen from "./screen";

// change Header name
export function updateContentScreen() {
    const btnContainer = document.querySelector('.sidebar-btns');
    btnContainer.addEventListener('click', (e) => {
        changeHeader(e.target.innerHTML);

        console.log(e.target.id);
        if (e.target.id === 'inbox-btn') renderDefault();
        if (e.target.id === 'today-btn') renderToday();
    });
}

function changeHeader(name) {
    const headerTarget = document.querySelector('.content-header');
    headerTarget.innerHTML = name;
}

function renderDefault() {
    const defaultScreen = new Screen();

    defaultScreen.renderDefault();
    console.log('Showing Today content!');
}

function renderToday() {
    const todayScreen = new Screen();

    todayScreen.filterToday();
    console.log('Today screen is working!');
}