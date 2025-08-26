function headerText() {
    const header = document.createElement('h1');
    header.classList.add('content-header');
    header.textContent = 'lmao';

    return header;
}

function taskContainer() {
    const tskCtn = document.createElement('div');
    tskCtn.classList.add('tasks-container');

    return tskCtn;
}

function addTaskBtn() {
    const addTask = document.createElement('button')
    addTask.classList.add('add-task-btn');
    addTask.textContent = 'Add Task';

    return addTask;
}

function contentContainer() {
    // create container for tasks and addTaskBtn
    const container = document.createElement('div');
    container.classList.add('content-container');
    container.append(taskContainer(), addTaskBtn());

    return container;
}

export function renderContent(target) {
    target.append(headerText(),contentContainer());
}
