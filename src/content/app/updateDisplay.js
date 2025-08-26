// Update content header
// getelementbyid
// change header display to sidebar text content 

export function getButtonId() {
    const btnContainer = document.querySelector('.sidebar-btns');
    btnContainer.addEventListener('click', (e) => {
        const targetId = e.target;
        console.log(targetId.innerHTML);
    });
}

function updateHeader(name) {
    const headerTarget = document.querySelector('.content-header');
}