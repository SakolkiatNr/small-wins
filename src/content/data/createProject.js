import Project from "./project";
import { ProjectData } from "./projectData";

function projectNameInput() {
    const target = document.querySelector('.pj-name-input');

    return target.value;
}

function newProject() {
    // create project data
    const projectName = projectNameInput();
    const newProject = new Project(projectName);

    return newProject;
}

export function addProjectToDB(projectData) {
    // add project to database
    projectData.addProject(newProject());
    console.log('add project to database');
}