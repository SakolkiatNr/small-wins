export function openProjectContainer() {
    // toggle show class
    const projectCnt = document.querySelector('.projects-container');
    projectCnt.classList.toggle('show');

    projectCnt.innerHTML = '';


    if (projectCnt.classList.contains('show')) {
        // projectCnt.append('+ new project');
        projectCnt.append(createProjectBtn());
    }
}

function createProjectBtn() {
    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = '+ New project';

    
    return addProjectBtn;
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