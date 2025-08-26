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
// Nav container
function createNavContainer(group, items) {
    const navContainer = document.createElement('nav');
    navContainer.classList.add('sidebar-btns', group);
    items.forEach(item => navContainer.append(item));
    
    console.log('status: sidebar container is working')
    return navContainer;
}

const sidebarBtnsGrp1 = [
    sidebarBtn('Inbox', 'inbox-btn'),
    sidebarBtn('Today', 'today-btn'),
    sidebarBtn('Upcoming', 'upcoming-btn'),
    sidebarBtn('Priorities', 'priorities-btn'),
]

// Project tag container
function projectNav() {
    const projectNav = document.createElement('nav');
    projectNav.classList.add('pj-nav-container');

    const projectBtn = sidebarBtn('Projects', 'project-nav');
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projects-container');

    projectNav.append(projectBtn, projectContainer);

    return projectNav;
}







// function project

export default function renderSidebar(target) {
    target.append(createLogo(LOGO_NAME));
    target.append(createNavContainer('sb-container1', sidebarBtnsGrp1));
    target.append(projectNav());
}

