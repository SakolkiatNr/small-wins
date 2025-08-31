

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
    
    // console.log('status: sidebar container is working')
    return navContainer;
}

// Project tag container
function projectNav() {
    const projectNav = document.createElement('nav');
    projectNav.classList.add('pj-nav-container');

    const projectBtn = sidebarBtn('Projects', 'project-nav');
    projectBtn.setAttribute('id', 'project-btn');
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projects-container');

    projectNav.append(projectBtn, projectContainer);

    return projectNav;
}

function toggleLightDarkBtn() {
    const toggleBtn = sidebarBtn('Light/Dark', 'toggle-btn');
    toggleBtn.setAttribute('id', 'toggle-theme');

    return toggleBtn;
}

function sidebarBtnsGrp1() {
    const btn1 = sidebarBtn('Inbox', 'inbox-btn');
    const btn2 = sidebarBtn('Today', 'today-btn');
    const btn3 = sidebarBtn('This Week', 'thisweek-btn');
    const btn4 = sidebarBtn('Completed', 'completed-btn');

    // set id
    btn1.setAttribute('id', 'inbox-btn');
    btn2.setAttribute('id', 'today-btn');
    btn3.setAttribute('id', 'week-btn');
    btn4.setAttribute('id', 'complete-btn');

    return [btn1, btn2, btn3, btn4];
}


export default function renderSidebar(target) {
    target.append(createLogo(LOGO_NAME));
    target.append(createNavContainer('sb-container1', sidebarBtnsGrp1()));
    target.append(projectNav());
    target.append(toggleLightDarkBtn());
}

