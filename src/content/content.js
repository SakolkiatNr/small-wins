function headerText(name) {
    const header = document.createElement('h1');
    headTarget.classList.add('content-header')
    headTarget.textContent = name;

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

