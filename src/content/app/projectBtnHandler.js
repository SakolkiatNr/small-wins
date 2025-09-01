export default class ProjectButtonsHandler {

    #newPjBtn = document.querySelector('.new-pj-btn');
    #listCnt = document.querySelector('.project-lists');
    #prjCnt = document.querySelector('.projects-container');

    newProjectInput() {
        // Project name input
        const input = document.createElement('input');
        input.classList.add('pj-name-input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Project name');
        
        return input;
    }

    // NEW PROJECT INPUT ELEMENTS
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
        container.append(this.newProjectInput(),
                        this.newProjectCancelBtn(),
                        this.newProjectConfirmBtn()
                        );

        return container;
    }



    // Click button event handler
    projectBtn(event) {

        if (event.target.id === 'new-pj-btn') {
            this.#listCnt.append(this.newProjectInputContainer());
            this.#newPjBtn.remove();
        }
        
        if (event.target.id === 'cancel-new-pj') {
            this.#prjCnt.append('lmao');
            
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