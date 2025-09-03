import { format } from "date-fns";

// Task container
function taskContainer(id) {
    const container = document.createElement('div');
    container.classList.add('task-container');
    container.dataset.id = id;
    return container;
}

function taskSubContainer(className) {
    const container = document.createElement('div');
    container.classList.add(className);
    return container;
}



// Task detail element
function taskCheckBox() {
    const checkBox = document.createElement('button');
    checkBox.classList.add('task-chbx');
    // checkBox.textContent = 'circle';

    return checkBox;
}

function taskTitleElement(title) {
    const titleEle = document.createElement('h1');
    titleEle.classList.add('title');
    titleEle.textContent = title;

    return titleEle;
}

function taskDescElement(desc) {
    const detail = document.createElement('p');
    detail.classList.add('desc');
    detail.textContent = desc;

    return detail;
}

function taskDateElement(dueDate) {
    const date = document.createElement('p');
    date.classList.add('due-date');

    if (dueDate) {
        const dueDateFormat = format(dueDate, 'PP');
        date.textContent = `${dueDateFormat}`;
    } else {
        date.textContent = '';
    }
    return date;
}

function taskPrioElement(taskPrio) {
    const prio = document.createElement('p');
    prio.classList.add('priority');
    prio.textContent = taskPrio;

    return prio;
}

function taskTagElement(tagName) {
    const tag = document.createElement('p');
    tag.classList.add('tag');
    tag.textContent = `#${tagName}`;

    return tag;
}

function editTaskElement() {
    const edit = document.createElement('button');
    edit.classList.add('edit-task');
    edit.textContent = 'EDIT';
    // edit.append(createSVG());

    return edit;
}

function removeTaskElement() {
    const remove = document.createElement('button');
    remove.classList.add('remove-task');
    remove.textContent = 'REMOVE';

    return remove;
}

export function taskCardElements(obj) {
    // elements container
    const container = document.createElement('div');
    container.classList.add('card-elements-cont');

    const subCont1 = taskSubContainer('check-box-cont');
    const subCont2 = taskSubContainer('task-details-cont');
    const subCont3 = taskSubContainer('edit-task-cont');

    // Add task title and desc
    const taskDetail1 = taskSubContainer('task-details-1');
    taskDetail1.append(
        taskTitleElement(obj.name), 
        taskDescElement(obj.desc)
    );
    
    // Add task details
    const taskDetail2 = taskSubContainer('task-details-2');
    taskDetail2.append(
        taskDateElement(obj.date), 
        taskPrioElement(obj.priority),
        taskTagElement(obj.tag)
    )

    subCont1.append(taskCheckBox());
    subCont2.append(taskDetail1, taskDetail2);
    subCont3.append(editTaskElement(), removeTaskElement());

    container.append(subCont1, subCont2, subCont3);

    return container;
}

export function taskCard(obj) {
    // Create Task card element
    const container = taskContainer(obj.id);

    // append to task container
    container.append(taskCardElements(obj));

    return container;
}

