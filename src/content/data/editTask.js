
function createInputContainer() {
   // Input container
        const container = document.createElement('form');
        container.classList.add('input-container');


        
        container.append(leftContainer, rightContainer);
        
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

        rightBtnContainer.append(createCancelBtn(), createSubmitNewTaskBtn());
        
        return rightContainer;
}


// INPUT ELEMENTs
function titleInput() {
    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.placeholder = 'Task title';
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('required', '');
    titleInput.value

    return titleInput;
}

function descInput() {
    const descInput = document.createElement('input');
    descInput.classList.add('desc-input');
    descInput.placeholder = 'Task Details';
    descInput.setAttribute('type', 'text');

    return descInput;
}

function dateInput() {
    const dateInput = document.createElement('input');
    dateInput.classList.add('date-input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('min', '2025-08-27');
    // console.log(new Date());

    return dateInput;
}

function priorityInput() {
    // priority selection container
    const prioInput = document.createElement('select');
    prioInput.classList.add('prio-input');
    
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

function tagInput() {
    const tagInput = document.createElement('select');
    tagInput.classList.add('tag-input');
    
    const tag1 = document.createElement('option');
    tag1.textContent = 'Project 1';
    const tag2 = document.createElement('option');
    tag2.textContent = 'Project 2';

    tagInput.append(tag1, tag2);
    
    return tagInput;
}

function createCancelBtn() {
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.setAttribute('id', 'cancel');
    cancelBtn.textContent = 'Cancel'; 

    return cancelBtn;
}

function createSubmitNewTaskBtn() {
    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.setAttribute('type', 'submit');
    addTaskBtn.setAttribute('id', 'add-task');
    addTaskBtn.textContent = 'Add Task';

    return addTaskBtn;
}
