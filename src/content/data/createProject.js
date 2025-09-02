import Project from "./project";

function projectNameInput() {
    const target = document.querySelector('.pj-name-input');
    return target.value;
}

export function newProject() {
    // create project data
    const projectName = projectNameInput();
    const newProject = new Project(projectName);

    return newProject;
}

export function addProjectToDB(projectData, project) {
    // add project to database
    projectData.addProject(project);
    console.log('add project to database');
}