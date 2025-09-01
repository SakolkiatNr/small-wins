export function openProjectContainer(e) {
    // toggle show class
    const projectCnt = document.querySelector('.projects-container');
    projectCnt.classList.toggle('show');

    // reset html
    projectCnt.innerHTML = '';

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

    const addPjBtnCnt = document.createElement('div');
    addPjBtnCnt.classList.add('new-pj-btn-container');
    addPjBtnCnt.append(addProjectBtn);
    
    return addPjBtnCnt;
}

function projectsContainer() {
    // project buttons container
    const container = document.createElement('div');
    container.classList.add('project-lists');

    return container;
}

// BUTTON FUNCTION

// function activeProjectContainer() {
//     const newPjBtn = document.querySelector('.new-pj-btn');
//     const listCnt = document.querySelector('.project-lists');

//     newPjBtn.addEventListener('click', (e) => {
//         console.log('test');

//         listCnt.append(newProjectInputContainer());
           
//     })
// }
