import TasksData from "../data/tasks"

export default class TaskCardHandler {
    construct(TasksData, screen) {
        this.tasks = TasksData;
        this.screen = screen;
    }

    completeTask(id) {
        // find target task
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === id);
        if (taskIndex > -1) {
            this.tasks.data.splice(taskIndex, 1);
        }
    }

    removeTask() {

    }

    editTask() {

    }
}