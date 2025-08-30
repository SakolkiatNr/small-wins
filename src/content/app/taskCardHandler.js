import TasksData from "../data/tasks"
import { editInputContainer } from "../data/editTask";
import { taskCardElements } from "./taskCard";

export default class TaskCardHandler {
    constructor(TasksData, screen) {
        this.tasks = TasksData;
        this.screen = screen;
    }

    completeTask(taskId) {
        // find target task
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === taskId);

        if (taskIndex > -1) {
            this.tasks.data[taskIndex].toggleStatus();
        }
    }

    removeTask(taskId) {
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === taskId);

        if (taskIndex > -1) {
           this.tasks.data.splice(taskIndex, 1);
        }
    }

    // EDIT TASK FUNCTIONS
    getCurrentTaskData(taskId) {
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === taskId);

        // current task value
        const name = this.tasks.data[taskIndex].name;
        const desc = this.tasks.data[taskIndex].desc;
        const date = this.tasks.data[taskIndex].date;
        const prio = this.tasks.data[taskIndex].priority;
        const tag  = this.tasks.data[taskIndex].tag;

        return [name, desc, date, prio, tag];
    }

    getEditInputElements(cardTargetElement) {
        // select task edit input elements
        const titleEle = cardTargetElement.querySelector('.title-edit');
        const descEle  = cardTargetElement.querySelector('.desc-edit');
        const dateEle  = cardTargetElement.querySelector('.date-edit');
        const prioEle  = cardTargetElement.querySelector('.prio-edit');
        const tagEle   = cardTargetElement.querySelector('.tag-edit');       

        return [titleEle, descEle, dateEle, prioEle, tagEle];
    }

    showCurrentTaskData(taskData, taskElements) {
        // set value to Task data of edit input element
        for (const task in taskElements) {
            taskElements[task].value = taskData[task];
        }
    }

    renderCard(taskId) {
        const taskIndex = this.tasks.data.findIndex(obj => obj.id === taskId);
        if (taskIndex > -1) {
            return this.tasks.data[taskIndex];
        }
    }



    // CLICK EVENT ACTION
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

            // show current task data in edit input
            const taskData = this.getCurrentTaskData(taskId);
            const taskCardEle = this.getEditInputElements(taskCard);
            this.showCurrentTaskData(taskData, taskCardEle);
            return;
        }

        // cancel edit btn
        if (event.target.closest('.cancel-btn')) {
            event.preventDefault();

            console.log('oh hi~');
            removeCardElements(taskCard);
            taskCard.append(taskCardElements(this.renderCard(taskId)));
        }

        // confirm edit btn
        if (event.target.closest('.confirm-btn')) {
            event.preventDefault();
            console.log('hellooo!');
        }
    }
}

function removeCardElements(taskContainer) {
    taskContainer.innerHTML = '';
}

