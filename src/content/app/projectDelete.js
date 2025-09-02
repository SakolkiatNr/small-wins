function deleteProject(projectId, projectData) {
    // delete project from database
    const taskIndex = projectData.findIndex(obj => obj.id === projectId);
    if (taskIndex > -1) {
        console.log('found project ID!');
        
        projectData.splice(taskIndex, 1);
    }
    // remove that project
}

function removeProjectTask() {
    // filter for task tag
    // remove task with that tag
}

export function addDeleteProjectBtnListener(projectData) {
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.addEventListener('click', (e) => {
        // find target btn project Id
        if (e.target.className === 'delete-project') {

            const projectContainer = e.target.closest('.project-cnt');
            const projectID = projectContainer.dataset.id;

            // remove project from database and remove element
            deleteProject(projectID, projectData);
            projectContainer.remove();
        }
    });
}