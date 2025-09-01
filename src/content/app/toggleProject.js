export function openProjectContainer(e) {
    // toggle show class
    const projectCnt = document.querySelector('.projects-container');
    projectCnt.classList.toggle('show');

    // reset html
    projectCnt.innerHTML = '';

    const projectList = new ProjectButtonsHandler();

    // show/hide project list
    if (projectCnt.classList.contains('show')) {

        // 
        projectCnt.append(createProjectBtn(),
                          projectsContainer());
        
        // activeProjectContainer();
        
    }
}

// NEW PROJECT INPUT ELEMENTS
function createProjectBtn() {
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('new-pj-btn');
    addProjectBtn.setAttribute('id', 'new-pj-btn');
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

function newProjectInputContainer() {
    const container = document.createElement('button');
    container.classList.add('new-pj-container');

    // append input elements
    container.append(newProjectInput(),
                     newProjectCancelBtn(),
                     newProjectConfirmBtn()
                    );

    return container;
}

function projectsContainer() {
    // project buttons container
    const container = document.createElement('div');
    container.classList.add('project-lists');

    return container;
}

// BUTTON FUNCTION

function activeProjectContainer() {
    const newPjBtn = document.querySelector('.new-pj-btn');
    const listCnt = document.querySelector('.project-lists');

    newPjBtn.addEventListener('click', (e) => {
        console.log('test');

        listCnt.append(newProjectInputContainer());
           
    })
}

class ProjectButtonsHandler {

    #newPjBtn = document.querySelector('.new-pj-btn');
    #listCnt = document.querySelector('.project-lists');

    // Click button event handler
    projectBtn(event) {

        if (event.target.id === 'new-pj-btn') {

            console.log('yo');
        }        

    }
}









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