import TasksData from "../data/tasks"

export default class TaskCardHandler {
    constructor(TasksData, screen) {
        this.tasks = TasksData;
        this.screen = screen;
    }

    completeTask(taskId) {
        // find target task
        // const taskIndex = this.tasks.findIndex(obj => obj.id === id);
        // console.log(`task index: ${taskIndex}`);

        console.log('Task array:', this.tasks[0].id);
        console.log('looking for id:', taskId);

        // if (taskIndex > -1) {
            // this.tasks.data[taskIndex].toggleStatus(true);
            // console.log(`Task Index: ${taskIndex}`);
        // }
    }

    removeTask(id) {

    }

    editTask() {

    }

    TaskBtn(event) {
        const taskCard = event.target.closest('.task-container');
        if (!taskCard) return;
        // element id
        const taskId = taskCard.dataset.id;

        // checkbox element
        if (event.target.closest('.task-chbx')){
            this.completeTask(taskId);
        }
    }
}