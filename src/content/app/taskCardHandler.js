import TasksData from "../data/tasks"

export default class TaskCardHandler {
    constructor(TasksData, screen) {
        this.tasks = TasksData;
        this.screen = screen;
    }

    completeTask(taskId) {
        // find target task
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === taskId);

        // console.log(`Task Index: ${taskIndex}`);
        // console.log('Task array:', this.tasks.data[taskIndex].id);
        // console.log('looking for id:', taskId);

        if (taskIndex > -1) {
            this.tasks.data[taskIndex].toggleStatus();
        }
    }

    removeTask(taskId) {
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === taskId);

        if (taskIndex > -1) {
            // this.tasks
           this.tasks.data.splice(taskIndex, 1);
        }
    }

    editTask() {

    }

    TaskBtn(event) {
        const taskCard = event.target.closest('.task-container');
        if (!taskCard) return;
        // element id
        const taskId = taskCard.dataset.id;

        // checkbox button
        if (event.target.closest('.task-chbx')){
            this.completeTask(taskId);
            taskCard.remove();
            return;
        }

        // remove btn
        if (event.target.closest('.remove-task')) {
            this.removeTask(taskId);
            taskCard.remove();
            return;
        }

        // edit btn
        if (event.target.closest('.edit-task')) {
            console.log('lmao');
            removeCardElements(taskCard);
        }
    }
}

function removeCardElements(taskContainer) {
    taskContainer.innerHTML = '';
}