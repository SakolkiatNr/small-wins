import { projectBtnContainer } from "./projectBtn";

export function renderProjects(projectData) {
    const target = document.querySelector('.project-lists');

    // render projects from database
    for (const project in projectData) {
        target.append(projectBtnContainer(project));
    }
}