export function deleteProject(projectId, projectData) {
    
    const taskIndex = projectData.findIndex(obj => obj.id === projectId);
    if (taskIndex > -1) {
        console.log('found project ID!');
        // return this.tasks.data[taskIndex];
    }
    // get element id
    // find index in project database
    // remove that project

    // remove task with that project tag in task database
}

function removeProjectTask() {
    // filter for task tag
    // remove task with that tag
}