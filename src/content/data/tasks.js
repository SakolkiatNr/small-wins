export default class TasksData {
    constructor() {
        this.data = [];
    }

    addTask(task) {
        this.data.push(task);
    }
}