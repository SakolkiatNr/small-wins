import TasksData from "../data/tasks"
import { editInputContainer } from "../data/editTask";

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

    editTask(taskId, cardTargetElement) {
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === taskId);

        // current task value
        const name = this.tasks.data[taskIndex].name;
        const desc = this.tasks.data[taskIndex].desc;
        const date = this.tasks.data[taskIndex].date;
        const prio = this.tasks.data[taskIndex].priority;
        const tag  = this.tasks.data[taskIndex].tag;

        // get card data value
        const titleEle = cardTargetElement.querySelector('.title-edit');
        const descEle  = cardTargetElement.querySelector('.desc-edit');
        const dateEle  = cardTargetElement.querySelector('.date-edit');
        const prioEle  = cardTargetElement.querySelector('.prio-edit');
        const tagEle   = cardTargetElement.querySelector('.tag-edit');

        titleEle.value = name;
        descEle.value = desc;
        dateEle.value = date;
        prioEle.value = prio;
        tagEle.value = tag;

    }

    // click event action in tasks container
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
            // remove card content and show edit task input
            removeCardElements(taskCard);
            taskCard.append(editInputContainer());

            // this.editTask(taskId); // receive current value
            // getCurrentTaskData(taskCard); // edit input text
            this.editTask(taskId, taskCard);
        }
    }
}

function removeCardElements(taskContainer) {
    taskContainer.innerHTML = '';
}

function getCurrentTaskData(cardTargetElement) {
    // get card data value
    const titleEle = cardTargetElement.querySelector('.title-edit');
    const descEle  = cardTargetElement.querySelector('.desc-edit');
    const dateEle  = cardTargetElement.querySelector('.date-edit');
    const prioEle  = cardTargetElement.querySelector('.prio-edit');
    const tagEle   = cardTargetElement.querySelector('.tag-edit');
}

function getDataFromValue() {

}

function newCardValueDisplay() {

}
