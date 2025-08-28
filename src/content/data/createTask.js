function createInputContainer() {
   // Input container
        const container = document.createElement('form');
        container.classList.add('input-container');

        // Left container
        const leftInputContainer = document.createElement('div');
        leftInputContainer.classList.add('text-input-container');

        leftInputContainer.append(titleInput(), descInput());

        // Date, Priority, Tag container
        const leftBtnContainer = document.createElement('div');
        leftBtnContainer.classList.add('btns-input-container', 'left');

        const leftContainer = document.createElement('div');
        leftContainer.classList.add('task-input-container');
        
        // priority input 
        const prioInput = document.createElement('select');
        prioInput.classList.add('prio-input');
        
        const urgentInput = document.createElement('option');
        urgentInput.textContent = 'Urgent';
        urgentInput.value = 'urgent';

        const importantInput = document.createElement('option');
        importantInput.textContent = 'Important';
        importantInput.value = 'important';

        const optionalInput = document.createElement('option');
        optionalInput.textContent = 'Optional';
        optionalInput.value = 'optional';

        prioInput.append(urgentInput, importantInput, optionalInput);

        // Project Tag input 
        const tagInput = document.createElement('select');
        tagInput.classList.add('tag-input');
        
        const tag1 = document.createElement('option');
        tag1.textContent = 'test tag1';
        const tag2 = document.createElement('option');
        tag2.textContent = 'taggggg 2';

        tagInput.append(tag1, tag2);

        // append to tag input select using 
        // function createProjectTagInput(tags, tagElement) {
        //     for (const tag of tags) {
        //         tagElement.append(tag);
        //     }
        // }

        // grouping input container
        leftBtnContainer.append(dateInput, prioInput, tagInput);
        
        // grouping left container
        leftContainer.append(leftInputContainer, leftBtnContainer);



        // Right container
        const rightContainer = document.createElement('div');
        rightContainer.classList.add('btns-add-container');

        const rightBtnContainer = document.createElement('div');
        rightBtnContainer.classList.add('btn-input-container', 'right');
        rightContainer.append(rightBtnContainer);

        rightBtnContainer.append(createCancelBtn(), createSubmitNewTaskBtn());
        
        // Append
        container.append(leftContainer, rightContainer);
        
        return container; 
}

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
    console.log(new Date());

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

function getInputValue() {
    const title = document.querySelector('.title-input').value;
    const desc = document.querySelector('.desc-input').value;
    const date = document.querySelector('.date-input').value;
    const prio = document.querySelector('.prio-input').value;
    const tag = document.querySelector('.tag-input').value;

    console.log('return input value!');
    console.log(title);
    console.log(desc);
    console.log(date);
    return {title, desc, date, prio, tag};
}

function submitBtn() {
    getInputValue();
    // removeTaskInput();
}

function removeTaskInput() {
    const targetContainer = document.querySelector('.input-container');
    targetContainer.remove();
 }

function addCreateTaskBtnsListenr() {
    const targetCancelBtn = document.querySelector('.btn-input-container');
    targetCancelBtn.addEventListener('click', (e) => {
        if (!e.target) return;
        if (e.target.id === 'cancel') removeTaskInput();
        if (e.target.id === 'add-task') submitBtn();
    });
 }

export function renderAddTask(target) {
        const addTaskContainer = createInputContainer();
        target.append(addTaskContainer);
        addCreateTaskBtnsListenr();
 }