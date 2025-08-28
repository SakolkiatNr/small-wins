// Task container
function taskContainer() {
    const container = document.createElement('div');
    container.classList.add('task-container');
    return container;
}

function taskSubContainer(className) {
    const container = document.createElement('div');
    container.classList.add(className);
    return container;
}

function tasksCard() {
    const container = taskContainer();

    const subCont1 = taskSubContainer('check-box-cont');
    const subCont2 = taskSubContainer('task-details-cont');
    const subCont3 = taskSubContainer('edit-task-cont');

    taskContainer.append(subCont1, subCont2, subCont3);
    return container;
}

// Task detail element
function taskCheckBox() {
    const checkBox = document.createElement('button');
    checkBox.classList.add('task-chbx');
    checkBox.textContent = 'circle';

    return checkBox;
}

function taskTitleElement(obj) {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = obj.name;

    return title;
}

function taskDescElement(obj) {
    const detail = document.createElement('p');
    detail.classList.add('desc');
    detail.textContent = obj.desc

    return detail;
}

function taskDateElement(obj) {
    const date = document.createElement('p');
    date.classList.add('due-date');
    date.textContent = `Due: ${obj.date}`;
    
    return date;
}

function taskPrioElement(obj) {
    const prio = document.createElement('p');
    prio.classList.add('priority');
    prio.textContent = obj.priority;

    return prio;
}

function taskTagElement(obj) {
    const tag = document.createElement('p');
    tag.classList.add('tag');
    tag.textContent = `# ${obj.tag}`;

    return tag;
}

function editTaskElement() {
    const edit = document.createElement('button');
    edit.classList.add('edit-task');
    edit.textContent = 'edit';

    return edit;
}

function removeTaskElement() {
    const remove = document.createElement('remove');
    remove.classList.add('remove-task');
    remove.textContent = 'remove';

    return remove;
}