// change Header name
export function updateHeaderName() {
    const btnContainer = document.querySelector('.sidebar-btns');
    btnContainer.addEventListener('click', (e) => {
        changeHeader(e.target.innerHTML);

        // clear screen
        // change page content
        console.log(e.target.id);
    });
}

function changeHeader(name) {
    const headerTarget = document.querySelector('.content-header');
    headerTarget.innerHTML = name;
}
