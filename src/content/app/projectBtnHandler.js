import { createProjectBtn } from "./toggleProject";
import { addProjectToDB, newProject } from "../data/createProject";
import { projectBtnContainer } from "./projectBtn";


export default class ProjectButtonsHandler {
    constructor(projectData) {
        this.data = projectData;
    }

    newProjectInput() {
        // Project name input
        const input = document.createElement('input');
        input.classList.add('pj-name-input');
        input.setAttribute('type', 'text');
        input.setAttribute('required', '');
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
        btn.setAttribute('type', 'submit')
        btn.textContent = 'CONFIRM';

        return btn;
    }

    newProjectInputContainer() {
        const container = document.createElement('form');
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

    projectNameValidate(event) {
    // validate name input
    event.preventDefault();
    
    const input = document.querySelector('.pj-name-input');
    const value = input.value.trim();

    if (!value) {
        input.setCustomValidity('Please enter a project name');
        input.reportValidity();
        return false;
    }

    input.setCustomValidity('');
    input.reportValidity();

    return true;
}

    // Click button event handler
    projectBtn(event) {
        const newPjBtn = document.querySelector('.new-pj-btn');
        const newPjCnt = document.querySelector('.new-pj-btn-container');
        const listCnt = document.querySelector('.project-lists'); 

        if (event.target.id === 'new-pj-btn') {
            // add new project input and remove new project button
            newPjCnt.append(this.newProjectInputContainer());
            newPjBtn.remove();
        }
        
        if (event.target.id === 'cancel-new-pj') {
            // remove input and add new project button
            this.removeNewPjInput();
            newPjCnt.append(this.addNewPjBtn());
        }

        if (event.target.id === 'confirm-new-pj') {
            // show new project button

            if (!this.projectNameValidate(event)) {
                return;
            }

            newPjCnt.append(this.addNewPjBtn());

            // create new project
            const newPj = newProject();
            addProjectToDB(this.data, newPj);

            console.log(this.data);
            // append new project button to project list
            listCnt.append(projectBtnContainer(newPj));

            this.removeNewPjInput();
        }

    }
}
