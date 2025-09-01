export default class ProjectButtonsHandler {

    #newPjBtn = document.querySelector('.new-pj-btn');
    #listCnt = document.querySelector('.project-lists');

    newProjectInput() {
        // Project name input
        const input = document.createElement('input');
        input.classList.add('pj-name-input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Project name');
        
        return input;
    }

    newProjectCancelBtn() {
        const btn = document.createElement('button');
        btn.classList.add('pj-cancel-input');
        btn.setAttribute('id', 'cancel-new-pj');
        btn.textContent = 'CANCEL';

        return btn; 
    }

    newProjectConfirmBtn() {
        const btn = document.createElement('button');
        btn.classList.add('pj-confirm-input');
        btn.setAttribute('id', 'confirm-new-pj');
        btn.textContent = 'CONFIRM';

        return btn;
    }

    newProjectInputContainer() {
        const container = document.createElement('button');
        container.classList.add('new-pj-container');

        // append input elements
        container.append(newProjectInput(),
                        newProjectCancelBtn(),
                        newProjectConfirmBtn()
                        );

        return container;
    }

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