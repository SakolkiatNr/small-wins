function createProjectBtn(projectObj) {
    const btn = document.createElement('button');
    btn.classList.add('project-btn');
    btn.textContent = projectObj.name;

    return btn;
}

function deleteProjectBtn() {
    const btn = document.createElement('button');
    btn.classList.add('delete-project');    
    btn.textContent = 'X';

    return btn;
}

export function projectBtnContainer(projectObj) {
    const container = document.createElement('div');
    container.classList.add('project-cnt');
    container.dataset.id = projectObj.id;

    container.append(createProjectBtn(projectObj),
                     deleteProjectBtn()
                    );

    return container;
}