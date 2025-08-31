export function openProjectContainer() {
    // toggle show class
    const projectCnt = document.querySelector('.projects-container');
    projectCnt.classList.toggle('show');

    projectCnt.innerHTML = '';
    if (projectCnt.classList.contains('show')) {
        console.log('render projects');
        projectCnt.append('hello');
    }
}


/* 

if projects being clicked

projects-container classlist toggle show/hide

if projects-container classlist -> on
    render project btns
        tag-name
        id
if projects-container classlist -> off
    projects-container.innerHTML = '';

*/

