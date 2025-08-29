import TasksData from "../data/tasks"

export default class TaskCardHandler {
    construct(TasksData, screen) {
        this.tasks = TasksData;
        this.screen = screen;
    }

    completeTask(id) {
        // find target task
        console.log(this.tasks);
        console.log(`task ID: ${id}`);
        // const taskIndex = this.tasks.data.findIndex(obj => obj.id === id);
        // if (taskIndex > -1) {
        //     this.tasks.data[taskIndex].toggleStatus(true);
        // }
    }

    removeTask(id) {

    }

    editTask() {

    }

    TaskBtn(event) {
        const taskCard = event.target.closest('.task-container');
        if (!taskCard) return;
        const taskId = taskCard.dataset.id;

        // checkbox element
        if (event.target.closest('.task-chbx')){
            this.completeTask(taskId);
        }
    }
}