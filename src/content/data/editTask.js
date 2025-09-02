import { format } from "date-fns";
import { renderProjectOption } from "./createTask";


export function editInputContainer(projectData) {
   // Input container
    const container = document.createElement('form');
    container.classList.add('edit-input-container');
    container.append(leftContainerElements(projectData), rightContainerElements());
    
    return container; 
}

function leftContainerElements(projectData) {
    // Left container
    const leftInputContainer = document.createElement('div');
    leftInputContainer.classList.add('text-input-container');
    
    // Date, Priority, Tag container
    const leftBtnContainer = document.createElement('div');
    leftBtnContainer.classList.add('btns-input-container', 'left');
    
    
    // grouping input container
    leftInputContainer.append(editTitleInput(), editDescInput());
    leftBtnContainer.append(editDateInput(), editPriorityInput(), editTagInput(projectData));        
    
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

function editTitleInput() {
    const titleInput = document.createElement('input');
    titleInput.classList.add('title-edit');
    titleInput.placeholder = 'Task title';
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('required', '');
    titleInput.value

    return titleInput;
}

function editDescInput() {
    const descInput = document.createElement('input');
    descInput.classList.add('desc-edit');
    descInput.placeholder = 'Task Details';
    descInput.setAttribute('type', 'text');

    return descInput;
}

function editDateInput() {
    const todayDate = format(new Date(), 'yyyy-MM-dd');

    const dateInput = document.createElement('input');
    dateInput.classList.add('date-edit');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('min', todayDate);
    // console.log(new Date());

    return dateInput;
}

function editPriorityInput() {
    // priority selection container
    const prioInput = document.createElement('select');
    prioInput.classList.add('prio-edit');
    
    const urgentInput = document.createElement('option');
    urgentInput.textContent = 'Urgent';
    urgentInput.classList.add('prio-urgent');
    urgentInput.value = 'urgent';

    const importantInput = document.createElement('option');
    importantInput.classList.add('prio-important');
    importantInput.textContent = 'Important';
    importantInput.value = 'important';

    const optionalInput = document.createElement('option');
    optionalInput.classList.add('prio-optional');
    optionalInput.textContent = 'Optional';
    optionalInput.value = 'optional';

    prioInput.append(urgentInput, importantInput, optionalInput);

    return prioInput;
}

function editTagInput(projectData) {
    const tagInput = document.createElement('select');
    tagInput.classList.add('tag-edit');
    
    renderProjectOption(projectData, tagInput);
    
    return tagInput;
}

// BUTTON ELEMENTS
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
    addTaskBtn.setAttribute('type', 'button');
    addTaskBtn.setAttribute('id', 'confirm-edit');
    addTaskBtn.textContent = 'Confirm';

    return addTaskBtn;
}