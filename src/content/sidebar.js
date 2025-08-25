// Export

const LOGO_NAME = 'Small wins';

function createLogo(name) {
    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.textContent = name;

    return logo;
}

function sidebarBtn(name, className) {
    const btn = document.createElement('button');
    btn.classList.add(className);
    btn.textContent = name;
    console.log('sidebar.js is working!');

    return btn;
}

const inboxBtn = sidebarBtn('Inbox', 'inbox-btn');
const todayBtn = sidebarBtn('Today', 'today-btn');  

export const logo = createLogo(LOGO_NAME);