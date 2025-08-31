export function openProjectContainer(event) {
    const projectBtn = event.target.closest('.project-nav');

    projectBtn.append(projectContainer());


}

function projectContainer() {
    const container = document.createElement('div');
    container.append('hello!');

    return container;
}

