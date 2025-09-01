export default class Project {
    constructor(projectName) {
        this.name = projectName;
        this.id = crypto.randomUUID();
    }
}