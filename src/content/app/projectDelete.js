function deleteProject(projectId, projectData) {
    // delete project from database
    const projectIndex = projectData.findIndex(obj => obj.id === projectId);
    if (projectIndex > -1) {
        // console.log('found project ID!');
        const projectName = projectData[projectIndex].name;

        projectData.splice(projectIndex, 1);
        return projectName;
    }

}

function removeProjectTask(tasksData, projectName) {

    // const taskIndex = tasksData.findIndex(obj => obj.tag === projectName);

    for (const task in tasksData) {
        
        if (tasksData[task].tag === projectName) {
            tasksData.splice(task, 1);
        }
    }
}

export function addDeleteProjectBtnListener(projectData, tasksData) {
    // remove project and task related from database
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.addEventListener('click', (e) => {
        // find target btn project Id
        if (e.target.className === 'delete-project') {

            const projectContainer = e.target.closest('.project-cnt');
            const projectID = projectContainer.dataset.id;
            // console.log(projectContainer);

            // // remove project from database and remove element
            const projectName = deleteProject(projectID, projectData);
            projectContainer.remove();

            // // remove tasks
            removeProjectTask(tasksData, projectName);
        }
    });
}