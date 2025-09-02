import { format } from "date-fns";


function createInputContainer(projectData) {
   // Input container
        const container = document.createElement('form');
        container.classList.add('input-container');

        // Left container
        const leftInputContainer = document.createElement('div');
        leftInputContainer.classList.add('text-input-container');
        
        // Date, Priority, Tag container
        const leftBtnContainer = document.createElement('div');
        leftBtnContainer.classList.add('btns-input-container', 'left');
        
        const leftContainer = document.createElement('div');
        leftContainer.classList.add('task-input-container');
        
        // grouping input container
        leftInputContainer.append(titleInput(), descInput());
        leftBtnContainer.append(dateInput(), priorityInput(), tagInput(projectData));
        leftContainer.append(leftInputContainer, leftBtnContainer);


        // Right container
        const rightContainer = document.createElement('div');
        rightContainer.classList.add('btns-add-container');

        const rightBtnContainer = document.createElement('div');
        rightBtnContainer.classList.add('btn-input-container', 'right');
        rightContainer.append(rightBtnContainer);

        rightBtnContainer.append(createCancelBtn(), createSubmitNewTaskBtn());
        container.append(leftContainer, rightContainer);
        
        return container; 
}
// INPUT ELEMENTs
export function titleInput() {
    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.placeholder = 'Task title';
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('required', '');
    titleInput.value

    return titleInput;
}

export function descInput() {
    const descInput = document.createElement('input');
    descInput.classList.add('desc-input');
    descInput.placeholder = 'Task Details';
    descInput.setAttribute('type', 'text');

    return descInput;
}

export function dateInput() {
    const todayDate = format(new Date(), 'yyyy-MM-dd');

    const dateInput = document.createElement('input');
    dateInput.classList.add('date-input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('min', todayDate);
    // console.log(new Date());

    return dateInput;
}

export function priorityInput() {
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

export function tagInput(projectData) {
    const tagInput = document.createElement('select');
    tagInput.classList.add('tag-input');
    
    // no tag
    const tag = document.createElement('option');
    tag.textContent = '';

    tagInput.append(tag);

    // create option element from project database
    renderProjectOption(projectData, tagInput);
    
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



// BUTTONS FUNCTIONS
function removeTaskInput() {
    const targetContainer = document.querySelector('.input-container');
    targetContainer.remove();
 }

function activeCancelBtn() {
    const targetCancelBtn = document.querySelector('.btn-input-container');
    targetCancelBtn.addEventListener('click', (e) => {
        if (!e.target) return;
        if (e.target.id === 'cancel') removeTaskInput();
    });
 }

export function renderAddTask(target, projectData) {
        const addTaskContainer = createInputContainer(projectData);
        target.append(addTaskContainer);
        activeCancelBtn();
 }


export function renderProjectOption(projectData, target) {
    for (const project in projectData) {
        // project is an index, remember!
        // we'll pass projectData as an array
        
        const tag = document.createElement('option');
        tag.textContent = projectData[project].name;

        target.append(tag);
    }
 }