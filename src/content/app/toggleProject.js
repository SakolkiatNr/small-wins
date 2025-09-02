import { addDeleteProjectBtnListener } from "./projectDelete";
import { renderProjects } from "./projectNavList";


export function openProjectContainer(projectData) {
    // toggle show class
    console.log('checking');
    const projectCnt = document.querySelector('.projects-container');
    projectCnt.classList.toggle('show');

    // reset html
    projectCnt.innerHTML = '';

    // show/hide project list
    if (projectCnt.classList.contains('show')) {

        // show create project button
        projectCnt.append(createProjectBtnContainer(),
                          projectsContainer());
        
        renderProjects(projectData);

        // run active task delete btn event listener here
        addDeleteProjectBtnListener(projectData);
    }
}

// NEW PROJECT INPUT ELEMENTS
export function createProjectBtn() {
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('new-pj-btn');
    addProjectBtn.setAttribute('id', 'new-pj-btn');
    addProjectBtn.textContent = '+ New project';

    return addProjectBtn;
}

function createProjectBtnContainer() {
    const addPjBtnCnt = document.createElement('div');
    addPjBtnCnt.classList.add('new-pj-btn-container');

    // append create project btn
    addPjBtnCnt.append(createProjectBtn());
    
    return addPjBtnCnt;
}

function projectsContainer() {
    // project buttons container
    const container = document.createElement('div');
    container.classList.add('project-lists');

    return container;
}