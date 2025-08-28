class Screen {
    clearScreen() {
        const container = document.querySelector('.tasks-container');
        container.innerHTML = '';
    }
}

const todayPage = new Screen();
const weekPage = new Screen();
const project1 = new Screen();