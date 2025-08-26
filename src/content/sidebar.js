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

function createSidebarContainer(group, items) {
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList.add('sidebar-btns', group);
    items.forEach(item => sidebarContainer.append(item));
    
    console.log('status: sidebar container is working')
    return sidebarContainer;
}

const sidebarBtnsGrp1 = [
    sidebarBtn('Inbox', 'inbox-btn'),
    sidebarBtn('Today', 'today-btn'),
    sidebarBtn('Upcoming', 'upcoming-btn'),
    sidebarBtn('Priorities', 'priorities-btn'),
]

export default function renderSidebar(target) {
    target.append(createLogo(LOGO_NAME));
    target.append(createSidebarContainer('sb-container1', sidebarBtnsGrp1));
}
