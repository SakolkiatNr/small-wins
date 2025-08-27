
export default class AddTaskFormHandler {
    // create form elements
    inputContainer() {
        // Input container
        const container = document.createElement('div');
        container.classList.add('input-container');

        // Left container
        const leftInputContainer = document.createElement('div');
        leftInputContainer.classList.add('text-input-container');

        const leftBtnContainer = document.createElement('div');
        leftBtnContainer.classList.add('btns-input-container', 'left');

        const leftContainer = document.createElement('div');
        leftContainer.classList.add('task-input-container');

        leftContainer.append(leftInputContainer, leftBtnContainer);

        // Right container
        const rightContainer = document.createElement('div');
        rightContainer.classList.add('btns-add-container');

        const rightBtnContainer = document.createElement('div');
        rightBtnContainer.classList.add('btn-input-container', 'right');

        rightContainer.append(rightBtnContainer);

        // Append btn
        return container.append(leftContainer, rightContainer);
    }

    createBtn(name, className, id) {
        const btn = document.createElement('button');
        btn.classList.add(className);
        btn.setAttribute('id', id);
        btn.textContent = name;

        return btn;
    }

    inputContainer() {
        // title
        const titleInput = document.createElement('input');
        titleInput.classList.add('title-input');
        titleInput.placeholder = 'title test';
        
        
        // description
        const descInput = document.createElement('input');
        descInput.classList.add('desc-input');
        descInput.placeholder = 'description input';
        
        const inputContainer = this.selectElement('text-input-container');
        inputContainer.append(titleInput, descInput);
    }

    // get element 
    selectElement(className) {
        const target = document.querySelector(className);
        return target;
    }


    // if receive input
    // create a new task (obj)
    // send to taskData

    // if cancel
    // remove this container

}
