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

    // console.log(typeof(btn));
    return btn;
}

const sidebarBtnsGrp1 = [
    sidebarBtn('Inbox', 'inbox-btn'),
    sidebarBtn('Today', 'today-btn'),
    sidebarBtn('Upcoming', 'upcoming-btn'),
    sidebarBtn('Priorities', 'priorities-btn'),
]

const sideBarGr1 = document.createElement('div');
sideBarGr1.classList.add('sidebar-btns', 'grp-1');
sidebarBtnsGrp1.forEach(item => sideBarGr1.append(item));

export const logo = createLogo(LOGO_NAME);
export const sideBarBtns = sideBarGr1;