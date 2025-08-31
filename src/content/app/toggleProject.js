export function openProjectContainer() {
    // toggle show class
    const projectCnt = document.querySelector('.projects-container');
    projectCnt.classList.toggle('show');

    projectCnt.innerHTML = '';

    // show/hide project list
    if (projectCnt.classList.contains('show')) {
        projectCnt.append(createProjectBtn());
    }
}

// NEW PROJECT INPUT ELEMENTS
function createProjectBtn() {
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('new-pj-btn');
    addProjectBtn.textContent = '+ New project';
    
    return addProjectBtn;
}

function newProjectInput() {
    // Project name input
    const input = document.createElement('input');
    input.classList.add('pj-name-input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Project name');
    
    return input;
}

function newProjectCancelBtn() {
    const btn = document.createElement('button');
    btn.classList.add('pj-cancel-input');
    btn.setAttribute('id', 'cancel-new-pj');
    btn.textContent = 'CANCEL';

    return btn; 
}

function newProjectConfirmBtn() {
    const btn = document.createElement('button');
    btn.classList.add('pj-confirm-input');
    btn.setAttribute('id', 'confirm-new-pj');
    btn.textContent = 'CONFIRM';

    return btn;
}

// ok 
    // add new project to project database
    // app new Project to project container
// cancel
    // remove input

function projectsBtn() {
    // render project from project database
        // change to current project page
        // filter tag
    // add delete project btn
        // delete task that have the same project tags 
        // delete project from database
    
}

function projectBtn() {
    // render current task with project id

}