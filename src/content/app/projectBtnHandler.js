import { createProjectBtn } from "./toggleProject";


export default class ProjectButtonsHandler {

    #newPjBtn = document.querySelector('.new-pj-btn');
    #newPjCnt = document.querySelector('.new-pj-btn-container');

    #listCnt = document.querySelector('.project-lists');
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

    removeNewPjInput() {
        const target = document.querySelector('.new-pj-container');
        target.remove();
    }

    addNewPjBtn() {
        return createProjectBtn();
    }

    // Click button event handler
    projectBtn(event) {

        if (event.target.id === 'new-pj-btn') {
            this.#listCnt.append(this.newProjectInputContainer());
            this.#newPjBtn.remove();
        }
        
        if (event.target.id === 'cancel-new-pj') {
            this.removeNewPjInput();
            this.#newPjCnt.append(this.addNewPjBtn());
            // console.log('cancel new project input ');

        }

        if (event.target.id === 'confirm-new-pj') {
            this.removeNewPjInput();
            this.#newPjCnt.append(this.addNewPjBtn());
            console.log('add to project data');
            // add project to projects data
            // append new project 
        }

    }
}
