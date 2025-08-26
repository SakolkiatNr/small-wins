function headerText() {
    const header = document.createElement('h1');
    headTarget.classList.add('content-header');
    headTarget.textContent = 'lmao';

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

    return addTask;
}

function contentContainer() {
    headerText();
    
    // create container for tasks and addTaskBtn
    const container = document.createElement('div');
    container.classList.add('content-container');
    container.append(taskContainer(), addTaskBtn());

    return container;
}

function renderContent(target) {
    target.append(contentContainer());
}
