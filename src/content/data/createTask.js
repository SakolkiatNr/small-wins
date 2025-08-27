export default class AddTaskFormHandler {
    // create form elements
    inputContainer() {
        // Input container
        const container = document.createElement('form');
        container.classList.add('input-container');

        // Left container
        const leftInputContainer = document.createElement('div');
        leftInputContainer.classList.add('text-input-container');

        // text input
        const titleInput = document.createElement('input');
        titleInput.classList.add('title-input');
        titleInput.placeholder = 'Task title';
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('required', '');

        // desc input
        const descInput = document.createElement('input');
        descInput.classList.add('desc-input');
        descInput.placeholder = 'Task Details';
        descInput.setAttribute('type', 'text');

        leftInputContainer.append(titleInput, descInput);

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
        container.append(leftContainer, rightContainer);
        
        return container;
    }

    renderAddTask(target) {
        const addTaskContainer = this.inputContainer();
        target.append(addTaskContainer);
    }
}
