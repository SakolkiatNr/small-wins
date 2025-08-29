import { taskCard } from "./taskCard";
import { format } from "date-fns";
// import { taskCard } from "./taskCard";

export default class Screen {

    constructor (tasksData, tasksContainer) {
        this.tasks = tasksData;
    }
    
    #tasksContainer = document.querySelector('.tasks-container');

    clearScreen() {
        const container = document.querySelector('.tasks-container');
        container.innerHTML = '';
    }

    renderDefault() {
        this.clearScreen();

        for (const task in this.tasks) {
            const taskObj = this.tasks[task];
            
            // render task obj
            this.#tasksContainer.append(taskCard(taskObj));
        }
    }

    filterToday() {
        this.clearScreen();
        for (const task in this.tasks) {
            const taskObj = this.tasks[task];
            const todayDate = format(new Date(), 'yyyy-MM-dd');

            // if task due today
            if (todayDate === taskObj.date) {
                this.#tasksContainer.append(taskCard(taskObj));
            }  
        }
    }

    filterWeek() {
        this.clearScreen();
        for (const task in this.tasks) {
            const taskObj = this.tasks[task];
            
            const today = new Date();
            const thisWeek = format(today.setDate(today.getDate() + 7), 'yyyy-MM-dd');
            
            // if task due date within 7 days
            if (taskObj.date <= thisWeek ) {
                this.#tasksContainer.append(taskCard(taskObj));
            }
        }
    }

    filterCompleted() {
       this.clearScreen();

       for (const task in this.tasks) {
            const taskObj = this.tasks[task];

            // show complete task
            if (taskObj.status === true) {
                this.#tasksContainer.append(taskCard(taskObj));
            }
       } 
    }

    filterProject(projectTag) {
        // for (tag in tags) 
        // append matching tag
    }
}