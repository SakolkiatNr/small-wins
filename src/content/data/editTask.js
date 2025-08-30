import { titleInput, descInput, dateInput, priorityInput, tagInput } from "./createTask";

export function editInputContainer() {
   // Input container
    const container = document.createElement('form');
    container.classList.add('input-container');
    container.append(leftContainerElements(), rightContainerElements());
    
    return container; 
}

function leftContainerElements() {
    // Left container
    const leftInputContainer = document.createElement('div');
    leftInputContainer.classList.add('text-input-container');
    
    // Date, Priority, Tag container
    const leftBtnContainer = document.createElement('div');
    leftBtnContainer.classList.add('btns-input-container', 'left');
    
    
    // grouping input container
    leftInputContainer.append(titleInput(), descInput());
    leftBtnContainer.append(dateInput(), priorityInput(), tagInput());        
    
    // append input elements
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('task-input-container');
    leftContainer.append(leftInputContainer, leftBtnContainer);

    return leftContainer;
}

function rightContainerElements() {
    // Right container
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('btns-add-container');

    const rightBtnContainer = document.createElement('div');
    rightBtnContainer.classList.add('btn-input-container', 'right');
    rightContainer.append(rightBtnContainer);

    rightBtnContainer.append(cancelEditBtn(), confirmEditBtn());
    
    return rightContainer;
}

// INPUT ELEMENTs

function cancelEditBtn() {
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.setAttribute('id', 'cancel-edit');
    cancelBtn.textContent = 'Cancel'; 

    return cancelBtn;
}

function confirmEditBtn() {
    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('confirm-btn');
    addTaskBtn.setAttribute('type', 'submit');
    addTaskBtn.setAttribute('id', 'confirm-edit');
    addTaskBtn.textContent = 'Confirm';

    return addTaskBtn;
}