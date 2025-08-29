import Screen from "./screen";

// change Header name
export function updateContentScreen() {
    const btnContainer = document.querySelector('.sidebar-btns');
    btnContainer.addEventListener('click', (e) => {
        changeHeader(e.target.innerHTML);

        // change content display
        if (e.target.id === 'inbox-btn') console.log('inbox');
        if (e.target.id === 'today-btn') console.log('today');
        if (e.target.id === 'week-btn') console.log('this-week');
    });
}

function changeHeader(name) {
    const headerTarget = document.querySelector('.content-header');
    headerTarget.innerHTML = name;
}

